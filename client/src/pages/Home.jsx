import React from "react";
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import How from '../components/HowItWorks'
import CallToAction from '../components/CallToActions'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>

    <Banner />
    <Carousel />
    <Hero />
    <How />
    <CallToAction />
    <FAQ />
    <Footer />
    
    </>
   
  );
};

export default HomePage;
