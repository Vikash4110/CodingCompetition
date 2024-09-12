import React from "react";
import loginIcon from '../assets/loginIcon.png'
import feedbackIcon from '../assets/feedbackIcon.png'
import analysisIcon from '../assets/analysisIcon.png'

const HowItWorks = () => {
  const steps = [
    {
      icon: <img src={loginIcon} className="w-16 h-16 mb-4" />,
      title: "Step 1: Login",
      description: "Students login using their roll number and OTP sent to their email or phone.",
    },
    {
      icon: <img src={feedbackIcon} className="w-16 h-16 mb-4" />,
      title: "Step 2: Submit Feedback",
      description: "Choose the subject and teacher, and provide feedback on the various parameters.",
    },
    {
      icon: <img src={analysisIcon} className="w-16 h-16 mb-4" />,
      title: "Step 3: Analyze Results",
      description: "Admins can view and analyze the feedback, generating suggestions for improvement.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-gray-800 mb-12">How It <span className="text-[#127c71] relative">Works<svg className="absolute top-[-15px] right-[0px] w-6 md:w-8 h-auto" viewBox="0 0 3183 3072">
                        <path fill="#ffc221" d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z" />
                        <path fill="#ffc221" d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z" />
                        <path fill="#ffc221" d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z" />
                      </svg></span></h2>

        {/* Step-by-step layout */}
        <div className="flex flex-col md:flex-row md:justify-center justify-center  items-center space-y-10 md:space-y-0 md:space-x-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              {step.icon}

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 max-w-xs">{step.description}</p>

        
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
