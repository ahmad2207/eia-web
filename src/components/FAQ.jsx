// src/components/FAQ.js
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What sectors do you work in?",
    answer: "We work across a broad range of sectors including health, education, governance, social protection, and more, with the aim of making systems more inclusive and impactful."
  },
  {
    question: "How do you ensure community participation?",
    answer: "We prioritize co-creation by actively involving local communities and stakeholders throughout the process to ensure solutions are grounded, relevant, and sustainable."
  },
  {
    question: "Do you work with international partners?",
    answer: "Yes, we work with both local and international partners, including development institutions, government agencies, and civil society organizations across the globe."
  },
  {
    question: "Can individuals engage with your programs?",
    answer: "Absolutely. Individuals can participate in our capacity-building workshops, policy labs, and contribute to research and learning initiatives."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F5FB] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#3B0073] text-center mb-6">Frequently Asked Questions</h2>
        <p className="text-[#3B0073]/80 text-center max-w-2xl mx-auto mb-12">
          Here are answers to some of the most common questions we receive about our work, partnerships, and approach.
        </p>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[#3B0073] font-semibold text-lg hover:bg-[#f0e8fa] transition duration-300"
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </button>
              <div
                className={`px-6 pt-0 pb-5 text-[#3B0073]/80 text-base transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
