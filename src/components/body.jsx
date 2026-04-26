import { useState } from "react";
import * as React from "react";
import About from "./About";
import me from "../assets/me.png";

function Main() {
  return (
    <section
      className="relative z-20 flex-1 overflow-y-auto h-screen"
      id="home"
    >
      <div className="Landing flex justify-center gap-0 h-screen ">
        <div className="sideWhite w-full h-full flex-[1] flex items-center justify-center p-8 md:p-16 ">
          <div className="napo flex flex-col items-start max-w-2xl">
            <h2 className="text-lg md:text-2xl font-medium tracking-[0.2em] uppercase mb-2 text-gray-500 animate-entrance [animation-delay:300ms] opacity-0 fill-mode-forwards">
              Hi, I am
            </h2>

            <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-6 text-black leading-none drop-shadow-sm animate-haider-entrance opacity-0">
              Haider
              <span className="text-[#636363] md:inline md:ml-3 text-4xl md:text-6xl align-baseline animate-dot">
                .
              </span>
            </h1>
            <div className="relative pl-6 border-l-4 border-black py-2 animate-slideLeft animate-borderGlow">
              <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent animate-fadeUp delay-200">
                Frontend Developer
              </h3>

              <h3 className="text-lg md:text-2xl font-semibold text-gray-400 mt-1 animate-fadeUp delay-400">
                & Data Science Enthusiast
              </h3>
            </div>

            <button
              className="mt-10 px-8 py-3 bg-black text-white rounded-full font-bold shadow-xl transition-all hover:scale-105 active:scale-95 hover:bg-gray-800 animate-button-landing [animation-delay:600ms]"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Projects
            </button>
          </div>
        </div>

        <div className="sideBlack bg-black flex-[1] flex items-center justify-center h-full hidden [@media(min-width:1500px)]:flex overflow-hidden">
  <img 
    src={me} 
    alt="me" 
    className="h-auto w-[85%] object-contain animate-photo-simple [animation-delay:400ms]" 
  />
</div>
      </div>

      <div className="About">
        <About />
      </div>
    </section>
  );
}

export default Main;
