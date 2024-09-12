import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaMobile, FaBuilding, FaListOl } from 'react-icons/fa';

const UpdateUser = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    rollno: "",
    department: "",
    semester: ""
  });
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/auth/user`, {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        setData(userData.userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [authorizationToken, backendUrl]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/auth/update`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Updated Successfully");
        navigate("/dashboard");
      } else {
        toast.error("Update Failed");
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm">
            <FaUser className="text-indigo-600 text-xl" />
            <div className="flex-1">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInput}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm">
            <FaMobile className="text-indigo-600 text-xl" />
            <div className="flex-1">
              <label htmlFor="rollno" className="block text-gray-700">Roll No.</label>
              <input
                type="text"
                name="rollno"
                id="rollno"
                value={data.rollno}
                onChange={handleInput}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm">
            <FaBuilding className="text-indigo-600 text-xl" />
            <div className="flex-1">
              <label htmlFor="department" className="block text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                id="department"
                value={data.department}
                onChange={handleInput}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm">
            <FaListOl className="text-indigo-600 text-xl" />
            <div className="flex-1">
              <label htmlFor="semester" className="block text-gray-700">Semester</label>
              <input
                type="text"
                name="semester"
                id="semester"
                value={data.semester}
                onChange={handleInput}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInput}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm">
            <FaPhone className="text-indigo-600 text-xl" />
            <div className="flex-1">
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleInput}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
