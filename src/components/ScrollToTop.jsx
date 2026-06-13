import { useEffect, useState } from "react";
import Chat from "./Chat";
import { motion, AnimatePresence } from "framer-motion";
import Bot from "../assets/bot.png";

const ScrollToTopAndResume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('Need help?');

  const tooltips = ['Need help?', 'Ask me anything', "I'm online"];

  // Periodically toggle the engagement tooltip
  useEffect(() => {
    let timeoutId;
    const interval = setInterval(() => {
      if (!isOpen) {
        const randomText = tooltips[Math.floor(Math.random() * tooltips.length)];
        setTooltipText(randomText);
        setShowTooltip(true);

        // Hide tooltip after 5 seconds
        timeoutId = setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 12000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen]);

  // Floating & breathing keyframe variations for launcher
  const launcherVariants = {
    floating: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.08,
      boxShadow: "0 8px 30px rgba(255,255,255,0.12)",
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Engagement Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 mr-2 bg-neutral-950/90 backdrop-blur-xl border border-neutral-800/80 text-neutral-200 text-xs font-medium px-4 py-2.5 rounded-xl shadow-lg pointer-events-none relative before:content-[''] before:absolute before:top-full before:right-6 before:border-8 before:border-transparent before:border-t-neutral-950/90"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              {tooltipText}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button & Chatbot Interface Dropdown Window */}
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="launcher"
            variants={launcherVariants}
            animate="floating"
            whileHover="hover"
            whileTap="tap"
            onClick={() => setIsOpen(true)}
            className=" w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center overflow-hidden "
            aria-label="Open Chatbot"
          >
            {/* Glass Reflection */}
            <div
              className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 via-transparent to-transparent "
            />

            {/* Soft Inner Layer */}
            <div className="absolute inset-0 rounded-full bg-white/5" />

            {/* Bot Image */}
            <img
              src={Bot}
              alt="Bot Launcher"
              className=" w-full h-full rounded-full object-cover "
            />
          </motion.button>
        ) : (
          <Chat key="chat" onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTopAndResume;