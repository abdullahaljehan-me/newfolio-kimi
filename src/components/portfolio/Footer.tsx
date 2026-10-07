import { NAV_LINKS, PROFILE, SOCIALS } from "@/data/content";
import { SocialIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-linesoft">
      {/* big CTA */}
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="reveal font-mono2 text-xs text-faint">
          $ echo "EOF — thanks for scrolling"
        </p>
        <h2 className="reveal mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          LET'S BUILD{" "}
          <span className="text-teal">SOMETHING</span>
        </h2>
        <p className="reveal mx-auto mt-4 max-w-md text-sm leading-relaxed text-dim">
          Researchers, engineers, and fellow builders working on embedded
          systems, IoT, or hardware-software integration — my inbox is open.
        </p>
        <a
          href="#contact"
          className="reveal mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-md bg-[hsl(var(--teal))] px-6 font-mono2 text-sm font-medium text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5"
        >
          init_conversation →
        </a>
      </div>

      <div className="border-t border-linesoft bg-[hsl(var(--bg-soft)/0.5)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-mono2 text-sm">
              <span className="text-faint">~/</span>
              <span className="font-semibold">jehan</span>
              <span className="text-teal">.os</span>
            </p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-dim">
              {PROFILE.name} — aspiring embedded engineer exploring C, Linux,
              IoT &amp; robotics. Founding Advisor @ Kynatium Labs.
            </p>
            <p className="mt-3 font-mono2 text-[11px] text-faint">
              “In pursuit of endless horizons.”
            </p>
            <div className="mt-4 flex items-center gap-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-faint transition-colors hover:text-teal"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono2 text-[11px] text-faint">// sitemap</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="flex min-h-[36px] items-center font-mono2 text-xs text-dim hover:text-teal"
                  >
                    <span className="mr-1.5 text-faint">./</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono2 text-[11px] text-faint">// sysinfo</p>
            <ul className="mt-3 space-y-2 font-mono2 text-[11.5px] text-dim">
              <li>
                base: <span className="text-faint">{PROFILE.location}</span>
              </li>
              <li>
                tz: <span className="text-faint">{PROFILE.timezone}</span>
              </li>
              <li>
                mail:{" "}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="link-underline text-teal"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li>
                resume:{" "}
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-teal"
                >
                  pdf ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-linesoft">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 font-mono2 text-[10.5px] text-faint sm:flex-row sm:px-6">
            <p>© 2026 {PROFILE.name} · built with react, trpc & too much tea</p>
            <p>
              v2.0 — refreshed · <a href="#top" className="text-teal link-underline">back to top ↑</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
