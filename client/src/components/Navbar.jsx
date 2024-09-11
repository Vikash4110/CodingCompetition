import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            FeedBackPTU
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/feedback" className="hover:text-gray-300">Feedback</Link>
          <Link to="/analysis" className="hover:text-gray-300">Analysis</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Authentication Buttons */}
        <div className="flex space-x-4">
          <Link to="/register">
            <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-red-600">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
