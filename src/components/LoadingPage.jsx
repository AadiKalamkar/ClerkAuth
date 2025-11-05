const LoadingPage = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Loading text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white animate-pulse">
          Loading...
        </h1>
      </div>

      {/* Bottom white wave */}
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

      {/* Tailwind animation for smooth fade-in (optional) */}
      <style>
        {`
          .animate-pulse {
            animation: pulse 1.5s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.2; transform: scale(0.95); }
            50% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPage;
