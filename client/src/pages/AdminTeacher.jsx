import React, { useEffect, useState } from 'react';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { Instagram } from 'react-content-loader';

const AdminTeacher = () => {
  const [syllabus, setSyllabus] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authorizationToken } = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllSyllabusData = async () => {
    if (!authorizationToken) {
      toast.error("Unauthorized. Please login again.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/admin/teacher`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.status === 401) {
        toast.error('Unauthorized. Please login again.');
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSyllabus(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching Teacher:', error);
      toast.error('Failed to fetch Teacher');
    } finally {
      setLoading(false);
    }
  };

  const deleteSyllabus = async (id) => {
    if (!authorizationToken) {
      toast.error("Unauthorized. Please login again.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/admin/teacher/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.status === 401) {
        toast.error('Unauthorized. Please login again.');
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Teacher Deleted Successfully");
      setSyllabus(prevSyllabus => prevSyllabus.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting Teacher:', error);
      toast.error('Failed to delete Teacher');
    }
  };

  useEffect(() => {
    getAllSyllabusData();
  }, []);

  if (loading) {
    return <Instagram />;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <section className="bg-white shadow-lg rounded-lg my-8 p-6">
        <div className="p-6">
          <h1 className="text-3xl font-extrabold text-center text-[#127c71] mb-6">Admin Teacher Data</h1>
          <div className="mb-6 text-center">
            <Link to="/admin/teacher/add" className="bg-transparent text-[#127C71] py-2 px-6 rounded-full border-2 border-[#127c71] shadow-lg hover:bg-[#127c71] hover:text-white transition duration-200 font-semibold">
              Add New Teacher
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr>
                  {['Teacher', 'Father Name', 'Mobile No', 'Email', 'Department', 'Subject Name', 'Subject Code', 'Edit', 'Delete'].map((header) => (
                    <th key={header} className="py-3 px-6 bg-[#FFC221] text-[#127C71] font-bold text-sm uppercase tracking-wide">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {syllabus.map((curService) => (
                  <tr key={curService._id} className="bg-gray-100 border-t border-gray-200 text-center hover:bg-gray-200 transition duration-200 ease-in-out">
                    <td className="py-3 px-6 border">{curService.teacher_name}</td>
                    <td className="py-3 px-6 border">{curService.father_name}</td>
                    <td className="py-3 px-6 border">{curService.mobile_no}</td>
                    <td className="py-3 px-6 border">{curService.email}</td>
                    <td className="py-3 px-6 border">{curService.department}</td>
                    <td className="py-3 px-6 border">{curService.subject_name}</td>
                    <td className="py-3 px-6 border">{curService.subject_code}</td>
                    <td className="py-3 px-6 border">
                      <Link to={`/admin/teacher/${curService._id}/edit`} className="bg-[#127C71] text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition-all ease-in-out">
                        Edit
                      </Link>
                    </td>
                    <td className="py-3 px-6 border">
                      <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-all ease-in-out" onClick={() => deleteSyllabus(curService._id)}>
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

export default AdminTeacher;
