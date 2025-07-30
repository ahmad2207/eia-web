// src/components/Testimonials.js
import React from "react";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";
import background3 from "../assets/images/background3.png";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "The IFYM program was well organized, and and session was very informative. And as parents being part of the program, I gained a lot from it.",
    name: "Mrs. Olowoniyi",
    title: "A parent,  Islamic finance for young minds (IFYM) program",
    image: testimonial1
  },
  {
    quote: "They truly understand how to bring people together for systemic change. Their expertise is valuable to every partner involved.",
    name: "Dr. Kabir Sule",
    title: "Senior Advisor, Inclusive Policy Institute",
    image: testimonial2
  },
  {
    quote: "We've collaborated on multiple programs and each time, their professionalism and insight have delivered outstanding results.",
    name: "Helen James",
    title: "CEO, Bright Futures Initiative",
    image: testimonial3
  }
];

const Testimonials = () => {
  return (
    <section className="relative bg-cover bg-center bg-[#FFC843]/80 py-16 px-6"
    style={{
            backgroundImage: `url(${background3})` // <- Replace with your image path
          }}>
            <div className="absolute inset-0 bg-[#FFC843]/50 backdrop-blur-sm"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10 ">
        <h2 className="text-3xl font-bold text-[#3B0073] mb-4">What Our Partners Say</h2>
        <p className="text-[#3B0073]/80 max-w-2xl mx-auto text-base mb-10">
          Hear from some of the organizations and individuals we’ve had the pleasure to collaborate with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F8F5FB] p-6 rounded-lg shadow text-left flex flex-col justify-between backdrop-blur-sm h-full">
              <FaQuoteLeft className="text-[#3B0073] text-2xl mb-4" />
              <p className="text-[#3B0073] text-base mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#3B0073] font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-[#3B0073]/70 text-sm italic">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
