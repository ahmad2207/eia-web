import React from "react";

// Import individual SDG icons
import sdg4 from "../../assets/images/sdg4.png";  // Quality Education
import sdg8 from "../../assets/images/sdg8.png";  // Decent Work & Economic Growth
import sdg9 from "../../assets/images/sdg9.png";  // Industry, Innovation & Infrastructure
import sdg11 from "../../assets/images/sdg11.png"; // Sustainable Cities & Communities
import sdg17 from "../../assets/images/sdg17.png"; // Partnerships for the Goals

// Right-hand general SDG image
import sdgImage from "../../assets/images/sdg.png";

const primary = [
  {
    title: "Quality Education",
    note: "Digital literacy and financial education programs",
    img: sdg4,
  },
  {
    title: "Decent Work & Economic Growth",
    note: "Financial inclusion initiatives",
    img: sdg8,
  },
  {
    title: "Industry, Innovation & Infrastructure",
    note: "Technology adoption programs",
    img: sdg9,
  },
];

const secondary = [
  {
    title: "Sustainable Cities & Communities",
    note: "Public Services",
    img: sdg11,
  },
  {
    title: "Partnerships for the Goals",
    note: "Collaborations",
    img: sdg17,
  },

];

const stats = [
  { value: "500+", label: "Youth Trained" },
  { value: "3", label: "National Frameworks Influenced" },
  { value: "15+", label: "Community Programs" },
];

const StemSDGs = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold  text-center">
          STEM & the Sustainable Development Goals
        </h2>
        <p className=" text-center max-w-3xl mx-auto mt-4">
          Our STEM approach directly contributes to achieving the UN Sustainable
          Development Goals, with primary focus on education, economic growth,
          and innovation.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 mt-10 items-start">
          {/* Left - Primary & Secondary SDGs */}
          <div>
            <h3 className="font-semibold text-lg  mb-4">
              Primary SDGs
            </h3>
            <ul className="space-y-4 mb-6">
              {primary.map((g, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 bg-[#F8F5FB] rounded-md p-4 border border-gray-200"
                >
                  <img
                    src={g.img}
                    alt={g.title}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium ">{g.title}</p>
                    <p className=" text-sm">{g.note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg  mb-4">
              Secondary SDGs
            </h3>
            <ul className="space-y-4">
              {secondary.map((g, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 bg-[#F8F5FB] rounded-md p-4 border border-gray-200"
                >
                  <img
                    src={g.img}
                    alt={g.title}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium ">{g.title}</p>
                    <p className=" text-sm">{g.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Large Image */}
          <div className="flex justify-center">
            <img
              src={sdgImage}
              alt="STEM and SDGs"
              className="rounded-lg shadow-lg max-h-[450px] object-contain"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="py-12 px-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold ">
                  {s.value}
                </div>
                <div className=" mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemSDGs;
