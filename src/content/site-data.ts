export type NavItem = {
  label: string;
  href: string;
};

export type Team = {
  slug: string;
  name: string;
  ageGroup: string;
  status: string;
  summary: string;
  trainer: string;
  training: string;
  focus: string;
  officialUrl: string;
};

export type AcademyPillar = {
  title: string;
  description: string;
};

export type AcademyStaff = {
  role: string;
  name: string;
  note: string;
};

export type NewsItem = {
  title: string;
  category: string;
  description: string;
  href: string;
  cta: string;
};

export type FlyerItem = {
  title: string;
  status: string;
  description: string;
  href?: string;
  cta: string;
};

export type SponsorSlot = {
  title: string;
  description: string;
};

export type MerchItem = {
  title: string;
  category: string;
  description: string;
};

export const siteUrl = "https://www.scbebbiunited.ch";

export const navItems: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Matchcenter", href: "/#matchcenter" },
  { label: "Academy", href: "/academy" },
  { label: "Teams", href: "/teams" },
  { label: "News", href: "/news" },
  { label: "Sponsoren", href: "/sponsoren" },
  { label: "Shop", href: "/shop" },
  { label: "Kontakt", href: "/kontakt" },
];

export const tickerItems = [
  "Spielplan und Resultate offiziell über FVNWS",
  "Kontakt: info@scbebbiunited.ch",
  "Instagram: @sc.bebbi.united",
  "Probetraining nach Absprache",
];

export const teams: Team[] = [
  {
    slug: "ff-17",
    name: "Juniorinnen FF-17",
    ageGroup: "Academy",
    status: "Aktiv",
    summary:
      "Das FF-17 bildet aktuell den sportlichen Fokus im älteren Juniorinnenbereich. Technik, Intensität und Spielverständnis stehen im Vordergrund.",
    trainer: "Trainerteam auf Anfrage",
    training: "Trainingszeiten nach Absprache",
    focus: "Technik, Spielrhythmus, Verantwortung im Team",
    officialUrl: "https://matchcenter.fvnws.ch/default.aspx?a=trr&lng=1&oid=8&t=77789&v=480",
  },
  {
    slug: "ff-14",
    name: "Juniorinnen FF-14 (9v9)",
    ageGroup: "Academy",
    status: "Aktiv",
    summary:
      "Die FF-14 verbindet Grundlagenarbeit mit Spielfreude. Der Schritt in strukturierte Teamabläufe und taktisches Verständnis wird hier gezielt begleitet.",
    trainer: "Trainerteam auf Anfrage",
    training: "Trainingszeiten nach Absprache",
    focus: "Ballgefühl, Orientierung, Mut im Spiel",
    officialUrl: "https://matchcenter.fvnws.ch/default.aspx?a=trr&lng=1&oid=8&t=77790&v=480",
  },
  {
    slug: "d-9",
    name: "Junioren D-9",
    ageGroup: "Nachwuchs",
    status: "Aktiv",
    summary:
      "Im D-9 geht es um saubere Grundlagen, viel Ballkontakt und Freude an Bewegung. Das Team bildet einen wichtigen Teil des Nachwuchsaufbaus.",
    trainer: "Trainerteam auf Anfrage",
    training: "Trainingszeiten nach Absprache",
    focus: "Grundtechnik, Entscheidungsverhalten, Teamgeist",
    officialUrl: "https://matchcenter.fvnws.ch/default.aspx?a=trr&lng=1&oid=8&t=77791&v=480",
  },
];

export const clubMatchcenterUrl =
  "https://matchcenter.fvnws.ch/default.aspx?lng=1&v=480&bn=0";

export const academyPillars: AcademyPillar[] = [
  {
    title: "Technische Förderung",
    description:
      "Saubere Grundlagen, Ballkontrolle, Timing und Handlungsschnelligkeit werden altersgerecht aufgebaut.",
  },
  {
    title: "Taktisches Verständnis",
    description:
      "Spielerinnen und Spieler lernen Raum, Rhythmus und Verantwortung innerhalb des Teams zu lesen und umzusetzen.",
  },
  {
    title: "Mentale Stärke",
    description:
      "Respekt, Konzentration, Selbstvertrauen und Verlässlichkeit gehören für den Verein genauso zur Ausbildung wie Training auf dem Platz.",
  },
];

