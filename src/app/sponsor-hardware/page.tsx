import type { Metadata } from "next";
import { CatalogCard } from "@/components/catalog-card";
import { FieldImage } from "@/components/field-image";
import { FormSheet } from "@/components/form-sheet";
import type { FormField } from "@/components/form-sheet";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { PageBackground } from "@/components/page-background";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Hardware Deployment for Hackathons & Developers in Asia | ARTIFICER.ASIA",
  },
  description:
    "Deploy manufacturer-owned hardware through qualified hackathons and university programs across Asia with coordinated setup, support, recovery, return, and documented outcomes.",
  openGraph: {
    title: "Hardware Deployment for Hackathons & Developers in Asia | ARTIFICER.ASIA",
    description:
      "Deploy manufacturer-owned hardware through qualified hackathons and university programs across Asia with coordinated setup, support, recovery, return, and documented outcomes.",
    url: "/sponsor-hardware",
    images: [
      {
        url: "/images/03_have_hardware/0_hero.png",
        width: 1672,
        height: 941,
        alt: "ARTIFICER.ASIA — Have Hardware?",
      },
    ],
  },
  alternates: {
    canonical: "https://artificer.asia/sponsor-hardware",
  },
};

const coordination = [
  {
    code: "Cat-01",
    title: "Program Matching",
    copy: "We identify programs suited to your hardware, target builders, technical requirements, geography, and developer goals.",
  },
  {
    code: "Cat-02",
    title: "Deployment Preparation",
    copy: "We coordinate receipt, inventory, technical preparation, setup, and participant access before each approved deployment.",
  },
  {
    code: "Cat-03",
    title: "Onsite Stewardship",
    copy: "When needed, we provide onsite stewardship for participant access, basic technical enablement, troubleshooting, and equipment recovery.",
  },
  {
    code: "Cat-04",
    title: "Outcome Documentation",
    copy: "You receive a deployment record showing where the equipment went, who used it, how it was used, what was built, technical feedback, available media, and potential future deployment opportunities.",
  },
];

const recordItems = [
  "Equipment model and serial number",
  "Event, country, and venue",
  "Participating teams and builders",
  "Equipment utilization",
  "Prototypes and demonstrations",
  "Code repositories where available",
  "Technical feedback",
  "Photos and video where consent is provided",
  "Potential future deployment opportunities",
];

const sponsorFields: FormField[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "organization", label: "Company or organization", required: true },
  {
    name: "hardwareProduct",
    label: "Hardware or product you want builders using",
    type: "textarea",
    required: true,
    full: true,
    placeholder: "Product, device, kit, platform, or hardware family",
  },
  { name: "country", label: "Country", required: true },
  {
    name: "restrictions",
    label: "Geographic restrictions",
    hint: "Regions or venues the equipment cannot travel to",
  },
  {
    name: "docs",
    label: "Support documentation available",
    type: "select",
    options: ["Yes", "Partial", "No"],
  },
  {
    name: "deploymentGoal",
    label: "What would a successful deployment look like?",
    type: "textarea",
    full: true,
    placeholder:
      "Examples: developer adoption, prototypes, feedback, workshop use, documentation, media, or repeat deployment",
  },
  { name: "message", label: "Message", type: "textarea", full: true },
];

