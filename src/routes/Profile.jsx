import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((state) => state.userAuthStatus);
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center border-b border-gray-700 pb-6">
          <h1 className="text-4xl font-bold mb-2">Welcome, {user.name}!</h1>
          <p className="text-gray-400">
            Manage your account and view insights here.
          </p>
        </div>

        {/* User Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
            <p>
              <span className="font-medium">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">Joined:</span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p>Keep your account secure with these tools:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-300">
              <li>Change your password</li>
              <li>Enable two-factor authentication</li>
              <li>Review recent login activity</li>
            </ul>
          </div>
        </div>

        {/* Insights Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Your Insights</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-4">
              Here’s a snapshot of your financial activities:
            </p>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Total Income:</span>
                <span className="font-bold text-green-400">$5000</span>
              </li>
              <li className="flex justify-between">
                <span>Total Expenses:</span>
                <span className="font-bold text-red-400">$3200</span>
              </li>
              <li className="flex justify-between">
                <span>Current Balance:</span>
                <span className="font-bold text-teal-400">$1800</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actions Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <button className="px-6 py-3 bg-gradient-to-l from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
              Update Profile
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <button className="px-6 py-3 bg-gradient-to-l from-red-500 to-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
