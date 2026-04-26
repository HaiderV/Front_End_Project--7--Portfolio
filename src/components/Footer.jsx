import React from "react";
import { useScrollReveal } from "./useScrollReveal";

function Footer() {
  const currentYear = new Date().getFullYear();
  useScrollReveal();
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 w-full relative">
      <div className="max-w-7xl mx-auto px-6 reveal">
        {/* 1. Brand Section */}
        <div className="relative mb-20">
          {/* BACKGROUND TEXT - Wrapped in a clip container to prevent horizontal scroll */}
          <div className="absolute inset-0 flex justify-center items-start pointer-events-none select-none overflow-hidden h-full w-full">
            <h2
              className="font-black uppercase tracking-tighter opacity-10 text-transparent leading-none"
              style={{
                fontSize: "clamp(4rem, 20vw, 15rem)",
                WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                whiteSpace: "nowrap", // Prevents text from wrapping and stretching the height
              }}
            >
              HAIDER.
            </h2>
          </div>

          {/* FOREGROUND CONTENT */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 text-center md:text-left pt-10">
            <div className="max-w-md">
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                Let's build the <br />
                <span className="text-gray-500">future together.</span>
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                First-year BCA student focused on AI/ML, building systems that
                blend data science with premium web experiences.
              </p>
            </div>

            {/* Quick Navigation / Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-12 md:gap-20">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-600">
                  Navigation
                </span>
                <p
                  onClick={() =>
                    document
                      .getElementById("about")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm hover:line-through transition-all cursor-pointer"
                >
                  About
                </p>
                <p
                  onClick={() =>
                    document
                      .getElementById("skills")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm hover:line-through transition-all cursor-pointer"
                >
                  Skills
                </p>
                <p
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm hover:line-through transition-all cursor-pointer"
                >
                  Projects
                </p>
              </div>

              <div className="flex flex-col gap-4 items-center md:items-start">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-600">
                  Socials
                </span>
                <a
                  href="https://github.com/HaiderV"
                  target="_blank"
                  className="text-sm hover:line-through transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/haider-vadgamwala-220728281/"
                  target="_blank"
                  className="text-sm hover:line-through transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/haider.vad/"
                  className="text-sm hover:line-through transition-all"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Divider Line */}
        <div className="h-px w-full bg-white/10 mb-10"></div>

        {/* 3. Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
              Operational // 2026 Edition
            </span>
          </div>

          <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 text-center md:text-left">
            © {currentYear} ALL RIGHTS RESERVED / DESIGNED BY HAIDER.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
          >
            Back to top
            <span className="group-hover:-translate-y-1 transition-transform">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
