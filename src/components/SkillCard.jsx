import React from "react";
import { useScrollReveal } from "./useScrollReveal";

// You would pass props like this: <SkillCard logo={htmlLogo} name="HTML5" />
function SkillCard({ logo, name }) {
  useScrollReveal();
  return (
    // 1. Container: Defined size, border, rounded, overflow-hidden
    <div className="group relative w-full max-w-[160px] h-[200px] bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden cursor-pointer">
      {/* 2. Hover Background Highlight (Subtle Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* 3. Image Container (The Focus) */}
      <div className="relative z-10 w-full h-24 flex items-center justify-center p-2 reveal">
        <img
          src={logo}
          alt={`${name} logo`}
          // 4. Grayscale by default, color on hover. Responsive scaling.
          className="h-full w-auto object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-out"
        />
      </div>

      {/* 5. Skill Name (Below the image) */}
      <div className="relative z-10 w-full text-center mt-4">
        {/* Subtle accent line that appears on hover */}
        <div className="w-0 group-hover:w-8 h-1 bg-black mx-auto mb-2 rounded-full transition-all duration-300"></div>

        <h3 className="text-xl font-extrabold text-black tracking-tighter leading-none opacity-80 group-hover:opacity-100 transition-opacity">
          {name}
        </h3>
      </div>
    </div>
  );
}

export default SkillCard;