export const academyStaff: AcademyStaff[] = [
  {
    role: "Academy-Leitung",
    name: "Name folgt",
    note: "Verantwortlich für Ausrichtung, Entwicklung und Koordination.",
  },
  {
    role: "Nachwuchskoordination",
    name: "Name folgt",
    note: "Begleitet Teamplanung, Kommunikation und Übergänge zwischen den Kategorien.",
  },
  {
    role: "Technik & Taktik",
    name: "Name folgt",
    note: "Unterstützt Trainingsinhalte, Methodik und Spielprinzipien.",
  },
  {
    role: "Mentale Begleitung",
    name: "Name folgt",
    note: "Fördert Haltung, Selbstvertrauen und Teamkultur im Alltag.",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Probetraining direkt anfragen",
    category: "Mitmachen",
    description:
      "Interessierte Kinder, Jugendliche und Familien können sich bereits jetzt unverbindlich über das Kontaktformular melden.",
    href: "/kontakt",
    cta: "Zur Anfrage",
  },
  {
    title: "Offizielle Resultate auf FVNWS",
    category: "Matchcenter",
    description:
      "Auf der Clubseite zeigen wir den Einstieg. Alle aktuellen Resultate, Tabellen und Matchdetails bleiben bewusst auf der offiziellen Verbandsseite.",
    href: "/teams",
    cta: "Zu den Teams",
  },
  {
    title: "Academy-Inhalte werden ausgebaut",
    category: "Academy",
    description:
      "Die öffentliche Academy-Seite bildet bereits die Ausrichtung ab. Staff-Profile, weitere Inhalte und Flyer werden Schritt für Schritt ergänzt.",
    href: "/academy",
    cta: "Academy ansehen",
  },
];

export const flyerItems: FlyerItem[] = [
  {
    title: "Academy-Flyer",
    status: "In Vorbereitung",
    description:
      "Der erste Überblick zur Academy, zu den Schwerpunkten und zur Nachwuchsförderung wird hier publiziert.",
    cta: "Folgt bald",
  },
  {
    title: "Sponsoring-Unterlagen",
    status: "Auf Anfrage",
    description:
      "Informationen zu möglichen Partnerformaten und Sichtbarkeit im Verein werden individuell zur Verfügung gestellt.",
    href: "/kontakt",
    cta: "Kontakt aufnehmen",
  },
  {
    title: "Probetraining-Infos",
    status: "Aktiv",
    description:
      "Anfragen für Probetrainings und allgemeine Fragen laufen bereits jetzt direkt über die Kontaktseite.",
    href: "/kontakt",
    cta: "Jetzt anfragen",
  },
];

export const sponsorSlots: SponsorSlot[] = [
  {
    title: "Lokale Sichtbarkeit",
    description:
      "Präsenz auf der Website, bei Vereinskommunikation und in künftigen Clubunterlagen.",
  },
  {
    title: "Nachwuchs fördern",
    description:
      "Partnerschaften sollen direkt zur Entwicklung der Academy und der Teams beitragen.",
  },
  {
    title: "Platz für Ihr Logo",
    description:
      "Die finale Sponsorendarstellung wird ergänzt, sobald Partner und Inhalte bestätigt sind.",
  },
];

export const merchItems: MerchItem[] = [
  {
    title: "Clubwear",
    category: "Textilien",
    description:
      "Hoodies, Shirts und weitere Vereinsprodukte sollen künftig gesammelt vorgestellt werden.",
  },
  {
    title: "Training & Alltag",
    category: "Ausrüstung",
    description:
      "Kleine Accessoires und praktisches Material können später als externer oder interner Shopbereich ergänzt werden.",
  },
  {
    title: "Fanartikel",
    category: "Gadgets",
    description:
      "Phase 1 zeigt nur den Einstieg. Eine eigentliche Bestelllogik folgt erst nach Klärung von Sortiment und Abläufen.",
  },
];

export const contactDetails = {
  email: "info@scbebbiunited.ch",
  website: "https://www.scbebbiunited.ch",
  instagram: "https://www.instagram.com/sc.bebbi.united/",
  facebook: "#",
  contacts: [
    { label: "Dino (Sportchef)", href: "tel:+41763230825", value: "076 323 08 25" },
    { label: "Claudio (Präsident)", href: "tel:+41763965091", value: "076 396 50 91" },
  ],
  formEndpoint: "https://formspree.io/f/mjgrnbeq",
};

export const homeStats = [
  { label: "Aktive Teams", value: "3" },
  { label: "Academy-Fokus", value: "Technik, Taktik, Mentalität" },
  { label: "Offizielle Matchdetails", value: "FVNWS" },
];
