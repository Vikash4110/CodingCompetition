import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/1-scaled.jpg";
import Image2 from "../assets/7252.jpg";
import Image3 from "../assets/IMG_4203-scaled.jpg";

const slidesData = [
  {
    title: "Your path to success begins with the right knowledge.",
    description: "– Francis Bacon",
    backgroundImage: Image1 // Use imported image
  },
  {
    title: "Learning never exhausts the mind.",
    description: "– Leonardo da Vinci",
    backgroundImage: Image2
  },
  {
    title: "Education is the key to unlock the golden door of freedom.",
    description: "– George Washington Carver",
    backgroundImage: Image3
  },
];

const MainSlider = () => {
  const sliderRef = useRef(null);
  const [slides, setSlides] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    // Preload images and set state only after all images are loaded
    const preloadImages = slidesData.map(slide => {
      const img = new Image();
      img.src = slide.backgroundImage;
      return img;
    });

    Promise.all(preloadImages.map(img => new Promise(resolve => {
      img.onload = resolve;
    }))).then(() => {
      setSlides(slidesData);
    });
  }, []);

  if (slides.length === 0) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className="relative h-[50vh] overflow-hidden">
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Slider */}
      <Slider {...settings} ref={sliderRef} className="z-10">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="md:h-screen lg:h-screen h-[70vh] flex justify-center items-center text-center md:px-20 px-4"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="text-white flex items-center justify-between mt-[20vh] w-full">
              {/* Previous Button */}
              <div className="z-20 cursor-pointer text-white" onClick={() => sliderRef.current.slickPrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>

              {/* Slide Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:px-10 px-5">
                {slide.title}
              </h1>

              {/* Next Button */}
              <div className="z-20 cursor-pointer text-white" onClick={() => sliderRef.current.slickNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
