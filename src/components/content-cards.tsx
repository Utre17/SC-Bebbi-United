import Link from "next/link";
import type { FlyerItem, MerchItem, NewsItem, SponsorSlot, Team } from "@/content/site-data";
import { Icon } from "@/components/icon";

export function TeamCard({ team, featured = false }: { team: Team; featured?: boolean }) {
  return (
    <article
      className={`rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:rounded-[2rem] sm:p-6 ${
        featured ? "lg:p-8" : ""
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#10b981]">{team.ageGroup}</p>
          <h3
            className={`mt-3 font-black tracking-tight text-[#064e3b] ${
              featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {team.name}
          </h3>
        </div>
        <span className="self-start rounded-full bg-[#10b981]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#064e3b] sm:text-[11px]">
          {team.status}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5">{team.summary}</p>
      <dl className="mt-5 grid gap-4 text-sm text-slate-600 sm:mt-6">
        <div>
          <dt className="font-semibold text-slate-900">Fokus</dt>
          <dd className="mt-1">{team.focus}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Trainer</dt>
          <dd className="mt-1">{team.trainer}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Training</dt>
          <dd className="mt-1">{team.training}</dd>
        </div>
      </dl>
      <a
        href={team.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#064e3b] transition-colors hover:text-[#10b981] sm:mt-7"
      >
        Offizieller FVNWS-Spielplan
        <Icon name="arrowUpRight" className="h-4 w-4" />
      </a>
    </article>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:rounded-[2rem] sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#10b981]">{item.category}</p>
      <h3 className="mt-4 text-xl font-black tracking-tight text-[#064e3b] sm:text-2xl">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
      <Link
        href={item.href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#064e3b] transition-colors hover:text-[#10b981]"
      >
        {item.cta}
        <Icon name="arrowRight" className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function FlyerCard({ item }: { item: FlyerItem }) {
  const sharedClass =
    "mt-6 inline-flex items-center gap-2 text-sm font-bold transition-colors";

  return (
    <article className="rounded-[1.6rem] border border-dashed border-[#10b981]/20 bg-white/80 p-5 sm:rounded-[2rem] sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#10b981]">Flyer & Downloads</p>
          <h3 className="mt-4 text-lg font-black tracking-tight text-[#064e3b] sm:text-xl">{item.title}</h3>
        </div>
        <span className="self-start rounded-full bg-[#10b981]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#064e3b] sm:text-[11px]">
          {item.status}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
      {item.href ? (
        <Link href={item.href} className={`${sharedClass} text-[#064e3b] hover:text-[#10b981]`}>
          {item.cta}
          <Icon name="download" className="h-4 w-4" />
        </Link>
      ) : (
        <p className={`${sharedClass} text-slate-500`}>
          {item.cta}
        </p>
      )}
    </article>
  );
}

export function SponsorSlotCard({ item }: { item: SponsorSlot }) {
  return (
    <article className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
      <h3 className="text-lg font-black tracking-tight text-white sm:text-xl">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/70">{item.description}</p>
    </article>
  );
}

export function MerchCard({ item }: { item: MerchItem }) {
  return (
    <article className="rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:rounded-[2rem] sm:p-6">
      <div className="flex items-center gap-3 text-[#10b981]">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#10b981]/10 sm:h-12 sm:w-12">
          <Icon name="shoppingBag" className="h-6 w-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.24em]">{item.category}</span>
      </div>
      <h3 className="mt-5 text-xl font-black tracking-tight text-[#064e3b] sm:text-2xl">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
    </article>
  );
}
