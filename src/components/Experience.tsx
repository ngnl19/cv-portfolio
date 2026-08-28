interface TimelineEntry {
  title: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  metrics?: string;
  tags: string[];
}

export const Experience = () => {
  const experienceData: TimelineEntry[] = [
    {
      title: "Freelance Software Developer",
      role: "Full-Stack & Systems Development",
      period: "2021 — Present",
      location: "Remote / Philippines",
      description: [
        "Developed custom POS systems with C# WinForms, Java Swing, and SQL Server for retail operations, sales tracking, and inventory management.",
        "Built responsive client websites and landing pages for startups, local clothing brands, coffee shops, and real estate services.",
        "Delivered frontend solutions using React, Next.js, Vue.js, and Astro with accessible, mobile-first UI implementations.",
        "Collaborated directly with business owners to gather requirements, iterate on designs, and deploy functional software.",
      ],
      metrics:
        "Achieved +25% performance optimization and -40% bug reports across client codebases",
      tags: [
        "React",
        "Next.js",
        "Astro",
        "C# WinForms",
        "ASP.NET Core",
        "SQL Server",
        "Java Swing",
      ],
    },
    {
      title: "STI College Ortigas-Cainta",
      role: "Bachelor of Science in Information Technology (BSIT)",
      period: "Foundational Coursework",
      location: "Cainta, Rizal",
      description: [
        "Completed foundational curriculum covering object-oriented programming, data structures, relational database systems, and software engineering principles.",
        "Participated in collaborative team projects focusing on full-cycle software development and systems analysis.",
      ],
      tags: [
        "Software Engineering",
        "OOP",
        "Database Design",
        "System Architecture",
      ],
    },
    {
      title: "STI College Ortigas-Cainta",
      role: "Mobile App and Web Development (MAWD)",
      period: "Graduated 2022",
      location: "Cainta, Rizal",
      description: [
        "Senior High School Technical-Vocational Track with specialization in Web and Mobile Application Development.",
        "Recognized for academic excellence with an outstanding General Weighted Average (GWA) of 1.25.",
        "Developed early desktop and web applications with leadership roles in student technical projects.",
      ],
      metrics: "Graduated with 1.25 GWA and Academic Honors",
      tags: [
        "Web Development",
        "Mobile Fundamentals",
        "GWA: 1.25",
        "Academic Honors",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--color-rule)]">
      {/* Section Head: Vertical Stack (Gate 54) */}
      <div className="flex flex-col gap-2 mb-12 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
          // History & Background
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
          Experience & academic foundation.
        </h2>
      </div>

      {/* Timeline Stream */}
      <div className="flex flex-col gap-10 md:gap-12 relative">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 md:p-10 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-2xl flex flex-col gap-6 transition-colors duration-200">
            {/* Header with Title, Period, and Role */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 border-b border-[var(--color-rule-subtle)] pb-5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[var(--color-accent)] font-medium">
                  {item.role}
                </span>
              </div>

              <div className="flex flex-col md:items-end gap-0.5 font-mono text-xs text-[var(--color-ink-muted)]">
                <span className="font-semibold text-[var(--color-ink)]">
                  {item.period}
                </span>
                <span>{item.location}</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-2.5">
              {item.description.map((desc, dIdx) => (
                <li
                  key={dIdx}
                  className="font-body text-sm sm:text-base text-[var(--color-ink-muted)] flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[var(--color-accent)] font-mono shrink-0 mt-0.5">
                    •
                  </span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {/* Verified Metric Badge if applicable */}
            {item.metrics && (
              <div className="p-3 bg-[var(--color-paper-3)] border border-[var(--color-rule-subtle)] rounded-lg">
                <span className="font-mono text-xs font-medium text-[var(--color-ink)]">
                  Result: {item.metrics}
                </span>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[11px] px-2.5 py-1 bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
