// src/components/Services.js
import React from "react";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaGavel,
  FaMoneyCheckAlt,
  FaChalkboardTeacher,
  FaChartLine,
  FaBullhorn,
  FaUsers,
  FaHeartbeat
} from "react-icons/fa";

const services = [
  {
    icon: <FaHeartbeat />,
    title: "Insurance Strategy & Risk Awareness",
    desc: "Promoting insurance access and risk readiness.",
    bg: "bg-[#00B9C7]"
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Financial Empowerment & Inclusion",
    desc: "Expanding access to finance and economic tools for underserved groups.",
    bg: "bg-[#3B0073]"
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Capacity Building & Institutional Strengthening",
    desc: "Training individuals and improving systems for better performance.",
    bg: "bg-[#FFC843]"
  },
  {
    icon: <FaShieldAlt />, 
    title: "Data Protection & Digital Rights Compliance",
    desc: "Helping organizations meet digital privacy laws and protect user rights.",
    bg: "bg-[#00B9C7]"
  },
  {
    icon: <FaBalanceScale />,
    title: "CSR Strategy & ESG Evaluation",
    desc: "Designing responsible business strategies and evaluating social impact.",
    bg: "bg-[#3B0073]"
  },
  {
    icon: <FaBullhorn />,
    title: "Strategic Communication & Impact Storytelling",
    desc: "Crafting compelling narratives to highlight success and drive engagement.",
    bg: "bg-[#FFC843]"
  },
  {
    icon: <FaUsers />,
    title: "Campaign Design & Stakeholder Mobilization",
    desc: "Creating campaigns that inspire action and unite communities.",
    bg: "bg-[#00B9C7]"
  },
  
  {
    icon: <FaChartLine />,
    title: "Monitoring, Evaluation & Learning",
    desc: "Tracking progress and learning from results to scale impact.",
    bg: "bg-[#3B0073]"
  },
  {
    icon: <FaGavel />,
    title: "Policy Engagement & Regulatory Advocacy",
    desc: "Influencing policies and navigating regulations for social change.",
    bg: "bg-[#FFC843]"
  },
  
  
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-center mb-4">What We Do</h2>
      <p className="text-[#000000]/90  ">
          We work across eight interconnected service tracks that fuel innovation, inclusion, and development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow text-center"
          >
            <div className="flex flex-col items-center">
              <div className={`${service.bg} text-white rounded-full p-4 mb-4`}>
                <div className="text-xl">{service.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-[#000000] mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-[#000000]/80">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
