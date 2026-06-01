import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [showMore, setShowMore] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed bottom-6 top-auto left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[92%] max-w-4xl px-4 py-3 bg-zinc-950/40 backdrop-blur-md border border-white/5 rounded-full md:top-6 md:bottom-auto md:px-6">
        <a
          href="#"
          className="hidden md:block font-display font-bold tracking-widest text-sm text-white">
          MAD.Dev
        </a>

        <div className="w-full md:w-auto flex justify-around md:justify-end items-center gap-2 md:gap-8 text-[10px] md:text-xs font-mono uppercase tracking-wider text-zinc-400">
          <a
            href="#about"
            className="hover:text-white py-1 px-2 md:p-0 transition-colors duration-300">
            About
          </a>
          <a
            href="#work"
            className="hover:text-white py-1 px-2 md:p-0 transition-colors duration-300">
            Work
          </a>
          <a
            href="#stack"
            className="hover:text-white py-1 px-2 md:p-0 transition-colors duration-300">
            Stack
          </a>

          <a
            href="#experience"
            className="hidden md:inline-block hover:text-white transition-colors duration-300">
            Exp
          </a>
          <a
            href="#contact"
            className="hidden md:inline-block hover:text-white transition-colors duration-300">
            Contact
          </a>

          <button
            onClick={() => setShowMore(!showMore)}
            className="relative md:hidden h-5 w-16 overflow-hidden text-left cursor-pointer focus:outline-none">
            <AnimatePresence mode="wait">
              {!showMore ? (
                <motion.span
                  key="more"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 py-1 px-2 text-zinc-400">
                  More +
                </motion.span>
              ) : (
                <motion.span
                  key="close"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 py-1 px-2 text-white font-medium">
                  Close —
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-16 left-0 right-0 mx-auto w-full p-4 bg-zinc-950/95 backdrop-blur-lg border border-white/5 rounded-2xl flex flex-col gap-4 text-center text-xs font-mono uppercase tracking-wider md:hidden origin-bottom">
              <a
                href="#experience"
                onClick={() => setShowMore(false)}
                className="py-2 text-zinc-400 hover:text-white border-b border-zinc-900/60">
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setShowMore(false)}
                className="py-2 text-zinc-400 hover:text-white">
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <button
        onClick={scrollToTop}
        className={`fixed z-50 bottom-24 md:bottom-8 right-6 md:right-12 p-3 bg-zinc-900/60 hover:bg-white hover:text-black text-white border border-white/10 rounded-full cursor-pointer backdrop-blur-md transition-all duration-500 transform ${
          showScrollTop && !showMore
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
};
