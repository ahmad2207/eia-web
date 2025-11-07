// // src/components/Contact.js
// import React from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaLinkedinIn,
//   FaInstagram
// } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section id="contact" className="bg-[#3B0073] py-20 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
//         <div>
//           <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//           <ul className="space-y-4 text-white/90">
//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-[#FFC843]" />
//               <a href="mailto:elevateinsightpartnersltd@gmail.com" className="hover:text-[#FFC843] transition">
//                 elevateinsightpartnersltd@gmail.com
//               </a>
//             </li>
//             <li className="flex items-center gap-3">
//               <FaPhoneAlt className="text-[#FFC843]" />
//               <a href="tel:+2348034512932" className="hover:text-[#FFC843] transition">
//                 +2348034512932
//               </a>
//             </li>
//             <li className="flex items-center gap-3">
//               <FaLinkedinIn className="text-[#FFC843]" />
//               <a
//                 href="https://www.linkedin.com/company/elevate-insight-partners"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-[#FFC843] transition"
//               >
//                 Elevate Insight Partners
//               </a>
//             </li>
//             <li className="flex items-center gap-3">
//               <FaInstagram className="text-[#FFC843]" />
//               <a
//                 href="https://www.instagram.com/elevate_insight_partners"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-[#FFC843] transition"
//               >
//                 @elevate_insight_partners
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="flex flex-col justify-center">
//           <h3 className="text-xl font-semibold mb-4">Newsletter Signup</h3>
//           <form className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="w-full p-4 rounded-md bg-white text-[#3B0073] placeholder:text-[#3B0073]/70 focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-[#FFC843] hover:bg-[#e6b93b] text-[#3B0073] font-semibold py-3 px-6 rounded-md transition duration-300"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_j2x78pv", // ✅ Your EmailJS service ID
        "template_7mcil1q", // ✅ Your EmailJS template ID
        form.current,
        "IimAx7hs17qnyAdR2" // ✅ Your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Thank you for subscribing!");
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Something went wrong. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#3B0073] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <ul className="space-y-4 text-white/90">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#FFC843]" />
              <a
                href="mailto:elevateinsightpartnersltd@gmail.com"
                className="hover:text-[#FFC843] transition"
              >
                elevateinsightpartnersltd@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FFC843]" />
              <a
                href="tel:+2348034512932"
                className="hover:text-[#FFC843] transition"
              >
                +2348034512932
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedinIn className="text-[#FFC843]" />
              <a
                href="https://www.linkedin.com/company/elevate-insight-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFC843] transition"
              >
                Elevate Insight Partners
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-[#FFC843]" />
              <a
                href="https://www.instagram.com/elevate_insight_partners"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFC843] transition"
              >
                @elevate_insight_partners
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Form */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4">Newsletter Signup</h3>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              required
              className="w-full p-4 rounded-md bg-white text-[#3B0073] placeholder:text-[#3B0073]/70 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FFC843] hover:bg-[#e6b93b] text-[#3B0073] font-semibold py-3 px-6 rounded-md transition duration-300 disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Subscribe"}
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-sm text-white/90 font-medium">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
