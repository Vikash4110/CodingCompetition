import React from "react";
import { useLocation, Link } from "react-router-dom";
import RegisterForm from "./Register";
import LoginForm from "./Login";

const AuthPage = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const path = location.pathname;

  // Determine the active button based on the current URL path
  const activeButton = path === "/register" ? "register" : "login";

  return (
    <>
    <br /><br />
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
          <div className="flex text-lg mb-4">
            <Link
              to="/login"
              aria-label="Login"
              className={`${
                activeButton === "login" ? "bg-gray-200 text-black font-bold" : "bg-gray-100 text-gray-700"
              } rounded-md flex-1 py-2 text-center transition-colors hover:bg-gray-300`}
            >
              Log in
            </Link>
            <Link
              to="/register"
              aria-label="Register"
              className={`${
                activeButton === "register" ? "bg-gray-200 text-black font-bold" : "bg-gray-100 text-gray-700"
              } rounded-md flex-1 py-2 text-center transition-colors hover:bg-gray-300`}
            >
              Register
            </Link>
          </div>

          {activeButton === "register" ? (
            <RegisterForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
      </main>
    </div>
    </>
  );
};

export default AuthPage;
