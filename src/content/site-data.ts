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
  "Spielplan und Resultate offiziell ueber FVNWS",
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
      "Im FF-17 steht der naechste Entwicklungsschritt im Vordergrund. Das Team arbeitet an Tempo, Spielverstaendnis und einem klaren Auftreten auf dem Platz.",
    trainer: "Trainerteam auf Anfrage",
    training: "Trainingszeiten nach Absprache",
    focus: "Technik, Intensitaet, Verantwortung im Team",
    officialUrl: "https://matchcenter.fvnws.ch/default.aspx?a=trr&lng=1&oid=8&t=77789&v=480",
  },
  {
    slug: "ff-14",
    name: "Juniorinnen FF-14 (9v9)",
    ageGroup: "Academy",
    status: "Aktiv",
    summary:
      "Die FF-14 verbindet Freude am Spiel mit sauberer Ausbildung. Grundlagen, Orientierung und erste klare Teamablaeufe werden hier gezielt aufgebaut.",
    trainer: "Trainerteam auf Anfrage",
    training: "Trainingszeiten nach Absprache",
    focus: "Ballgefuehl, Orientierung, Mut im Spiel",
    officialUrl: "https://matchcenter.fvnws.ch/default.aspx?a=trr&lng=1&oid=8&t=77790&v=480",
  },
  {
    slug: "d-9",
    name: "Junioren D-9",
    ageGroup: "Nachwuchs",
    status: "Aktiv",
    summary:
      "Im D-9 geht es um die Basis: viele Ballaktionen, gute Gewohnheiten im Training und Freude am gemeinsamen Lernen im Team.",
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
    title: "Technische Foerderung",
    description:
      "Saubere Grundlagen, Ballkontrolle und sichere technische Ablaeufe werden altersgerecht aufgebaut und gefestigt.",
  },
  {
    title: "Taktisches Verstaendnis",
    description:
      "Spielerinnen und Spieler lernen, Spielsituationen besser zu erkennen, Loesungen zu finden und Verantwortung im Team zu uebernehmen.",
  },
  {
    title: "Mentale Staerke",
    description:
      "Respekt, Konzentration, Selbstvertrauen und Verlaesslichkeit gehoeren fuer den Verein genauso zur Ausbildung wie das Training auf dem Platz.",
  },
];

export const academyStaff: AcademyStaff[] = [
  {
    role: "Academy-Leitung",
    name: "Name folgt",
    note: "Verantwortlich fuer Ausrichtung, Entwicklung und die sportliche Linie der Academy.",
  },
  {
    role: "Nachwuchskoordination",
    name: "Name folgt",
    note: "Begleitet Teamplanung, Kommunikation und die Uebergaenge zwischen den Kategorien.",
  },
  {
    role: "Technik & Taktik",
    name: "Name folgt",
    note: "Unterstuetzt Trainingsinhalte, Methodik und die Entwicklung klarer Spielprinzipien.",
  },
  {
    role: "Mentale Begleitung",
    name: "Name folgt",
    note: "Foerdert Haltung, Selbstvertrauen und Teamkultur im Trainings- und Spielalltag.",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Probetraining anfragen",
    category: "Mitmachen",
    description:
      "Interessierte Kinder, Jugendliche und Familien koennen sich direkt und unverbindlich beim Verein melden.",
    href: "/kontakt",
    cta: "Zur Anfrage",
  },
  {
    title: "Resultate und Spielberichte",
    category: "Matchcenter",
    description:
      "Auf unserer Website findest du den Einstieg in den Spielplan. Offizielle Resultate, Tabellen und Matchdetails laufen ueber FVNWS.",
    href: "/teams",
    cta: "Zu den Teams",
  },
  {
    title: "Academy im Aufbau",
    category: "Academy",
    description:
      "Die Academy-Seite zeigt bereits die Ausrichtung des Vereins. Weitere Inhalte, Profile und Unterlagen folgen laufend.",
    href: "/academy",
    cta: "Academy ansehen",
  },
];

export const flyerItems: FlyerItem[] = [
  {
    title: "Academy-Flyer",
    status: "In Vorbereitung",
    description:
      "Ein kompakter Ueberblick zur Academy, zu den Schwerpunkten und zur Nachwuchsfoerderung wird hier veroeffentlicht.",
    cta: "Folgt bald",
  },
  {
    title: "Sponsoring-Unterlagen",
    status: "Auf Anfrage",
    description:
      "Informationen zu Partnerformaten, Sichtbarkeit und moeglichen Paketen stellen wir aktuell direkt auf Anfrage zur Verfuegung.",
    href: "/kontakt",
    cta: "Kontakt aufnehmen",
  },
  {
    title: "Probetraining-Infos",
    status: "Aktiv",
    description:
      "Anfragen fuer Probetrainings und allgemeine Fragen laufen aktuell direkt ueber die Kontaktseite.",
    href: "/kontakt",
    cta: "Jetzt anfragen",
  },
];

export const sponsorSlots: SponsorSlot[] = [
  {
    title: "Lokale Sichtbarkeit",
    description:
      "Praesenz auf der Website, in der Vereinskommunikation und in kuenftigen Clubunterlagen.",
  },
  {
    title: "Nachwuchs foerdern",
    description:
      "Partnerschaften sollen direkt zur Entwicklung der Academy und der aktiven Teams beitragen.",
  },
  {
    title: "Platz fuer Ihr Logo",
    description:
      "Die finale Sponsorendarstellung wird laufend ergaenzt, sobald Partner und Inhalte bestaetigt sind.",
  },
];

export const merchItems: MerchItem[] = [
  {
    title: "Clubwear",
    category: "Textilien",
    description:
      "Hoodies, Shirts und weitere Vereinsprodukte sollen kuenftig gesammelt und sauber praesentiert werden.",
  },
  {
    title: "Training & Alltag",
    category: "Ausruestung",
    description:
      "Kleine Accessoires und praktisches Material koennen spaeter ueber einen internen oder externen Shopbereich ergaenzt werden.",
  },
  {
    title: "Fanartikel",
    category: "Gadgets",
    description:
      "Fanartikel sind als naechster Schritt denkbar. Sortiment, Partner und Bestellablauf werden zuerst sauber festgelegt.",
  },
];

export const contactDetails = {
  email: "info@scbebbiunited.ch",
  website: "https://www.scbebbiunited.ch",
  instagram: "https://www.instagram.com/sc.bebbi.united/",
  facebook: "#",
  contacts: [
    { label: "Dino (Sportchef)", href: "tel:+41763230825", value: "076 323 08 25" },
    { label: "Claudio (Praesident)", href: "tel:+41763965091", value: "076 396 50 91" },
  ],
  formEndpoint: "https://formspree.io/f/mjgrnbeq",
};

export const homeStats = [
  { label: "Aktive Teams", value: "3" },
  { label: "Academy-Fokus", value: "Technik, Taktik, Mentalitaet" },
  { label: "Offizielle Matchdetails", value: "FVNWS" },
];
