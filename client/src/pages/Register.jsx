import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    rollno: "",
    department: "B.Tech Computer Science Engineering",
    semester: "1",
    email: "",
    phone: "",
    password: "",
    otp: "",
    userId: ""  // Ensure userId is included in the state
  });
  const [loading, setLoading] = useState(false);
  const [otpStep, setOtpStep] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (otpStep) {
        // Verify OTP
        const response = await fetch(`${backendUrl}/api/auth/verify-otp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.userId, otp: user.otp }),
        });

        const data = await response.json();
        if (response.ok) {
          toast.success(data.message);
          setOtpStep(false);
          navigate("/login");
        } else {
          toast.error(data.message);
        }
      } else {
        // Register User
        const response = await fetch(`${backendUrl}/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        const data = await response.json();
        if (response.ok) {
          toast.success(data.msg);
          setUser((prev) => ({ ...prev, userId: data.userId }));
          setOtpStep(true);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          {otpStep ? "Verify OTP" : "Register"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!otpStep ? (
            <>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInput}
                placeholder="Username"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="rollno"
                value={user.rollno}
                onChange={handleInput}
                placeholder="Roll No"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="department"
                value={user.department}
                onChange={handleInput}
                placeholder="Department"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="semester"
                value={user.semester}
                onChange={handleInput}
                placeholder="Semester"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInput}
                placeholder="Phone"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {loading ? (
                  <RotatingLines strokeColor="#fff" strokeWidth="5" animationDuration="0.75" width="20" visible={true} />
                ) : (
                  "Register"
                )}
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                name="otp"
                value={user.otp}
                onChange={handleInput}
                placeholder="Enter OTP"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {loading ? (
                  <RotatingLines strokeColor="#fff" strokeWidth="5" animationDuration="0.75" width="20" visible={true} />
                ) : (
                  "Verify OTP"
                )}
              </button>
            </>
          )}
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-indigo-600 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
