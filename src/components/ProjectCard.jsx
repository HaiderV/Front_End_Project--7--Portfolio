import React, { use } from "react";
import { useScrollReveal } from "./useScrollReveal";

const ProjectCard = ({ type, title, description, link }) => {
  useScrollReveal();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full max-w-[500px] h-full reveal"
    >
      {/* Background Shadow Layer (The "Brutalist" Offset) */}
      <div className="absolute inset-0 bg-black rounded-2xl translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

      {/* Main Content Layer */}
      <div className="relative h-full bg-white border-2 border-black rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
        <div>
          {/* Project Type Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-gray-100 text-black rounded">
              {type}
            </span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-black text-black leading-tight mb-4 group-hover:text-gray-700 transition-colors">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            {description}
          </p>
        </div>

        {/* Footer: Link Action */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-black">
            View on GitHub
          </span>
          <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;