// import React from "react";

// const action = [
//   {
//     title: "Science",
//     body:
//       "Evidence-based policy research, compliance analysis, and impact evaluation.",
//   },
//   {
//     title: "Technology",
//     body:
//       "Digital literacy programs, fintech adoption, InsurTech demos, and online compliance toolkits.",
//   },
//   {
//     title: "Engineering",
//     body:
//       "Systemic program design, community frameworks, and change management models.",
//   },
//   {
//     title: "Mathematics",
//     body:
//       "Risk analysis, financial modeling, actuarial awareness, and data forecasting.",
//   },
// ];

// const StemInAction = () => {
//   return (
//     <section className="bg-[#F8F5FB] py-16 px-6" id="stem-action">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-[#3B0073] text-center">STEM in Action</h2>
//         <p className="text-[#3B0073]/80 max-w-3xl mx-auto text-center mt-4">
//           We apply STEM principles to create practical, measurable, and inclusive
//           solutions for financial literacy, insurance protection, and community
//           empowerment.
//         </p>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//           {action.map((a, idx) => (
//             <div key={idx} className="bg-white rounded-lg shadow p-6">
//               <h3 className="text-lg font-semibold text-[#3B0073] mb-2">{a.title}</h3>
//               <p className="text-[#3B0073]/80 text-sm">{a.body}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StemInAction;

import React from "react";
import { FaFlask, FaLaptopCode, FaCogs, FaCalculator } from "react-icons/fa";

const action = [
  {
    icon: <FaFlask />,
    color: "#3B0073", // Purple (brand)
    title: "Science",
    body:
      "Evidence-based policy research, compliance analysis, and impact evaluation.",
  },
  {
    icon: <FaLaptopCode />,
    color: "#FFC843", // Yellow (brand)
    title: "Technology",
    body:
      "Digital literacy programs, fintech adoption, InsurTech demos, and online compliance toolkits.",
  },
  {
    icon: <FaCogs />,
    color: "#00B9C7", // Teal (brand)
    title: "Engineering",
    body:
      "Systemic program design, community frameworks, and change management models.",
  },
  {
    icon: <FaCalculator />,
    color: "#8A2BE2", // Violet (secondary highlight)
    title: "Mathematics",
    body:
      "Risk analysis, financial modeling, actuarial awareness, and data forecasting.",
  },
];

const StemInAction = () => {
  return (
    <section className="bg-[#F8F5FB] py-16 px-6" id="stem-action">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold  text-center">
          STEM in Action
        </h2>
        <p className=" max-w-3xl mx-auto text-center mt-4">
          We apply STEM principles to create practical, measurable, and inclusive
          solutions for financial literacy, insurance protection, and community
          empowerment.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {action.map((a, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4" style={{ color: a.color }}>
                {a.icon}
              </div>
              <h3 className="text-lg font-semibold  mb-2">
                {a.title}
              </h3>
              <p className=" text-sm">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StemInAction;
