import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const DownloadCVButton = () => {
  const [downloadState, setDownloadState] = useState<
    "idle" | "downloading" | "success"
  >("idle");
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
        return prev + 10;
      });
    }, 60);
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="inline-flex items-center">
      <motion.button
        onClick={triggerDownload}
        disabled={downloadState !== "idle"}
        type="button"
        aria-label="Download Mark Andrew Duza CV (PDF)"
        layout
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`relative h-12 px-6 flex items-center justify-center font-mono text-xs uppercase tracking-wider border rounded-full select-none cursor-pointer btn-affordance transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
          downloadState === "idle"
            ? "bg-[var(--color-paper-2)] text-[var(--color-ink)] border-[var(--color-rule)] hover:border-[var(--color-ink-muted)] hover:bg-[var(--color-paper-3)]"
            : "bg-[var(--color-paper-2)] text-[var(--color-ink)] border-[var(--color-accent)] cursor-default"
        }`}>
        <AnimatePresence mode="wait">
          {downloadState === "idle" && (
            <motion.div
              key="idle-state"
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2">
              <span>Download CV (.pdf)</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </motion.div>
          )}

          {downloadState === "downloading" && (
            <motion.div
              key="downloading-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2">
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 44 44">
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-[var(--color-rule)]"
                  strokeWidth="3"
                  fill="transparent"
                />
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-[var(--color-accent)]"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 60ms linear" }}
                />
              </svg>
              <span>Downloading…</span>
            </motion.div>
          )}

          {downloadState === "success" && (
            <motion.div
              key="success-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-emerald-500 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>CV Downloaded</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
