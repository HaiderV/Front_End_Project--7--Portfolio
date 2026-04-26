import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed z-[9999]
        
        /* Position (responsive) */
        bottom-4 right-4
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8
        
        /* Size (responsive) */
        h-10 w-10
        sm:h-11 sm:w-11
        md:h-12 md:w-12
        
        flex items-center justify-center
        rounded-full bg-black text-white shadow-xl
        
        transition-all duration-500 ease-in-out
        hover:scale-110 active:scale-95
        
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-black opacity-20 animate-ping"></span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="relative z-10 w-4 h-4 sm:w-5 sm:h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;