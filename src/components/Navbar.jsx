import React, { useState, useEffect } from "react";
import logo from "../assets/hv-logo.png";
import {useScrollReveal} from "./useScrollReveal";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  useScrollReveal();

  // Handle manual clicks
  const handleNavClick = (id) => {
    // 1. Hide the navbar immediately
    setVisible(false);

    // 2. Scroll to the element
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll detection to bring navbar back
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // If user scrolls up OR scrolls significantly, show navbar
      // Otherwise, if scrolling down, hide it
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (currentScrollPos < 10) {
        setVisible(true); // Always show at the very top
      } else {
        setVisible(isScrollingUp);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  useScrollReveal();
  return (
    <nav
      className={`top-0 z-50 bg-[#000] text-white py-4 }`}
    >
      <div className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between px-6 md:px-12">
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Logo" className="h-14 w-auto active:scale-95 reveal" />
        </div>

        <ul className="flex flex-wrap justify-center items-center md:gap-10 mt-4 sm:mt-0 font-medium reveal">
          {/* We use the custom handleNavClick function for all links */}
          <li
            className="nav-item cursor-pointer hover:bg-white hover:text-black px-3 py-2 rounded-full transition-colors duration-200 active:scale-95"
            onClick={() => handleNavClick("Home")}
          >
            Home
          </li>
          <li
            className="nav-item cursor-pointer hover:bg-white hover:text-black px-3 py-2 rounded-full transition-colors duration-200 active:scale-95"
            onClick={() => handleNavClick("about")}
          >
            About
          </li>
          <li
            className="nav-item cursor-pointer hover:bg-white hover:text-black px-3 py-2 rounded-full transition-colors duration-200 active:scale-95"
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </li>
          <li
            className="nav-item cursor-pointer hover:bg-white hover:text-black px-3 py-2 rounded-full transition-colors duration-200 active:scale-95"
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </li>
          <li
            className="nav-item cursor-pointer hover:bg-white hover:text-black px-3 py-2 rounded-full transition-colors duration-200 active:scale-95"
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </li>
          <li
            className="nav-item cursor-pointer hover:bg-white hover:text-black px-3 py-2 rounded-full transition-colors duration-200 active:scale-95"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Adding a small CSS-in-JS style for the items to keep the code clean */}
      <style>{`
        .nav-item {
          @apply cursor-pointer hover:bg-white hover:text-black px-3 py-2 rounded-full transition-colors duration-200 active:scale-95;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
