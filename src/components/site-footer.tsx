import Image from "next/image";
import Link from "next/link";
import { contactDetails, navItems } from "@/content/site-data";
import { Icon } from "@/components/icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(0,0,0,0.35)] py-16 text-white backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/assets/images/logo.png"
            alt="SC Bebbi United Logo"
            width={56}
            height={56}
            className="h-14 w-auto"
          />
          <p className="mt-6 max-w-xs text-sm leading-6 text-white/60">
            Öffentliche Vereinswebsite für Academy, Teams, News, Sponsoren und den Einstieg ins offizielle Matchcenter.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-[#34d399]">Kontakt</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {contactDetails.contacts.map((contact) => (
              <li key={contact.label}>
                {contact.label}:{" "}
                <a href={contact.href} className="transition-colors hover:text-[#34d399]">
                  {contact.value}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contactDetails.email}`} className="transition-colors hover:text-[#34d399]">
                {contactDetails.email}
              </a>
            </li>
            <li>
              <a href={contactDetails.website} className="transition-colors hover:text-[#34d399]">
                scbebbiunited.ch
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-[#34d399]">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-[#34d399]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-[#34d399]">Social & Links</h3>
          <div className="mt-5 flex gap-3">
            <a
              href={contactDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition-colors hover:border-[#34d399]/40 hover:bg-[#34d399] hover:text-[#02110b]"
            >
              <Icon name="instagram" className="h-5 w-5" />
            </a>
            <a
              href={contactDetails.facebook}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition-colors hover:border-[#34d399]/40 hover:bg-[#34d399] hover:text-[#02110b]"
            >
              <Icon name="facebook" className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/60">
            Sponsoring, Probetraining und allgemeine Fragen laufen in Phase 1 direkt über die Kontaktseite.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-8 text-xs text-white/40">
        © {new Date().getFullYear()} SC Bebbi United Basel. Phase 1 der öffentlichen Vereinswebsite.
      </div>
    </footer>
  );
}
