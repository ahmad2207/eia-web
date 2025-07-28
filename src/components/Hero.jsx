// src/components/Hero.js
import React from "react";
import background1 from "../assets/images/background1.png";

const Hero = () => {
  return (
    <section
      className="text-white h-[530px]  text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background1})`, backgroundColor: "#3B0073" }}
    >
      <div className="bg-[#000000]/50 h-full flex flex-col justify-center items-center">
        <h1 className="text-[40px] md:text-[48px] font-bold leading-tight max-w-[900px]">
          Together, Let’s Co-create a Lasting Impact
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-[600px]">
          Empowering communities and institutions through strategic insight, policy innovation, and accessible education.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-[#FFC843] text-[#3B0073] px-8 py-3 rounded-md font-semibold text-sm uppercase">
            Explore Our Work
          </button>
          <button className="border border-white px-8 py-3 rounded-md font-semibold text-sm uppercase">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
