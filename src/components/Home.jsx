import React from "react";

const Home = () => {
  const imageUrl = "https://clerk.com/opengraph-image.jpg?fb7c924db79a0374";

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fadeInDown">
          Welcome to <span className="text-indigo-400">ClerkAuth</span>
        </h1>

        {/* Animated Subtext */}
        <p className="text-lg md:text-2xl text-gray-200 mb-12 animate-fadeInUp delay-200">
          Seamlessly manage authentication and user sessions
        </p>

        {/* Animated Links */}
       
      </div>

      {/* Bottom decorative wave */}
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
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
};

export default Home;
