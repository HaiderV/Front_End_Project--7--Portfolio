import React, { use } from "react";
import { useScrollReveal } from "./useScrollReveal";

const Heading = ({ heading, backText }) => {
  useScrollReveal();
  return (
    <div className="relative flex flex-col items-center justify-center py-8 sm:py-10 overflow-hidden reveal">
      {/* Background Text */}
      <span className="absolute left-1/2 -translate-x-1/2 text-[7vw] sm:text-[5vw] md:text-[4vw] font-extrabold text-black opacity-[0.02] select-none whitespace-nowrap">
        {backText}
      </span>

      {/* Main Heading */}
      <h1 className="relative text-3xl sm:text-4xl md:text-6xl font-black text-black text-center">
        {heading}
        <span className="text-[#636363] opacity-50 ml-1">.</span>
      </h1>

      {/* Underline */}
      <div className="mt-3 sm:mt-4 h-1 w-10 sm:w-12 bg-black rounded-full"></div>
    </div>
  );
};

export default Heading;