import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { merchItems } from "@/content/site-data";
import { MerchCard } from "@/components/content-cards";
import { SectionHeading } from "@/components/section-heading";

export const metadata = buildMetadata({
  title: "Shop | SC Bebbi United",
  description:
    "Phase-1-Shopseite von SC Bebbi United als oeffentlicher Einstieg fuer Clubwear, Gadgets und spaetere Merch-Angebote.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <main className="relative z-10 px-4 pb-20 pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-6 py-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Shop</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Der oeffentliche Einstieg fuer Clubwear, Gadgets und spaetere Merch-Angebote.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            In Phase 1 ist der Shop bewusst noch kein Checkout-System. Die Seite schafft zuerst Struktur fuer eigene Produkte, moegliche externe Partner und die spaetere Klaerung von Bezahl- und Bestellablaeufen.
          </p>
        </section>

        <section className="rounded-[2.2rem] bg-[#f4f6f7] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Merch-Vorschau"
            title="Sortimentsbereiche, bevor ein echter Shop live geht."
            description="Die Seite kann bereits Kategorien zeigen, ohne einen Warenkorb oder eine Zahlung zu versprechen. So bleibt der Auftritt glaubwuerdig, bis Sortiment und Partner final geklaert sind."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {merchItems.map((item) => (
              <MerchCard key={item.title} item={item} />
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-dashed border-[#10b981]/20 bg-white/75 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#10b981]">Phase 1 Hinweis</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-[#064e3b]">Noch kein Checkout, noch keine Live-Zahlung.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              Die finale Shoplogik ist bewusst zurueckgestellt. TWINT wurde als gewuenschte spaetere Zahlungsmethode erwaehnt, ist in dieser Phase aber noch nicht live eingebunden.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#064e3b] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#10b981] hover:text-[#02110b]"
            >
              Interesse melden
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
