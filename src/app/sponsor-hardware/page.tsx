import type { Metadata } from "next";
import { CatalogCard } from "@/components/catalog-card";
import { FieldImage } from "@/components/field-image";
import { FormSheet } from "@/components/form-sheet";
import type { FormField } from "@/components/form-sheet";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Have Hardware?",
  description:
    "Place professional equipment with vetted hackathons and university programs across Asia.",
  openGraph: {
    title: "Have Hardware? — ARTIFICER.ASIA",
    description:
      "Place professional equipment with vetted hackathons and university programs across Asia.",
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
};

const coordination = [
  {
    code: "Cat-01",
    title: "Program Matching",
    copy: "Identify events and programs suited to your organization's equipment and KPIs.",
  },
  {
    code: "Cat-02",
    title: "Deployment Preparation",
    copy: "We work directly with you to coordinate receipt, inventory, setup, and participant access before the event.",
  },
  {
    code: "Cat-03",
    title: "Onsite Stewardship",
    copy: "When needed we send a team member onsite to manage equipment use, basic support, and recovery during the event.",
  },
  {
    code: "Cat-04",
    title: "Outcome Documentation",
    copy: "Our team ensures you receive usage records of where the equipment went, how it was used, and what was built.",
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

const categoryOptions = [
  "Robotics and autonomous systems",
  "AI and edge-computing devices",
  "Sensors and IoT equipment",
  "Cameras and imaging systems",
  "Drones and aerial technology",
  "Smart glasses and spatial-computing devices",
  "Microcontrollers and prototyping systems",
  "Other specialized technical equipment",
];

const sponsorFields: FormField[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "organization", label: "Company or organization", required: true },
  { name: "country", label: "Country", required: true },
  {
    name: "category",
    label: "Equipment category",
    type: "select",
    required: true,
    options: categoryOptions,
  },
  { name: "model", label: "Manufacturer and model", required: true },
  { name: "quantity", label: "Number of devices", type: "number" },
  {
    name: "requirements",
    label: "Technical requirements",
    type: "textarea",
    required: true,
    hint: "Power, network, software, or environmental needs",
  },
  {
    name: "skillLevel",
    label: "Recommended participant skill level",
    type: "select",
    options: ["Beginner", "Mixed", "Intermediate", "Advanced"],
  },
  {
    name: "docs",
    label: "Support documentation available",
    type: "select",
    options: ["Yes", "Partial", "No"],
  },
  {
    name: "warranty",
    label: "Warranty and repair process",
    type: "textarea",
    hint: "How repairs and claims are handled during a deployment",
  },
  {
    name: "restrictions",
    label: "Geographic restrictions",
    hint: "Regions or venues the equipment cannot travel to",
  },
  { name: "availability", label: "Availability window", placeholder: "e.g. Q1 2027 onward (or TBD)" },
  { name: "message", label: "Message", type: "textarea", full: true },
];

export default function SponsorHardwarePage() {
  return (
    <>
      <Hero
        kicker="Equipment sponsorship — Deployment program"
        title="Put Your Hardware in Builders' Hands."
        copy="ARTIFICER.ASIA connects professional equipment with vetted hackathons and university programs where builders can use it, test ideas, and create working projects."
        primary={{ label: "Offer Hardware", href: "#offer" }}
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
        <SectionHeading index="02" kicker="Custody model" title="Custody, not storage." />
        <div className="max-w-3xl border-2 border-ink bg-cream p-6 shadow-[4px_4px_0_0_var(--color-ink)] sm:p-8">
          <p className="text-base/7">
            Unless specifically arranged, ARTIFICER.ASIA does not maintain long-term warehouses.
          </p>
          <p className="mt-4 text-base/7">
            Custody begins shortly before an approved event and ends with documented return
            handoff. Hardware providers retain ownership and responsibility for between-event
            storage, warranties, and substantive repairs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="03"
          kicker="What gets documented"
          title="Every deployment leaves a record."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
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
        <SectionHeading index="04" kicker="Offer hardware" title="Equipment manifest." />
        <FormSheet
          anchorId="offer"
          sheetCode="Form AR-02"
          sheetTitle="Equipment Manifest"
          fields={sponsorFields}
          buttonLabel="Submit Equipment Offer"
          note="* Required. Offers are reviewed for program suitability and deployment planning. This program concerns equipment availability, not financial sponsorship. This form is a placeholder — no submission channel is configured yet."
        />
      </section>
    </>
  );
}
