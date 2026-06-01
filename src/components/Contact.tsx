const currentYear = new Date().getFullYear();

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="max-w-2xl mb-16">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-zinc-100">
          Let's work together
        </h2>
        <p className="text-zinc-400 font-body text-base md:text-lg font-light leading-relaxed">
          Have a project in mind? Let's discuss how I can help bring your ideas
          to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
        <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-35">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-3">
              Email
            </span>
            <div className="flex flex-col gap-1">
              <p className="font-display text-base md:text-lg font-normal text-zinc-200 hover:text-white transition-colors break-all cursor-pointer">
                kweyzipotato@gmail.com
              </p>
              <p className="font-display text-base md:text-lg font-normal text-zinc-200 hover:text-white transition-colors break-all cursor-pointer">
                krazypotato19@icloud.com
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-35">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-3">
              Location
            </span>
            <p className="font-display text-base md:text-lg font-normal text-zinc-200">
              Naic, Cavite, Philippines
            </p>
          </div>
        </div>

        <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-35 md:col-span-2 lg:col-span-1">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-3">
              Availability
            </span>
            <p className="font-display text-base md:text-lg font-normal text-zinc-200">
              Freelance
            </p>
            <p className="font-display text-base md:text-lg font-normal text-zinc-200">
              Employment
            </p>
            <p className="font-display text-base md:text-lg font-normal text-zinc-200">
              Consultation
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="font-display text-base font-normal text-zinc-200">
            &copy; {currentYear} Mark Andrew Duza
          </h3>
          <p className="font-body text-xs text-zinc-500 font-light mt-0.5">
            Software Developer — Full-stack specialization
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-center text-zinc-500">
          <a
            href="https://www.facebook.com/dev.krazyPotato/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/krzy.potatas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Instagram">
            <svg
              className="w-5 h-5 stroke-current fill-none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a
            href="https://t.me/krzyPotatoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Telegram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.48 2.75-2.7.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.03-.1.02-1.69 1.07-4.77 3.15-.45.3-.86.45-1.23.44-.41-.01-1.2-.24-1.79-.43-.72-.24-1.29-.37-1.24-.78.03-.21.32-.43.89-.66 3.48-1.51 5.8-2.52 6.96-3.01 3.31-1.4 4-.1.4 1.12z" />
            </svg>
          </a>

          <a
            href="https://discordapp.com/users/1485329320674070659"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Discord">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
