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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              4+
            </span>
            <span className="font-body text-xs md:text-sm text-zinc-500 font-light tracking-wide">
              Years Experience
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              15+
            </span>
            <span className="font-body text-xs md:text-sm text-zinc-500 font-light tracking-wide">
              Projects Delivered
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              100%
            </span>
            <span className="font-body text-xs md:text-sm text-zinc-500 font-light tracking-wide">
              Client Satisfaction
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 flex justify-start">
        <a
          href="#work"
          className="group flex items-center justify-center gap-2 bg-white text-black text-sm md:text-base px-6 py-4 rounded-md font-medium hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto">
          View selected works
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
};
