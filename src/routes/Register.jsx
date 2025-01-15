import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useRegisterMutation } from "../state/apis/authApi";

const Register = () => {
  const [register, {data}] = useRegisterMutation();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await register(userData);
      setIsLoading(false);
      if (response.data) {
        setSuccess("Registration successful. Please login.");
        Navigate("/login");
        setError(null);
      }
      if (response.error) {
        setError(response.error.data.message);
        setSuccess(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 md:h-[80vh] p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="border bg-gray-50 border-gray-200 sm:w-[400px] w-full rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your name"
            required
          />
        </div>

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
            value={userData.email}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your email"
            // required
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
            value={userData.password}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your password"
            required
          />
          {error && <div className="text-red-500 text-sm p-2">{error}</div>}
          {success && (
            <div className="text-green-500 text-sm p-2">{success}</div>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            {isLoading ? "Registering, please wait..." : "Register"}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-teal-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
