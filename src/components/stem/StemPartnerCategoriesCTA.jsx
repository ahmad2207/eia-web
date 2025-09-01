// import React from "react";
// import { FaUniversity, FaBuilding, FaHandsHelping } from "react-icons/fa";

// const cats = [
//   {
//     icon: <FaUniversity />,
//     title: "Academic Institutions",
//     desc: "Research collaborations and student programs",
//   },
//   {
//     icon: <FaBuilding />,
//     title: "Corporate Partners",
//     desc: "CSR initiatives and capacity building",
//   },
//   {
//     icon: <FaHandsHelping />,
//     title: "NGOs & Foundations",
//     desc: "Joint programs and impact scaling",
//   },
// ];

// const StemPartnerCategoriesCTA = () => {
//   return (
//     <section className="bg-[#F8F5FB] py-16 px-6">
//       <div className="max-w-6xl mx-auto">
//         <h3 className="text-2xl font-bold text-[#3B0073] text-center">Join us in applying STEM principles to create meaningful impact</h3>

//         <div className="grid md:grid-cols-3 gap-6 mt-8">
//           {cats.map((c, i) => (
//             <div key={i} className="bg-white rounded-lg shadow p-6 text-center">
//               <div className="text-2xl text-[#3B0073] mb-3">{c.icon}</div>
//               <p className="font-semibold text-[#3B0073]">{c.title}</p>
//               <p className="text-[#3B0073]/80 text-sm mt-1">{c.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <a href="/contact" className="inline-block bg-[#FFC843] text-[#3B0073] px-6 py-3 rounded-md font-semibold hover:brightness-95">
//             Contact Us to Collaborate
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StemPartnerCategoriesCTA;

import React from "react";
import { FaUniversity, FaBuilding, FaHandsHelping } from "react-icons/fa";

const cats = [
  {
    icon: <FaUniversity />,
    title: "Academic Institutions",
    desc: "Research collaborations and student programs",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Partners",
    desc: "CSR initiatives and capacity building",
  },
  {
    icon: <FaHandsHelping />,
    title: "NGOs & Foundations",
    desc: "Joint programs and impact scaling",
  },
];

const StemPartnerCategoriesCTA = () => {
  return (
    <section className="bg-[#3B0073] m-10 rounded-3xl py-16 px-6 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h3 className="text-2xl font-bold text-white text-center">
          Join us in applying STEM principles to create meaningful impact
        </h3>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {cats.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center"
            >
              <div className="text-4xl text-[#3B0073] mb-3">{c.icon}</div>
              <p className="font-semibold text-[#3B0073]">{c.title}</p>
              <p className="text-[#3B0073]/80 text-sm mt-1">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block border-2 border-[#FFC843] bg-[#FFC843] text-[#3B0073] px-6 py-3 rounded-md font-semibold hover:brightness-95"
          >
            Contact Us to Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default StemPartnerCategoriesCTA;
