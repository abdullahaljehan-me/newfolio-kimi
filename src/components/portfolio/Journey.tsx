import { EDUCATION, EXPERIENCE } from "@/data/content";
import { Section } from "./Section";

export function Journey() {
  return (
    <Section
      id="journey"
      index="03"
      command="git log --journey"
      title={
        <>
          Deployment <span className="text-teal">history</span>.
        </>
      }
      hint="Education and experience, versioned like releases — newest at HEAD."
      className="border-t border-linesoft"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
        {/* experience */}
        <div className="reveal">
          <p className="mb-6 font-mono2 text-xs text-faint">
            <span className="text-amber">⎇</span> experience — track record
          </p>
          <div className="space-y-6">
            {EXPERIENCE.map((e) => (
              <article
                key={e.title}
                className="card-hover relative rounded-xl border border-line bg-panel p-6"
              >
                <span className="absolute -left-px top-6 h-10 w-[3px] rounded-r bg-[hsl(var(--teal))]" />
                <p className="font-mono2 text-[11px] text-teal">{e.tag}</p>
                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">
                    {e.title}
                  </h3>
                  <span className="font-mono2 text-[11px] text-faint">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 font-mono2 text-xs text-dim">{e.org}</p>
                <ul className="mt-4 space-y-2.5">
                  {e.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13.5px] leading-relaxed text-dim"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--teal))]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* education */}
        <div className="reveal">
          <p className="mb-6 font-mono2 text-xs text-faint">
            <span className="text-amber">⎇</span> education — academic base
          </p>
          <div className="space-y-6">
            {EDUCATION.map((e) => (
              <article
                key={e.title}
                className="card-hover rounded-xl border border-line bg-panel p-6"
              >
                <p className="font-mono2 text-[11px] text-teal">{e.tag}</p>
                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {e.title}
                  </h3>
                  <span className="font-mono2 text-[11px] text-faint">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] text-dim">{e.org}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded border border-[hsl(var(--amber)/0.4)] bg-[hsl(var(--amber)/0.08)] px-2.5 py-1 font-mono2 text-[11px] text-amber">
                    ★ {e.grade}
                  </span>
                  <span className="rounded border border-line px-2.5 py-1 font-mono2 text-[11px] text-dim">
                    {e.stream}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
