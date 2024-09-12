import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import underline from '../assets/curveUnderline.svg';
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
    <div className="min-h-screen bg-gray-100 py-28">
      <div className=" mx-auto bg-white shadow-2xl rounded-3xl p-6 lg:w-3/6 w-5/6">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight flex flex-col items-center space-y-4 mb-20 text-center">
            <span className="relative inline-block text-primary font-bold bg-transparent">
              <span className='text-[#127c71]'>Update Profile</span>
              <img
                src={underline}
                className='block mx-auto mt-2 w-40 md:w-60 h-auto rotate-3'
                alt="underline"
              />
            </span>
          </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-3 p-3  rounded-3xl ">
            
            <div className="flex-1">
              <label htmlFor="username" className="text-gray-700 flex items-center space-x-2"><FaUser className="text-[#127c71]" /><span>Username</span></label>
              <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInput}
                className="mt-1 w-full p-4 border border-gray-300 rounded-3xl outline-[#127c71]"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3  rounded-3xl ">
           
            <div className="flex-1">
              <label htmlFor="rollno" className="text-gray-700 flex items-center space-x-2"> <FaMobile className="text-[#127c71] " /><span>Roll No.</span></label>
              <input
                type="text"
                name="rollno"
                id="rollno"
                value={data.rollno}
                onChange={handleInput}
                className="mt-1 w-full p-4 border border-gray-300 rounded-3xl outline-[#127c71]"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3  rounded-3xl ">
            
            <div className="flex-1">
              <label htmlFor="department" className="text-gray-700 flex items-center space-x-2"><FaBuilding className="text-[#127c71] " /><span>Department</span></label>
              <input
                type="text"
                name="department"
                id="department"
                value={data.department}
                onChange={handleInput}
                className="mt-1 w-full p-4 border border-gray-300 rounded-3xl outline-[#127c71]"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3  rounded-3xl ">
            
            <div className="flex-1">
              <label htmlFor="semester" className="text-gray-700 flex items-center space-x-2"><FaListOl className="text-[#127c71] " /><span>Semester</span></label>
              <input
                type="text"
                name="semester"
                id="semester"
                value={data.semester}
                onChange={handleInput}
                className="mt-1 w-full p-4 border border-gray-300 rounded-3xl outline-[#127c71]"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3  rounded-3xl">
            
            <div className="flex-1">
              <label htmlFor="email" className=" text-gray-700 flex items-center space-x-2"><FaEnvelope className="text-[#127c71] " /><span>Email</span></label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInput}
                className="mt-1 w-full p-4 border border-gray-300 rounded-3xl outline-[#127c71]"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3  rounded-3xl ">
            
            <div className="flex-1">
              <label htmlFor="phone" className="items-center space-x-2 text-gray-700 flex "><FaPhone className="text-[#127c71] " /><span>Phone</span></label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleInput}
                className="mt-1 w-full p-4 border border-gray-300 rounded-3xl outline-[#127c71]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#127c71] text-white py-4 px-4 rounded-3xl hover:bg-[#0f6f5c] transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
