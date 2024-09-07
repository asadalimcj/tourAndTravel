import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import heroImg from '../images/1.jpg'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
    <div>
    <div>
      <Navbar/>
      <Header
          cName="hero-about"
          H1="Contact Us"
          imag={heroImg}
        />
        <ContactForm/>
        <Footer/>
    </div>
    </div>
  )
}
