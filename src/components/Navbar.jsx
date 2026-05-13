import React, { useState, useEffect } from "react";
import logo from "../assets/hv-logo.png";
import { useScrollReveal } from "./useScrollReveal";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollReveal();

  // Handle clicks
  const handleNavClick = (id) => {
    setMenuOpen(false);

    setVisible(false);

    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(isScrollingUp);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    "Home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <nav
      className={`
        sticky top-0 z-50 bg-[#000] text-white py-4
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="w-full mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto active:scale-95 reveal"
          />
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex flex-wrap justify-center items-center md:gap-10 mt-4 sm:mt-0 font-medium reveal">
          {navItems.map((item) => (
            <li
              key={item}
              className="nav-item"
              onClick={() => handleNavClick(item)}
            >
              {item === "Home"
                ? "Home"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="md:hidden relative z-[60] w-11 h-11 flex items-center justify-center overflow-visible"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="relative w-7 h-7 flex items-center justify-center">
            {/* Top */}
            <span
              className={`
    absolute
    w-6 h-[2px]
    bg-white rounded-full
    transition-all duration-300 ease-in-out
    ${menuOpen ? "rotate-45" : "-translate-y-2"}
  `}
            />

            {/* Middle */}
            <span
              className={`
    absolute
    w-6 h-[2px]
    bg-white rounded-full
    transition-all duration-300 ease-in-out
    ${menuOpen ? "opacity-0" : "opacity-100"}
  `}
            />

            {/* Bottom */}
            <span
              className={`
    absolute
    w-6 h-[2px]
    bg-white rounded-full
    transition-all duration-300 ease-in-out
    ${menuOpen ? "-rotate-45" : "translate-y-2"}
  `}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          sm:hidden overflow-hidden
          transition-all duration-500 ease-in-out
          ${menuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-5 font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="nav-item text-lg"
              onClick={() => handleNavClick(item)}
            >
              {item === "Home"
                ? "Home"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      {/* Styles */}
      <style>{`
        .nav-item {
          cursor: pointer;
          padding: 0.5rem 0.9rem;
          border-radius: 9999px;
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          background: white;
          color: black;
        }

        .nav-item:active {
          transform: scale(0.95);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
