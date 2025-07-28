import React from "react";
import aboutImg from "../assets/images/about.png"; // Replace with actual image path

const AboutSection = () => {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#000000] mb-4">About Us</h2>
          <p className="text-[#000000]/80 max-w-2xl mx-auto text-base">
            Elevate Insight Partners is committed to shaping inclusive and
            sustainable solutions through data, engagement, and policy. Here's
            who we are, and why we do what we do.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-10">
            {/* Who We Are */}
            <div className="relative pl-6 border-l-4 border-[#3B0073]">
              <h3 className="text-3xl font-bold text-[#3B0073] mb-3">
                Who We Are
              </h3>
              <p className="text-[#000000]/80 text-base leading-relaxed">
                Elevate Insight is an inclusive, impact-driven business
                consulting and services organization based in Nigeria. We help
                individuals, small businesses, institutions, and communities
                thrive by bridging the gap between policy, practice, and people.
                We combine professional excellence with grassroots inclusion to
                co-create scalable solutions that advance responsible
                governance, financial access, and data-driven innovation.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h4 className="text-xl font-semibold text-[#FFC843] mb-2">
                Our Mission
              </h4>
              <p className="text-[#000000]/80 text-base leading-relaxed border-l-2 border-[#FFC843] pl-4">
                To be Africa's leading catalyst for ethical innovation, civic
                impact, and data-driven development, expanding access to
                opportunity for communities and institutions.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h4 className="text-xl font-semibold text-[#00B9C7] mb-2">
                Our Vision
              </h4>
              <p className="text-[#000000]/80 text-base leading-relaxed border-l-2 border-[#00B9C7] pl-4">
                To create inclusive pathways for sustainable development by
                simplifying complex policies, building capacity, and equipping
                communities and institutions with accessible tools, insights,
                and training.
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src={aboutImg}
              alt="About Elevate Insight"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
