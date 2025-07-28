// src/pages/About.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";


const About = () => {
  return (
     <div>
      <Navbar />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
