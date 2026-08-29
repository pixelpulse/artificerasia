import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plexmono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artificer.asia"),
  title: {
    default: "ARTIFICER.ASIA — Open Access Hardware",
    template: "%s — ARTIFICER.ASIA",
  },
  description:
    "Free access to professional hardware for Asia's hackathons, universities, and builders.",
  openGraph: {
    siteName: "ARTIFICER.ASIA",
    type: "website",
    locale: "en_US",
    title: "ARTIFICER.ASIA — Open Access Hardware",
    description:
      "Free access to professional hardware for Asia's hackathons, universities, and builders.",
    url: "/",
    images: [
      {
        url: "/images/01_home/0_Intro/0_hero.png",
        width: 1672,
        height: 941,
        alt: "ARTIFICER.ASIA — Open Access Hardware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
