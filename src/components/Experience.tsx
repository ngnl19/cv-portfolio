interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
}

export const Experience = () => {
  const timelineData: TimelineItem[] = [
    {
      title: "Freelance Software Developer",
      subtitle: "Remote",
      date: "2021 — Present",
      description:
        "Developed POS systems, responsive landing pages, and web applications for startups and small businesses. Collaborated with clients on requirements gathering, UI/UX improvements, and feature implementation.",
      tags: ["React", "Astro.js", "C#", "SQL Server", "Java Swing", "etc."],
    },
    {
      title: "Bachelor of Science in Information Technology",
      subtitle: "STI College Ortigas-Cainta",
      date: "In Progress",
      description:
        "Foundational coursework completed. Focused on software development principles, database management, and modern development practices.",
    },
    {
      title: "Mobile App and Web Development (MAWD)",
      subtitle: "STI College Ortigas-Cainta",
      date: "Graduated 2022",
      description:
        "GWA: 1.25 — Recognized for academic excellence and leadership experience.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black text-white pt-30 py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <h2 className="font-display text-xs uppercase tracking-[0.2em] text-zinc-500 mb-16">
        // Technical Knowledge
      </h2>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-20 text-zinc-100">
        Experience & education
      </h2>

      <div className="flex flex-col">
        {timelineData.map((item, index) => (
          <div key={index} className="flex group">
            <div className="flex flex-col items-center mr-6 md:mr-10">
              <div className="w-3.5 h-3.5 rounded-full bg-white ring-4 ring-black z-10 transition-transform duration-300 group-hover:scale-110" />

              {index !== timelineData.length - 1 ? (
                <div className="w-px grow bg-zinc-800/80 my-2" />
              ) : (
                <div className="w-px h-24 bg-linear-to-b from-zinc-800/80 to-transparent my-2" />
              )}
            </div>

            <div className="grow pb-16 md:pb-20">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                <h3 className="font-display text-xl md:text-2xl font-normal text-zinc-100">
                  {item.title}
                </h3>
                <span className="font-mono text-xs md:text-sm text-zinc-600 tracking-wide shrink-0">
                  {item.date}
                </span>
              </div>

              {/* Subtitle Label */}
              <span className="font-body text-sm text-zinc-500 font-light block mb-4">
                {item.subtitle}
              </span>

              {/* Core Text Body */}
              <p className="font-body text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-3xl">
                {item.description}
              </p>

              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-xs text-zinc-400 bg-zinc-950 px-3 py-1.5 border border-zinc-900 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
