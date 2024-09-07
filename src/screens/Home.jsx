import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../images/4.jpg";
import Header from "../components/Header";
import Destination from "../components/Destination";
import Trips from "../components/Trips";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Header
          cName="hero"
          address="Travel Plan"
          Para="Travel the World With your Partner"
          H1="Enjoy The Nature And Make your Atory"
          imag={heroImg}
          btnclass="show"
          url="/"
        />
        <Destination />
        <Trips />
        <Footer/>
      </div>
    </>
  );
}
export default Home;
