export const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white pt-36 py-20 px-6 md:px-12 lg:px-16 xl:px-24 max-w-7xl mx-auto">
      <div className="flex justify-between items-center border-b border-zinc-800/40 pb-8 mb-16">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          Available for freelance — 2026
        </span>
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
        <div className="xl:col-span-5 flex flex-col justify-between h-full gap-8">
          <div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
              Mark Andrew Duza
            </span>
            <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-normal tracking-tight leading-[1.05] text-zinc-100">
              Software developer specializing in modern web technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-zinc-300">
              React & Next.js
            </span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-zinc-300">
              Node.js
            </span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-zinc-300">
              Full-stack
            </span>
          </div>
        </div>

        <div className="xl:col-span-7 flex flex-col gap-12 w-full">
          {/* Bio Paragraphs */}
          <div className="flex flex-col gap-6 font-body text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              Freelance software developer with hands-on experience building
              responsive web applications, point-of-sale systems, and business
              websites for startups and small businesses.
            </p>
            <p>
              Skilled in both frontend and backend development, including
              desktop application development. Strong foundation in software
              development principles, UI/UX implementation, and API integration.
            </p>
          </div>

          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col gap-8 w-full">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
              Services
            </span>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="font-mono text-xs text-zinc-600 pt-1">01</span>
                <div>
                  <h4 className="font-display text-base md:text-lg font-normal text-zinc-200">
                    Web Development
                  </h4>
                  <p className="font-body text-xs md:text-sm text-zinc-500 mt-1">
                    Responsive websites and web applications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <span className="font-mono text-xs text-zinc-600 pt-1">02</span>
                <div>
                  <h4 className="font-display text-base md:text-lg font-normal text-zinc-200">
                    POS Systems
                  </h4>
                  <p className="font-body text-xs md:text-sm text-zinc-500 mt-1">
                    Desktop applications for business operations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <span className="font-mono text-xs text-zinc-600 pt-1">03</span>
                <div>
                  <h4 className="font-display text-base md:text-lg font-normal text-zinc-200">
                    API Development
                  </h4>
                  <p className="font-body text-xs md:text-sm text-zinc-500 mt-1">
                    Scalable backend services and REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
