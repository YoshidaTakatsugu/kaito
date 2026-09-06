import Link from "next/link";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  referenceHref: string;
  referenceLabel: string;
};

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  referenceHref,
  referenceLabel,
}: PagePlaceholderProps) {
  return (
    <main className="min-h-[calc(100svh-4rem)] bg-[#041225] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.28em] text-[#67d5ae]">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.4] sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <div className="mt-14 grid gap-10 border-t border-cyan-100/15 pt-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-[#d6ae64]">
              CONTENT IN PREPARATION
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
              {description}
            </p>
          </div>
          <Link
            href={referenceHref}
            className="inline-flex min-h-14 items-center justify-center border border-cyan-100/25 px-6 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:border-cyan-100/60 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
          >
            {referenceLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
