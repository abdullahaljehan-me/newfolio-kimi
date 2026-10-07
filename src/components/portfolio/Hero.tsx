import { useEffect, useState } from "react";
import { HERO_STATS, PROFILE, SOCIALS } from "@/data/content";
import { useTypewriter } from "@/hooks/usePortfolio";
import { SocialIcon } from "./icons";

const BOOT_LINES = [
  { p: "$", t: "whoami" },
  { p: ">", t: "abdullah_al_jehan — aspiring embedded engineer", dim: true },
  { p: "$", t: "cat /etc/motd" },
  { p: ">", t: '"In pursuit of endless horizons."', dim: true },
  { p: "$", t: "systemctl status education" },
  { p: ">", t: "● active — HSC complete · GPA 5.00/5.00 · next: engineering", ok: true },
  { p: "$", t: "uptime --focus" },
  { p: ">", t: "embedded · iot · c/c++ · linux · robotics", dim: true },
];

function TerminalCard() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= BOOT_LINES.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), count === 0 ? 500 : 620);
    return () => clearTimeout(id);
  }, [count]);

  return (
    <div className="glow-teal w-full overflow-hidden rounded-xl border border-line bg-[hsl(var(--panel))]">
      <div className="flex items-center gap-1.5 border-b border-linesoft bg-[hsl(var(--panel-2))] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--red)/0.7)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--amber)/0.7)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--teal)/0.7)]" />
        <span className="ml-3 font-mono2 text-[11px] text-faint">
          jehan@dev: ~ — bash
        </span>
      </div>
      <div className="min-h-[248px] p-4 font-mono2 text-[12px] leading-6 sm:text-[13px]">
        {BOOT_LINES.slice(0, count).map((l, i) => (
          <p key={i} className="whitespace-pre-wrap">
            <span className={l.p === "$" ? "text-teal" : "text-faint"}>
              {l.p}{" "}
            </span>
            <span
              className={
                l.ok ? "text-teal" : l.dim ? "text-dim" : "text-[hsl(var(--ink))]"
              }
            >
              {l.t}
            </span>
          </p>
        ))}
        <p>
          <span className="text-teal">$ </span>
          <span className="cursor-blink text-[hsl(var(--ink))]">▌</span>
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const role = useTypewriter(PROFILE.roles);
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--teal) / 0.5), transparent)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-44">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--teal)/0.35)] bg-[hsl(var(--teal)/0.08)] px-3.5 py-1.5 font-mono2 text-[11px] text-teal">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[hsl(var(--teal))]" />
            {PROFILE.availability}
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            ABDULLAH
            <br />
            AL <span className="text-teal">JEHAN</span>
          </h1>
          <p className="mt-5 flex h-7 items-center font-mono2 text-sm text-dim sm:text-base">
            <span className="mr-2 text-faint">&gt;</span>
            {role}
            <span className="cursor-blink ml-0.5 text-teal">▌</span>
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-dim">
            Science student from Dhaka with a perfect-GPA track record, building
            toward embedded systems &amp; IoT engineering. I like my software
            close to the metal —{" "}
            <span className="text-[hsl(var(--ink))]">C, Linux, sensors</span> —
            and my learning hands-on: build, break, iterate.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="flex min-h-[44px] items-center gap-2 rounded-md bg-[hsl(var(--teal))] px-5 font-mono2 text-sm font-medium text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5"
            >
              ./view_projects
            </a>
            <a
              href="#contact"
              className="flex min-h-[44px] items-center gap-2 rounded-md border border-line px-5 font-mono2 text-sm text-dim transition-colors hover:border-[hsl(var(--teal)/0.5)] hover:text-teal"
            >
              ping jehan →
            </a>
          </div>

          <div className="mt-8 flex items-center gap-1.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-transparent text-faint transition-colors hover:border-line hover:text-teal"
              >
                <SocialIcon icon={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="reveal flex flex-col gap-5">
          <TerminalCard />
        </div>
      </div>

      {/* stats strip */}
      <div className="border-y border-linesoft bg-[hsl(var(--bg-soft)/0.6)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-linesoft sm:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="reveal px-4 py-6 sm:px-6">
              <p className="font-display text-2xl font-bold text-teal sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 font-mono2 text-[11px] text-faint">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
