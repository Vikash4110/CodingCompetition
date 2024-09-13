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
  
      toast.success('Teacher added successfully');
      navigate('/admin/teacher');
    } catch (error) {
      console.error('Error adding teacher:', error.message);
      toast.error('Failed to add teacher');
    }
  };

  return (
    <section className="bg-transparent shadow-lg rounded-lg my-8 p-6 border-2 border-[#ffc221] mt-32 w-4/6 mx-auto" >
      <h1 className="text-3xl font-extrabold text-center text-[#127c71] mb-6">Add New Teacher</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Teacher Name Input */}
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Teacher Name</label>
          <input
            type="text"
            value={teacher_name}
            onChange={(e) => setTeacher(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#ffc221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        {/* Father's Name Input */}
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Father's Name</label>
          <input
            type="text"
            value={father_name}
            onChange={(e) => setFather(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#ffc221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        {/* Mobile No Input */}
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Mobile No</label>
          <input
            type="text"
            value={mobile_no}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#ffc221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#ffc221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        {/* Department Input */}
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#ffc221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        {/* Subject Name Input */}
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Subject Name</label>
          <input
            type="text"
            value={subject_name}
            onChange={(e) => setSubjectname(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#ffc221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        {/* Subject Code Input */}
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Subject Code</label>
          <input
            type="text"
            value={subject_code}
            onChange={(e) => setSubjectcode(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#ffc221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#FFC221] text-[#127C71] font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition duration-200"
        >
          Add Teacher
        </button>
      </form>
    </section>
  );
};

export default AdminAddTeacher;
