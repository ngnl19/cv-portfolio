import { motion } from "framer-motion";
import { DownloadCVButton } from "./DownloadCVButton";

export const Hero = () => {
  const proofMetrics = [
    {
      value: "2021 — Present",
      label: "Freelance & Systems Dev",
      detail: "Building production web apps & POS tools",
    },
    {
      value: "+25%",
      label: "Performance Optimization",
      detail: "Measurable speed gains across client apps",
    },
    {
      value: "-40%",
      label: "Bug Report Reduction",
      detail: "Meticulous debugging & code quality",
    },
    {
      value: "1.25 GWA",
      label: "Academic Honors (MAWD)",
      detail: "STI College Web & App Development",
    },
  ];

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 md:mb-14 border-b border-[var(--color-rule)]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-wider">
            Naic, Cavite, Philippines
          </span>
          <span className="text-[var(--color-rule)]">•</span>
          <span className="font-mono text-xs text-[var(--color-accent)] font-medium">
            Available for Roles & Freelance
          </span>
        </div>

        <div className="font-mono text-xs text-[var(--color-ink-faint)]">
          Stack: TypeScript · React · Next · C# · SQL Server
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Headline & Primary Actions */}
        <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
              Junior Software Developer
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.06] text-[var(--color-ink)]">
              Engineering responsive web applications & business systems.
            </h1>
          </div>

          <p className="font-body text-base sm:text-lg md:text-xl text-[var(--color-ink-muted)] font-normal leading-relaxed max-w-2xl">
            Freelance developer combining modern frontend ecosystems (React,
            Next.js, Vue, Astro) with resilient backend services (C# .NET,
            ASP.NET Core, SQL Server, Node.js) to solve real operational needs.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="px-6 py-3 bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)] font-medium rounded-full flex items-center justify-center gap-2 transition-colors duration-150 text-sm cursor-pointer btn-affordance focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]">
              <span>View Selected Projects</span>
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
        </div>

        {/* Right Column: Key Discipline Summary */}
        <div className="lg:col-span-4 p-6 sm:p-7 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-2xl flex flex-col gap-6 transition-colors duration-200">
          <div className="flex items-center justify-between border-b border-[var(--color-rule-subtle)] pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-ink-muted)]">
              Core Focus Areas
            </span>
            <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">
              03 Disciplines
            </span>
          </div>

          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex flex-col gap-1">
              <span className="font-display font-semibold text-[var(--color-ink)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Full-Stack Web Development
              </span>
              <span className="font-body text-xs text-[var(--color-ink-muted)]">
                Responsive web apps, landing pages, and interactive UIs built
                with React, Next.js, and Tailwind.
              </span>
            </li>

            <li className="flex flex-col gap-1">
              <span className="font-display font-semibold text-[var(--color-ink)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                POS & Business Software
              </span>
              <span className="font-body text-xs text-[var(--color-ink-muted)]">
                Desktop point-of-sale applications, sales tracking, and
                inventory management in C# & Java.
              </span>
            </li>

            <li className="flex flex-col gap-1">
              <span className="font-display font-semibold text-[var(--color-ink)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                REST APIs & Databases
              </span>
              <span className="font-body text-xs text-[var(--color-ink-muted)]">
                Scalable ASP.NET Core & Node.js backend endpoints backed by SQL
                Server and MySQL schemas.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Verified Proof Strip (Honest Metrics from CV) */}
      <div className="mt-14 md:mt-20 pt-10 border-t border-[var(--color-rule)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {proofMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="flex flex-col gap-1.5 p-4 sm:p-5 bg-[var(--color-paper-2)]/60 border border-[var(--color-rule)] rounded-xl transition-colors duration-200">
              <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-ink)]">
                {item.value}
              </span>
              <span className="font-display text-xs sm:text-sm font-medium text-[var(--color-ink)]">
                {item.label}
              </span>
              <span className="font-body text-xs text-[var(--color-ink-muted)]">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
