import React, { useState, useRef, useEffect } from 'react';

import faq from '../assets/faq.jpg';
import underline from '../assets/curveUnderline.svg';


const AboutItem = ({ title, isOpen, onClick, content }) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className="mb-4">
            <div
                className={`bg-[#127c71] text-white flex items-center justify-between p-4 rounded-full cursor-pointer ${isOpen ? 'shadow-lg' : ''}`}
                onClick={onClick}
            >
                <h3 className="font-semibold text-base md:text-lg lg:text-xl">{title}</h3>
                <div className="w-8 h-8 bg-white text-[#127c71] rounded-full flex items-center justify-center text-lg md:text-xl">
                    {isOpen ? '-' : '+'}
                </div>
            </div>
            <div
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: contentHeight }}
            >
                <div
                    className="bg-white text-[#127c71] p-4 rounded-3xl shadow-inner"
                    ref={contentRef}
                >
                    {content}
                </div>
            </div>
        </div>
    );
};

const About = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const items = [
        {
            title: "How can I log in to the feedback portal?",
            content: "Students can log in using their roll number along with an OTP sent to their registered contact number or email ID. If the contact number or email ID does not match the records, only the admin can make necessary changes. Admins have their own login credentials to login."
        },
        {
            title: "What should I do if I forget my roll number or OTP?",
            content: " If you forget your roll number or OTP, please contact your institution’s admin for assistance. They can help you retrieve or reset your credentials."
        },
        {
            title: "How can I submit feedback on a teacher?",
            content: "After logging in, you will see a list of subjects and their corresponding teachers. Select a subject to view a list of questions about the teacher. Rate each question from 1 to 5 based on your perception.You may also leave optional comments if you want."
        },
        {
            title: "Can I submit feedback for multiple teachers or subjects?",
            content: "Each student can only submit feedback once per subject. If you have feedback for multiple subjects, you must complete and submit the feedback for one subject before you can move on to another."
        },
        {
            title: "Is my feedback anonymous?",
            content: "Yes, feedback is submitted anonymously. However, the system maintains a record of feedback mapping with the roll number to ensure that each student provides only one feedback per subject."
        },
        {
            title: "How is the feedback analyzed?",
            content: " Feedback is analyzed using various graphs and tables, such as bar graphs and comparative charts, to assess teacher performance based on different parameters. Automated suggestions are also generated to provide corrective measures for teachers."
        },

    ];

    const toggleItem = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="max-w-md mx-auto rounded-2xl p-8 bg-white shadow-2xl background" data-aos="fade-up" >
         <h2 className="text-3xl md:text-5xl font-bold leading-tight flex flex-col space-y-4 mb-20 text-center">
            <span className="relative text-primary font-bold bg-transparent">
                <span className='text-[#127c71]'>FAQ's</span>
                <img src={underline} className='absolute top-14 transform translate-y-0 left-28 rotate-3 w-24 md:w-36 h-auto' alt="underline" />
            </span>

        </h2>
            {items.map((item, index) => (
                <AboutItem
                    key={index}
                    title={item.title}
                    isOpen={activeIndex === index}
                    onClick={() => toggleItem(index)}
                    content={item.content}
                />
            ))}
        </div>
    );
};

const ContentSection = () => (


    <div className='relative flex justify-center items-center flex-col text-center sm:text-left lg:mt-36'  data-aos="zoom-out">

       
        <img src={faq} className='mx-auto' />
    </div>




);

const AboutLayout = () => (

    <div className="relative overflow-hidden  ">

        <div className="flex  flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl mx-auto  px-4  mb-0  mt-32 md:mb-0 lg:mb-24 ">
            <div className='mt-8 lg:mt-12 lg:ml-8 w-5/6 flex-grow lg:w-full order-2 lg:order-1 ' >
                <About />

            </div>

            <div className=" lg:mt-0 lg:ml-8 flex-grow order-1 lg:order-2 md:w-3/6 sm:2/6 w-5/6 m-auto lg:w-full">
                <ContentSection />
            </div>
        </div>
    </div>
);

export default AboutLayout;
