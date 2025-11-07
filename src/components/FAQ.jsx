// src/components/FAQ.js
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    category: "About Elevate Insight",
    items: [
      {
        question: "What is Elevate Insight Partners Ltd?",
        answer:
          "Elevate Insight is a strategy, education, and advocacy firm committed to empowering systems, communities, and youth through inclusive finance, ethical innovation, and policy transformation."
      },
      {
        question: "Who can partner with Elevate Insight?",
        answer:
          "We work with development partners, foundations, educational institutions, government agencies, businesses, religious organizations, and community-based entities."
      }
    ]
  },
  {
    category: "Our Programs and Services",
    items: [
      {
        question: "What type of programs does Elevate Insight run?",
        answer:
          "Our programs span financial literacy, Islamic finance, data protection, CSR strategy, microinsurance, digital inclusion, and civic education."
      },
      {
        question: "Do you offer training or workshops?",
        answer:
          "Yes, we offer tailored training sessions, workshops, and digital courses with practical toolkits."
      },
      {
        question: "Are your programs available nationwide?",
        answer:
          "Yes. We operate from Abuja and Lagos with outreach across Nigeria and virtual access."
      }
    ]
  },
  {
    category: "Funders, Donors & Strategic Partners",
    items: [
      {
        question: "How can I fund or support Elevate Insight’s programs?",
        answer:
          "We welcome donors, sponsors, and grant makers to co-fund programs or impact hubs."
      },
      {
        question: "Do you provide impact reports and transparency documentation?",
        answer:
          "Yes. We provide detailed reports, budgets, photos, and updates for every funded program."
      },
      {
        question: "Can we co-design programs or sponsor specific themes?",
        answer:
          "Absolutely. We collaborate with funders to tailor programs to SDG-aligned priorities."
      }
    ]
  },
  {
    category: "Islamic Finance for Young Minds",
    items: [
      {
        question: "What is the Islamic Finance for Young Minds initiative?",
        answer:
          "It’s a values-based financial literacy program for children aged 7–15, teaching ethical finance and responsible money habits through Islamic principles."
      },
      {
        question: "Is this program only for Islamic schools?",
        answer:
          "No. The program is suitable for both faith-based and non-faith-based schools interested in values-based finance."
      },
      {
        question: "Can parents or schools register online?",
        answer:
          "Yes. We offer online registration, digital toolkits, and access to online classes."
      }
    ]
  },
  {
    category: "Data Protection & Regulatory Compliance",
    items: [
      {
        question: "What services do you offer for data protection?",
        answer:
          "We offer training, templates, consultancy, and awareness aligned with the Nigeria Data Protection Act 2023."
      },
      {
        question: "Do you offer NDPA compliance toolkits?",
        answer:
          "Yes. We provide starter kits, inventory templates, and audit checklists for SMEs and nonprofits."
      }
    ]
  },
  {
    category: "Microinsurance & Risk Advisory",
    items: [
      {
        question: "Is Elevate Insight a licensed microinsurance provider?",
        answer:
          "No. We are a strategy and advisory firm supporting licensed institutions with inclusive insurance models."
      },
      {
        question: "What services do you offer in the insurance and risk space?",
        answer:
          "We offer product co-creation, risk advisory, stakeholder consortia, compliance support, and training."
      },
      {
        question: "Can Elevate Insight help us develop a new microinsurance product or pilot?",
        answer:
          "Yes. We assist with design, needs assessment, community engagement, and pilot deployment."
      },
      {
        question: "Are your insurance services Shariah-compliant?",
        answer:
          "Yes. We work with both conventional and Islamic (Takaful) models."
      }
    ]
  },
  {
    category: "CSR & ESG Advisory",
    items: [
      {
        question: "How do you support companies with CSR?",
        answer:
          "We develop CSR strategies, design projects, and provide toolkits and tax incentive guidance."
      },
      {
        question: "Can we request CSR proposal templates or reports?",
        answer:
          "Yes. We offer editable templates, reporting guides, and sample formats."
      }
    ]
  },
  {
    category: "Engagement, Consulting & Speaking",
    items: [
      {
        question: "Is the founder or team available for speaking engagements?",
        answer:
          "Yes. We speak on Islamic finance, inclusion, CSR, risk, and data protection."
      },
      {
        question: "Can we book a strategy session or consultation?",
        answer:
          "Absolutely. Contact us for a discovery call or institutional briefing."
      }
    ]
  },
  {
    category: "Tools, Resources & Downloads",
    items: [
      {
        question: "Where can I access your toolkits and templates?",
        answer:
          "Our resource library offers free and premium tools, plus subscriptions for updates."
      },
      {
        question: "Do you offer toolkits for educators or facilitators?",
        answer:
          "Yes. Programs include guides, handouts, certificates, and visual aids."
      }
    ]
  },
  {
    category: "Get Involved",
    items: [
      {
        question: "How can I volunteer or collaborate with Elevate Insight?",
        answer:
          "We welcome volunteers and professionals to mentor, co-facilitate, or contribute skills."
      },
      {
        question: "Can I nominate a school or community for your programs?",
        answer:
          "Yes. We accept nominations and offer sponsorship options for grassroots groups."
      }
    ]
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="bg-[#Ffffff] py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#000000] text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-[#0000000]/80 text-center max-w-2xl mx-auto mb-12">
          Here are answers to some of the most common questions we receive about our work, partnerships, and approach.
        </p>

        {faqs.map((section, secIndex) => (
          <div key={secIndex} className="mb-10">
            <h3 className="text-xl font-semibold text-[#0000000] mb-4">
              {section.category}
            </h3>
            <div className="space-y-5">
              {section.items.map((faq, index) => {
                const id = `${secIndex}-${index}`;
                return (
                  <div
                    key={id}
                    className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(id)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left text-[#3B0073] font-semibold text-lg hover:bg-[#f0e8fa] transition duration-300"
                    >
                      <span>{faq.question}</span>
                      <span>
                        {activeIndex === id ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    <div
                      className={`px-6 pt-0 pb-5 text-[#3B0073]/80 text-base transition-all duration-300 ease-in-out ${
                        activeIndex === id ? "block" : "hidden"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
