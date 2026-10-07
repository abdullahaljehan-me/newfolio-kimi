import { useState, type FormEvent } from "react";
import { PROFILE, SOCIALS } from "@/data/content";
import { trpc } from "@/providers/trpc";
import { MailIcon, SocialIcon } from "./icons";
import { Section } from "./Section";

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const send = trpc.portfolio.sendMessage.useMutation();
  const utils = trpc.useUtils();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    setState("sending");
    setError("");
    try {
      await send.mutateAsync(payload);
      setState("sent");
      utils.portfolio.stats.get.invalidate();
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState("error");
      setError(
        err instanceof Error
          ? err.message.replace(/^\[|\]$/g, "")
          : "Transmission failed — try again.",
      );
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const inputCls =
    "w-full rounded-md border border-line bg-[hsl(var(--bg-soft))] px-3.5 py-3 text-sm text-[hsl(var(--ink))] placeholder:text-faint outline-none transition-colors focus:border-[hsl(var(--teal)/0.6)]";

  return (
    <Section
      id="contact"
      index="09"
      command="ping jehan"
      title={
        <>
          Let's build <span className="text-teal">something impactful</span>.
        </>
      }
      hint="Open to research collaborations, open-source contributions, and technical opportunities. Messages land in my real inbox queue — I read every one."
      className="border-t border-linesoft"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* left: direct channels */}
        <div className="reveal space-y-4">
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="font-mono2 text-[11px] text-faint">EMAIL</p>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-1.5 flex min-h-[44px] w-full items-center gap-2 text-left font-mono2 text-[13px] text-teal link-underline"
            >
              <MailIcon className="h-4 w-4 shrink-0" />
              {PROFILE.email}
              <span className="ml-auto text-[10px] text-faint">
                {copied ? "✓ copied" : "copy"}
              </span>
            </button>
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="font-mono2 text-[11px] text-faint">LOCATION</p>
            <p className="mt-1.5 text-sm">
              {PROFILE.location}
              <span className="ml-2 font-mono2 text-[11px] text-faint">
                {PROFILE.coordinates}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="font-mono2 text-[11px] text-faint">CHANNELS</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-dim transition-colors hover:border-[hsl(var(--teal)/0.5)] hover:text-teal"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
          <p className="rounded-lg border border-dashed border-[hsl(var(--teal)/0.35)] bg-[hsl(var(--teal)/0.05)] px-4 py-3 font-mono2 text-[11.5px] text-teal">
            ● {PROFILE.availability} — replies within ~48h
          </p>
        </div>

        {/* right: form */}
        <div className="reveal">
          {state === "sent" ? (
            <div className="glow-teal flex h-full min-h-[320px] flex-col items-center justify-center rounded-xl border border-[hsl(var(--teal)/0.5)] bg-panel p-8 text-center">
              <p className="font-mono2 text-4xl text-teal">✓</p>
              <h3 className="mt-4 font-display text-xl font-semibold">
                Message transmitted
              </h3>
              <p className="mt-2 max-w-sm font-mono2 text-xs leading-relaxed text-dim">
                $ status: delivered_to_inbox
                <br />$ expected_reply: &lt; 48h
              </p>
              <button
                type="button"
                onClick={() => setState("idle")}
                className="mt-6 min-h-[44px] rounded-md border border-line px-4 font-mono2 text-xs text-dim hover:border-[hsl(var(--teal)/0.5)] hover:text-teal"
              >
                send another →
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-line bg-panel p-6"
            >
              <p className="mb-5 font-mono2 text-[11px] text-faint">
                $ ./send_message --to {PROFILE.handle}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-mono2 text-[11px] text-dim">
                    --name *
                  </span>
                  <input
                    required
                    name="name"
                    minLength={2}
                    maxLength={120}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono2 text-[11px] text-dim">
                    --email *
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    maxLength={190}
                    placeholder="you@domain.com"
                    className={inputCls}
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block font-mono2 text-[11px] text-dim">
                  --message *
                </span>
                <textarea
                  required
                  name="message"
                  minLength={10}
                  maxLength={5000}
                  rows={6}
                  placeholder="Collaboration, research, a project idea, or just hello…"
                  className={`${inputCls} resize-y`}
                />
              </label>
              {state === "error" && (
                <p className="mt-3 rounded-md border border-[hsl(var(--red)/0.4)] bg-[hsl(var(--red)/0.08)] px-3 py-2 font-mono2 text-[11.5px] text-[hsl(var(--red))]">
                  error: {error}
                </p>
              )}
              <button
                type="submit"
                disabled={state === "sending"}
                className="mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[hsl(var(--teal))] font-mono2 text-sm font-medium text-[hsl(var(--primary-foreground))] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state === "sending" ? (
                  <>
                    <span className="cursor-blink">▌</span> transmitting…
                  </>
                ) : (
                  "send_message --now"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
