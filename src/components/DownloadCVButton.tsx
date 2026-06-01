import { useState, useRef } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

export const DownloadCVButton = () => {
  const [downloadState, setDownloadState] = useState<
    "idle" | "downloading" | "success"
  >("idle"); // Removed 'already-downloaded' state to prevent artificial soft-locks
  const [progress, setProgress] = useState(0);

  const hasTriggeredDownloadFile = useRef(false);

  const triggerDownload = () => {
    if (downloadState !== "idle") return;

    setDownloadState("downloading");
    setProgress(0);
    hasTriggeredDownloadFile.current = false;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          if (!hasTriggeredDownloadFile.current) {
            hasTriggeredDownloadFile.current = true;

            setDownloadState("success");

            const link = document.createElement("a");
            link.href = "/Mark andrew duza.pdf";
            link.download = "Mark andrew duza.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setTimeout(() => {
              setDownloadState("idle");
            }, 2500);
          }

          return 100;
        }
        return prev + 5;
      });
    }, 80);
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const iconVariants = {
    hover: {
      y: [0, 4, -4, 0],
      transition: {
        duration: 0.6,
        ease: easeOut,
        repeat: Infinity,
        repeatDelay: 0.2,
      },
    },
  };

  return (
    <div className="w-full sm:w-auto h-14 flex items-center justify-center">
      <motion.button
        onClick={triggerDownload}
        disabled={downloadState !== "idle"}
        whileHover={downloadState === "idle" ? "hover" : ""}
        layout
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`relative h-12 flex items-center justify-center font-mono text-xs uppercase tracking-wider border focus:outline-none select-none transition-all
          ${
            downloadState === "idle"
              ? "w-full sm:w-48 px-6 bg-transparent text-zinc-300 border-zinc-800 hover:border-zinc-500 hover:text-white rounded-full cursor-pointer"
              : "w-12 bg-transparent border-zinc-800 rounded-full"
          }
        `}>
        <AnimatePresence mode="wait">
          {downloadState === "idle" && (
            <motion.div
              key="idle-txt"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center justify-center gap-2 overflow-hidden py-1">
              <span>Download CV</span>
              <motion.div variants={iconVariants}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 text-emerald-500 block">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          )}

          {downloadState === "downloading" && (
            <motion.div
              key="loading-svg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r={radius}
                  className="stroke-emerald-500"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 80ms linear" }}
                />
              </svg>
            </motion.div>
          )}

          {downloadState === "success" && (
            <motion.div
              key="success-check"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-transparent rounded-full">
              <svg className="absolute w-full h-full" viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r={radius}
                  className="stroke-emerald-500"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5 text-emerald-500 z-10">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
