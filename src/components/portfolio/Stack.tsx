import { SKILL_GROUPS, STACK_YAML } from "@/data/content";
import { Section } from "./Section";

function YamlBlock() {
  const colored = STACK_YAML.split("\n").map((line, i) => {
    let cls = "text-dim";
    if (line.startsWith("#")) cls = "text-faint italic";
    else if (/^[a-z_]+:/.test(line) && !line.startsWith(" "))
      cls = "text-teal";
    else if (/^\s+[a-z_]+:/.test(line)) cls = "text-[hsl(var(--ink))]";
    else if (line.trim().startsWith("-")) cls = "text-amber";
    return (
      <span key={i} className={`block ${cls}`}>
        <span className="mr-4 inline-block w-6 select-none text-right text-faint">
          {i + 1}
        </span>
        {line || " "}
      </span>
    );
  });
  return (
    <div className="card-hover overflow-hidden rounded-xl border border-line bg-panel">
      <div className="flex items-center justify-between border-b border-linesoft bg-[hsl(var(--panel-2))] px-4 py-2.5">
        <span className="font-mono2 text-[11px] text-faint">
          infra/stack.yaml
        </span>
        <span className="font-mono2 text-[11px] text-teal">
          tracked · drift checked
        </span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono2 text-[12px] leading-6 sm:text-[13px]">
        {colored}
      </pre>
    </div>
  );
}

function LevelBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-[13px] text-[hsl(var(--ink))]">{name}</span>
        <span className="font-mono2 text-[11px] text-teal">{level}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-[hsl(var(--panel-2))]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--teal-soft))] to-[hsl(var(--teal))] transition-[width] duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <Section
      id="stack"
      index="02"
      command="cat stack.yaml"
      title={
        <>
          The toolchain, <span className="text-teal">declared</span>.
        </>
      }
      hint="Honest proficiency, arranged from strongest to actively-progressing. No inflated bars — this is a learning map, not marketing."
      className="border-t border-linesoft bg-[hsl(var(--bg-soft)/0.35)]"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="reveal">
          <YamlBlock />
        </div>
        <div className="reveal grid gap-5">
          {SKILL_GROUPS.map((g) => (
            <div
              key={g.title}
              className="card-hover rounded-xl border border-line bg-panel p-5"
            >
              <p className="mb-4 flex items-center gap-2 font-mono2 text-xs text-teal">
                <span className="text-faint">▸</span> {g.title.toLowerCase()}
              </p>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <LevelBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
