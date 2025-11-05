import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* SignUp component */}
      <div className="relative z-10 w-full max-w-md px-4 py-8">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
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
    </div>
  );
};

export default SignUpPage;
