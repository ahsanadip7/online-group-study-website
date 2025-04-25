import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import { AuthContext } from "./AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { toggleTheme, isDarkMode } = useContext(AuthContext);
  const navigate = useNavigate();

  // Sign-out functionality
  const handleSignOut = () => {
    signOutUser()
      .then(() => navigate("/login"))
      .catch((error) => console.log(error.message));
  };

  // Links to be displayed in the navbar
  const links = (
    <>
      <NavLink to="/" className="px-3 py-2 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
        <li>Home</li>
      </NavLink>
      <NavLink to="/assignments" className="px-3 py-2 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
        <li>Assignments</li>
      </NavLink>
      
      {/* Conditionally show links based on user login status */}
      {user ? (
        <>
          <NavLink to="/pendingAssignment" className="px-3 py-2 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
            <li>Pending Assignments</li>
          </NavLink>
          <NavLink to="/createAssignment" className="px-3 py-2 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
            <li>Create Assignment</li>
          </NavLink>
          <NavLink to="/mySubmissions" className="px-3 py-2 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
            <li>My Submissions</li>
          </NavLink>
        </>
      ) : (
        <NavLink to="/login" className="px-3 py-2 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
          <li>Create Assignment</li>
        </NavLink>
      )}
      <NavLink to="/helpPage" className="px-3 py-2 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
        <li>“How to Help”</li>
      </NavLink>
    </>
  );

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white shadow-md bg-opacity-90 py-4">
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between">
          {/* Left - Logo and Mobile Menu */}
          <div className="flex items-center">
            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <button tabIndex={0} className="btn btn-ghost text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              {/* Dropdown menu */}
              <ul
                tabIndex={0}
                className="menu text-white font-semibold px-4 menu-sm dropdown-content bg-gray-800 dark:bg-gray-800 dark:text-gray-300  rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
              >
                {links} {/* This is where we inject the links */}
              </ul>
            </div>

            {/* Logo */}
            <div>
              <NavLink to="/" className="text-xl md:text-2xl font-bold mr-3 text-gray-200 dark:text-white">
                Online Group-Study
              </NavLink>
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white shadow-md transition duration-300"
              >
                {isDarkMode ? <FaSun size={14} className="text-yellow-400" /> : <FaMoon size={14} className="text-gray-600" />}
              </button>
            </div>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal space-x-5 font-semibold text-lg">{links}</ul>
          </div>

          {/* Right - User Info */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt={`${user.displayName || "User"}'s Profile`}
                />

                {/* Dropdown Menu */}
                <div
                  className="absolute z-10 w-48 origin-top-right rounded-md shadow-lg bg-gray-800 dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block right-0"
                  onMouseEnter={(e) => e.currentTarget.classList.add("block")}
                  onMouseLeave={(e) => e.currentTarget.classList.remove("block")}
                >
                  {/* Only show sign-out button */}
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <FaSignOutAlt className="inline mr-2" /> Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <NavLink to="/login" className="font-bold text-gray-200 hover:text-cyan-300 dark:text-white">
                  Login
                </NavLink>{" "}
                /
                <NavLink to="/signUp" className="font-bold text-gray-200 hover:text-cyan-300 dark:text-white">
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prevent Content from Being Hidden Under Navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default NavBar;
