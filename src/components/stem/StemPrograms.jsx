// import React from "react";
// import prog1 from "../../assets/images/background2.png"; // dummy images — replace
// import prog2 from "../../assets/images/background1.png";
// import prog3 from "../../assets/images/prog2.jpg";
// import prog4 from "../../assets/images/prog3.jpg";
// import prog5 from "../../assets/images/background3.png";

// const programs = [
//   {
//     img: prog1,
//     title: "STEM + Financial Literacy",
//     desc: "Youth-focused programs using gamification, coding basics, and financial literacy challenges. We transform complex financial concepts into engaging, interactive learning experiences that prepare young minds for the digital economy.",
//   },
//   {
//     img: prog2,
//     title: "NDPA 2023 DataSTEM + Data Protection Rights Lab",
//     desc: "Builds compliance capacity for data protection, helping organizations navigate Nigeria's Data Protection Act requirements.",
//   },
//   {
//     img: prog3,
//     title: "STEM + Insurance Innovation",
//     desc: "Awareness, education, and digital adoption of insurance, including microinsurance and Takaful. We leverage technology to make insurance accessible and understandable for all communities.",
//   },
//   {
//     img: prog4,
//     title: "STEM + Policy & Research",
//     desc: "Our IPERI Change Framework connects science-driven analysis to policy and civic engagement. We bridge the gap between research, policy development, and community implementation.",
//   },
//   {
//     img: prog5,
//     title: "STEM + Islamic Finance",
//     desc: "Developing ethical, tech-enabled pathways for children, youth, and communities. We simplify Islamic finance principles through innovative educational tools and technology platforms.",
//   },
// ];

// const StemPrograms = () => {
//   return (
//     <section id="stem-programs" className="bg-white py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-[#3B0073]">stem in Action</h2>
//         <p className="text-[#3B0073]/80 max-w-3xl mx-auto text-center mt-4">
//           Elevate Insight Partners aligns global STEM priorities with Africa's
//           most pressing needs — financial literacy, inclusive insurance, data
//           protection, and ethical innovation. By bridging STEM education with
//           grassroots empowerment, we nurture skills, policies, and systems that
//           prepare citizens and institutions for the future.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
//         {programs.map((p, i) => (
//           <article
//             key={i}
//             className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
//           >
//             <img
//               src={p.img}
//               alt={p.title}
//               className="h-44 w-full object-cover"
//             />
//             <div className="p-6 flex-1 flex flex-col">
//               <h3 className="text-lg font-semibold text-[#3B0073]">
//                 {p.title}
//               </h3>
//               <p className="text-[#3B0073]/80 text-sm mt-2 flex-1">{p.desc}</p>
//               <a
//                 href="#"
//                 className="mt-4 inline-block text-[#00B9C7] font-semibold hover:underline"
//               >
//                 Learn More
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StemPrograms;

import React from "react";
import prog1 from "../../assets/images/banner.png"; 
import prog2 from "../../assets/images/background1.png";
import prog3 from "../../assets/images/prog2.jpg";
import prog4 from "../../assets/images/prog3.jpg";
import prog5 from "../../assets/images/background3.png";

const programs = [
  {
    img: prog1,
    title: "STEM + Financial Literacy",
    desc: "Youth-focused programs using gamification, coding basics, and financial literacy challenges. We transform complex financial concepts into engaging, interactive learning experiences that prepare young minds for the digital economy.",
  },
  {
    img: prog2,
    title: "NDPA 2023 DataSTEM + Data Protection Rights Lab",
    desc: "Builds compliance capacity for data protection, helping organizations navigate Nigeria's Data Protection Act requirements.",
  },
  {
    img: prog3,
    title: "STEM + Insurance Innovation",
    desc: "Awareness, education, and digital adoption of insurance, including microinsurance and Takaful. We leverage technology to make insurance accessible and understandable for all communities.",
  },
  {
    img: prog4,
    title: "STEM + Policy & Research",
    desc: "Our IPERI Change Framework connects science-driven analysis to policy and civic engagement. We bridge the gap between research, policy development, and community implementation.",
  },
  {
    img: prog5,
    title: "STEM + Islamic Finance",
    desc: "Developing ethical, tech-enabled pathways for children, youth, and communities. We simplify Islamic finance principles through innovative educational tools and technology platforms.",
  },
];

const StemPrograms = () => {
  return (
    <section id="stem-programs" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold ">STEM Programs</h2>
        <p className=" max-w-3xl mx-auto text-center mt-4">
          Elevate Insight Partners aligns global STEM priorities with Africa's
          most pressing needs — financial literacy, inclusive insurance, data
          protection, and ethical innovation. By bridging STEM education with
          grassroots empowerment, we nurture skills, policies, and systems that
          prepare citizens and institutions for the future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
        {programs.map((p, i) => (
          <article
            key={i}
            className={`bg-white rounded-lg shadow overflow-hidden flex flex-col ${
              i >= 3 ? "md:col-span-2 lg:col-span-1 lg:mx-auto" : ""
            }`}
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-44 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col text-center">
              <h3 className="text-lg font-semibold ">
                {p.title}
              </h3>
              <p className="text-sm mt-2 flex-1">{p.desc}</p>
              <a
                href="#"
                className="mt-4 inline-block px-4 py-2 border text-center border-[#3B0073] text-[#3B0073] font-semibold rounded-md hover:bg-[#3B0073] hover:text-white transition"
              >
                Learn More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StemPrograms;
