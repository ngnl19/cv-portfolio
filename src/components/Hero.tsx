import { useState, useEffect } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { DownloadCVButton } from "./DownloadCVButton";

const AnimatedCounter = ({
  from = 0,
  to,
  suffix = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-20 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col justify-between">
      <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[75%] mt-8 md:mt-12">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] md:leading-[0.95] text-zinc-100">
          Building digital products for startups and businesses.
        </h1>
      </div>

      <div className="max-w-xl md:max-w-2xl mt-12 md:mt-20">
        <p className="text-zinc-400 font-body text-base md:text-lg lg:text-xl font-light leading-relaxed">
          Full-stack developer crafting responsive web applications,
          point-of-sale systems, and modern user interfaces with precision and
          care.
        </p>
      </div>

      <div className="mt-16 md:mt-24 border-y border-zinc-800/60 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-8 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              <AnimatedCounter to={4} suffix="+" />
            </span>
            <span className="font-body text-xs md:text-sm text-zinc-500 font-light tracking-wide">
              Years Experience
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              <AnimatedCounter to={15} suffix="+" />
            </span>
            <span className="font-body text-xs md:text-sm text-zinc-500 font-light tracking-wide">
              Projects Delivered
            </span>
          </div>

          <div className="flex flex-col gap-1 col-span-2 md:col-span-1 items-center md:items-start border-t border-zinc-900/40 pt-6 md:pt-0 md:border-none">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              <AnimatedCounter to={100} suffix="%" />
            </span>
            <span className="font-body text-xs md:text-sm text-zinc-500 font-light tracking-wide">
              Client Satisfaction
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
        <a
          href="#work"
          className="w-full sm:w-auto px-6 py-3.5 bg-white text-black hover:bg-zinc-200 font-medium rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-sm cursor-pointer">
          View selected works
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>

        <DownloadCVButton />
      </div>
    </section>
  );
};
