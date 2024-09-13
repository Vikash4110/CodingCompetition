import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { HashLoader } from 'react-spinners';
import underline from '../assets/curveUnderline.svg';
import profileImg from '../assets/profile2.jpg';

import {
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaUniversity,
  FaListOl,
  FaGraduationCap,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { authorizationToken } = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${backendUrl}/api/auth/user`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data.userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [authorizationToken, backendUrl]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <HashLoader color="#4f46e5" loading={loading} size={50} />
      </div>
    );
  }

  if (!userData) {
    return <div>Loading data...</div>;
  }

  return (
    <>
      <br /><br />
      <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-0">

        <div className=" mx-auto bg-white shadow-2xl rounded-3xl p-6 lg:w-4/6 sm:w-5/6 w-full ">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight flex flex-col items-center space-y-4 mb-20 text-center">
            <span className="relative inline-block text-primary font-bold bg-transparent">
              <span className='text-[#127c71]'>User Information</span>
              <img
                src={underline}
                className='block mx-auto mt-2 w-40 md:w-60 h-auto rotate-3'
                alt="underline"
              />
            </span>
          </h2>


          <div className="flex flex-col space-y-10">


            <div className="flex items-center justify-center  px-24">
              <img
                src={profileImg}
                alt="User Avatar"
                className="w-40 h-40 rounded-full mb-4"
              />


            </div>

            <div className="grid md:grid-cols-2 gap-6 ">
            
                <ProfileItem label="Email" value={userData.email} icon={<FaEnvelope />} />


             
              


                <ProfileItem label="Phone" value={userData.phone} icon={<FaPhone />} />
           
            
                <ProfileItem label="University Roll No" value={userData.rollno} icon={<FaListOl />} />
            
          

                <ProfileItem label="Semester" value={userData.semester} icon={<FaGraduationCap />} />
              








             
                <ProfileItem label="Department" value={userData.department} icon={<FaUniversity />} />
              
            </div>
            <div className=" self-end">


              <button
                onClick={() => navigate("/update-profile")}
                className="flex items-center bg-[#127c71] text-white py-2 px-4 rounded-3xl hover:bg-[#0f6f5c] transition duration-300 "
              >
                <FaEdit className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileItem = ({ label, value, icon }) => (
  <div className="bg-gray-50 p-4 rounded-3xl shadow flex items-center space-x-4">
    <div className="text-[#127c71]">{icon}</div> {/* Updated color here */}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-700">{value}</p>
    </div>
  </div>
);


export default UserDashboard;
