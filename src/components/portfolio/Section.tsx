import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  command: string;
  title: ReactNode;
  hint?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  command,
  title,
  hint,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="reveal mb-10 sm:mb-14">
          <p className="font-mono2 text-xs text-faint">
            <span className="text-teal">{index}</span> — {command}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {hint && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-dim">
              {hint}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden border-y border-linesoft bg-[hsl(var(--bg-soft)/0.5)] py-3.5">
      <div className="animate-marquee flex w-max items-center gap-8">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap font-mono2 text-xs text-dim"
          >
            {item}
            <span className="text-teal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
