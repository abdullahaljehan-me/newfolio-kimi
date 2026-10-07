import { useState } from "react";
import { PROJECTS } from "@/data/content";
import { ArrowUpRight } from "./icons";
import { Section } from "./Section";

const STATUS_STYLE: Record<string, string> = {
  shipped: "border-[hsl(var(--teal)/0.4)] bg-[hsl(var(--teal)/0.1)] text-teal",
  active: "border-[hsl(var(--amber)/0.4)] bg-[hsl(var(--amber)/0.1)] text-amber",
  iterating: "border-line bg-panel2 text-dim",
};

export function Projects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="projects"
      index="04"
      command="ls -la projects/"
      title={
        <>
          Things I built because{" "}
          <span className="text-teal">tutorials weren't enough</span>.
        </>
      }
      hint="Every entry is a real repository — expandable with the problem, the approach, and what shipped."
      className="border-t border-linesoft bg-[hsl(var(--bg-soft)/0.35)]"
    >
      <p className="reveal mb-6 font-mono2 text-xs text-faint">
        total 06 · <span className="text-teal">4 shipped</span> ·{" "}
        <span className="text-amber">2 active</span> · tap a row to expand
      </p>

      <div className="reveal space-y-3">
        {PROJECTS.map((p, i) => {
          const expanded = open === i;
          return (
            <article
              key={p.title}
              className={`overflow-hidden rounded-xl border bg-panel transition-colors ${
                expanded ? "border-[hsl(var(--teal)/0.5)]" : "border-line card-hover"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : i)}
                aria-expanded={expanded}
                className="flex min-h-[64px] w-full items-center gap-4 px-4 py-4 text-left sm:gap-6 sm:px-6"
              >
                <span className="font-mono2 text-xs text-faint">
                  {p.index}
                  <span className="text-faint/60">/06</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-base font-semibold sm:text-lg">
                    {p.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[12.5px] text-dim">
                    {p.tagline}
                  </span>
                </span>
                <span
                  className={`hidden rounded border px-2 py-1 font-mono2 text-[10px] sm:inline ${STATUS_STYLE[p.status]}`}
                >
                  ● {p.status}
                </span>
                <span
                  className={`font-mono2 text-teal transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
                >
                  ›
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${
                  expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-linesoft px-4 py-5 sm:px-6">
                    <div className="grid gap-5 md:grid-cols-3">
                      {[
                        { k: "problem", v: p.problem },
                        { k: "approach", v: p.approach },
                        { k: "outcome", v: p.outcome },
                      ].map((f) => (
                        <div key={f.k}>
                          <p className="mb-1.5 font-mono2 text-[11px] text-teal">
                            ## {f.k}
                          </p>
                          <p className="text-[13px] leading-relaxed text-dim">
                            {f.v}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-linesoft bg-panel2 px-2 py-1 font-mono2 text-[10.5px] text-dim"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[hsl(var(--teal)/0.4)] px-3 font-mono2 text-xs text-teal transition-colors hover:bg-[hsl(var(--teal)/0.1)]"
                      >
                        git clone <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="reveal mt-6 text-center font-mono2 text-xs text-faint">
        more on{" "}
        <a
          href="https://github.com/abdullahaljehan-me?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="link-underline text-teal"
        >
          github.com/abdullahaljehan-me ↗
        </a>
      </p>
    </Section>
  );
}
