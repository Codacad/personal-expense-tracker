import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserResetPassword } from "../state/other/resetUserPassword";
import { useDispatch, useSelector } from "react-redux";
import { useSendOtpMutation } from "../state/apis/forgotPasswordApi";
const SendOtp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendOtp] = useSendOtpMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Handle Input Change
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Reset error on input change
    setSuccess(""); // Reset success on input change
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendOtp({ email });
      if (response.data) {
        setSuccess("OTP sent successfully");
        localStorage.setItem(
          "resetPasswordUser",
          JSON.stringify(response.data.user)
        );
        dispatch(setUserResetPassword(response.data.user));
        navigate("/validate-otp");
      }

      if (response.error) {
        setError(response.error.data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col items-center bg-gray-100 md:h-[80vh] p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Forgot Password
        </h2>
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
              value={email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
            {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
            {success && (
              <p className="text-green-500 text-xs mt-4">{success}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
            >
              {loading ? "Loading..." : "Send OTP"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Remembered your password?{" "}
            <Link
              to={"/login"}
              className="text-teal-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SendOtp;
