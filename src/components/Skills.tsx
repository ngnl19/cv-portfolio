export const Skills = () => {
  const categories = [
    {
      title: "Interface (Frontend)",
      skills: ["React.js", "Next.js", "Vue.js", "Astro", "Tailwind CSS"],
    },
    {
      title: "Systems (Backend / DB)",
      skills: ["Java", "Node.js", "C#", "ASP.NET Core", "SQL Server", "MySQL"],
    },
    { title: "Native Desktop", skills: [".NET C# WinForms", "Java Swing"] },
  ];

  return (
    <section
      id="stack"
      className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto border-t border-border-charcoal">
      <h2 className="font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 mb-12 md:mb-16">
        // Technical Arsenal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-charcoal border-y border-border-charcoal">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="py-6 px-2 md:p-8 group hover:md:bg-white/1 transition-colors duration-300">
            <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4 md:mb-6">
              {cat.title}
            </h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              {cat.skills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="font-display text-base md:text-lg text-zinc-400 md:group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