export default function SponsorHardwarePage() {
  return (
    <div className="relative">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://artificer.asia/sponsor-hardware#service",
              url: "https://artificer.asia/sponsor-hardware",
              name: "Managed Hardware Deployment for Developer Programs",
              serviceType:
                "Managed deployment of manufacturer-owned hardware with qualified hackathons and university programs across Asia — program matching, temporary custody, technical enablement where needed, recovery, reconciliation, documented return, outcome documentation, and repeat-deployment potential",
              provider: { "@id": "https://artificer.asia/#organization" },
              areaServed: "Asia",
              audience: {
                "@type": "Audience",
                audienceType:
                  "Hardware manufacturers, semiconductor companies, robotics companies, IoT companies, developer-hardware companies, DevRel teams, ecosystem teams, partnerships teams, and developer-marketing teams",
              },
            },
          ],
        }}
      />
      <PageBackground id="canvas_bg_stack" overlay={false} tileVertical />
      <div className="relative">
        <Hero
        kicker="Manufacturer hardware — Managed deployment"
        title="Put Your Hardware in Builders' Hands."
        copy={
          <>
            <p>
              ARTIFICER.ASIA turns manufacturer-owned hardware into managed developer deployments
              across Asia. You retain ownership while we match your equipment with qualified
              hackathons and university programs, coordinate receipt, preparation and participant
              access, support its use where needed, recover and reconcile it afterward, and
              complete a documented return handoff.
            </p>
            <p>
              The goal is not a one-off hardware sponsorship. It is a repeatable way to put proven
              hardware into successive builder environments without rebuilding the operational
              layer for every program.
            </p>
            <p className="mt-2 inline-block border-2 border-ink bg-cream px-4 py-3 font-display text-lg font-semibold uppercase leading-snug tracking-tight text-ink shadow-[4px_4px_0_0_var(--color-coral)]">
              You keep the hardware. We handle the operational middle.
            </p>
          </>
        }
        primary={{ label: "Explore a Deployment", href: "#partner" }}
        visual={
          <FieldImage
            id="03_have_hardware/0_hero"
            figure="Fig. 05"
            subject="Showcase your tech"
            alt="Professional devices being prepared, labeled, and packed for a hackathon deployment"
            priority
          />
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="01"
          kicker="What ARTIFICER.ASIA coordinates"
          title="From offer to documented return."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coordination.map((item) => (
            <CatalogCard key={item.code} code={item.code} title={item.title}>
              {item.copy}
            </CatalogCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading index="02" kicker="Custody model" title="Your hardware stays yours." />
        <div className="max-w-3xl border-2 border-ink bg-cream p-6 shadow-[4px_4px_0_0_var(--color-ink)] sm:p-8">
          <p className="text-base/7">
            Hardware providers retain ownership throughout the deployment. ARTIFICER.ASIA takes
            temporary custody shortly before an approved program, manages deployment and recovery,
            and ends custody with a documented return handoff.
          </p>
          <p className="mt-4 text-base/7">
            Unless separately arranged, between-event storage, warranties, and substantive repairs
            remain with the hardware provider.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="03"
          kicker="Repeat deployment"
          title="Built for repeat deployment."
        />
        <div className="max-w-3xl border-2 border-ink bg-cream p-6 shadow-[4px_4px_0_0_var(--color-ink)] sm:p-8">
          <p className="text-base/7">
            A successful activation should make the next one easier. ARTIFICER.ASIA documents
            equipment setup, support requirements, builder use cases, technical feedback, and
            outcomes so proven hardware and program formats can be carried into future
            deployments across Asia.
          </p>
          <p className="mt-4 text-base/7">
            Hardware returns to the provider between programs unless another custody arrangement
            is agreed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="04"
          kicker="What gets documented"
          title="Every deployment leaves a record."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-4 font-display text-lg font-semibold uppercase leading-snug tracking-tight">
              Developer engagement should produce evidence, not just impressions.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3 border-2 border-ink bg-ink px-4 py-3 text-cream">
              <p className="font-tech text-[11px] uppercase tracking-[0.2em]">
                Sample activation record — Rec-AA-001
              </p>
            </div>
            <ul className="border-2 border-t-0 border-ink bg-cream">
              {recordItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-ink/20 px-4 py-3 font-tech text-xs uppercase tracking-wider last:border-b-0"
                >
                  <span aria-hidden="true" className="text-coral">
                    ▢
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <FieldImage
            id="03_have_hardware/1_what-gets-documented"
            figure="Fig. 06"
            subject="Device deployment record"
            alt="A stylized device deployment record combining equipment photography, technical annotations, project evidence, and inventory details"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <figure className="border-2 border-ink bg-ink p-8 text-cream shadow-[6px_6px_0_0_var(--color-coral)] sm:p-12">
          <blockquote className="font-display text-2xl font-semibold uppercase leading-snug tracking-tight sm:text-4xl">
            <span aria-hidden="true" className="text-mustard">
              “
            </span>
            Every device should produce more than a shipment receipt. It should produce knowledge,
            evidence, and media.
            <span aria-hidden="true" className="text-mustard">
              ”
            </span>
          </blockquote>
          <figcaption className="mt-6 font-tech text-[11px] uppercase tracking-[0.25em] text-cream/60">
            ARTIFICER.ASIA — operating principle
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="05"
          kicker="Explore a deployment"
          title="Start a conversation."
        />
        <FormSheet
          anchorId="partner"
          sheetCode="Form AR-02"
          sheetTitle="Hardware Deployment Inquiry"
          fields={sponsorFields}
          buttonLabel="Explore a Deployment"
          subject={{
            orgField: "organization",
            verb: "Hardware Deployment Inquiry",
            segments: [{ field: "country", prefix: " from " }],
          }}
          note={`* Required. Deployment conversations begin with your hardware, target builders, and program goals. Inquiries are emailed directly to ${site.email}.`}
        />
      </section>
      </div>
    </div>
  );
}
