import { buildMetadata } from "@/lib/metadata";
import { clubMatchcenterUrl, teams } from "@/content/site-data";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/content-cards";
import { Icon } from "@/components/icon";

export const metadata = buildMetadata({
  title: "Teams | SC Bebbi United",
  description:
    "Aktive Teams von SC Bebbi United mit kurzer Einordnung und offiziellen FVNWS-Links fuer Spielplan und Resultate.",
  path: "/teams",
});

export default function TeamsPage() {
  return (
    <main className="relative z-10 px-4 pb-20 pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-6 py-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Teams</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Unsere aktiven Teams auf einen Blick.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Hier findest du die wichtigsten Informationen zu den aktuellen Kategorien von SC Bebbi United. Fuer
            Spielplan, Resultate und Matchdetails gelangst du von jedem Team direkt zum offiziellen FVNWS-Eintrag.
          </p>
          <a
            href={clubMatchcenterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#064e3b] transition-colors hover:bg-[#34d399] hover:text-[#02110b]"
          >
            Gesamtes FVNWS-Matchcenter
            <Icon name="arrowUpRight" className="h-4 w-4" />
          </a>
        </section>

        <section className="rounded-[2.2rem] bg-[#f4f6f7] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Aktive Teams"
            title="Die wichtigsten Informationen pro Kategorie."
            description="Trainingsinfos, sportlicher Schwerpunkt und der direkte Weg zu den offiziellen Spielbetriebsdaten sind hier bewusst klar und kompakt gehalten."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
            <TeamCard team={teams[0]} featured />
            <TeamCard team={teams[1]} />
            <TeamCard team={teams[2]} />
          </div>
        </section>
      </div>
    </main>
  );
}
