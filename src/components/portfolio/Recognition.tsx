import { CERTIFICATIONS, HONORS, INTERESTS } from "@/data/content";
import { Section } from "./Section";

export function Recognition() {
  return (
    <Section
      id="recognition"
      index="07"
      command="uptime --recognition"
      title={
        <>
          Recognition & <span className="text-teal">milestones</span>.
        </>
      }
      className="border-t border-linesoft"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div className="reveal space-y-4">
          {HONORS.map((h) => (
            <article
              key={h.title}
              className="card-hover overflow-hidden rounded-xl border border-line bg-panel"
            >
              {"image" in h && h.image && (
                <div className="border-b border-linesoft">
                  <img
                    src={h.image}
                    alt={h.title}
                    loading="lazy"
                    className="h-44 w-full object-cover object-top sm:h-52"
                  />
                </div>
              )}
              <div className="flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[hsl(var(--amber)/0.4)] bg-[hsl(var(--amber)/0.08)] text-xl text-amber">
                  ★
                </div>
                <div className="min-w-0">
                  <p className="font-mono2 text-[11px] text-amber">
                    {h.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-semibold leading-snug sm:text-lg">
                    {h.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-dim">
                    {h.detail}
                  </p>
                  <p className="mt-2 font-mono2 text-[11px] text-faint">
                    {h.year}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal">
          <div className="rounded-xl border border-line bg-panel p-6">
            <p className="mb-4 font-mono2 text-xs text-faint">
              <span className="text-teal">▸</span> ls certifications/ — in
              progress
            </p>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c.title}
                  className="flex items-start justify-between gap-3 border-b border-linesoft pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-[14px] font-medium">{c.title}</p>
                    <p className="mt-0.5 font-mono2 text-[11px] text-faint">
                      {c.org}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[hsl(var(--teal)/0.35)] bg-[hsl(var(--teal)/0.08)] px-2 py-0.5 font-mono2 text-[10px] text-teal">
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Interests() {
  return (
    <Section
      id="interests"
      index="08"
      command="./interests.sh"
      title={
        <>
          Beyond the <span className="text-teal">terminal</span>.
        </>
      }
      hint="The subjects that recharge me — each one feeds back into how I engineer."
      className="border-t border-linesoft bg-[hsl(var(--bg-soft)/0.35)]"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INTERESTS.map((it, i) => (
          <article
            key={it.title}
            className="reveal card-hover rounded-xl border border-line bg-panel p-6"
          >
            <p className="font-mono2 text-[11px] text-faint">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-teal">
              {it.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-dim">
              {it.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
