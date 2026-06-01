interface ProjectItem {
  id: string;
  title: string;
  stack: string;
  description: string;
}

const projectData: ProjectItem[] = [
  {
    id: "01",
    title: "POS Management System",
    stack: "C# WinForms / Java Swing / ASP.NET Core / SQL Server",
    description:
      "Desktop-based point-of-sale application with inventory management, sales tracking, and transaction processing for small business operations.",
  },
  {
    id: "02",
    title: "Business Landing Pages",
    stack: "React / Next.js / Vue.js / Astro.js / Node.js / Tailwind",
    description:
      "Responsive and mobile-friendly landing pages for startup businesses with modern UI/UX design.",
  },
  {
    id: "03",
    title: "Business Management APIs",
    stack: "ASP.Net Core / C# / SQL Server",
    description:
      "Scalable REST APIs for handling business transactions and inventory records with authentication.",
  },
  {
    id: "04",
    title: "Web Application Projects",
    stack: "React / Next.js / Vue.js / Astro.js / Node.js / Tailwind",
    description:
      "Frontend interfaces and dynamic components with API integration",
  },
];

export const Projects = () => {
  return (
    <section
      id="work"
      className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto border-t border-border-charcoal">
      <div className="flex items-baseline justify-between mb-12 md:mb-20">
        <h2 className="font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500">
          // Selected Architecture
        </h2>
        <span className="text-[10px] md:text-xs font-mono text-zinc-600">
          ({projectData.length}) Projects
        </span>
      </div>

      <div className="flex flex-col gap-6 md:gap-12">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 p-6 md:p-8 bg-zinc-950/40 rounded-xl border border-white/3 hover:md:border-white/8 transition-all duration-500 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 bg-radial from-white/2 to-transparent transition-opacity duration-700 pointer-events-none" />

            <div className="lg:col-span-4 flex flex-col justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono text-zinc-600 block mb-1">
                  {project.id} //
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase mt-1 md:mt-0">
                {project.stack}
              </span>
            </div>

            <div className="lg:col-span-8 flex items-center mt-2 lg:mt-0">
              <p className="text-text-muted font-light text-xs md:text-sm leading-relaxed md:group-hover:text-zinc-300 transition-colors">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
