import { useState, type FormEvent } from "react";
import { trpc } from "@/providers/trpc";
import { Section } from "./Section";

function timeAgo(date: Date) {
  const d = new Date(date);
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function Guestbook() {
  const utils = trpc.useUtils();
  const entries = trpc.portfolio.guestbook.list.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  const stats = trpc.portfolio.stats.get.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  const sign = trpc.portfolio.guestbook.sign.useMutation({
    onSuccess: () => {
      utils.portfolio.guestbook.list.invalidate();
      utils.portfolio.stats.get.invalidate();
    },
  });
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setError("");
    try {
      await sign.mutateAsync({
        name: String(fd.get("name") ?? ""),
        message: String(fd.get("message") ?? ""),
      });
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign.");
    }
  };

  const inputCls =
    "w-full rounded-md border border-line bg-[hsl(var(--bg-soft))] px-3.5 py-2.5 text-sm placeholder:text-faint outline-none transition-colors focus:border-[hsl(var(--teal)/0.6)]";

  return (
    <Section
      id="guestbook"
      index="10"
      command="tail /var/log/visitors.log"
      title={
        <>
          Visitor <span className="text-teal">log</span>.
        </>
      }
      hint="Live activity, served from the site's database — sign the wall and leave a trace."
      className="border-t border-linesoft bg-[hsl(var(--bg-soft)/0.35)]"
    >
      {/* live counters */}
      <div className="reveal mb-8 grid grid-cols-3 gap-3">
        {[
          {
            v: stats.data ? stats.data.visits.toLocaleString() : "···",
            k: "total visits",
          },
          {
            v: stats.data ? String(stats.data.guestbookCount) : "···",
            k: "signatures",
          },
          {
            v: stats.data ? String(stats.data.messageCount) : "···",
            k: "messages rx",
          },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-xl border border-line bg-panel px-4 py-4 text-center"
          >
            <p className="font-display text-xl font-bold text-teal tabular-nums sm:text-2xl">
              {s.v}
            </p>
            <p className="mt-1 font-mono2 text-[10.5px] text-faint">{s.k}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        {/* sign form */}
        <form
          onSubmit={onSubmit}
          className="reveal h-fit rounded-xl border border-line bg-panel p-5"
        >
          <p className="mb-4 font-mono2 text-[11px] text-faint">
            $ sign_guestbook --append
          </p>
          <input
            required
            name="name"
            minLength={2}
            maxLength={80}
            placeholder="name / handle"
            className={inputCls}
          />
          <textarea
            required
            name="message"
            minLength={2}
            maxLength={500}
            rows={3}
            placeholder="leave a note…"
            className={`${inputCls} mt-3 resize-none`}
          />
          {error && (
            <p className="mt-2 font-mono2 text-[11px] text-[hsl(var(--red))]">
              error: {error}
            </p>
          )}
          <button
            type="submit"
            disabled={sign.isPending}
            className="mt-4 min-h-[44px] w-full rounded-md border border-[hsl(var(--teal)/0.5)] font-mono2 text-xs text-teal transition-colors hover:bg-[hsl(var(--teal)/0.1)] disabled:opacity-60"
          >
            {sign.isPending ? "writing to log…" : "append_entry"}
          </button>
        </form>

        {/* entries */}
        <div className="reveal">
          {entries.isLoading && (
            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-20 animate-pulse rounded-xl border border-line bg-panel"
                />
              ))}
            </div>
          )}

          {entries.isError && (
            <p className="rounded-xl border border-line bg-panel p-6 text-center font-mono2 text-xs text-dim">
              log unavailable right now — try reloading.
            </p>
          )}

          {entries.data && entries.data.length === 0 && (
            <div className="flex h-full min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed border-line bg-[hsl(var(--bg-soft)/0.4)] p-8 text-center">
              <p className="font-mono2 text-sm text-faint">
                /var/log/visitors.log is empty
              </p>
              <p className="mt-2 font-mono2 text-[11px] text-faint">
                be the first entry — history starts with you
              </p>
            </div>
          )}

          {entries.data && entries.data.length > 0 && (
            <ul className="space-y-3">
              {entries.data.map((en) => (
                <li
                  key={en.id}
                  className="rounded-xl border border-line bg-panel p-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-mono2 text-[13px] font-medium text-teal">
                      @{en.name.replace(/\s+/g, "_").toLowerCase()}
                    </p>
                    <span className="shrink-0 font-mono2 text-[10.5px] text-faint">
                      {timeAgo(en.createdAt)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-dim">
                    {en.message}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}
