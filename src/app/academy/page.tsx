import { buildMetadata } from "@/lib/metadata";
import { academyPillars, academyStaff, teams } from "@/content/site-data";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";

export const metadata = buildMetadata({
  title: "Academy | SC Bebbi United",
  description:
    "Die Academy von SC Bebbi United mit Fokus auf technische, taktische und mentale Entwicklung im Nachwuchs.",
  path: "/academy",
});

export default function AcademyPage() {
  return (
    <main className="relative z-10 px-4 pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <section className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-5 py-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:rounded-[2.3rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Academy</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            Nachwuchsfoerderung mit klarer Ausrichtung und echtem Entwicklungsfokus.
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/75 sm:mt-6 sm:text-base md:text-lg">
            Die Academy steht fuer die sportliche und persoenliche Entwicklung junger Spielerinnen und Spieler.
            Technik, Taktik und Mentalitaet werden bei uns als gemeinsamer Weg verstanden, nicht als einzelne Bausteine.
          </p>
        </section>

        <section className="rounded-[1.65rem] bg-[#f4f6f7] px-5 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:rounded-[2.2rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Drei Schwerpunkte"
            title="Woran die Academy im Alltag arbeitet."
            description="Unsere Ausbildungsarbeit soll auf dem Platz sichtbar werden: in sauberen Grundlagen, in besseren Entscheidungen und in einer klaren Teamhaltung."
          />
          <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
            {academyPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:rounded-[1.8rem] sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#10b981]/10 text-[#064e3b] sm:h-12 sm:w-12">
                  <Icon name="sparkles" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.65rem] bg-[#f4f6f7] px-5 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:rounded-[2.2rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
            <SectionHeading
              eyebrow="Staff-Struktur"
              title="Vier Rollen, die den Bereich tragen."
              description="Die Academy wird durch klare Verantwortlichkeiten getragen. Namen und Portraets werden ergaenzt, sobald die finalen Inhalte bestaetigt sind."
            />
            <div className="mt-8 grid gap-5 sm:mt-10">
              {academyStaff.map((entry) => (
                <article key={entry.role} className="rounded-[1.4rem] border border-slate-100 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:rounded-[1.7rem] sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#10b981]">{entry.role}</p>
                  <h3 className="mt-3 text-lg font-black tracking-tight text-[#064e3b] sm:text-xl">{entry.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{entry.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[1.65rem] bg-[#064e3b] px-5 py-8 text-white shadow-[0_26px_90px_rgba(6,78,59,0.32)] sm:rounded-[2.2rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#34d399]">Verbindung zu den Teams</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              Academy bedeutet nicht Theorie, sondern taegliche Arbeit im Training.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/75">
              Die Academy soll sich in allen Teams wiederfinden: in der Trainingskultur, in der Haltung und in der Art,
              wie Entwicklung im Verein gedacht wird.
            </p>
            <div className="mt-8 grid gap-4">
              {teams.map((team) => (
                <div key={team.slug} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 sm:rounded-[1.5rem]">
                  <p className="text-sm font-semibold text-white">{team.name}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{team.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
