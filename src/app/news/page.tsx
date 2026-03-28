import { buildMetadata } from "@/lib/metadata";
import { flyerItems, newsItems } from "@/content/site-data";
import { FlyerCard, NewsCard } from "@/components/content-cards";
import { SectionHeading } from "@/components/section-heading";

export const metadata = buildMetadata({
  title: "News | SC Bebbi United",
  description:
    "Aktuelles, Vereinsinfos und Flyer-Bereich von SC Bebbi United. Phase 1 setzt auf klare, statische Inhalte ohne CMS.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <main className="relative z-10 px-4 pb-20 pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-6 py-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">News & Flyer</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Vereinsinfos, Hinweise und kuenftige Flyer mit einer klaren oeffentlichen Struktur.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Phase 1 ersetzt den leeren Platzhalterbereich durch einen echten News- und Flyer-Einstieg. Inhalte bleiben bewusst statisch, damit der Verein erst einmal sauber publizieren kann.
          </p>
        </section>

        <section className="rounded-[2.2rem] bg-[#f4f6f7] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Aktuelles"
            title="Beitraege und Hinweise fuer den oeffentlichen Auftritt."
            description="Die Inhalte hier sind bewusst leicht pflegbar. Ein CMS kann spaeter ergaenzt werden, ohne diese Struktur neu aufzubauen."
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
            title="Dokumente und Hinweise mit Platz fuer spaetere Ergaenzungen."
            description="Noch bevor ein geschuetzter Bereich entsteht, kann die oeffentliche Website bereits Informationen, Hinweise oder Anfragen fuer Unterlagen sauber abbilden."
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
