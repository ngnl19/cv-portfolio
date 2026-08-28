export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      role: "Core Computation",
      skills: [
        { name: "JavaScript", note: "ES6+, Async, DOM" },
        { name: "C#", note: ".NET, WinForms, APIs" },
        { name: "Java", note: "Swing, OOP, Core" },
        { name: "Python", note: "Scripting, Logic" },
      ],
    },
    {
      title: "Frontend Engineering",
      role: "Interface & Experience",
      skills: [
        { name: "React.js", note: "Hooks, State, UI" },
        { name: "Next.js", note: "App Router, SSR" },
        { name: "Vue.js", note: "Reactivity, SPA" },
        { name: "Astro", note: "Content, Islands" },
        { name: "Tailwind CSS", note: "v3 & v4, Design Tokens" },
        { name: "HTML5 / CSS3", note: "Semantic, Responsive" },
        { name: "Bootstrap", note: "Component Layouts" },
      ],
    },
    {
      title: "Backend & Database",
      role: "Systems & Data Stores",
      skills: [
        { name: "ASP.NET Core Web API", note: "REST, Services, Auth" },
        { name: "Node.js", note: "Express, Runtime" },
        { name: "SQL Server", note: "T-SQL, Relations, Queries" },
        { name: "MySQL", note: "Schema Design, CRUD" },
      ],
    },
    {
      title: "Desktop & Workflow Tools",
      role: "Native & Developer Tooling",
      skills: [
        { name: ".NET C# WinForms", note: "Desktop POS & Tools" },
        { name: "Java Swing", note: "GUI Applications" },
        { name: "Git & Version Control", note: "Workflow, Branching" },
        { name: "Unix / Linux", note: "CLI, Shell Scripting" },
        { name: "VS Code & Visual Studio", note: "Primary IDEs" },
        { name: "Figma & Canva", note: "UI Prototyping" },
      ],
    },
  ];

  return (
    <section
      id="stack"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--color-rule)]">
      {/* Section Head: Vertical Stack (Gate 54) */}
      <div className="flex flex-col gap-2 mb-12 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
          // Technical Stack & Tools
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
          Engineering capabilities & tooling.
        </h2>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-2xl flex flex-col justify-between gap-6 transition-colors duration-200">
            <div className="flex flex-col gap-1 border-b border-[var(--color-rule-subtle)] pb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                  {category.title}
                </h3>
                <span className="font-mono text-xs text-[var(--color-accent)] font-medium">
                  {category.skills.length} Technologies
                </span>
              </div>
              <span className="font-mono text-xs text-[var(--color-ink-muted)]">
                {category.role}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 bg-[var(--color-paper)] border border-[var(--color-rule-subtle)] rounded-lg flex flex-col gap-0.5">
                  <span className="font-display text-sm font-semibold text-[var(--color-ink)]">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--color-ink-muted)]">
                    {skill.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
