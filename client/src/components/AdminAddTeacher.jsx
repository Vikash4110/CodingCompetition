import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminAddTeacher = () => {
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();
  const [teacher_name, setTeacher] = useState("");
  const [father_name, setFather] = useState("");
  const [mobile_no, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [subject_name, setSubjectname] = useState("");
  const [subject_code, setSubjectcode] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/admin/teacher/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
        body: JSON.stringify({
          teacher_name,
          father_name,
          mobile_no,
          email,
          department,
          subject_name,
          subject_code,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      toast.success('Teacher added successfully');
      navigate('/admin/teacher');
    } catch (error) {
      console.error('Error adding teacher:', error.message);  // Log error message
      toast.error('Failed to add teacher');
    }
  };
  

  return (
    <section className="bg-white shadow-md rounded my-6 p-6">
      <h1 className="text-2xl font-semibold mb-4">Add New Teacher</h1>
      <form onSubmit={handleSubmit}>
        {/* Teacher Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Teacher Name</label>
          <input
            type="text"
            value={teacher_name}
            onChange={(e) => setTeacher(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Father's Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Father's Name</label>
          <input
            type="text"
            value={father_name}
            onChange={(e) => setFather(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Mobile No Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Mobile No</label>
          <input
            type="text"
            value={mobile_no}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Department Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Subject Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Subject Name</label>
          <input
            type="text"
            value={subject_name}
            onChange={(e) => setSubjectname(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Subject Code Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Subject Code</label>
          <input
            type="text"
            value={subject_code}
            onChange={(e) => setSubjectcode(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Add Teacher
        </button>
      </form>
    </section>
  );
};

export default AdminAddTeacher;
