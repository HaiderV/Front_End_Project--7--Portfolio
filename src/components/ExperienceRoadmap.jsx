import React from "react";

const ExperienceRoadmap = ({ year, title, company, description, isLeft }) => {
  return (
    <div
      className={`relative flex items-center justify-between w-full mb-16 md:mb-24 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
    >
      {/* 1. The Content Card */}
      <div className={`w-[85%] md:w-[42%] ml-10 md:ml-0 group`}>
        <div className="bg-white border-2 border-black p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300">
          <span className="text-[10px] md:text-xs font-black tracking-widest text-white bg-black px-3 py-1 rounded-full uppercase">
            {year}
          </span>

          <h3 className="text-xl md:text-2xl font-black text-black mt-4 uppercase tracking-tighter leading-none">
            {title}
          </h3>
          <p className="text-sm font-bold text-gray-400 mb-4 tracking-tight">
            {company}
          </p>

          <div className="h-[1px] w-full bg-gray-100 mb-4"></div>

          <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* 2. The Center Node (The "Junction") */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
        {/* Outer Ring */}
        <div className="w-8 h-8 md:w-12 md:h-12 bg-[#d7d7d7] border-4 border-black rounded-full flex items-center justify-center shadow-sm">
          {/* Inner Pulsing Core */}
          <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* 3. Empty spacer for desktop layout */}
      <div className="hidden md:block w-[42%]"></div>
    </div>
  );
};

export default ExperienceRoadmap;