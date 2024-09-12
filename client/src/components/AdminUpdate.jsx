import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    rollno: "",
    department: "",
    semester: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/admin/user/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setData(userData);
      } else {
        toast.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, [params.id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/admin/user/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("User updated successfully");
        navigate('/admin/users'); // Redirect upon successful update
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error("An error occurred while updating user");
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Update User Data</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-5">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInput}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInput}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleInput}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="rollno" className="block text-gray-700 mb-2">
                Roll No
              </label>
              <input
                type="text"
                name="rollno"
                id="rollno"
                value={data.rollno}
                onChange={handleInput}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="department" className="block text-gray-700 mb-2">
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                value={data.department}
                onChange={handleInput}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="semester" className="block text-gray-700 mb-2">
                Semester
              </label>
              <input
                type="text"
                name="semester"
                id="semester"
                value={data.semester}
                onChange={handleInput}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200 ease-in-out">
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}
