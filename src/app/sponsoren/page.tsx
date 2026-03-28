import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { sponsorSlots } from "@/content/site-data";
import { SponsorSlotCard } from "@/components/content-cards";
import { SectionHeading } from "@/components/section-heading";

export const metadata = buildMetadata({
  title: "Sponsoren | SC Bebbi United",
  description:
    "Oeffentliche Sponsoren- und Partnerseite von SC Bebbi United.",
  path: "/sponsoren",
});

export default function SponsorsPage() {
  return (
    <main className="relative z-10 px-4 pb-20 pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-6 py-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Sponsoren</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Partner, die den Verein und den Nachwuchs mittragen.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            SC Bebbi United will mit Partnern zusammenarbeiten, die lokale Sichtbarkeit mit echter Unterstuetzung fuer
            die Entwicklung des Vereins verbinden.
          </p>
        </section>

        <section className="rounded-[2.2rem] bg-[#064e3b] px-6 py-10 shadow-[0_26px_90px_rgba(6,78,59,0.32)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Wirkung"
            title="Was eine Partnerschaft auf dieser Website sichtbar machen soll."
            description="Sichtbarkeit, lokale Verbundenheit und die Foerderung des Nachwuchses bilden den Rahmen der oeffentlichen Sponsorenseite."
            invert
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sponsorSlots.map((item) => (
              <SponsorSlotCard key={item.title} item={item} />
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#34d399]">Naechster Schritt</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight">Sponsoring-Anfragen laufen aktuell direkt ueber den Kontaktbereich.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Sobald Partner bestaetigt sind, kann diese Seite direkt mit Logos, Links und kurzen Profiltexten erweitert werden.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#064e3b] transition-colors hover:bg-[#34d399] hover:text-[#02110b]"
            >
              Sponsoring anfragen
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
