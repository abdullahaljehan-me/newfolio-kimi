import { PROFILE, SKILL_MARQUEE } from "@/data/content";
import { Marquee, Section } from "./Section";

export function About() {
  return (
    <>
      <Marquee items={SKILL_MARQUEE} />
      <Section
        id="about"
        index="01"
        command="whoami"
        title={
          <>
            Code that meets the <span className="text-teal">physical world</span>.
          </>
        }
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* portrait card */}
          <div className="reveal">
            <div className="card-hover relative mx-auto max-w-sm overflow-hidden rounded-xl border border-line bg-panel">
              <img
                src={PROFILE.avatar}
                alt="Abdullah Al Jehan"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-line bg-[hsl(var(--bg)/0.85)] px-4 py-2.5 font-mono2 text-[11px] backdrop-blur">
                <span className="text-dim">fig.01 — jehan.raw</span>
                <span className="text-teal">{PROFILE.coordinates}</span>
              </div>
              {/* corner marks */}
              <span className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-[hsl(var(--teal)/0.7)]" />
              <span className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-[hsl(var(--teal)/0.7)]" />
            </div>
            <div className="mx-auto mt-4 flex max-w-sm flex-wrap gap-2">
              {[
                "Science Student & Aspiring Engineer",
                "Founding Advisor @ Kynatium Labs",
                PROFILE.location,
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono2 text-[11px] text-dim"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* narrative */}
          <div className="reveal space-y-5 text-[15px] leading-relaxed text-dim">
            {PROFILE.bio.map((p, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    <span className="font-display text-lg font-semibold text-[hsl(var(--ink))]">
                      Hi, I'm Jehan{" "}
                    </span>
                    {p.replace("Hi, I'm Jehan — ", "— ")}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
            <blockquote className="rounded-lg border-l-2 border-[hsl(var(--teal))] bg-panel px-5 py-4 font-mono2 text-[13px] text-[hsl(var(--ink))]">
              “Build with purpose. Lead with vision.”
              <span className="mt-2 block text-[11px] text-faint">
                — the mindset I ship with: build → break → iterate
              </span>
            </blockquote>
            <p>{PROFILE.vision}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
