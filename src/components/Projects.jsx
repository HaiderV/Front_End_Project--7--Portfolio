import React from "react";
import ProjectCard from "./ProjectCard";
import Section from "./section";
import Heading from "./Heading";

const projects = [
  {
    type: "Data Science",
    title: "Spam Email Detector",
    description:
      "Developed a supervised machine learning model for spam email detection, trained on a labeled dataset to classify emails with reliable accuracy.",
    link: "https://github.com/HaiderV/Data-Science-Project---Email-Spam-Detector",
  },
  {
    type: "Data Science",
    title: "Image Classifier",
    description:
      "Built using the MNIST dataset to effectively train and predict handwritten digit recognition with high accuracy.",
    link: "https://github.com/HaiderV/Data-Science-Project---Image-Classification",
  },
  {
    type: "Front-End",
    title: "Weather App",
    description:
      "A real-time weather dashboard using API integration featuring a clean UI and intuitive location search options.",
    link: "https://github.com/HaiderV/Front_End_Project--3--weather",
  },
  {
    type: "Front-End",
    title: "Currency Converter",
    description:
      "Supports over 100 currencies with real-time conversion rates and a decent, user-friendly interface.",
    link: "https://github.com/HaiderV/Front_End_Project--4--currency",
  },
];

function Projects() {
  return (
    <div id="projects">
      <div className="flex flex-col items-center justify-center">
        <Heading heading="Projects" backText="Undertakings" />
        {/* Sub-text for context (Optional) */}
        <p className="mt-6 text-gray-500 font-medium tracking-widest uppercase text-xs md:text-sm">
          Selected Works & Experiments
        </p>
      </div>

      <section id="projects" className="py-20 bg-[#d7d7d7]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                type={project.type}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
      <Section />
    </div>
  );
}

export default Projects;
