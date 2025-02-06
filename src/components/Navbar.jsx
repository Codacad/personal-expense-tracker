import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "/logo 100x50.svg";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../state/other/userAuthStatus";
import { useLogoutMutation } from "../state/apis/authApi";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector(
    (state) => state.userAuthStatus
  );
  const dispatch = useDispatch();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const linkClasses = "hover:text-indigo-300 transition duration-300";
  const activeLinkClasses = "text-indigo-300 font-semibold";

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(setUser({ isAuthenticated: false, user: null }));
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      toggleMobileMenu();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link to="/">
              <img className="w-[150px]" src={Logo} alt="FinTack Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/income"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              Income
            </NavLink>
            <NavLink
              to="/expenses"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              Expenses
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              Reports
            </NavLink>
            {user && (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : linkClasses
                }
              >
                Profile
              </NavLink>
            )}
            {/* Register and Login Buttons */}
            {!user && (
              <div className="space-x-4">
                <Link
                  to="/register"
                  className="px-4 py-2 bg-gradient-to-l from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
                >
                  Login
                </Link>
              </div>
            )}
            {user && (
              <div className="space-x-4">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-l from-teal-500 to-teal-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-indigo-700 text-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-6 p-6 mt-12">
          <NavLink
            to="/dashboard"
            onClick={toggleMobileMenu}
            className={({ isActive }) =>
              `${isActive ? "bg-indigo-600" : ""} block text-white p-2 rounded`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/income"
            onClick={toggleMobileMenu}
            className={({ isActive }) =>
              `${isActive ? "bg-indigo-600" : ""} block text-white p-2 rounded`
            }
          >
            Income
          </NavLink>
          <NavLink
            to="/expenses"
            onClick={toggleMobileMenu}
            className={({ isActive }) =>
              `${isActive ? "bg-indigo-600" : ""} block text-white p-2 rounded`
            }
          >
            Expenses
          </NavLink>
          <NavLink
            to="/reports"
            onClick={toggleMobileMenu}
            className={({ isActive }) =>
              `${isActive ? "bg-indigo-600" : ""} block text-white p-2 rounded`
            }
          >
            Reports
          </NavLink>
          <NavLink
            to="/profile"
            onClick={toggleMobileMenu}
            className={({ isActive }) =>
              `${isActive ? "bg-indigo-600" : ""} block text-white p-2 rounded`
            }
          >
            Profile
          </NavLink>
          {user && (
            <button
              onClick={handleLogout}
              className="block bg-white text-gray-800 p-2 rounded"
            >
              Logout
            </button>
          )}
          {!user && (
            <div>
              {" "}
              <Link
                to="/register"
                onClick={toggleMobileMenu}
                className="block text-teal-500 bg-white px-4 py-2 rounded hover:bg-gray-100"
              >
                Register
              </Link>
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="block mt-4 text-blue-500 bg-white px-4 py-2 rounded hover:bg-gray-100"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
