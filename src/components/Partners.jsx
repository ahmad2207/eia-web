// // src/components/Partners.js
// import React from "react";

// import {
//   FaHandsHelping,
//   FaUniversity,
//   FaBriefcase,
//   FaIndustry,
//   FaGlobeAfrica,
//   FaPeopleArrows,
//   FaLightbulb, 
// } from "react-icons/fa";

// const partnerTypes = [
//     {
//     icon: <FaLightbulb className="text-[#00B9C7]" />, 
//     title: "Innovation Hubs",
//     desc: "Tech hubs and media platforms."
//   },
//   {
//     icon: <FaPeopleArrows className="text-[#3B0073]" />, 
//     title: "Civil Society & NGOs",
//     desc: "Grassroots organizations and advocacy groups."
//   },
//   {
//     icon: <FaUniversity className="text-[#FFC843]" />, 
//     title: "Public Sector Agencies",
//     desc: "Government institutions and regulatory bodies."
//   },
//   {
//     icon: <FaBriefcase className="text-[#00B9C7]" />, 
//     title: "Private Enterprises",
//     desc: "Corporations and CSR units."
//   },
//   {
//     icon: <FaUniversity className="text-[#3B0073]" />, 
//     title: "Academic Institutions",
//     desc: "Universities and research organizations."
//   },
//   {
//     icon: <FaGlobeAfrica className="text-[#FFC843]" />, 
//     title: "Development Donors",
//     desc: "Multilateral organizations and foundations."
//   },
  
// ];

// const Partners = () => {
//   return (
//     <section className="bg-white py-16 px-6"
//     >
//       <div className="max-w-6xl mx-auto backdrop-blur-sm">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-[#3B0073] mb-4">Who We Work With</h2>
//           <p className="text-[#3B0073]/80 max-w-2xl mx-auto text-base">
//             We collaborate with a network of dedicated partners and clients who share our passion for inclusive growth, sustainable development, and equitable systems. Our work spans diverse sectors and communities.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {partnerTypes.map((partner, index) => (
//             <div key={index} className="bg-white rounded-lg p-6 shadow text-center backdrop-blur-md">
//               <div className="flex flex-col items-center">
//                 <div className="text-2xl mb-4">
//                   {partner.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-[#000000] mb-1">{partner.title}</h3>
//                 <p className="text-sm text-[#000000]/80">{partner.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;


/// src/components/Partners.js

import React from "react";
import {
  FaUniversity,
  FaBriefcase,
  FaGlobeAfrica,
  FaPeopleArrows,
  FaLightbulb,
} from "react-icons/fa";

// Import partner logos
import partner1 from "../assets/images/foliage.png";
import partner2 from "../assets/images/sbe.png";
import partner3 from "../assets/images/9qc.png";
import partner4 from "../assets/images/ete.png";
import partner5 from "../assets/images/aaa.png";
import partner6 from "../assets/images/partner.png";

const partnerTypes = [
  {
    icon: <FaLightbulb className="text-[#00B9C7]" />,
    title: "Innovation Hubs",
    desc: "Tech hubs and media platforms.",
  },
  {
    icon: <FaPeopleArrows className="text-[#3B0073]" />,
    title: "Civil Society & NGOs",
    desc: "Grassroots organizations and advocacy groups.",
  },
  {
    icon: <FaUniversity className="text-[#FFC843]" />,
    title: "Public Sector Agencies",
    desc: "Government institutions and regulatory bodies.",
  },
  {
    icon: <FaBriefcase className="text-[#00B9C7]" />,
    title: "Private Enterprises",
    desc: "Corporations and CSR units.",
  },
  {
    icon: <FaUniversity className="text-[#3B0073]" />,
    title: "Academic Institutions",
    desc: "Universities and research organizations.",
  },
  {
    icon: <FaGlobeAfrica className="text-[#FFC843]" />,
    title: "Development Donors",
    desc: "Multilateral organizations and foundations.",
  },
];

const partnerLogos = [
  partner1,
  partner2,
  partner3,
  // partner4,
  // partner5,
  partner6,
  
];

const scrollingLogos = [...partnerLogos, ...partnerLogos];

const Partners = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section 1: Partner Types */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3B0073] mb-4">Who We Work With</h2>
          <p className="text-[#3B0073]/80 max-w-2xl mx-auto text-base">
            We collaborate with a network of dedicated partners and clients who share our passion for inclusive growth, sustainable development, and equitable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {partnerTypes.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow text-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-4">{partner.icon}</div>
                <h3 className="text-lg font-semibold text-[#000000] mb-1">{partner.title}</h3>
                <p className="text-sm text-[#000000]/80">{partner.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Infinite Scrolling Logos */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#3B0073] mb-2">Our Partner Network</h3>
          <p className="text-[#3B0073]/80 max-w-xl mx-auto">
            A few of the forward-thinking organizations we’ve worked with.
          </p>
        </div>

        <div className="overflow-hidden relative w-full">
          <div
            className="flex gap-12 animate-scrollLogos"
            style={{
              animation: "scrollLogos 30s linear infinite",
              width: "200%",
            }}
          >
            {scrollingLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center w-[150px] h-[100px]"
              >
                <img
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
