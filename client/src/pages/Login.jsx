import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { RotatingLines } from "react-loader-spinner"; // Import the loader component

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    if (!backendUrl) {
      toast.error("Backend URL is not defined. Please check your environment variables.");
      setLoading(false); // Stop loading if error
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const responseData = await response.json();

      if (response.ok) {
        storeTokenInLS(responseData.token);
        toast.success("Login Successfully");
        navigate("/teacher");
      } else {
        toast.error(responseData.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  
  return (
    <>
    
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-md mx-auto mt-6  text-center border-2 rounded-3xl py-10 lg:py-20 px-6 lg:px-10 shadow-2xl">
          <div className="relative h-11 w-full">
            <input
              id="email"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
            />
            <label htmlFor="email" className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"> <span><FontAwesomeIcon icon={faEnvelope} /></span><span>Email</span>
            </label>
          </div>

          <div className="relative h-11 w-full">
            <input
              id="password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-b-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
            />
            <label htmlFor="password" className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"><span><FontAwesomeIcon icon={faLock} /></span><span>Password</span></label>
          </div>

          <button
          type="submit"
          className={` py-2 px-4 rounded-full mt-6 font-medium text-white w-1/2 mx-auto  block  bg-[#127c71]   transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            </div>
          ) : (
            "Login"
          )}
        </button>

        <p className="text-center mt-4 text-gray-600">
          New Here? <Link to="/register" className="text-[#127c71] font-semibold hover:underline" >Sign Up</Link>
        </p>
        </form>
        
      
    </>
  );
};

export default Login;
