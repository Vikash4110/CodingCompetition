import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


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
        navigate("/");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-semibold text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white font-semibold rounded-md transition-colors focus:outline-none ${
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
