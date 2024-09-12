import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-2xl">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="hover:text-[#127c71] transition">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-500 w-5 h-5 rounded-full"></div>
              <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
            </div>
            <span className="ml-2 text-xl font-semibold text-[#ed1f26]">MentorMirror</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/about" className="hover:text-[#127c71] transition">About</Link>
          <Link to="/mentors" className="hover:text-[#127c71] transition">Feedback</Link>
          <Link to="/mentors" className="hover:text-[#127c71] transition">Analysis</Link>
          <Link to="/contact" className="hover:text-[#127c71] transition flex items-center">
            Contact
          </Link>
        </div>

        {/* Right Section: Sign Up and Get Started Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            className="bg-[#127c71] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#0f6f5c] transition"
            onClick={() => window.location.href = "/register"}>
            Register
          </button>

          <button className="border-2 border-[#127c71] text-[#127c71] font-semibold py-2 px-4 rounded-full hover:bg-[#127c71] hover:text-white transition" onClick={() => window.location.href = "/login"}>
            Login
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="w-5 h-5 text-[#127c71]" /> : <FaBars className="w-5 h-5 text-[#127c71]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 py-4 bg-white shadow-lg">
          <Link to="/about" className="hover:text-[#127c71] transition" onClick={toggleMenu}>About</Link>
          <Link to="/feedback" className="hover:text-[#127c71] transition" onClick={toggleMenu}>Feedback</Link>
          <Link to="/analysis" className="hover:text-[#127c71] transition" onClick={toggleMenu}>Analysis</Link>
          <Link to="/contact" className="hover:text-[#127c71] transition flex items-center" onClick={toggleMenu}>
            Contact
          </Link>

          <div className="flex space-x-4 mt-4">
            <button
              className="bg-[#127c71] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#0f6f5c] transition"
              onClick={() => window.location.href = "/register"}>
              Register
            </button>

            <button className="border-2 border-[#127c71] text-[#127c71] font-semibold py-2 px-4 rounded-full hover:bg-[#127c71] hover:text-white transition" onClick={() => window.location.href = "/login"}>
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
