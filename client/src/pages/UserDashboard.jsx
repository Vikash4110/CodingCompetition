import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { HashLoader } from 'react-spinners';
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
    <div className="min-h-screen bg-gray-100 py-36 ">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-700">User Information</h2>
          <button
            onClick={() => navigate("/update-profile")}
            className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
          >
            <FaEdit className="mr-2" />
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProfileItem label="Email" value={userData.email} icon={<FaEnvelope />} />
          <ProfileItem label="Phone" value={userData.phone} icon={<FaPhone />} />
          <ProfileItem label="University Roll No" value={userData.rollno} icon={<FaListOl />} />
          <ProfileItem label="Department" value={userData.department} icon={<FaUniversity />} />
          <ProfileItem label="Semester" value={userData.semester} icon={<FaGraduationCap />} />
        </div>
      </div>
    </div>
    </>
  );
};

const ProfileItem = ({ label, value, icon }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow flex items-center space-x-4">
    <div className="text-indigo-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-700">{value}</p>
    </div>
  </div>
);

export default UserDashboard;
