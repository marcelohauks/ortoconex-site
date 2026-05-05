'use client';

import { Fragment } from 'react';

const hashtagChipClass =
  'inline-flex max-w-full items-center rounded-full border border-primary-200/90 bg-gradient-to-b from-brandLime-50 to-primary-50/95 px-2.5 py-1 text-[11px] font-semibold leading-none text-primary-900 shadow-sm ring-1 ring-inset ring-white/60 transition hover:border-primary-300 hover:shadow-md sm:text-xs';

function isHashtagOnlyLine(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  const parts = t.split(/\s+/);
  return parts.every((p) => /^#[^\s#]+$/.test(p));
}

type Props = {
  text: string;
  className?: string;
};

/** Renderiza texto preservando quebras; tokens `#tag` viram chips estilo hashtag. */
export function DescriptionWithHashtags({ text, className = '' }: Props) {
  const lines = text.split('\n');

  return (
    <div className={`text-sm leading-relaxed text-slate-600 ${className}`}>
      {lines.map((line, i) => {
        if (line === '') {
          return <div key={i} className="h-2.5" aria-hidden />;
        }

        if (isHashtagOnlyLine(line)) {
          const tags = line.trim().split(/\s+/);
          return (
            <div
              key={i}
              className="mb-3 flex flex-wrap gap-2 sm:gap-2.5 [&:last-child]:mb-0"
            >
              {tags.map((tag, ti) => (
                <span key={`${i}-${ti}-${tag}`} className={hashtagChipClass}>
                  {tag}
                </span>
              ))}
            </div>
          );
        }

        const parts = line.split(/(#[^\s#]+)/g);
        return (
          <p key={i} className="mb-2.5 last:mb-0">
            {parts.map((part, j) =>
              /^#[^\s#]+$/.test(part) ? (
                <span key={j} className={`${hashtagChipClass} mx-0.5 align-middle`}>
                  {part}
                </span>
              ) : (
                <Fragment key={j}>{part}</Fragment>
              ),
            )}
          </p>
        );
      })}
    </div>
  );
}
