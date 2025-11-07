import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
                    setStatus("✅ Message sent successfully!");
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
        <section className="py-28 px-6 bg-[#F8F5FB] min-h-screen flex items-center">
            <div className="max-w-3xl mx-auto w-full">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-[#3B0073] mb-4">
                        Contact Us
                    </h2>
                    <p className="text-[#3B0073]/80 max-w-2xl mx-auto">
                        We’d love to hear from you! Whether you have questions, partnership
                        ideas, or feedback — reach out and we’ll get back to you as soon as possible.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 text-[#3B0073] mb-10">
                    <div className="flex items-center gap-2 justify-center">
                        <FaEnvelope className="text-[#00B9C7]" />
                        <a
                            href="mailto:elevateinsightpartnersltd@gmail.com"
                            className="hover:underline"
                        >
                            elevateinsightpartnersltd@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                        <FaPhoneAlt className="text-[#FFC843]" />
                        <span>+234 803 451 2932</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                        <FaMapMarkerAlt className="text-[#3B0073]" />
                        <span>Abuja, Nigeria</span>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white p-8 rounded-lg shadow-md space-y-5"
                >
                    <div className="grid sm:grid-cols-2 gap-5">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B9C7]"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B9C7]"
                        />
                    </div>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B9C7]"
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B9C7]"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#3B0073] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#4d00a3] transition disabled:opacity-60"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p className="text-sm mt-3 text-[#3B0073]/80 font-medium">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
