import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Track active section
      const sections = ["about", "work", "stack", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#work", id: "work" },
    { label: "Stack", href: "#stack", id: "stack" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Primary"
          className="pointer-events-auto flex items-center justify-between w-full max-w-4xl px-4 md:px-5 py-2.5 bg-[var(--color-paper-2)]/85 backdrop-blur-xl border border-[var(--color-rule)] rounded-full shadow-xs transition-colors duration-200">
          {/* Brand Wordmark & Status Indicator */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-sm font-display font-bold tracking-tight text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors duration-150 group">
            <span className="tracking-tight">Mark Andrew Duza</span>
            <span className="hidden sm:inline-block font-mono text-[11px] font-normal text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-colors">
              / Dev
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 text-xs font-mono text-[var(--color-ink-muted)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full transition-all duration-150 nav-link-affordance ${
                    isActive
                      ? "text-[var(--color-ink)] bg-[var(--color-paper-3)] font-medium"
                      : "hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-3)]/60"
                  }`}>
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Controls: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5">
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="p-2 rounded-full text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-3)] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]">
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.svg
                    key="sun-icon"
                    initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 text-amber-400">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon-icon"
                    initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[var(--color-accent)]">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              type="button"
              aria-label={showMobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMobileMenu}
              className="md:hidden p-2 rounded-full text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-3)] transition-colors duration-150 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4">
                {showMobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-40 p-5 bg-[var(--color-paper-2)]/95 backdrop-blur-xl border border-[var(--color-rule)] rounded-2xl shadow-xl flex flex-col gap-2 text-sm font-mono md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
                className="px-4 py-2.5 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-3)] rounded-lg transition-colors">
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll-To-Top Button */}
      <button
        onClick={scrollToTop}
        type="button"
        className={`fixed z-40 bottom-6 right-6 p-3 bg-[var(--color-paper-2)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)] text-[var(--color-ink)] border border-[var(--color-rule)] rounded-full cursor-pointer backdrop-blur-md shadow-md transition-all duration-200 transform ${
          showScrollTop && !showMobileMenu
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
