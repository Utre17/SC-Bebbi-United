import { buildMetadata } from "@/lib/metadata";
import { flyerItems, newsItems } from "@/content/site-data";
import { FlyerCard, NewsCard } from "@/components/content-cards";
import { SectionHeading } from "@/components/section-heading";

export const metadata = buildMetadata({
  title: "News | SC Bebbi United",
  description:
    "Aktuelles, Vereinsinfos und Flyer-Bereich von SC Bebbi United.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <main className="relative z-10 px-4 pb-20 pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-6 py-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">News & Flyer</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Aktuelles aus dem Verein, klar und direkt gesammelt.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Auf dieser Seite sammeln wir Hinweise, Vereinsinfos und Unterlagen, die fuer Spielerinnen, Spieler,
            Familien, Interessierte und Partner relevant sind.
          </p>
        </section>

        <section className="rounded-[2.2rem] bg-[#f4f6f7] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Aktuelles"
            title="Hinweise, Termine und wichtige Vereinsinfos."
            description="Die News-Seite soll den aktuellen Vereinsstand sichtbar machen und einen klaren Einstieg fuer neue Interessierte schaffen."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <NewsCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="rounded-[2.2rem] bg-[#f4f6f7] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Flyer & Downloads"
            title="Unterlagen und Hinweise an einem Ort."
            description="Hier finden kuenftig Flyer, Uebersichten und weitere oeffentliche Unterlagen ihren festen Platz."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {flyerItems.map((item) => (
              <FlyerCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
