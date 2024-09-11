import React from 'react';

const Home = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-600">
          Welcome to Feedback Website
        </h1>
        <p className="text-xl mb-6">
          Your thoughts matter! Share your feedback and help us improve.
        </p>
        <button className="py-2 px-4 rounded-full bg-white text-blue-500 font-semibold shadow-lg transition-transform duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
