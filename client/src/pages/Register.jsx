import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faListOl } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    rollno: "",
    department: "B.Tech Computer Science Engineering",
    semester: "1",
    email: "",
    phone: "",
    password: "",
    otp: "",
    userId: ""  // Ensure userId is included in the state
  });
  const [loading, setLoading] = useState(false);
  const [otpStep, setOtpStep] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (otpStep) {
        // Verify OTP
        const response = await fetch(`${backendUrl}/api/auth/verify-otp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.userId, otp: user.otp }),
        });

        const data = await response.json();
        if (response.ok) {
          toast.success(data.message);
          setOtpStep(false);
          navigate("/login");
        } else {
          toast.error(data.message);
        }
      } else {
        // Register User
        const response = await fetch(`${backendUrl}/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        const data = await response.json();
        if (response.ok) {
          toast.success(data.msg);
          setUser((prev) => ({ ...prev, userId: data.userId }));
          setOtpStep(true);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <>
       
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-md mx-auto mt-6   text-center border-2 rounded-3xl py-10 lg:py-12 px-6 lg:px-10 shadow-2xl ">
          {!otpStep ? (
            <>
              <div className="grid grid-cols-2 gap-6">




                <div className="relative h-11 w-full col-start-1 col-span-2 md:col-span-1">
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder=""
                    required
                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                  />
                  <label
                    className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"
                  >
                    <span><FontAwesomeIcon icon={faUser} /></span><span>Username</span>
                  </label>
                </div>







                <div className="relative h-11 w-full col-start-1 col-span-2 md:col-span-1" >
                  <input
                    type="text"
                    name="rollno"
                    value={user.rollno}
                    onChange={handleInput}
                    placeholder=""
                    required
                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                  />
                  <label
                    className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"
                  >
                    <span><FontAwesomeIcon icon={faMobile} /></span><span>Roll No.</span>
                  </label>
                </div>









                <div className="relative h-11 w-full col-start-1 col-span-2 ">
                  <input
                    type="text"
                    name="department"
                    value={user.department}
                    onChange={handleInput}
                    placeholder=""
                    required
                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                  />

                  <label
                    className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"
                  >
                    <span><FontAwesomeIcon icon={faBuilding} /></span><span>Department</span>
                  </label>
                </div>







                










                <div className="relative h-11 w-full col-start-1 col-span-2 ">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder=""
                    required
                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                  />

                  <label
                    className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"
                  >
                    <span><FontAwesomeIcon icon={faEnvelope} /></span><span>Email</span>
                  </label>



                </div>
                <div className="relative h-11 w-full col-start-1 col-span-2 md:col-span-1">
                  <input
                    type="text"
                    name="semester"
                    value={user.semester}
                    onChange={handleInput}
                    placeholder=""
                    required
                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                  />
                  <label
                    className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"
                  >
                    <span><FontAwesomeIcon icon={faListOl} /></span><span>Semester</span>
                  </label>
                </div>



                <div className="relative h-11 w-full col-start-1 col-span-2 md:col-span-1 ">
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder=""
                    required
                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                  />
                  <label
                    className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"
                  >
                    <span><FontAwesomeIcon icon={faPhone} /></span><span>Phone</span>
                  </label>
                </div>




                <div className="relative h-11 w-full col-start-1 col-span-2">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder=""
                    required
                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                  />


                  <label
                    className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#127c71]"
                  >
                    <span><FontAwesomeIcon icon={faLock} /></span><span>Password</span>
                  </label>


                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="py-2 px-4 rounded-full mt-6 font-medium text-white w-1/2 mx-auto  block  bg-[#127c71]   transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                {loading ? (
            <div className="flex justify-center items-center">
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            </div>
          ) : (
            "Register Now"
          )}
              </button>

            </>
          ) : (
            <>
              <input
                type="text"
                name="otp"
                value={user.otp}
                onChange={handleInput}
                placeholder="Enter OTP"
                required
                className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#127c71] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="py-2 px-4 rounded-full mt-6 font-medium text-white w-1/2 mx-auto  block  bg-[#127c71]  transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                {loading ? (
                  <RotatingLines strokeColor="#fff" strokeWidth="5" animationDuration="0.75" width="20" visible={true} />
                ) : (
                  "Verify OTP"
                )}
              </button>
            </>
          )}
          <p className="text-center mt-4 text-gray-600">
          Already registered? <Link to="/login" className="text-[#127c71] font-semibold hover:underline">Login</Link>
        </p>

        </form>
        
      
    </>
  );
};

export default Register;
