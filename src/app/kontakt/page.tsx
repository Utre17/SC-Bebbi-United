import { buildMetadata } from "@/lib/metadata";
import { contactDetails } from "@/content/site-data";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";

export const metadata = buildMetadata({
  title: "Kontakt | SC Bebbi United",
  description:
    "Kontaktseite von SC Bebbi United fuer Probetraining, allgemeine Fragen und Sponsoring-Anfragen.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <main className="relative z-10 px-4 pb-20 pt-32">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-6 py-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Kontakt</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Probetraining, Vereinsfragen und Sponsoring direkt anfragen.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Die Kontaktseite ist der oeffentliche Einstieg fuer Interessierte, Familien, Partner und allgemeine Anfragen. Sie buendelt die direkte Kommunikation, bis spaeter weitere interne Bereiche entstehen.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-[2.2rem] bg-[#f4f6f7] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-10 md:py-14">
            <h2 className="text-3xl font-black tracking-tight text-[#064e3b]">Direkter Kontakt</h2>
            <div className="mt-8 grid gap-5">
              {contactDetails.contacts.map((contact) => (
                <a key={contact.label} href={contact.href} className="rounded-[1.7rem] border border-slate-100 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10b981]/10 text-[#064e3b]">
                      <Icon name="phone" className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#10b981]">{contact.label}</p>
                      <p className="mt-3 text-lg font-semibold text-[#064e3b]">{contact.value}</p>
                    </div>
                  </div>
                </a>
              ))}

              <a href={`mailto:${contactDetails.email}`} className="rounded-[1.7rem] border border-slate-100 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10b981]/10 text-[#064e3b]">
                    <Icon name="mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#10b981]">E-Mail</p>
                    <p className="mt-3 text-lg font-semibold text-[#064e3b]">{contactDetails.email}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-[2.2rem] bg-[#064e3b] px-6 py-10 shadow-[0_26px_90px_rgba(6,78,59,0.32)] md:px-10 md:py-14">
            <h2 className="text-3xl font-black tracking-tight text-white">Formular</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Fuer Probetraining, allgemeine Fragen oder Sponsoring reicht eine kurze Nachricht. Das Formular bleibt bewusst direkt und oeffentlich.
            </p>
            <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
              <ContactForm variant="dark" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
