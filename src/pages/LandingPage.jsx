import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import ImpactPath from "../components/ImpactPath";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
// import FAQ from "./FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ImpactPath />
      <Partners />
      <Testimonials />
      {/* <FAQ /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;