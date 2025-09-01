import React from "react";

const items = [
  "Joint research initiatives",
  "Program co-development",
  "Policy advocacy campaigns",
  "Training and capacity building",
  "Technology platform development",
  "Community outreach programs",
];

const StemPartnerCategories = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold  text-center">Partnership Opportunities</h2>
        <p className=" text-center max-w-3xl mx-auto mt-4">
          Collaborate with us to amplify impact through STEM-enabled solutions and evidence-based approaches.
        </p>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-decimal list-inside">
          {items.map((it, idx) => (
            <li key={idx} className="bg-[#F8F5FB] rounded-lg p-5 shadow">
              <span className="font-semibold ">{it}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default StemPartnerCategories;