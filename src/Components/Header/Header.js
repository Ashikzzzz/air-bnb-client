import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { motion } from "framer-motion";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // logout
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.email && user?.uid ? (
                <button onClick={handleSignOut} className="btn btn-ghost">
                  Sign Out
                </button>
              ) : (
                <>
                  <li>
                    <Link to="/login">
                      {" "}
                      <a>Login</a>
                    </Link>
                  </li>

                  <li>
                    <Link to="/register">
                      {" "}
                      <a>Sign Up</a>
                    </Link>
                  </li>
                </>
              )}
              <Link to="/dashboard" className="lg:hidden">
                {" "}
                Dashboard
              </Link>
            </ul>
          </div>
          <Link to="/">
            {" "}
            <motion.a
              transition={{ duration: 2 }}
              initial={{ scale: 2 }}
              animate={{ scale: 1 }}
              className="btn btn-ghost normal-case text-xl lg:block hidden"
            >
              HotelTripHub
            </motion.a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {user?.email && user?.uid ? (
              <button onClick={handleSignOut} className="btn btn-ghost">
                Sign Out
              </button>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    {" "}
                    <a>Login</a>
                  </Link>
                </li>

                <li>
                  <Link to="/register">
                    {" "}
                    <a>Sign Up</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <Link to="/dashboard"> Dashboard</Link>
        </div>
        <label
          htmlFor="my-drawer-2"
          tabIndex={2}
          className="btn btn-ghost lg:hidden ml-28 md:ml-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
