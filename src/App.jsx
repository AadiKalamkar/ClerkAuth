import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Profile from "./components/Profile";
import { useUser } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import LoadingPage from "./components/LoadingPage";

// ProtectedRoute: only renders children if signed in
const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
          <p className="mt-4 text-indigo-600 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );


  if (!isSignedIn) return <Navigate to="/sign-in" replace />;

  return children;
};

// PublicRoute: only renders children if signed out
const PublicRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <LoadingPage/>;

  if (isSignedIn) return <Navigate to="/profile" replace />;

  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Protected Profile Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Public SignIn and SignUp Routes */}
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />

      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<About/>} />

      </Routes>
    </BrowserRouter>
  );
}
