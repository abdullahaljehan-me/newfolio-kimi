import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "@/data/content";
import { useActiveSection } from "@/hooks/usePortfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.href.slice(1)));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-8 z-40 border-b border-linesoft bg-[hsl(var(--bg)/0.85)] backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex min-h-[44px] items-center gap-2 font-mono2 text-sm"
          onClick={() => setOpen(false)}
        >
          <span className="text-faint">~/</span>
          <span className="font-semibold text-[hsl(var(--ink))]">jehan</span>
          <span className="text-teal">.os</span>
          <span className="cursor-blink text-teal">▌</span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded px-2.5 py-2 font-mono2 text-xs transition-colors ${
                  active === l.href.slice(1)
                    ? "text-teal"
                    : "text-dim hover:text-[hsl(var(--ink))]"
                }`}
              >
                <span className="text-faint">./</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-[44px] items-center gap-1.5 rounded-md border border-[hsl(var(--teal)/0.5)] px-3.5 font-mono2 text-xs text-teal transition-colors hover:bg-[hsl(var(--teal)/0.1)] sm:flex"
          >
            resume.pdf ↗
          </a>
          {/* mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-line lg:hidden"
          >
            <span
              className={`h-px w-5 bg-[hsl(var(--ink))] transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-[hsl(var(--ink))] transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="border-t border-linesoft bg-[hsl(var(--bg))] lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {NAV_LINKS.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center gap-3 border-b border-linesoft font-mono2 text-sm text-dim last:border-0 hover:text-teal"
                >
                  <span className="text-faint">0{i + 1}</span>
                  <span className="text-teal">./</span>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[48px] items-center gap-2 font-mono2 text-sm text-teal"
              >
                resume.pdf ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
