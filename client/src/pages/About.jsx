import React from "react";
import underline from '../assets/curveUnderline.svg';
import How from '../components/HowItWorks'
import profilePicVikash from '../assets/vikash1.png';
import profilePicSahil from '../assets/sahil.png';
import profilePicUjjwal from '../assets/ujjwal.png';
import LinkdeinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import blogLogo from '../assets/blogger.png';

import instagramLogo from '../assets/instagram.png';

const AboutUs = () => {
  return (
  

  
    <section className=" pt-32">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight flex flex-col items-center space-y-4 mb-4 text-center">
            <span className="relative inline-block text-primary font-bold bg-transparent">
              <span className='text-[#127c71]'>About Our Feeback Portal</span>
              <img
                src={underline}
                className='block mx-auto mt-2 w-40 md:w-60 h-auto rotate-3'
                alt="underline"
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive feedback portal designed for educational institutions, enabling students to provide feedback on their teachers and courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 mt-32" >
          {/* Features Section */}
          <div className="bg-white p-6 rounded-3xl shadow-2xl border-2 border-[#ffc223]">
            <h3 className="text-2xl font-bold text-[#127c71] mb-4 underline">Features of the Portal</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-[#127c71]">Individual Teacher Feedback:</span> Analyze feedback for each teacher on various parameters.
              </li>
              <li>
                <span className="font-semibold text-[#127c71] ">Graphical Representation:</span> Feedback results are shown using bar graphs and comparison charts for better analysis.
              </li>
              <li>
                <span className="font-semibold text-[#127c71]">Automated Suggestions:</span> The system generates suggestions for teachers based on feedback to improve their performance.
              </li>
              <li>
                <span className="font-semibold text-[#127c71]">Anonymous Feedback:</span> Student feedback is kept anonymous, but each entry is mapped to a roll number for record-keeping.
              </li>
              <li>
                <span className="font-semibold text-[#127c71]">Admin Management:</span> Admin can manage feedback, update student details, and generate detailed reports.
              </li>
            </ul>
          </div>

          {/* Entities and Constraints Section */}
          <div className="bg-white p-6 rounded-3xl shadow-2xl border-2 border-[#ffc223]">
            <h3 className="text-2xl font-bold text-[#127c71] mb-4 underline ">Entities and Constraints</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-[#127c71]">Class:</span> Includes attributes like Program, Semester, Section.
              </li>
              <li>
                <span className="font-semibold text-[#127c71]">Subject:</span> Each subject has a code and name, associated with teachers.
              </li>
              <li>
                <span className="font-semibold text-[#127c71]">Teacher:</span> Information like Name, Mobile, Email, and Department are tracked.
              </li>
              <li>
                <span className="font-semibold text-[#127c71]">Admin Table:</span> Admin can modify student contact details, and maintain records of feedback submissions.
              </li>
              <li>
                <span className="font-semibold text-[#127c71]" >Feedback:</span> Students rate teachers based on specific parameters, and only one feedback submission per student is allowed.
              </li>
            </ul>
          </div>
        </div>
        <How />

        <h2 className="text-3xl md:text-5xl font-bold leading-tight flex flex-col items-center space-y-4 mb-10 text-center mt-32 ">
            <span className="relative inline-block text-primary font-bold bg-transparent">
              <span className='text-[#127c71]'>Meet Our Team</span>
              <img
                src={underline}
                className='block mx-auto mt-2 w-40 md:w-60 h-auto rotate-3'
                alt="underline"
              />
            </span>
          </h2>

          {/* Our team */}

          <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-0  lg:px-16 md:space-x-0 lg:space-x-10 ">
              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-12 p-6 md:p-0" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                <div className="max-w-xs md:max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 bg-white">
                  <img
                    className="w-auto h-48 md:h-64 m-auto"
                    src={profilePicVikash}
                    alt="Vikash Bharal"
                  />
                  <div className="px-4 md:px-6 py-4">
                    <div className="font-extrabold text-xl md:text-2xl mb-2 text-center text-[#127c71]"><a href="https://vikashbharal.vercel.app/">Vikash Bharal</a></div>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Student</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">BTech CSE (3rd Year)</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Punjab Technical University</p>
                  </div>
                  <div className="absolute left-4 top-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                    <a href="https://www.linkedin.com/in/vikash-bharal-5a2a49238/" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={LinkdeinLogo} className='w-8 md:w-11 h-8 md:h-11' alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Vikash4110" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={githubLogo} className='w-8 md:w-11 h-8 md:h-11' alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/its_me_vikash18/" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={instagramLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Instagram" />
                    </a>
                    <a href="https://geteternalknowledge.blogspot.com" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={blogLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Blog" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-12 p-6 md:p-0" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                <div className="max-w-xs md:max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 bg-white">
                  <img
                    className="w-auto h-48 md:h-64 m-auto"
                    src={profilePicSahil}
                    alt="Sahil Jamwal"
                  />
                  <div className="px-4 md:px-6 py-4">
                    <div className="font-extrabold text-xl md:text-2xl mb-2 text-center text-[#127c71]">Sahil Jamwal</div>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Student</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">BTech CSE (3rd Year)</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Punjab Technical University</p>
                  </div>
                  <div className="absolute left-4 top-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                    <a href="https://www.linkedin.com/in/sahil-jamwal-227509238/" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={LinkdeinLogo} className='w-8 md:w-11 h-8 md:h-11' alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/s-jamwal" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={githubLogo} className='w-8 md:w-11 h-8 md:h-11' alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/_sahil.jamwal_/?next=%2F" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={instagramLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Instagram" />
                    </a>
                    <a href="#" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={blogLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Blog" />
                    </a>
                  </div>
                </div>
              </div>





              
              
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-0  lg:px-16 md:space-x-0 lg:space-x-10 md:mt-20 ">
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-12 p-6 md:p-0" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                <div className="max-w-xs md:max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 bg-white">
                  <img
                    className="w-auto h-48 md:h-64 m-auto"
                    src={profilePicUjjwal}
                    alt="Ujjwal"
                  />
                  <div className="px-4 md:px-6 py-4">
                    <div className="font-extrabold text-xl md:text-2xl mb-2 text-center text-[#127c71]">Ujjwal</div>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Student</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">BTech CSE (3rd Year)</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Punjab Technical University</p>
                  </div>
                  <div className="absolute left-4 top-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                    <a href="https://www.linkedin.com/in/ujjwal-tyagi-40187028a" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={LinkdeinLogo} className='w-8 md:w-11 h-8 md:h-11' alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/utyagijjwal" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={githubLogo} className='w-8 md:w-11 h-8 md:h-11' alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/utyagi_hr02?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={instagramLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Instagram" />
                    </a>
                    <a href="#" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={blogLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Blog" />
                    </a>
                  </div>
                </div>
              </div>
              </section>

       

        
      </div>
    </section>
   
  );
};

export default AboutUs;
