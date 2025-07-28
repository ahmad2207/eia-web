// src/components/Partners.js
import React from "react";

import {
  FaHandsHelping,
  FaUniversity,
  FaBriefcase,
  FaIndustry,
  FaGlobeAfrica,
  FaPeopleArrows,
  FaLightbulb, 
} from "react-icons/fa";

const partnerTypes = [
    {
    icon: <FaLightbulb className="text-[#00B9C7]" />, 
    title: "Innovation Hubs",
    desc: "Tech hubs and media platforms."
  },
  {
    icon: <FaPeopleArrows className="text-[#3B0073]" />, 
    title: "Civil Society & NGOs",
    desc: "Grassroots organizations and advocacy groups."
  },
  {
    icon: <FaUniversity className="text-[#FFC843]" />, 
    title: "Public Sector Agencies",
    desc: "Government institutions and regulatory bodies."
  },
  {
    icon: <FaBriefcase className="text-[#00B9C7]" />, 
    title: "Private Enterprises",
    desc: "Corporations and CSR units."
  },
  {
    icon: <FaUniversity className="text-[#3B0073]" />, 
    title: "Academic Institutions",
    desc: "Universities and research organizations."
  },
  {
    icon: <FaGlobeAfrica className="text-[#FFC843]" />, 
    title: "Development Donors",
    desc: "Multilateral organizations and foundations."
  },
  
];

const Partners = () => {
  return (
    <section className="bg-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3B0073] mb-4">Who We Work With</h2>
          <p className="text-[#3B0073]/80 max-w-2xl mx-auto text-base">
            We collaborate with a network of dedicated partners and clients who share our passion for inclusive growth, sustainable development, and equitable systems. Our work spans diverse sectors and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerTypes.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow text-center backdrop-blur-md">
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-4">
                  {partner.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#000000] mb-1">{partner.title}</h3>
                <p className="text-sm text-[#000000]/80">{partner.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
