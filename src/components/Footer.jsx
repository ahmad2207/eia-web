// src/components/Footer.js
import React from "react";
import eialogo from "../assets/images/eia-logo.png"; // Replace with actual logo path

const Footer = () => {
  return (
    <footer className="bg-[#111827] py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={eialogo} alt="Elevate Insight Partners Logo" className="h-24 w-auto" />
        <p className="text-white text-sm md:text-base text-center md:text-right">
          © 2024 Elevate Insight Partners Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
