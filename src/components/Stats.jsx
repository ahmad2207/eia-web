// import React from "react";

// const stats = [
//   { number: "10,000+", label: "Individuals to be empowered by 2035" },
//   { number: "10,000+", label: "SMEs & nonprofits supported" },
//   { number: "500+", label: "Sponsored programs" },
//   { number: "9", label: "Strategic focus areas" },
// ];

// const Stats = () => {
//   return (
//     <section className="bg-[#3B0073] text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {stats.map((stat, index) => (
//           <div key={index}>
//             <h3 className="text-[30px] font-bold">{stat.number}</h3>
//             <p className="mt-2 text-sm font-medium ">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Stats;

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 10000, suffix: "+", label: "Individuals to be empowered by 2035" },
  { number: 1000, suffix: "+", label: "SMEs & nonprofits supported" },
  { number: 500, suffix: "+", label: "Sponsored programs" },
  { number: 9, label: "Strategic focus areas" },
];

const fadeIn = (index) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const Stats = () => {
  return (
    <section className="bg-gradient-to-br from-[#3B0073] to-[#5E00A8] text-white py-14 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Insight-Led. Strategy-Focused. Impact-Driven.</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn(index)}
          >
            <h3 className="text-2xl font-extrabold tracking-tight">
              <CountUp end={stat.number} duration={2} suffix={stat.suffix || ""} />
            </h3>
            <p className="mt-3 text-base font-medium opacity-90">{stat.label}</p>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
