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
    <main className="relative z-10 px-4 pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <section className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-5 py-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:rounded-[2.3rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Sponsoren</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            Partner, die den Verein und den Nachwuchs mittragen.
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/75 sm:mt-6 sm:text-base md:text-lg">
            SC Bebbi United will mit Partnern zusammenarbeiten, die lokale Sichtbarkeit mit echter Unterstuetzung fuer
            die Entwicklung des Vereins verbinden.
          </p>
        </section>

        <section className="rounded-[1.65rem] bg-[#064e3b] px-5 py-8 shadow-[0_26px_90px_rgba(6,78,59,0.32)] sm:rounded-[2.2rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Wirkung"
            title="Was eine Partnerschaft auf dieser Website sichtbar machen soll."
            description="Sichtbarkeit, lokale Verbundenheit und die Foerderung des Nachwuchses bilden den Rahmen der oeffentlichen Sponsorenseite."
            invert
          />
          <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
            {sponsorSlots.map((item) => (
              <SponsorSlotCard key={item.title} item={item} />
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-white sm:mt-10 sm:rounded-[2rem] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#34d399]">Naechster Schritt</p>
            <h2 className="mt-4 text-xl font-black tracking-tight sm:text-2xl">Sponsoring-Anfragen laufen aktuell direkt ueber den Kontaktbereich.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Sobald Partner bestaetigt sind, kann diese Seite direkt mit Logos, Links und kurzen Profiltexten erweitert werden.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#064e3b] transition-colors hover:bg-[#34d399] hover:text-[#02110b] sm:w-auto"
            >
              Sponsoring anfragen
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
