// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import eialogo from "../assets/images/eia-logo.png";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const isHome = location.pathname === "/";

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled || !isHome ? "bg-white shadow-md" : "bg-transparent"
//       } py-6 px-6 flex justify-between items-center`}
//     >
      
//         {/* Logo */}
//         <Link
//           to="hero"
//           smooth={true}
//           duration={500}
//           className="flex items-center space-x-2 cursor-pointer"
//         >
//           <img src={eialogo} alt="EIA Logo" className="h-10" />
//         </Link>

//       <ul
//         className={`hidden md:flex space-x-8 text-sm font-semibold ${
//           scrolled || !isHome ? "text-brandBlue" : "text-white"
//         }`}
//       >
//         <li>
//           <Link to="/" className="hover:text-brandGreen transition-colors duration-200">
//             Home
//           </Link>
//         </li>
//         <li>
//           <button
//             onClick={() => scrollToSection("services")}
//             className="hover:text-brandGreen transition-colors duration-200"
//           >
//             Our Services
//           </button>
//         </li>
//         <li>
//           <Link to="/about" className="hover:text-brandGreen transition-colors duration-200">
//             About Us
//           </Link>
//         </li>
//         <li>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="hover:text-brandGreen transition-colors duration-200"
//           >
//             Contact
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
// src/components/Navbar.js
// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import eialogo from "../assets/images/eia-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth" });
  //     setMenuOpen(false);
  //   }
  // };

  const isHome = location.pathname === "/";
  const navTextColor = scrolled || !isHome ? "text-brandBlue" : "text-white";
  const navLinkClass = "hover:text-brandGreen transition-colors duration-200";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? "bg-white shadow-md" : "bg-transparent"
      } py-4 px-6 md:px-[80px]`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img src={eialogo} alt="EIA Logo" className="h-[60px]" />
        </Link>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex space-x-8 text-sm font-semibold ${navTextColor}`}
        >
          <li>
            <Link
              to="/"
              className={`${navLinkClass} ${
                location.pathname === "/" ? "border-b-2 border-brandGreen pb-1" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/stem"
              className={`${navLinkClass} ${
                location.pathname === "/stem"
                  ? "border-b-2 border-brandGreen pb-1"
                  : ""
              }`}
            >
              stem
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${navLinkClass} ${
                location.pathname === "/about"
                  ? "border-b-2 border-brandGreen pb-1"
                  : ""
              }`}
            >
              About Us
            </Link>
          </li>
          {/* <li>
            <button onClick={() => scrollToSection("contact")} className={navLinkClass}>
              Contact
            </button>
          </li> */}
          <li>
            <Link
              to="/faq"
              className={`${navLinkClass} ${
                location.pathname === "/faq"
                  ? "border-b-2 border-brandGreen pb-1"
                  : ""
              }`}
            >
              FAQ
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-brandBlue"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Items - stacked vertically */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-start gap-4 mt-4 px-6 text-sm font-semibold ${navTextColor}`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>
            Home
          </Link>
          <Link to="/stem" onClick={() => setMenuOpen(false)} className={navLinkClass}>
            stem
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>
            About Us
          </Link>
          {/* <button onClick={() => scrollToSection("contact")} className={navLinkClass}>
            Contact
          </button> */}
          <Link to="/faq" onClick={() => setMenuOpen(false)} className={navLinkClass}>
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



