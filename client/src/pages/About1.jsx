import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
// import VikashImg from '../Assests/7070629_3293465 (1).png';
// import SahilImg from '../Assests/13960131_5413847.png';
// import RamImg from '../Assests/14064730_5413662.png';
// import UjjuImg from '../Assests/ujjwaljpeg.png';
// import UjjwalImg from '../Assests/19467-removebg.png';

const About = () => {
  return (
    <section className="bg-gray-100 py-72 px-8">
      {/* About Header */}
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">About the Feedback Portal</h1>
        <p className="text-lg text-gray-700">
          The feedback portal developed for <strong>Punjab Technical University</strong> allows students to provide 
          ratings on various teacher performance parameters. It also offers automated suggestions for teachers 
          to improve their teaching methods.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto space-y-12 mb-16">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative w-50 h-32 bg-white-200 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            {/* <img
              src={VikashImg}
              alt="Step 1"
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-indigo-600">Step 1: Login</h3>
            <p className="text-gray-600">
              Both students and admins can log in using their credentials. Students can log in using OTP sent 
              to their registered email or mobile number.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative w-59.5 h-32 bg-white-200 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            {/* <img
              src={SahilImg}
              alt="Step 2"
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-indigo-600">Step 2: Provide Feedback</h3>
            <p className="text-gray-600">
              After logging in, students can select a subject and rate their teachers on parameters like 
              communication skills, knowledge base, fairness in grading, and more.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative w-21 h-32 bg-white-200 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            {/* <img
              src={RamImg}
              alt="Step 3"
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-indigo-600">Step 3: Submit Feedback</h3>
            <p className="text-gray-600">
              Once feedback is submitted, the system processes the data and provides automated suggestions 
              for teachers based on student responses.
            </p>
          </div>
        </div>
      </div>

      {/* Analysis and Automated Suggestions Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
        <div className="flex justify-center">
          {/* <img
            src={UjjwalImg}
            alt="Analysis and Suggestions"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
          /> */}
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Analysis and Automated Suggestions</h2>
          <p className="text-gray-600 mb-4">
            The feedback portal not only collects student ratings but also analyzes the data to generate 
            actionable insights for teachers. The system uses advanced algorithms to provide personalized 
            recommendations for teachers to improve their teaching effectiveness.
          </p>
          <p className="text-gray-600">
            Various metrics such as knowledge base, communication skills, and fairness in grading are visualized 
            through graphs and tables, allowing for in-depth analysis and comparison between teachers.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-start hover:scale-105 transition duration-300 ease-in-out">
            <div className="absolute top-2 left-2 flex flex-col space-y-3">
              <a href="https://linkedin.com/in/vikash-bharal-5a2a49238" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 text-3xl" />
              </a>
              <a href="https://www.instagram.com/its_me_vikash18/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600 text-3xl" />
              </a>
              <a href="https://github.com/Vikash4110" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 text-3xl" />
              </a>
            </div>
            <div className="relative w-full h-80 bg-white-200 overflow-hidden rounded-t-lg transition-transform duration-300 ease-in-out">
              {/* <img
                src="https://ptustudyzone.vercel.app/assets/vikash1-Bxhse5g1.png"
                alt="Team Member 2"
                className="w-full h-full object-cover"
              /> */}
            </div>
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Vikash Bharal</h3>
            <p className="text-gray-600 mb-1"><strong>Roll No:</strong> 2224615</p>
            <p className="text-gray-600 mb-1"><strong>Department:</strong> Computer Science and Engineering</p>
            <p className="text-gray-600 mb-1"><strong>Semester:</strong> 5th</p>
          </div>


          {/* Team Member 2 */}
          
          <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-start hover:scale-105 transition duration-300 ease-in-out">
            <div className="absolute top-2 left-2 flex flex-col space-y-3">
              <a href="https://www.linkedin.com/in/ujjwal-tyagi-40187028a" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 text-3xl" />
              </a>
              <a href="https://www.instagram.com/utyagi_hr02?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600 text-3xl" />
              </a>
              <a href="https://github.com/utyagijjwal" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 text-3xl" />
              </a>
            </div>
            <div className="relative w-full h-80 bg-white-200 overflow-hidden rounded-t-lg transition-transform duration-300 ease-in-out ">
              {/* <img
                src={UjjuImg}
                alt="Team Member 1"
                className="w-full h-full object-cover"
              /> */}
            </div>
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Ujjwal</h3>
            <p className="text-gray-600 mb-1"><strong>Roll No:</strong> 2224602</p>
            <p className="text-gray-600 mb-1"><strong>Department:</strong> Computer Science and Engineering</p>
            <p className="text-gray-600 mb-1"><strong>Semester:</strong> 5th</p>
          </div>

          {/* Team Member 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-start hover:scale-105 transition duration-300 ease-in-out">
            <div className="absolute top-2 left-2 flex flex-col space-y-3">
              <a href="https://linkedin.com/in/sahil-jamwal-227509238" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 text-3xl" />
              </a>
              <a href="https://www.instagram.com/sahil.jamwal/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600 text-3xl" />
              </a>
              <a href="https://github.com/s-jamwal" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 text-3xl" />
              </a>
            </div>
            <div className="relative w-full h-80 bg-white-200 overflow-hidden rounded-t-lg transition-transform duration-300 ease-in-out ">
              {/* <img
                src="https://ptustudyzone.vercel.app/assets/sahil-Cdh5NPMK.png"
                alt="Team Member 3"
                className="w-full h-full object-cover"
              /> */}
            </div>
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Sahil Jamwal</h3>
            <p className="text-gray-600 mb-1"><strong>Roll No:</strong> 2224537</p>
            <p className="text-gray-600 mb-1"><strong>Department:</strong> Computer Science and Engineering</p>
            <p className="text-gray-600 mb-1"><strong>Semester:</strong> 5th</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;