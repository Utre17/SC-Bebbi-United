import Link from "next/link";
import { Icon } from "@/components/icon";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  cta,
  invert = false,
}: SectionHeadingProps) {
  const titleClass = invert ? "text-white" : "text-[#064e3b]";
  const textClass = invert ? "text-white/70" : "text-slate-600";
  const eyebrowClass = invert ? "text-[#34d399]" : "text-[#10b981]";

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className={`text-xs font-bold uppercase tracking-[0.28em] ${eyebrowClass}`}>{eyebrow}</p>
        <h2 className={`mt-4 text-3xl font-black tracking-tight md:text-5xl ${titleClass}`}>{title}</h2>
        <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${textClass}`}>{description}</p>
      </div>
      {href && cta ? (
        <Link
          href={href}
          className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
            invert ? "text-white hover:text-[#34d399]" : "text-[#064e3b] hover:text-[#10b981]"
          }`}
        >
          {cta}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
