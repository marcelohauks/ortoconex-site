'use client';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string;
  imageSrc: string;
  title: string;
  sizes?: string;
  priority?: boolean;
};

/** Card leve: só foto arredondada + título (sem caixa/borda de cartão). */
export function ProductTeaserCard({
  href,
  imageSrc,
  title,
  sizes = '(max-width:768px) 50vw, 25vw',
  priority = false,
}: Props) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 transition duration-500 ease-out group-hover:shadow-lg group-hover:shadow-slate-400/25">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={priority}
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.045]"
          sizes={sizes}
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/[0.04] transition group-hover:ring-primary-400/30" />
      </div>
      <p className="mt-2.5 line-clamp-2 px-0.5 text-center text-xs font-semibold leading-snug tracking-tight text-slate-800 transition duration-300 group-hover:text-primary-800 min-[400px]:text-sm sm:mt-3 sm:text-[0.95rem] sm:leading-snug">
        {title}
      </p>
    </Link>
  );
}
