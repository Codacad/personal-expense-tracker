import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserResetPassword } from "../state/other/resetUserPassword";
import { Navigate, useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { resetPasswordUser } = useSelector((state) => state.resetPassword);
  const navigate = useNavigate();

  console.log(new Date(resetPasswordUser.expires));
  const handleCancelResetPassword = async () => {
    localStorage.setItem("resetPasswordUser", null);
    dispatch(setUserResetPassword(null));
    navigate("/forgot-password");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hllo");
  };
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("resetPasswordUser");
    }, 60 * 60 * 1000);
  }, [])

  return (
    <>
      <div className="w-full flex flex-col items-center bg-gray-100 md:h-[80vh] p-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Enter OTP</h2>
        <p className="text-gray-700 text-center mb-6">
          An OTP has been sent to your email:{" "}
          <span className="font-medium">{resetPasswordUser?.email}</span>.
          Please enter it below to proceed.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 sm:w-[400px] w-full rounded-lg px-8 pt-6 pb-8 shadow-md"
        >
          <div className="mb-6">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter the OTP"
              required
            />
          </div>

          <div className="text-center flex gap-3 justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
            >
              Submit OTP
            </button>
            <button
              onClick={handleCancelResetPassword}
              className="px-6 py-3 text-teal-600 bg-gray-300 font-semibold rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Didn't receive the OTP?{" "}
            <button className="text-teal-600 font-semibold hover:underline">
              Resend OTP
            </button>
          </p>
        </div>
      </div>

      {/* <div className="w-full flex flex-col items-center bg-gray-100 md:h-[80vh] p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Reset Your Password
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border bg-gray-50 border-gray-200 sm:w-[400px] w-full rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your new password"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Confirm your new password"
            required
          />
        </div>

        {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
        {success && <p className="text-green-500 text-xs mt-4">{success}</p>}

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div> */}
    </>
  );
};

export default ResetPassword;
