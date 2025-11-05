import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser, SignOutButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, isSignedIn } = useUser();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = (path) =>
    `block px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
      location.pathname === path
        ? "text-white bg-indigo-700 shadow-md"
        : "text-white hover:text-gray-200 hover:bg-indigo-500"
    }`;

  const buttonClass = `px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`;

  // Skeleton placeholder for loading state
  const SkeletonButton = ({ width = "100px" }) => (
    <div
      className="animate-pulse bg-indigo-400/50 rounded-full h-8"
      style={{ width }}
    ></div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-white hover:text-gray-200 transition duration-300"
            >
              ClerkAuth
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-4">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/about-us" className={navLinkClass("/about-us")}>
              About Us
            </Link>

            {/* Loading skeleton while Clerk initializes */}
            {!isLoaded && (
              <div className="flex space-x-2">
                <SkeletonButton width="80px" />
                <SkeletonButton width="100px" />
              </div>
            )}

            {/* Signed-in state */}
            {isLoaded && isSignedIn && (
              <>
                <Link to="/profile" className={navLinkClass("/profile")}>
                  Profile
                </Link>
                <SignOutButton>
                  <button
                    className={`${buttonClass} bg-white text-indigo-600 hover:bg-gray-100 shadow-md`}
                  >
                    Sign Out
                  </button>
                </SignOutButton>
              </>
            )}

            {/* Signed-out state */}
            {isLoaded && !isSignedIn && (
              <Link
                to="/sign-in"
                className={`${buttonClass} bg-white text-indigo-600 hover:bg-gray-100 shadow-md`}
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-600 via-blue-500 to-purple-600 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link to="/about-us" className={navLinkClass("/about-us")}>
            About Us
          </Link>

          {!isLoaded && (
            <div className="space-y-2">
              <SkeletonButton width="100%" />
              <SkeletonButton width="100%" />
            </div>
          )}

          {isLoaded && isSignedIn && (
            <>
              <Link to="/profile" className={navLinkClass("/profile")}>
                Profile
              </Link>
              <SignOutButton>
                <button
                  className={`${buttonClass} w-full text-left bg-white text-indigo-600 hover:bg-gray-100 shadow-md`}
                >
                  Sign Out
                </button>
              </SignOutButton>
            </>
          )}

          {isLoaded && !isSignedIn && (
            <Link
              to="/sign-in"
              className={`${buttonClass} block w-full text-left bg-white text-indigo-600 hover:bg-gray-100 shadow-md`}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
