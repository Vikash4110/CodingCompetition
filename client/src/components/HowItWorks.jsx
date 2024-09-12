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
        <h2 className="text-4xl font-bold text-gray-800 mb-12">How It <span className="text-[#ed1f26]">Works</span></h2>

        {/* Step-by-step layout */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              {step.icon}

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 max-w-xs">{step.description}</p>

              {/* Add arrows between steps, except for the last step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block my-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 15L7 10H17L12 15Z" fill="#323290"/>
  <path d="M12 18V3" stroke="#323290" stroke-dasharray="4 4" stroke-width="2" stroke-linecap="round"/>
</svg>

                 
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
