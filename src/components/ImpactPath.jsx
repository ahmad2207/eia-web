// // src/components/ImpactPath.js
// import React from "react";
// import {
//   FaBookOpen,
//   FaChalkboardTeacher,
//   FaUsers
// } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaBookOpen />, 
//     title: "Accessible Knowledge",
//     desc: "We believe that reliable, relevant, and open-access information drives informed action.",
//     bg: "bg-[#3B0073]"
//   },
//   {
//     icon: <FaChalkboardTeacher />, 
//     title: "Capacity Building",
//     desc: "We invest in tools, systems, and training that empower people and institutions.",
//     bg: "bg-[#FFC843]"
//   },
//   {
//     icon: <FaUsers />, 
//     title: "Inclusive Participation",
//     desc: "We center our work around those most affected, ensuring equity and voice.",
//     bg: "bg-[#00B9C7]"
//   },
// ];

// const ImpactPath = () => {
//   return (
//     <section className="bg-[#3B0073] py-16 px-6">
//       <div className="max-w-4xl mx-auto text-center mb-10">
//         <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Our Path to Impact</h2>
//         <p className="text-[#ffffff]/90 text-base">
//           We follow a values-led and community-centered framework that drives all our interventions and solutions. Our methodology rests on three foundational pillars:
//         </p>
//       </div>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {steps.map((step, index) => (
//           <div key={index} className="bg-white rounded-lg p-6 shadow text-center">
//             <div className="flex flex-col items-center">
//               <div className={`${step.bg} text-white rounded-full p-4 mb-4`}>
//                 <div className="text-xl">{step.icon}</div>
//               </div>
//               <h3 className="text-lg font-semibold text-[#000000] mb-1">{step.title}</h3>
//               <p className="text-sm text-[#000000]/80">{step.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImpactPath;


import React from "react";
import background2 from "../assets/images/background2.png";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaUsers
} from "react-icons/fa";

const steps = [
  {
    icon: <FaBookOpen />,
    title: "Accessible Knowledge",
    desc: "We believe that reliable, relevant, and open-access information drives informed action.",
    bg: "bg-[#3B0073]"
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Capacity Building",
    desc: "We invest in tools, systems, and training that empower people and institutions.",
    bg: "bg-[#FFC843]"
  },
  {
    icon: <FaUsers />,
    title: "Inclusive Participation",
    desc: "We center our work around those most affected, ensuring equity and voice.",
    bg: "bg-[#00B9C7]"
  }
];

const ImpactPath = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-6"
      style={{
        backgroundImage: `url(${background2})` // <- Replace with your image path
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#3B0073]/70 backdrop-blur-sm"></div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Our Path to Impact</h2>
          <p className="text-white/90 text-base">
            We follow a values-led and community-centered framework that drives all our interventions and solutions. Our methodology rests on three foundational pillars:
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 text-center"
            >
              <div className="flex flex-col items-center">
                <div className={`${step.bg} text-white rounded-full p-4 mb-4`}>
                  <div className="text-xl">{step.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-white/80">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactPath;
