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
      <div className="Landing flex justify-center gap-0 h-screen">
        <div className="sideWhite w-full h-full flex-[1] flex items-center justify-center p-8 md:p-16">
          <div className="napo flex flex-col items-start max-w-2xl w-full">
            {/* Greeting tag */}
            <div className="inline-block mb-3 px-4 py-1.5 border-2 border-black rounded-full animate-[slideDown_0.6s_ease-out_0.2s_both]">
              <span className="text-sm font-bold tracking-wider uppercase">
                Hi, I am
              </span>
            </div>

            {/* Name with interactive letters */}
            <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-6 leading-none animate-[slideRight_0.8s_ease-out_0.4s_both]">
              <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">H</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">a</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">i</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">d</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">e</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">r</span>
              <span className="text-4xl md:text-6xl ml-2 animate-[pulse_2s_ease-in-out_infinite]">.</span>
            </h1>

            {/* Role cards */}
            <div className="w-full space-y-3 mb-8 animate-[slideLeft_0.8s_ease-out_0.6s_both]">
              <div className="group bg-black text-white px-5 py-3 rounded-xl transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-3xl font-bold">
                    Frontend Developer
                  </h3>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="group bg-white border-2 border-black px-5 py-3 rounded-xl transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:bg-black hover:text-white cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-2xl font-bold">
                    Data Science Enthusiast
                  </h3>
                  <div className="w-2 h-2 bg-black group-hover:bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="group relative px-8 py-3 bg-black text-white rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 animate-[fadeUp_0.8s_ease-out_0.8s_both] shadow-lg hover:shadow-2xl"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Projects
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>

            {/* Decorative element */}
            <div className="mt-6 flex gap-2 animate-[fadeUp_0.8s_ease-out_1s_both]">
              <div className="w-12 h-1 bg-black rounded-full animate-[expandWidth_1.5s_ease-out_1.2s_both]"></div>
              <div className="w-8 h-1 bg-gray-400 rounded-full animate-[expandWidth_1.5s_ease-out_1.3s_both]"></div>
              <div className="w-4 h-1 bg-gray-300 rounded-full animate-[expandWidth_1.5s_ease-out_1.4s_both]"></div>
            </div>
          </div>
        </div>

        {/* Image section - hidden on small devices, shown on large screens */}
        <div className="sideBlack bg-black flex-[1] flex items-center justify-center h-full hidden [@media(min-width:1500px)]:flex overflow-hidden">
          <img
            src={me}
            alt="me"
            className="h-auto w-[85%] object-contain animate-[slideUp_1s_ease-out_0.3s_both] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="About">
        <About />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandWidth {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default Main;