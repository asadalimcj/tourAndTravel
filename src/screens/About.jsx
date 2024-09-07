import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import heroImg from '../images/5.jpg'
import Footer from '../components/Footer';
import AboutUsdata from '../components/AboutUsdata';

function About() {
  return (
    <>
      <div>
        <Navbar/>
        <Header
          cName="hero-about"
          H1="About Us"
          imag={heroImg}
        />
        <AboutUsdata/>
        <Footer/>
      </div>
    </>
  )
  
}
export default About;
