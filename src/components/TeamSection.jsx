import React from "react";
import testimonial1 from "../assets/images/team-m.jpg";
import testimonial2 from "../assets/images/team-5.jpg";
import testimonial3 from "../assets/images/team-4.jpg";

const teamMembers = [
  {
    name: "Mutiat Abiola Yusuff-Akinlabi",
    title: "Founder/ Principal Consultant",
    image: testimonial1,
    description:
      "Mrs Mutiait Leads the firm’s strategy and operations while providing expert advice and solutions to clients.",
  },
  {
    name: "Khalid Disu",
    title: "Digital Service Associate",
    image: testimonial2,
    description:
      "Khalid supports digital operations by managing online platforms, assisting clients, and ensuring smooth digital service delivery.",
  },
  {
    name: "Nana Firdaus Idris",
    title: "Community Engagement",
    image: testimonial3,
    description:
      "Nana connects with communities, facilitating grassroots collaboration and participatory approaches.",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#F8F5FB] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-[#3B0073] mb-4">
            Meet the Minds Behind the Mission
          </h2>
          <p className="text-[#3B0073]/80 max-w-2xl mx-auto text-lg">
            A dynamic team of visionaries and change-makers dedicated to reimagining systems and empowering communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-[#FFC843] transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h4 className="text-2xl font-bold text-[#3B0073] mb-1">
                {member.name}
              </h4>
              <p className="text-[#FFC843] font-semibold mb-3 uppercase text-sm tracking-wide">
                {member.title}
              </p>
              <p className="text-[#3B0073]/80 text-base leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
