import { useState } from "react";

export const Contact = () => {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };

  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => {
      setCopiedPhone(null);
    }, 2000);
  };

  return (
    <footer
      id="contact"
      className="pt-20 md:pt-28 pb-14 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--color-rule)]">
      {/* Statement Header */}
      <div className="max-w-3xl mb-14 md:mb-18">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] block mb-3">
          // Start a Conversation
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--color-ink)] mb-5">
          Let's build something durable together.
        </h2>
        <p className="font-body text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed">
          Open for full-time engineering roles, freelance contracts, and
          software consultation. Reach out directly via email or connect on
          social platforms.
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 md:mb-20">
        {/* Email Card */}
        <div className="p-6 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-2xl flex flex-col justify-between gap-5 transition-colors duration-200">
          <div>
            <span className="font-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-wider block mb-2">
              Email Addresses
            </span>
            <div className="flex flex-col gap-2 font-mono text-sm">
              <div className="flex items-center justify-between gap-2">
                <a
                  href="mailto:kweyzipotato@gmail.com"
                  className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors break-all">
                  kweyzipotato@gmail.com
                </a>
                <button
                  onClick={() => handleCopy("kweyzipotato@gmail.com")}
                  type="button"
                  title="Copy email"
                  aria-label="Copy kweyzipotato@gmail.com"
                  className="px-2 py-1 text-[10px] font-mono rounded bg-[var(--color-paper-3)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors shrink-0 cursor-pointer">
                  {copiedEmail === "kweyzipotato@gmail.com"
                    ? "Copied!"
                    : "Copy"}
                </button>
              </div>

              <div className="flex items-center justify-between gap-2">
                <a
                  href="mailto:krazypotato19@icloud.com"
                  className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors break-all">
                  krazypotato19@icloud.com
                </a>
                <button
                  onClick={() => handleCopy("krazypotato19@icloud.com")}
                  type="button"
                  title="Copy email"
                  aria-label="Copy krazypotato19@icloud.com"
                  className="px-2 py-1 text-[10px] font-mono rounded bg-[var(--color-paper-3)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors shrink-0 cursor-pointer">
                  {copiedEmail === "krazypotato19@icloud.com"
                    ? "Copied!"
                    : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="p-6 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-2xl flex flex-col justify-between gap-5 transition-colors duration-200">
          <div>
            <span className="font-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-wider block mb-2">
              Phone Numbers
            </span>
            <div className="flex flex-col gap-2 font-mono text-sm">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors break-all cursor-pointer">
                  (+63) 961-176-4662
                </p>
                <button
                  onClick={() => handleCopyPhone("(+63) 961-176-4662")}
                  type="button"
                  title="Copy number"
                  aria-label="Copy (+63) 961-176-4662"
                  className="px-2 py-1 text-[10px] font-mono rounded bg-[var(--color-paper-3)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors shrink-0 cursor-pointer">
                  {copiedPhone === "(+63) 961-176-4662" ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="flex items-center justify-between gap-2">
                <p className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors break-all cursor-pointer">
                  (+63) 966-847-8653
                </p>
                <button
                  onClick={() => handleCopyPhone("(+63) 966-847-8653")}
                  type="button"
                  title="Copy number"
                  aria-label="Copy (+63) 966-847-8653"
                  className="px-2 py-1 text-[10px] font-mono rounded bg-[var(--color-paper-3)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors shrink-0 cursor-pointer">
                  {copiedPhone === "(+63) 966-847-8653" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Timezone Card */}
        <div className="p-6 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-2xl flex flex-col justify-between gap-5 transition-colors duration-200">
          <div>
            <span className="font-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-wider block mb-2">
              Location & Zone
            </span>
            <p className="font-display text-base font-semibold text-[var(--color-ink)]">
              Naic, Cavite, Philippines
            </p>
            <p className="font-mono text-xs text-[var(--color-ink-muted)] mt-1">
              Timezone: GMT+8 (PHT)
            </p>
          </div>
          <span className="font-mono text-xs text-[var(--color-accent)]">
            Remote-friendly worldwide
          </span>
        </div>

        {/* Availability Card */}
        <div className="p-6 bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-2xl flex flex-col justify-between gap-5 transition-colors duration-200">
          <div>
            <span className="font-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-wider block mb-2">
              Engagement Models
            </span>
            <ul className="flex flex-col gap-1 font-body text-sm text-[var(--color-ink)]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Full-Time Engineering Roles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Freelance Web & POS Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Architecture Consultation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Colophon Bottom Bar */}
      <div className="pt-10 border-t border-[var(--color-rule-subtle)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex flex-col gap-0.5">
          <span className="font-display text-sm font-bold text-[var(--color-ink)]">
            Mark Andrew Duza
          </span>
          <span className="font-mono text-xs text-[var(--color-ink-muted)]">
            &copy; {currentYear} · All Rights Reserved
          </span>
        </div>

        {/* Social / Direct Link Channels */}
        <div className="flex flex-wrap items-center gap-5 font-mono text-xs text-[var(--color-ink-muted)]">
          <a
            href="https://www.facebook.com/dev.krazyPotato/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-ink)] transition-colors">
            Facebook
          </a>
          <a
            href="https://www.instagram.com/krzy.potatas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-ink)] transition-colors">
            Instagram
          </a>
          <a
            href="https://t.me/krzyPotatoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-ink)] transition-colors">
            Telegram
          </a>
          <a
            href="https://discordapp.com/users/1485329320674070659"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-ink)] transition-colors">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};
