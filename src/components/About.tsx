export const About = () => {
  const capabilities = [
    {
      index: "01",
      title: "Frontend Engineering & UI/UX",
      description:
        "Building responsive, high-performance interfaces with React, Next.js, Vue.js, Astro, and Tailwind CSS. Focused on accessible interactions, speed, and clean state handling.",
      tags: ["React.js", "Next.js", "Vue.js", "Astro", "Tailwind CSS"],
    },
    {
      index: "02",
      title: "Desktop Applications & POS Systems",
      description:
        "Developing desktop-based point-of-sale systems with inventory management, sales tracking, and transaction processing using C# WinForms, Java Swing, and SQL Server.",
      tags: ["C# WinForms", "Java Swing", "Desktop Architecture", "Inventory"],
    },
    {
      index: "03",
      title: "Backend Services & REST APIs",
      description:
        "Architecting scalable API endpoints with ASP.NET Core and Node.js. Designing robust relational database schemas and queries in SQL Server and MySQL.",
      tags: ["ASP.NET Core Web API", "Node.js", "SQL Server", "MySQL"],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--color-rule)]">
      {/* Section Head: Vertical Stack (Gate 54) */}
      <div className="flex flex-col gap-2 mb-12 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
          // Profile & Capability
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
          Practical engineering across web, desktop, and APIs.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Bio & Philosophy (Left Column) */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-[var(--color-ink-muted)] font-body text-base leading-relaxed">
          <p>
            I am a{" "}
            <strong className="font-medium text-[var(--color-ink)]">
              Junior Software Developer
            </strong>{" "}
            based in Naic, Cavite, Philippines. Since 2021, I have worked with
            startups, local retailers, and small businesses to deliver custom
            software solutions.
          </p>
          <p>
            My work spans full-stack web applications, desktop POS systems, and
            scalable backend REST APIs. I value clear code architecture, UI/UX
            precision, and measurable performance gains—delivering up to 25%
            faster load times and 40% bug reductions across real-world client
            projects.
          </p>

          <div className="pt-4 border-t border-[var(--color-rule-subtle)] flex flex-col gap-2 font-mono text-xs text-[var(--color-ink-faint)]">
            <div className="flex items-center justify-between">
              <span>Location</span>
              <span className="text-[var(--color-ink)] font-medium">
                Naic, Cavite, PH
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Languages</span>
              <span className="text-[var(--color-ink)] font-medium">
                English, Tagalog
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Status</span>
              <span className="text-[var(--color-accent)] font-medium">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Capability Cards (Right Column) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.index}
              className="p-6 md:p-7 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-xl flex flex-col gap-3.5 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                  {cap.index} // Capability
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-rule)]" />
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-ink)]">
                {cap.title}
              </h3>

              <p className="font-body text-sm text-[var(--color-ink-muted)] leading-relaxed">
                {cap.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {cap.tags.map((tag, tIdx) => (
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
      </div>
    </section>
  );
};
