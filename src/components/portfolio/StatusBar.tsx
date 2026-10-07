import { useClock } from "@/hooks/usePortfolio";
import { PROFILE } from "@/data/content";

export function StatusBar() {
  const time = useClock();
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-linesoft bg-[hsl(var(--bg)/0.9)] backdrop-blur-md">
      <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-4 font-mono2 text-[10px] tracking-wide text-faint sm:px-6 sm:text-[11px]">
        <div className="flex items-center gap-2">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--teal))]" />
          <span className="text-teal">status: operational</span>
          <span className="hidden text-faint sm:inline">· {PROFILE.availability.toLowerCase()}</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="hidden md:inline">region: asia/dhaka</span>
          <span className="hidden sm:inline">{PROFILE.coordinates}</span>
          <span className="tabular-nums text-dim">
            local {time} <span className="text-faint">gmt+6</span>
          </span>
        </div>
      </div>
    </div>
  );
}
