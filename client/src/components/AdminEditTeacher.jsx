import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminEditTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();
  const [teacher_name, setTeacher] = useState("");
  const [father_name, setFather] = useState("");
  const [mobile_no, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [subject_name, setSubjectname] = useState("");
  const [subject_code, setSubjectcode] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/admin/teacher/${id}`, {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data) {
          setTeacher(data.teacher_name || '');
          setFather(data.father_name || '');
          setMobile(data.mobile_no || '');
          setEmail(data.email || '');
          setDepartment(data.department || '');
          setSubjectname(data.subject_name || '');
          setSubjectcode(data.subject_code || '');
          setLink(data.link || '');
        }
      } catch (error) {
        console.error('Error fetching service details:', error);
        toast.error('Failed to fetch service details');
      }
    };

    fetchServiceDetails();
  }, [id, authorizationToken, backendUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/api/admin/teacher/update/${id}`, {
        method: 'PATCH',
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
          link
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      toast.success(data.message);
      navigate('/admin/teacher');
    } catch (error) {
      console.error('Error updating service:', error);
      toast.error('Failed to update service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-transparent shadow-lg rounded-lg my-8 p-6 mt-32 w-4/6 mx-auto border-2 border-[#ffc221]">
      <h1 className="text-3xl font-extrabold text-center text-[#127c71] mb-6">Edit Teacher</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Teacher Name</label>
          <input
            type="text"
            value={teacher_name}
            onChange={(e) => setTeacher(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#FFC221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Father's Name</label>
          <input
            type="text"
            value={father_name}
            onChange={(e) => setFather(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#FFC221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Mobile No</label>
          <input
            type="text"
            value={mobile_no}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#FFC221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#FFC221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#FFC221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Subject Name</label>
          <input
            type="text"
            value={subject_name}
            onChange={(e) => setSubjectname(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#FFC221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#127c71] font-semibold">Subject Code</label>
          <input
            type="text"
            value={subject_code}
            onChange={(e) => setSubjectcode(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-[#FFC221] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC221]"
            required
          />
        </div>
        <button
          type="submit"
          className={`bg-[#FFC221] text-[#127C71] font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Teacher'}
        </button>
      </form>
    </section>
  );
};

export default AdminEditTeacher;
