import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Expense Tracker</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Expense Tracker helps you manage your income and expenses effortlessly. Start tracking your financial journey today.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link
                to={"/"}
                className="hover:text-teal-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard"}
                className="hover:text-teal-400 transition duration-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="hover:text-teal-400 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/register"}
                className="hover:text-teal-400 transition duration-300"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <ul className="flex space-x-4">
            <li>
              <Link
                to={"https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link
                to={"https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faGithub}/>
              </Link>
            </li>
            <li>
              <Link
                to={"https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link
                to={"https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram}/>
              </Link>
            </li>
          </ul>
          <p className="text-gray-400 text-sm mt-4">
            Email: iam@rizwanansari.in
          </p>
          <p className="text-gray-400 text-sm">Phone: +966 536 317 438</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FinTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
