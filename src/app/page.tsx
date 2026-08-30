import type { Metadata } from "next";
import { CatalogCard } from "@/components/catalog-card";
import { CountdownClock } from "@/components/countdown-clock";
import { CtaPanel } from "@/components/cta-panel";
import { EquipmentBrowser } from "@/components/equipment-browser";
import { FieldImage } from "@/components/field-image";
import { Hero } from "@/components/hero";
import { ImageCarousel } from "@/components/image-carousel";
import { PageBackground } from "@/components/page-background";
import { SectionHeading } from "@/components/section-heading";
import { basePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Open Access Hardware",
  description:
    "Free access to professional hardware for Asia's hackathons, universities, and builders.",
  openGraph: {
    title: "ARTIFICER.ASIA — Open Access Hardware",
    description:
      "Free access to professional hardware for Asia's hackathons, universities, and builders.",
    url: "/",
  },
};

const roadmapSteps = [
  "Invisible Commons pilot",
  "Additional Asian hackathons",
  "University programs",
  "Regional hardware-access network",
];



export default function HomePage() {
  return (
    <div className="relative">
      <PageBackground id="canvas_bg_stack" overlay={false} tileVertical />
      <div className="relative">
        <Hero
        kicker="Initiative 001 — Open Access Hardware"
        title="Open Access Hackathon Hardware Library"
        sub="Free access to professional hardware for Asia's hackathons, universities, and builders."
        copy="The next important technology project could begin anywhere. ARTIFICER.ASIA brings robotics, AI, sensing, imaging, edge-computing, and prototyping equipment to the events and university programs where builders are ready to use it."
        primary={{ label: "Request Hardware Access", href: "/request-hardware" }}
        secondary={{ label: "Sponsor Hardware", href: "/sponsor-hardware" }}
        stamp={
          <>
            Join us alongside{" "}
            <a
              href="https://invisiblecommons.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 underline-offset-4"
            >
              Invisible Commons
            </a>{" "}
            · Goa
          </>
        }
        visual={
          <FieldImage
            id="01_home/0_Intro/0_hero"
            figure="Fig. 01"
            subject="Hardware, builders, diagrams, and hackathon activity"
            alt="Editorial collage of professional hardware, builders, device diagrams, and hackathon activity"
            priority
          />
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="01"
          kicker="The access problem"
          title="Talent is everywhere. Hardware is not."
        />
        <EquipmentBrowser basePath={basePath} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="02"
          kicker="What we do"
          title="You bring the ideas. We bring the hardware."
        />
        <FieldImage
          id="01_home/2_Hardware/0_what-we-do"
          figure="Fig. 07"
          subject="Builders working with professional equipment"
          alt="Builders working with professional equipment at an event or program"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <CatalogCard code="Cat-01" title="Hardware Access">
            Professional equipment made available to selected hackathons and university programs.
          </CatalogCard>
          <CatalogCard code="Cat-02" title="Alignment by Need">
            Equipment matched with programs based on technical needs, participant capability, and
            potential impact.
          </CatalogCard>
          <CatalogCard code="Cat-03" title="Onsite Support">
            Setup, participant access, basic troubleshooting, and equipment recovery.
          </CatalogCard>
          <CatalogCard code="Cat-04" title="Documented Outcomes">
            Clear records of how equipment was used and what builders created.
          </CatalogCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="03"
          kicker="Launch and expansion"
          title="Next Deployment in Goa."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <ImageCarousel
              basePath={basePath}
              figure="Fig. 02"
              slides={[
                {
                  id: "01_home/3_Deployment/0_main-exterior",
                  subject: "Main Exterior",
                  alt: "Main exterior of the Invisible Commons Goa venue",
                },
                {
                  id: "01_home/3_Deployment/1_mentor-cabins",
                  subject: "Mentor Cabins",
                  alt: "Mentor cabins at the Invisible Commons Goa venue",
                },
                {
                  id: "01_home/3_Deployment/2_communal-lounge",
                  subject: "Communal Lounge",
                  alt: "Communal lounge at the Invisible Commons Goa venue",
                },
                {
                  id: "01_home/3_Deployment/3_walkway-to-beach",
                  subject: "Walkway to Beach",
                  alt: "Walkway to the beach at the Invisible Commons Goa venue",
                },
              ]}
            />
            <div className="mt-4 border-2 border-ink bg-cream px-4 py-3 shadow-[4px_4px_0_0_var(--color-ink)]">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                  T-minus · Deployment
                </p>
                <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  17 Oct · 09:00 IST
                </p>
              </div>
              <div className="mt-2">
                <CountdownClock />
              </div>
            </div>
          </div>
          <div>
            <p className="max-w-2xl text-base/7">
              In conjunction with{" "}
              <a
                href="https://invisible.garden"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-leaf underline decoration-2 underline-offset-4"
              >
                Invisible Garden
              </a>{" "}
              and{" "}
              <a
                href="https://commoncompute.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-fog-deep underline decoration-2 underline-offset-4"
              >
                Common Compute
              </a>
              , <strong className="font-semibold text-coral">ARTIFICER.ASIA</strong> will support
              the{" "}
              <a
                href="https://invisiblecommons.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-2 underline-offset-4"
              >
                Invisible Commons
              </a>{" "}
              <strong className="font-semibold text-ink">hackathon in Goa</strong>
              , providing participating builders access to professional hardware for hands-on
              experimentation and project development.
            </p>
            <p className="mt-4 max-w-2xl text-base/7">
              This pilot will establish a repeatable system for selecting equipment, coordinating
              delivery, preparing devices, supporting builders, documenting projects, and
              recovering and returning equipment.
            </p>
            <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              {roadmapSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="border-2 border-ink bg-cream px-3 py-1.5 font-tech text-[11px] uppercase tracking-widest">
                    {step}
                  </span>
                  {index < roadmapSteps.length - 1 ? (
                    <span aria-hidden="true" className="font-display text-lg text-coral">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-2xl text-sm/6 text-ink-soft">
              Equipment used through the initiative is intended to support future hackathons and
              university programs, including prospective initiatives connected with Chiang Mai
              University and IIT Bombay. These institutions are not confirmed partners.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading index="04" kicker="Audience pathways" title="Two ways in." />
        <div className="grid gap-6 lg:grid-cols-2">
          <CtaPanel
            tone="coral"
            code="Path A — Event organizers & faculty"
            title="Need hardware for an event?"
            href="/request-hardware"
            button="Request Hardware"
          >
            Tell us what your builders want to create. Tell us what your students need.
          </CtaPanel>
          <CtaPanel
            tone="fog"
            code="Path B — Hardware providers"
            title="Have hardware builders should use?"
            href="/sponsor-hardware"
            button="Sponsor Hardware"
          >
            Help place it at qualified events and programs.
          </CtaPanel>
        </div>
      </section>
      </div>
    </div>
  );
}
