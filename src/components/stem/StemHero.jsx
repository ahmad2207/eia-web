// import React from "react";
// import { FaShieldAlt, FaHandshake, FaChartLine, FaCode } from "react-icons/fa";

// const tiles = [
//   {
//     icon: <FaShieldAlt />,
//     title: "Data Protection & Digital Rights",
//     desc: "Advancing Nigeria's Data Protection Act through advocacy and digital citizenship programs.",
//   },
//   {
//     icon: <FaHandshake />,
//     title: "Islamic Finance & Ethical Innovation",
//     desc: "Developing ethical, tech-enabled pathways for children, youth, and communities.",
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Insurance, Risk & Economic Resilience",
//     desc: "Making insurance education accessible through STEM-aligned awareness programs.",
//   },
//   {
//     icon: <FaCode />,
//     title: "Youth Financial Literacy & Tech Skills",
//     desc: "Gamification and coding basics combined with financial literacy challenges.",
//   },
// ];

// const StemHero = () => (
//   <section className="py-30 px-6 text-center">
//     <h1 className="text-4xl md:text-3xl font-bold mb-6">
//       STEM for Empowerment
//     </h1>
//     <p className="max-w-2xl mx-auto  md:text mb-8">
//       At Elevate Insight, we connect Science, Technology, Engineering, and
//       Mathematics with financial inclusion, policy innovation, and grassroots
//       education to shape a resilient future.
//     </p>
//     <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//       {tiles.map((t, i) => (
//         <div
//           key={i}
//           className="bg-white rounded-lg shadow p-5 flex flex-col gap-3"
//         >
//           <div className="text-2xl text-center text-[#3B0073]">{t.icon}</div>
//           <h3 className="font-semibold text-[#3B0073]">{t.title}</h3>
//           <p className="text-sm text-[#3B0073]/80">{t.desc}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default StemHero;

import React from "react";
import { FaShieldAlt, FaHandshake, FaChartLine, FaCode } from "react-icons/fa";

const tiles = [
  {
    icon: <FaShieldAlt />,
    title: "Data Protection & Digital Rights",
    desc: "Advancing Nigeria's Data Protection Act through advocacy and digital citizenship programs.",
    color: "#3B0073", // purple
  },
  {
    icon: <FaHandshake />,
    title: "Islamic Finance & Ethical Innovation",
    desc: "Developing ethical, tech-enabled pathways for children, youth, and communities.",
    color: "#FFC843", // yellow
  },
  {
    icon: <FaChartLine />,
    title: "Insurance, Risk & Economic Resilience",
    desc: "Making insurance education accessible through STEM-aligned awareness programs.",
    color: "#00B9C7", // teal
  },
  {
    icon: <FaCode />,
    title: "Youth Financial Literacy & Tech Skills",
    desc: "Gamification and coding basics combined with financial literacy challenges.",
    color: "#8A2BE2", // violet (can be swapped if you prefer only brand colors)
  },
];

const StemHero = () => (
  <section className="py-30 px-6 text-center">
    <h1 className="text-4xl md:text-3xl font-bold mb-6 ">
      STEM for Empowerment
    </h1>
    <p className="max-w-2xl mx-auto text-base  mb-12">
      At Elevate Insight, we connect Science, Technology, Engineering, and
      Mathematics with financial inclusion, policy innovation, and grassroots
      education to shape a resilient future.
    </p>
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiles.map((t, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
        >
          <div className="text-4xl mb-4" style={{ color: t.color }}>
            {t.icon}
          </div>
          <h3 className="font-semibold mb-2">{t.title}</h3>
          <p className="text-sm">{t.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StemHero;
