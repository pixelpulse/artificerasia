export const site = {
  name: "ARTIFICER.ASIA",
  slogan: "Open Access Hardware.",
  support:
    "Free access to professional hardware for Asia's hackathons, universities, and builders.",
  email: "contact@artificer.asia",
  ref: "AA·2026",
} as const;

export type NavHref = "/" | "/request-hardware" | "/sponsor-hardware" | "/our-philosophy";

export type NavItem = {
  href: NavHref;
  label: string;
  index: string;
};

export const nav: NavItem[] = [
  { href: "/", label: "Home", index: "01" },
  { href: "/request-hardware", label: "Need Hardware?", index: "02" },
  { href: "/sponsor-hardware", label: "Have Hardware?", index: "03" },
  { href: "/our-philosophy", label: "Our Ethos", index: "04" },
];
