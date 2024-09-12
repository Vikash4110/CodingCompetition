import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import underline from '../assets/curveUnderline.svg';
const backendUrl = import.meta.env.VITE_BACKEND_URL;



const Contact = () => {
  const { user } = useAuth();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [userData, user]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch(`${backendUrl}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          username: "",
          email: "",
          message: "",
        });
        const responseData = await response.json();
        toast.success("Form submitted successfully!");
        console.log(responseData);
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center  bg-[#fbfbfb] pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-10 max-w-screen-lg w-full lg:w-5/6 md:w-4/6  ">

        {/* Image Section */}
        <div className="flex flex-col justify-between  md:block w-5/6 mx-auto">
          <div class="max-w-2xl mx-auto text-center">
            <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6">
              
            <h2 className="text-3xl md:text-5xl font-bold leading-tight flex flex-col items-center space-y-4  text-center">
            <span className="relative inline-block text-primary font-bold bg-transparent">
              <span className='text-[#127c71]'>Contact Us</span>
              <img
                src={underline}
                className='block mx-auto mt-2 w-40 md:w-60 h-auto rotate-3'
                alt="underline"
              />
            </span>
          </h2>

            </div>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500 text-justify">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Your thoughts are important to us, and we're here to assist you with anything you need. Fill out the form below, and we'll get back to you as soon as possible.</p>
          </div>

         
        </div>

        {/* Form Section */}
        <div className="w-5/6 justify-self-center md:w-full bg-white rounded-[40px] p-8 shadow-lg mb-10 lg:mb-0 border-2 border-[#ffc221] ">
          <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 ">
            <h1 className="font-semibold text-2xl md:text-3xl text-[#127c71]">Send us a message</h1>

          </div>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
            <div className='flex flex-col'>

              <label for='username' className='font-semibold'>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border border-[#127c71] placeholder:text-gray-500 focus:outline-none focus:border-[#127c71]"
                
              />
            </div>
            <div className='flex flex-col'>

              <label for='email' className='font-semibold'>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border border-[#127c71] placeholder:text-gray-500 focus:outline-none focus:border-[#127c71]"
              
              />
            </div>
            <div className='flex flex-col'>

              <label for='message' className='font-semibold'>Message</label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                cols="30"
                rows="3 "
                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border border-[#127c71] placeholder:text-gray-500 focus:outline-none focus:border-[#127c71]"
         
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="block w-full font-bold bg-[#127c71] text-white py-4 mt-6 rounded-[20px] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
