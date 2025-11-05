import React from "react";
import { useUser } from "@clerk/clerk-react";

const Profile = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <LoadingProfileBackground message="Loading profile..." />;
  }

  if (!isSignedIn) {
    return <LoadingProfileBackground message="Please sign in to view your profile." />;
  }

  const phone = user.phoneNumbers?.[0]?.phoneNumber || null;
  const address = user.publicMetadata?.address || null;

  return (
    <div className="relative min-h-screen flex justify-center items-center p-6 overflow-hidden">
      {/* Dark overlay + wave background */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-32">
          <path
            d="M0.00,49.98 C150.00,150.00 349.72,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ fill: "rgba(255,255,255,0.9)" }}
          ></path>
        </svg>
      </div>

      {/* Optional animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <span className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-bounce-slow" style={{ top: "20%", left: "10%" }}></span>
        <span className="absolute w-3 h-3 bg-white rounded-full opacity-40 animate-bounce-slow" style={{ top: "70%", left: "80%" }}></span>
        <span className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-bounce-slow" style={{ top: "40%", left: "50%" }}></span>
      </div>

      {/* Profile Card with dark blue gradient */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 shadow-2xl rounded-xl p-8 max-w-md w-full border border-blue-600 transform transition-all duration-700 hover:scale-105 relative z-10 text-white">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={user.imageUrl}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-400 shadow-lg transform transition-all duration-500 hover:scale-110 animate-fadeInDown"
          />
          <h2 className="text-3xl font-bold mt-4 animate-fadeInDown delay-200">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-blue-200 text-sm mt-1 animate-fadeInUp delay-400">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        <hr className="my-6 border-blue-600" />

        {/* Additional Info */}
        <div className="space-y-4">
          {phone && (
            <div className="flex items-center animate-fadeInUp delay-600 text-blue-100">
              <span className="font-medium w-28">📞 Contact:</span>
              <span>{phone}</span>
            </div>
          )}

          {address && (
            <div className="flex items-center animate-fadeInUp delay-800 text-blue-100">
              <span className="font-medium w-28">🏠 Address:</span>
              <span>{address}</span>
            </div>
          )}

          {!phone && !address && (
            <p className="text-blue-300 text-center italic animate-fadeInUp delay-600">
              No contact details available.
            </p>
          )}
        </div>
      </div>

      {/* Tailwind-like Animations */}
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
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
        `}
      </style>
    </div>
  );
};

// Reusable loading/sign-in background
const LoadingProfileBackground = ({ message }) => (
  <div className="relative min-h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-90"></div>
    <div className="relative z-10 text-center">
      <p className="text-white text-xl font-semibold animate-fadeInUp">{message}</p>
    </div>
    <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-32">
        <path
          d="M0.00,49.98 C150.00,150.00 349.72,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ fill: "rgba(255,255,255,0.9)" }}
        ></path>
      </svg>
    </div>
  </div>
);

export default Profile;
