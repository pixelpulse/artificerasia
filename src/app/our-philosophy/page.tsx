import type { Metadata } from "next";
import { PageBackground } from "@/components/page-background";

export const metadata: Metadata = {
  title: "Our Ethos",
  description:
    "The age of the artificer is coming. Why ARTIFICER.ASIA believes the tools of the future should reach more builders.",
  openGraph: {
    title: "Our Ethos — ARTIFICER.ASIA",
    description:
      "The age of the artificer is coming. Why ARTIFICER.ASIA believes the tools of the future should reach more builders.",
    url: "/our-philosophy",
    images: [
      {
        url: "/images/04_ethos/0_hero.png",
        width: 1672,
        height: 941,
        alt: "ARTIFICER.ASIA — Our Ethos",
      },
    ],
  },
};

export default function PhilosophyPage() {
  return (
    <section className="relative min-h-screen">
      {/* Full-page photo background — overlay disabled so the (mostly empty
          canvas) image shows through cleanly. */}
      <PageBackground id="04_ethos/0_hero" overlay={false} />

      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:pt-16 lg:pb-28">
        <p className="text-center font-tech text-[11px] uppercase tracking-[0.3em] text-coral">
          04 / Our Ethos
        </p>

        <blockquote className="mx-auto mt-10 max-w-4xl text-center">
          <p className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            “Errors are not in the art but in the artificers.”
          </p>
          <footer className="mt-4 font-tech text-xs uppercase tracking-[0.25em] text-ink-soft">
            — Isaac Newton
          </footer>
        </blockquote>

        <h1 className="mx-auto mt-16 max-w-4xl text-center font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          The age of the artificer is coming.
        </h1>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-center text-base/7 text-ink-soft">
          <p>
            AI is making expertise more accessible, while 3D printing, robotics, sensing, edge
            computing, and increasingly capable development hardware are putting tools that once
            belonged mainly to laboratories and large companies into the hands of individuals and
            small teams. We believe this will fundamentally change "who" gets to build "what".
          </p>
          <p>
            As technology advances, we want access to advance with it. The best tools should not
            remain concentrated among the companies that manufacture them or the institutions that
            can afford them. They should reach builders across disciplines, communities, and
            regions, where they can be tested against real problems and adapted in ways their
            creators may never have anticipated.
          </p>
          <p>
            That is what we mean by an artificer. Not necessarily the person with the deepest
            technical credentials, but someone who sees a problem and looks for a way to solve it
            using the best tools available. Builders, dreamers, shapers, makers, and breakers who
            are willing to learn, experiment, modify, combine, and occasionally fail in pursuit of
            something better.
          </p>
          <p>
            A farmer adapting a sensor, a student prototyping a new device, an artist repurposing a
            machine, or a developer teaching a robot a task its manufacturer never imagined are all
            artificers.
          </p>
        </div>

        <p className="mx-auto mt-16 max-w-3xl border-t-2 border-ink/30 pt-6 text-center font-display text-2xl font-semibold uppercase leading-snug tracking-tight text-ink sm:text-3xl">
          The tools shaping our future should be shared.
        </p>

        <p className="mt-10 text-center font-tech text-[10px] uppercase tracking-[0.25em] text-ink-soft">
          Field manual · Ed. 01 · Our Ethos
        </p>
      </div>
    </section>
  );
}
