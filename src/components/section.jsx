import React from "react";

function Section() {
  return (
    <div className="flex items-center justify-center gap-4 mb-12 group pt-8 pb-8">
      <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-black rounded-full opacity-20 group-hover:opacity-100 transition-opacity"></div>

      <h1 className="text-2xl font-mono font-bold tracking-widest text-black flex gap-2">
        <span className="animate-pulse">/</span>
        <span className="animate-pulse [animation-delay:200ms]">/</span>
        <span className="animate-pulse [animation-delay:400ms]">/</span>
      </h1>

      <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-black rounded-full opacity-20 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export default Section;
