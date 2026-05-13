import React from "react";
import Herobg from "../assets/bg-hero2.png";
import Section from "./section";
import { useScrollReveal } from "./useScrollReveal";

function About() {
  useScrollReveal();
  const EducationCard = ({
    bg = "bg-black",
    text = "text-white",
    border = "",
    title,
    description,
    image,
    titleColor = "",
    descColor = "",
  }) => {
    return (
      <div
  className={`
    w-[290px] sm:w-[320px] md:w-[340px]
    ${bg}
    ${text}
    ${border}
    rounded-2xl
    overflow-hidden
    shadow-lg
    group
    hover:scale-[1.02]
    md:hover:scale-105
    transition duration-300
  `}
>
        <div className="h-36 sm:h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        <div className="p-3 sm:p-4">
          <h3
            className={`text-base sm:text-lg font-semibold mb-2 reveal ${titleColor}`}
          >
            {title}
          </h3>

          <p className={`text-xs sm:text-sm leading-5 reveal ${descColor}`}>
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
      {/* Cards */}
      <div
        className="
    flex flex-col sm:flex-row flex-wrap
    items-center justify-center
    gap-4 sm:gap-6 md:gap-10
    px-3 sm:px-6 md:px-12
    py-4 md:py-14
    mt-2 md:mt-10
    mb-4 md:mb-8
  "
      >
        <EducationCard
          bg="bg-black"
          text="text-white"
          title="Frontend Developer"
          image="https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_incoming&w=740&q=80"
          description="Completed frontend development course provided by Meta, focusing on modern UI and web fundamentals."
          descColor="text-gray-300"
        />

        <EducationCard
          bg="bg-white"
          text="text-black"
          border="border border-black"
          title="Data Science"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinE3ZVzyOj-2szmzApJ2DFtcfsijVoY1mCg&s"
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
