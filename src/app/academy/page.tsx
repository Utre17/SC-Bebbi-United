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
    <main className="relative z-10 px-4 pb-20 pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-6 py-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Academy</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Nachwuchsförderung mit klarer Ausrichtung und langfristigem Anspruch.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Die Academy ist der Bereich, in dem SC Bebbi United Entwicklung sichtbar machen will. Technik, Taktik und Mentalität werden nicht getrennt gedacht, sondern als gemeinsamer Rahmen für Training, Spiel und Zusammenhalt im Verein.
          </p>
        </section>

        <section className="rounded-[2.2rem] bg-[#f4f6f7] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Drei Schwerpunkte"
            title="Woran die Academy im Alltag arbeitet."
            description="Die öffentliche Academy-Seite zeigt den Ausbildungsrahmen bereits heute. Weitere Staff-Profile, Inhalte und Flyer können später ergänzt werden, ohne die Grundstruktur zu ändern."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.8rem] border border-slate-100 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10b981]/10 text-[#064e3b]">
                  <Icon name="sparkles" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-900">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.2rem] bg-[#f4f6f7] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-10 md:py-14">
            <SectionHeading
              eyebrow="Staff-Struktur"
              title="Vier Rollen, die den Bereich tragen."
              description="Die Struktur steht bereits. Namen und Porträts folgen, sobald die finalen Inhalte bestätigt sind."
            />
            <div className="mt-10 grid gap-5">
              {academyStaff.map((entry) => (
                <article key={entry.role} className="rounded-[1.7rem] border border-slate-100 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#10b981]">{entry.role}</p>
                  <h3 className="mt-3 text-xl font-black tracking-tight text-[#064e3b]">{entry.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{entry.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2.2rem] bg-[#064e3b] px-6 py-10 text-white shadow-[0_26px_90px_rgba(6,78,59,0.32)] md:px-10 md:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#34d399]">Verbindung zu den Teams</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Academy bedeutet nicht Theorie, sondern Alltag im Training.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/75">
              Die Academy prägt die Arbeitsweise in allen aktuellen Kategorien. Sie soll später mit zusätzlichen Profilen, Teamfotos und weiteren Inhalten wachsen, ohne das Grundprinzip zu verlieren.
            </p>
            <div className="mt-8 grid gap-4">
              {teams.map((team) => (
                <div key={team.slug} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
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
