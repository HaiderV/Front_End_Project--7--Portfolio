import React from "react";
import Herobg from "../assets/bg-hero2.png";
import Section from "./section";
import { useScrollReveal } from "./useScrollReveal";

function About() {
  useScrollReveal();
  const EducationCard = ({
  title,
  description,
  image,
}) => {
  return (
    <div
      className="
        w-full
        max-w-[325px]
        bg-white
        border-2
        border-black
        rounded-2xl
        overflow-hidden
        group
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        ease-out
      "
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-zinc-100">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
            ease-out
          "
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <div className="space-y-2">
          <h3
            className="
              text-lg
              font-bold
              leading-snug
              tracking-tight
              text-black
            "
          >
            {title}
          </h3>

          {/* Divider */}
          <div className="h-[2px] w-10 bg-black rounded-full group-hover:w-16 transition-all duration-300" />
        </div>

        {/* Description */}
        <p
          className="
            text-sm
            leading-6
            text-zinc-600
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

  return (
    <div className="About flex flex-col overflow-x-hidden" id="about">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${Herobg})` }}
        className="w-full bg-cover bg-center py-5 sm:py-6 md:py-10 flex items-center justify-center mb-8 md:mb-12 px-4"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center reveal">
          About Me
        </h2>
      </div>

      {/* About Content */}
      <div
        className="
        w-[92%] sm:w-[90%] md:max-w-4xl
        mx-auto
        my-4 md:my-16
        p-5 sm:p-6 md:p-12
        bg-white
        border-l-4 md:border-l-8 border-black
        shadow-xl md:shadow-2xl
        rounded-tr-2xl md:rounded-tr-[3rem]
        rounded-br-2xl md:rounded-br-[3rem]
      "
      >
        {/* Header Accent */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-10">
          <div className="w-6 sm:w-8 md:w-12 h-1 bg-black"></div>

          <span
            className="
            text-[9px] sm:text-[10px] md:text-sm
            font-black
            uppercase
            tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em]
            text-black/40
            reveal
          "
          >
            Mission Statement
          </span>
        </div>

        {/* Paragraphs */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <p className="text-sm sm:text-base md:text-xl font-bold text-black leading-7 md:leading-relaxed reveal">
            I’m a first-year BCA student specializing in Artificial Intelligence
            and Machine Learning, currently focused on building a strong
            foundation in both development and data-driven technologies.
          </p>

          <p className="text-sm sm:text-base md:text-xl font-medium text-gray-700 leading-7 md:leading-relaxed border-l-2 border-gray-100 pl-3 sm:pl-4 md:pl-6 reveal">
            My interests lie in Data Science and how data can be used to solve
            real-world problems. Alongside this, I’m actively exploring backend
            development and DevOps to understand how complete systems are built,
            deployed, and maintained.
          </p>

          <p className="text-sm sm:text-base md:text-xl font-bold text-black leading-7 md:leading-relaxed reveal">
            I believe in discipline over motivation and focus on improving every
            day through consistent learning and hands-on practice. Instead of
            just consuming content, I prefer applying what I learn by working on
            projects and solving problems.
          </p>

          <p className="text-sm sm:text-base md:text-xl font-medium text-gray-700 leading-7 md:leading-relaxed border-l-2 border-gray-100 pl-3 sm:pl-4 md:pl-6 reveal">
            My long-term goal is to move into MLOps, where I can combine machine
            learning with scalable and efficient deployment practices.
          </p>
        </div>
      </div>

      {/* Education Heading */}
      <div className="flex flex-col items-center justify-center mt-4 md:mt-8 mb-8 md:mb-12 px-4">
        <p
          className="
          text-base sm:text-lg md:text-2xl
          font-black
          tracking-[0.2em] md:tracking-[0.3em]
          uppercase
          text-black
          text-center
          reveal
        "
        >
          Education
        </p>

        <div className="mt-2 h-[3px] w-10 md:w-12 bg-black rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-7 px-4 py-6">
        <EducationCard
          bg="bg-black"
          text="text-white"
          title="Frontend Developer"
          image="data:image/png;base64,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"
          description="Completed frontend development course provided by Meta, focusing on modern UI and web fundamentals."
          descColor="text-gray-300"
        />

        <EducationCard
          bg="bg-white"
          text="text-black"
          border="border border-black"
          title="Data Science"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1pH7_JGQiPZ2uKFH5i34fpUUi3w1njb5OQ&s"
          description="Completed Data Science using Python course from Aligarh University, covering basics of data analysis and tools."
          descColor="text-gray-700"
        />

        <EducationCard
          bg="bg-black"
          text="text-white"
          title="BCA (AI & ML)"
          image="https://caias.in/wp-content/uploads/2025/04/fav.webp"
          description="Pursuing BCA with AI & ML from Christ Academy Institute for Advanced Studies, building a strong tech foundation."
          descColor="text-gray-300"
        />
      </div>

      {/* Quote */}
      <h1
        className="
        text-center
        text-xl sm:text-2xl md:text-3xl
        font-bold
        mb-8
        pt-4 md:pt-8
        px-4
        leading-relaxed
        reveal
      "
      >
        “Built on discipline, driven by improvement.”
      </h1>

      <Section />
    </div>
  );
}

export default About;
