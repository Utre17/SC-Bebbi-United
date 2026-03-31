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
    <main className="relative z-10 px-4 pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
        <section className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,78,59,1),rgba(2,17,11,0.98))] px-5 py-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:rounded-[2.3rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Kontakt</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            Probetraining, Vereinsfragen und Sponsoring direkt anfragen.
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/75 sm:mt-6 sm:text-base md:text-lg">
            Ob Probetraining, allgemeine Frage oder Sponsoring-Anliegen: ueber diese Seite erreichst du den Verein
            direkt und unkompliziert.
          </p>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-[1.65rem] bg-[#f4f6f7] px-5 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:rounded-[2.2rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
            <h2 className="text-2xl font-black tracking-tight text-[#064e3b] sm:text-3xl">Direkter Kontakt</h2>
            <div className="mt-8 grid gap-5">
              {contactDetails.contacts.map((contact) => (
                <a key={contact.label} href={contact.href} className="rounded-[1.4rem] border border-slate-100 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:rounded-[1.7rem] sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#10b981]/10 text-[#064e3b] sm:h-12 sm:w-12">
                      <Icon name="phone" className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#10b981]">{contact.label}</p>
                      <p className="mt-3 text-base font-semibold text-[#064e3b] sm:text-lg">{contact.value}</p>
                    </div>
                  </div>
                </a>
              ))}

              <a href={`mailto:${contactDetails.email}`} className="rounded-[1.4rem] border border-slate-100 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:rounded-[1.7rem] sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#10b981]/10 text-[#064e3b] sm:h-12 sm:w-12">
                    <Icon name="mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#10b981]">E-Mail</p>
                    <p className="mt-3 text-base font-semibold text-[#064e3b] sm:text-lg">{contactDetails.email}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-[1.65rem] bg-[#064e3b] px-5 py-8 shadow-[0_26px_90px_rgba(6,78,59,0.32)] sm:rounded-[2.2rem] sm:px-6 sm:py-10 md:px-10 md:py-14">
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">Formular</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Fuer Probetraining, allgemeine Fragen oder Sponsoring reicht eine kurze Nachricht. Wir melden uns so schnell wie moeglich.
            </p>
            <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:rounded-[1.8rem] sm:p-6 md:p-8">
              <ContactForm variant="dark" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
