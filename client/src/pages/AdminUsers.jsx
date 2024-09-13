import React, { useEffect, useState } from 'react';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { Instagram } from 'react-content-loader';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userCount, setUserCount] = useState(0); // New state variable for user count
  const { authorizationToken } = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/admin/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data && Array.isArray(data.users)) {
        setUsers(data.users);
        setUserCount(data.users.length); // Update user count
      } else {
        console.error('Unexpected data format:', data);
        setUsers([]);
        setUserCount(0); // Set user count to 0 if data is not valid
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]);
      setUserCount(0); // Set user count to 0 on error
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/api/admin/user/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Check if the deletion was successful
      if (data.message === "User deleted successfully") {
        // Update the state to remove the deleted user from the UI
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        setUserCount((prevCount) => prevCount - 1); // Update user count
        toast.success("User deleted successfully");
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user');
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  if (loading) {
    return <Instagram />;
  }

  if (users.length === 0) {
    return <p>No users found or error fetching users.</p>;
  }

  return (
    <>
      <br /><br />
      <section className="bg-white shadow-lg rounded-lg my-8 p-6">
        <div className="p-6">
          <h1 className="text-3xl font-extrabold text-center text-[#127c71] mb-6">Admin Users Data</h1>
          {/* Display the user count */}
          <div className="text-center mb-6">
            <p className="inline-block bg-[#FFC221] text-[#127C71] py-2 px-6 rounded-full shadow-lg text-lg font-semibold">
              Total Users Registered: {userCount}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr>
                  {['Name', 'Roll No', 'Department', 'Semester', 'Email', 'Phone', 'Update', 'Delete'].map((header) => (
                    <th key={header} className="py-3 px-6 bg-[#FFC221] text-[#127C71] font-bold text-sm uppercase tracking-wide">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((curUser, index) => (
                  <tr key={index} className="bg-gray-100 border-t border-gray-200 text-center hover:bg-gray-200 transition duration-200 ease-in-out">
                    <td className="py-3 px-6 border">{curUser.username}</td>
                    <td className="py-3 px-6 border">{curUser.rollno}</td>
                    <td className="py-3 px-6 border">{curUser.department}</td>
                    <td className="py-3 px-6 border">{curUser.semester}</td>
                    <td className="py-3 px-6 border">{curUser.email}</td>
                    <td className="py-3 px-6 border">{curUser.phone}</td>
                    <td className="py-3 px-6 border">
                      <Link to={`/admin/users/${curUser._id}/edit`} className="bg-[#127C71] text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition-all ease-in-out">
                        Edit
                      </Link>
                    </td>
                    <td className="py-3 px-6 border">
                      <button className="bg-[#FF4C4C] text-white py-2 px-4 rounded-full hover:bg-red-600 transition-all ease-in-out" onClick={() => deleteUser(curUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
