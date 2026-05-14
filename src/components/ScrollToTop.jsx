import { useEffect, useState } from "react";
import Resume from "../assets/haider-resume.pdf";

const ScrollToTopAndResume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileHint, setShowMobileHint] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Hide mobile hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMobileHint(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Haider-Resume.pdf";
    link.click();
  };

  return (
    <div
      className={`
        fixed z-[999]
        bottom-4 right-4
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8

        flex flex-col items-end gap-3

        transition-all duration-500 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      {/* Mobile Hint */}
      <div
        className={`
          md:hidden
          transition-all duration-500
          ${
            showMobileHint
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div className="bg-white text-black text-[10px] font-semibold px-3 py-1 rounded-full shadow border border-black/10 animate-bounce">
          Download Resume ↓
        </div>
      </div>

      {/* Resume Button */}
      <button
        onClick={handleDownloadResume}
        title="Download Resume"
        className="
          group
          relative

          flex items-center justify-center
          md:justify-start

          h-10 w-10
          sm:h-11 sm:w-11
          md:h-12 md:w-12
          md:hover:w-52

          rounded-full
          border-2 border-black
          bg-white text-black

          shadow-xl
          overflow-hidden

          transition-all duration-300 ease-in-out

          hover:scale-105
          active:scale-95

          md:hover:bg-black
          md:hover:text-white
        "
      >
        {/* Text */}
        <span
          className="
            hidden md:block

            ml-5
            pr-12

            text-xs font-bold tracking-wide uppercase
            whitespace-nowrap

            opacity-0
            transition-opacity duration-200

            group-hover:opacity-100
          "
        >
          Download Resume
        </span>

        {/* Icon */}
        <div
          className="
            md:absolute md:right-0
            flex items-center justify-center
            w-full h-full
            md:w-12 md:h-12
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
      </button>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        title="Scroll to Top"
        className="
          relative

          h-10 w-10
          sm:h-11 sm:w-11
          md:h-12 md:w-12

          flex items-center justify-center

          rounded-full
          bg-black text-white

          shadow-xl

          transition-all duration-300 ease-in-out

          hover:scale-105
          hover:bg-white
          hover:text-black
          hover:border-2
          hover:border-black

          active:scale-95
        "
      >
        {/* Ping */}
        <span className="absolute inset-0 rounded-full bg-black/20 animate-ping pointer-events-none"></span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="relative z-10 w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopAndResume;