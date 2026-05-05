'use client';

import {
  Cog,
  Container,
  FlaskConical,
  Fuel,
  Microscope,
  Package,
  Utensils,
} from 'lucide-react';

const ICONS = [
  Utensils,
  FlaskConical,
  Cog,
  Fuel,
  Microscope,
  Container,
] as const;

type Props = {
  items: readonly string[];
};

/** Cards da secção Mercados — ícones alinhados à ordem fixa PT/EN em `translations`. */
export function MarketsAtendidosGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {items.map((item, i) => {
        const Icon = ICONS[i] ?? Package;
        const n = String(i + 1).padStart(2, '0');
        return (
          <div
            key={`${n}-${item}`}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_-4px_rgba(15,23,42,0.08)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-primary-300/60 hover:shadow-[0_12px_32px_-8px_rgba(212,119,16,0.18)]"
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-primary-400/25 via-brandLime-400/15 to-transparent opacity-60 blur-2xl transition duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-px rounded-[0.95rem] bg-gradient-to-br from-white via-white to-slate-50/80" />
            <div className="relative flex gap-4">
              <div className="flex shrink-0 flex-col items-center gap-2">
                <span className="font-mono text-[0.65rem] font-semibold tabular-nums tracking-widest text-primary-600/80">
                  {n}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/12 via-white to-brandLime-400/18 text-primary-700 shadow-inner shadow-white/60 ring-1 ring-primary-500/15 transition duration-300 group-hover:from-primary-500/18 group-hover:ring-primary-400/35">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="font-sora text-[0.9375rem] font-semibold leading-snug text-slate-900 sm:text-base">
                  {item}
                </p>
                <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-to-r from-primary-500 to-brandLime-400 opacity-80 transition duration-300 group-hover:w-14" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
