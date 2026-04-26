import React from "react";
import SkillCard from "./SkillCard";
import Section from "./section";
import Heading from "./Heading";
import { useScrollReveal } from "./useScrollReveal";

const mySkills = [
  {
    name: "HTML5",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/001/416/705/small/html5-emblem-orange-shield-and-white-text-vector.jpg",
  },
  {
    name: "CSS3",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/001/416/680/small/css3-emblem-blue-shield-and-white-text-vector.jpg",
  },
  {
    name: "JavaScript",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfl87jHhRyvOaxz91CzGpXBLTMuR3w7EHYRg&s",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Tailwind",
    logo: "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png",
  },
  {
    name: "Git",
    logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "GitHub",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "Python",
    logo: "https://thumbs.dreamstime.com/b/python-logo-icon-vector-logos-logo-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-emblem-wallpaper-background-python-208329675.jpg",
  },
  {
    name: "ML",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/035/742/223/small/artificial-intelligent-icon-line-icon-for-your-website-mobile-presentation-and-logo-design-vector.jpg",
  },
  {
    name: "Data Visualization",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/055/565/640/small/modern-business-logo-vector.jpg",
  },
  {
    name: "Data Analysis",
    logo: "https://thumbs.dreamstime.com/b/dynamic-analytics-logo-design-effective-data-representation-357516342.jpg",
  },
  {
    name: "Video Editing",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/010/952/951/small/movie-film-editor-logo-design-video-editing-logo-concept-vector.jpg",
  },
  // Add more skills here...
];

function Skill() {
  useScrollReveal
  return (
    <div
      className="flex flex-col gap-10 justify-center align-center"
      id="skills"
    >
      <Heading heading="Skills" backText="Expertise" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 justify-items-center py-12">
          {mySkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>

      <Section />
    </div>
  );
}

export default Skill;