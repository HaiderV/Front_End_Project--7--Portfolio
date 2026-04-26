import React from "react";
import Herobg from "../assets/bg-hero2.png";
import Section from "./section";
import { useScrollReveal } from "./useScrollReveal";

function About() {
  useScrollReveal();
  return (
    <div className="About flex flex-col" id="about">
      <div
        style={{ backgroundImage: `url(${Herobg})` }}
        className="w-full bg-cover bg-center py-6 md:py-10 flex items-center justify-center mb-12"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide reveal">
          About Me
        </h2>
      </div>

      <div
        className="max-w-4xl mx-auto my-8 md:my-16 
                p-6 md:p-12 
                bg-white 
                border-l-4 md:border-l-8 border-black 
                shadow-xl md:shadow-2xl 
                rounded-tr-3xl md:rounded-tr-[3rem] 
                rounded-br-3xl md:rounded-br-[3rem] 
                mx-4 md:mx-auto"
      >
        {/* Header Accent */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
          <div className="w-8 md:w-12 h-1 bg-black"></div>
          <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/40 reveal">
            Mission Statement
          </span>
        </div>

        {/* Content Area - Exact text with responsive spacing */}
        <div className="space-y-6 md:space-y-8">
          <p className="text-base md:text-xl font-bold text-black leading-relaxed reveal">
            I’m a first-year BCA student specializing in Artificial Intelligence
            and Machine Learning, currently focused on building a strong
            foundation in both development and data-driven technologies.
          </p>

          <p className="text-base md:text-xl font-medium text-gray-700 leading-relaxed border-l-2 border-gray-100 pl-4 md:pl-6 reveal">
            My interests lie in Data Science and how data can be used to solve
            real-world problems. Alongside this, I’m actively exploring backend
            development and DevOps to understand how complete systems are built,
            deployed, and maintained.
          </p>

          <p className="text-base md:text-xl font-bold text-black leading-relaxed reveal">
            I believe in discipline over motivation and focus on improving every
            day through consistent learning and hands-on practice. Instead of
            just consuming content, I prefer applying what I learn by working on
            projects and solving problems.
          </p>

          <p className="text-base md:text-xl font-medium text-gray-700 leading-relaxed border-l-2 border-gray-100 pl-4 md:pl-6 reveal">
            My long-term goal is to move into MLOps, where I can combine machine
            learning with scalable and efficient deployment practices.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 mb-12">
        {/* The Text: Bigger, Bolder, and Wider tracking */}
        <p className="text-lg md:text-2xl font-black tracking-[0.3em] uppercase text-black text-center reveal">
          Education
        </p>

        {/* The Line: Modern, centered accent line */}
        <div className="mt-2 h-[3px] w-12 bg-black rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-12 px-4 md:px-16 py-12 md:py-16 mt-10 mb-8">
        {/* Card 1 */}
        <div className="w-full sm:w-[300px] bg-black text-white rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transition duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_incoming&w=740&q=80"
              alt="frontend"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 reveal">Frontend Developer</h3>
            <p className="text-gray-300 text-sm reveal">
              Completed frontend development course provided by Meta, focusing
              on modern UI and web fundamentals.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[300px] bg-white text-black border border-black rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transition duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinE3ZVzyOj-2szmzApJ2DFtcfsijVoY1mCg&s"
              alt="data science"
              className="w-full h-full object-cover  group-hover:grayscale-0 transition duration-300"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 reveal">Data Science</h3>
            <p className="text-gray-700 text-sm reveal">
              Completed Data Science using Python course from Aligarh
              University, covering basics of data analysis and tools.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[300px] bg-black text-white rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transition duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://caias.in/wp-content/uploads/2025/04/fav.webp"
              alt="college"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 reveal">BCA (AI & ML)</h3>
            <p className="text-gray-300 text-sm reveal">
              Pursuing BCA with AI & ML from Christ Academy Institute for
              Advanced Studies, building a strong tech foundation.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold mb-8 pt-8 reveal">
        “Built on discipline, driven by improvement.”
      </h1>
      <Section />
    </div>
  );
}

export default About;
