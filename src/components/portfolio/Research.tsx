import { RESEARCH_DIRECTIONS, WRITING } from "@/data/content";
import { Section } from "./Section";

export function Research() {
  return (
    <Section
      id="research"
      index="05"
      command="systemctl status research"
      title={
        <>
          Research <span className="text-teal">directions</span>, honestly
          labeled.
        </>
      }
      hint="No papers yet — and I won't pretend otherwise. These are the directions I'm actively exploring toward graduate research."
      className="border-t border-linesoft"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {RESEARCH_DIRECTIONS.map((r) => (
          <article
            key={r.id}
            className="reveal card-hover rounded-xl border border-line bg-panel p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono2 text-[11px] text-faint">{r.id}</p>
              <span className="flex items-center gap-1.5 rounded-full border border-[hsl(var(--teal)/0.35)] bg-[hsl(var(--teal)/0.08)] px-2.5 py-1 font-mono2 text-[10px] text-teal">
                <span className="pulse-dot h-1 w-1 rounded-full bg-[hsl(var(--teal))]" />
                {r.status.replace("-", " ")}
              </span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold">
              {r.area}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-dim">
              {r.note}
            </p>
          </article>
        ))}
      </div>
      <p className="reveal mt-6 rounded-lg border border-dashed border-line bg-[hsl(var(--bg-soft)/0.5)] px-4 py-3 text-center font-mono2 text-[11.5px] text-faint">
        $ publications: 0 — target: first preprint before undergrad ·
        collaborators welcome →{" "}
        <a href="#contact" className="link-underline text-teal">
          ping me
        </a>
      </p>
    </Section>
  );
}

export function Writing() {
  return (
    <Section
      id="writing"
      index="06"
      command="tail -f notes.log"
      title={
        <>
          Technical <span className="text-teal">notes</span> & reflections.
        </>
      }
      hint="Long-form thinking published on LinkedIn — mostly Linux, systems, and learning in public."
      className="border-t border-linesoft bg-[hsl(var(--bg-soft)/0.35)]"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {WRITING.map((w) => (
          <article
            key={w.title}
            className="reveal card-hover flex flex-col overflow-hidden rounded-xl border border-line bg-panel"
          >
            {"image" in w && w.image && (
              <div className="relative h-40 overflow-hidden border-b border-linesoft">
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 font-mono2 text-[11px]">
                <span className="rounded border border-linesoft bg-panel2 px-2 py-0.5 text-dim">
                  {w.platform}
                </span>
                <span className="text-faint">{w.date}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                {w.title}
              </h3>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-dim">
                {w.excerpt}
              </p>
              <a
                href="https://www.linkedin.com/in/abdullah-al-jehan"
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-4 inline-flex min-h-[44px] items-center font-mono2 text-xs text-teal"
              >
                read on linkedin →
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
