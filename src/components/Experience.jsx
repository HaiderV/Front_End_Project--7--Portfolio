import React from "react";
import Section from "./section";
import ExperienceRoadmap from "./ExperienceRoadmap";
import Heading from "./Heading";
import { useScrollReveal } from "./useScrollReveal";

function Experience() {
  const experiences = [
    {
      year: "...",
      title: "...",
      company: "...",
      description: "No Experience Yet",
      isLeft: false,
    },
  ];

  return (
    <div className="mt-4" id="experience">
      <Heading heading="Experience" backText="Timeline" />

      <section id="experience" className="py-24 bg-[#d7d7d7]">
        <div className="max-w-7xl mx-auto px-6">
          {/* The Roadmap Container */}
          <div className="relative">
            {/* Central Vertical Line (The Trunk) */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[3px] bg-black rounded-full"></div>

            {/* Mapping the Experience Nodes */}
            <div className="relative z-0 reveal">
              {experiences.map((exp, index) => (
                <ExperienceRoadmap
                  key={index}
                  year={exp.year}
                  title={exp.title}
                  company={exp.company}
                  description={exp.description}
                  isLeft={exp.isLeft}
                />
              ))}
            </div>

            {/* Bottom Cap */}
            <div className="flex justify-center pt-8">
              <div className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] z-10 shadow-lg reveal">
                End of Log
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section />
    </div>
  );
}

export default Experience;
