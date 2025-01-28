import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../state/apis/authApi";
import { setUser } from "../state/other/userAuthStatus";
import { useDispatch } from "react-redux";
const Login = () => {
  const [error, setErrror] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(credentials);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("isAuthenticated", true);
        dispatch(setUser({ isAuthenticated: true, user: response.data }));
        setLoading(false);
        setSuccess("Login successful");
        navigate("/dashboard");
      }
      if (response.error) {
        setLoading(false);
        setErrror(response.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 md:h-[80vh] p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="border bg-gray-50 border-gray-200 sm:w-[400px] w-full rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoFocus
            value={credentials.email}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your password"
            required
          />
          {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
          {success && <p className="text-green-500 text-xs mt-4">{success}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-teal-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
        <p className="mt-6 text-center">
          <Link
            to={`/send-otp`}
            className="text-teal-600 font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
