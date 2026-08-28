interface ProjectItem {
  id: string;
  title: string;
  category: string;
  stack: string[];
  description: string;
  metrics?: string;
  features: string[];
}

const projects: ProjectItem[] = [
  {
    id: "01",
    title: "POS & Inventory Management System",
    category: "Desktop & Systems Engineering",
    stack: ["C# WinForms", "ASP.NET Core Web API", "SQL Server", "Java Swing"],
    description:
      "A complete desktop point-of-sale software engineered for retail and small business operations. Features comprehensive inventory tracking, barcode transaction processing, and sales analytics.",
    metrics: "Production-ready inventory & sales processing",
    features: [
      "Real-time inventory decrement & stock alert system",
      "Fast transaction checkout and receipt data logging",
      "Normalized SQL Server database design for business reporting",
    ],
  },
  {
    id: "02",
    title: "Business Management REST API",
    category: "Backend & Cloud Architecture",
    stack: ["ASP.NET Core", "C#", "SQL Server", "JWT Auth", "REST APIs"],
    description:
      "Scalable backend services and RESTful APIs developed to power business transactions, client management, and database synchronization.",
    metrics: "+30% transaction handling capacity for startup clients",
    features: [
      "Secure authentication and role-based endpoint routing",
      "Optimized query execution for high-throughput reporting",
      "Clean separation of concerns with repository patterns",
    ],
  },
  {
    id: "03",
    title: "Business Landing Pages & Client Sites",
    category: "Frontend & Performance",
    stack: ["React", "Next.js", "Vue.js", "Astro", "Tailwind CSS"],
    description:
      "High-conversion, mobile-first websites and landing experiences crafted for startups, local clothing brands, coffee shops, and real estate services.",
    metrics: "+25% faster load performance & -40% bug reports",
    features: [
      "Fluid responsive layout tested across 320px–1920px viewports",
      "Accessible component hierarchy with optimized web vitals",
      "Tailored branding and custom UI/UX interactions",
    ],
  },
  {
    id: "04",
    title: "Dynamic Web Application Suite",
    category: "Full-Stack Web Development",
    stack: ["React.js", "Next.js", "Node.js", "MySQL", "Tailwind"],
    description:
      "Interactive full-stack web applications featuring reusable component libraries, dynamic data fetching, and stateful dashboard workflows.",
    metrics: "Reusable architecture with modular UI primitives",
    features: [
      "Component-driven design with strict TypeScript types",
      "REST API integration with optimistic client-side updates",
      "Clean dark/light visual states and error boundary handling",
    ],
  },
];

export const Projects = () => {
  return (
    <section
      id="work"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--color-rule)]">
      {/* Section Head: Single Column Vertical Stack (Gate 54) */}
      <div className="flex flex-col gap-2 mb-12 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
          // Selected Work & Architecture
        </span>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
            Verified projects & systems delivered.
          </h2>
          <span className="font-mono text-xs text-[var(--color-ink-muted)]">
            ({projects.length} Case Studies)
          </span>
        </div>
      </div>

      {/* Project Spec Cards */}
      <div className="flex flex-col gap-6 md:gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="p-6 sm:p-8 md:p-10 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-2xl flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 hover:border-[var(--color-rule)]/80 transition-colors duration-200">
            {/* Project Header & Meta (4 columns on lg) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-semibold">
                  <span>{project.id} //</span>
                  <span>{project.category}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)] leading-snug">
                  {project.title}
                </h3>
              </div>

              {project.metrics && (
                <div className="p-3 bg-[var(--color-paper-3)] border border-[var(--color-rule-subtle)] rounded-lg">
                  <span className="font-mono text-xs font-medium text-[var(--color-ink)] block">
                    Impact: {project.metrics}
                  </span>
                </div>
              )}
            </div>

            {/* Project Description & Key Highlights (8 columns on lg) */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-5">
              <p className="font-body text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed">
                {project.description}
              </p>

              {/* Feature Points */}
              <ul className="flex flex-col gap-2 border-t border-[var(--color-rule-subtle)] pt-4">
                {project.features.map((feat, fIdx) => (
                  <li
                    key={fIdx}
                    className="font-body text-xs sm:text-sm text-[var(--color-ink-muted)] flex items-start gap-2">
                    <span className="text-[var(--color-accent)] font-mono shrink-0">
                      →
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] px-2.5 py-1 bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
