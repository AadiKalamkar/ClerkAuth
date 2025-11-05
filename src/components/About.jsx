import React from "react";

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 flex flex-col items-center justify-center px-6 py-12">
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fadeInDown">
          About <span className="text-indigo-400">ClerkAuth</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-12 animate-fadeInUp delay-200">
          Clerk provides a seamless authentication solution for React applications. 
          Manage user sessions, enable social logins, multi-factor authentication, 
          and more with minimal effort and maximum security.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-black bg-opacity-50 rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2 text-white hover:text-indigo-400">
              Easy Sign Up
            </h2>
            <p className="text-gray-300">
              Quick registration via email or social logins.
            </p>
          </div>
          <div className="p-6 bg-black bg-opacity-50 rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2 text-white hover:text-indigo-400">
              Secure Sign In
            </h2>
            <p className="text-gray-300">
              Protect your app with reliable authentication methods.
            </p>
          </div>
          <div className="p-6 bg-black bg-opacity-50 rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2 text-white hover:text-indigo-400">
              Multi-Factor Auth
            </h2>
            <p className="text-gray-300">
              Add extra security layers to protect your users.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative white wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.72,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ fill: "rgba(255,255,255,0.9)" }}
          ></path>
        </svg>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeInDown { animation: fadeInDown 1s ease-out forwards; }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
          .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
          .delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </div>
  );
};

export default About;
