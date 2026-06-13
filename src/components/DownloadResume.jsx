import React from "react";
import Resume from "../assets/haider-resume.pdf";
import Heading from "./Heading";
import Section from "./section";
import { useScrollReveal } from "./useScrollReveal";

const DownloadResume = () => {
    useScrollReveal();

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = Resume;
        link.download = "Haider-Resume.pdf";
        link.click();
    };

    return (
        <div id="resume" className="mt-4">
            <Heading heading="My Resume" backText="Credentials" />

            <div className="px-3 sm:px-4">
                <div
                    className="
            w-full
            max-w-[325px]
            sm:max-w-[420px]
            md:max-w-[700px]
            lg:max-w-[850px]
            mx-auto
            mt-10 mb-10 md:mb-20
            px-5 sm:px-8 md:px-10
            py-8 md:py-12
            bg-white
            border-2 border-black
            rounded-2xl
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
            reveal
          "
                >
                    {/* Header decoration */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-black"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-100"></div>
                        </div>
                        <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-black/30 italic">
                            Access Document
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-center gap-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                            Explore My Resume
                        </h3>

                        <p className="max-w-xl text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                            Get a detailed overview of my projects, technical skills, education, certifications, and hands-on experience building modern web applications.
                        </p>

                        {/* Premium Download Button */}
                        <button
                            onClick={handleDownload}
                            className="
                group
                relative
                mt-4
                px-8 py-4
                bg-black
                text-white
                font-black
                uppercase
                tracking-[0.2em]
                rounded-xl
                overflow-hidden
                transition-all
                hover:scale-105
                active:scale-95
                shadow-xl
                flex
                items-center
                gap-3
              "
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Download PDF
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>
            <Section />
        </div>
    );
};

export default DownloadResume;
