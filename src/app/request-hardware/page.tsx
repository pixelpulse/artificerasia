import type { Metadata } from "next";
import { CatalogCard } from "@/components/catalog-card";
import { FieldImage } from "@/components/field-image";
import { FormSheet } from "@/components/form-sheet";
import type { FormField } from "@/components/form-sheet";
import { Hero } from "@/components/hero";
import { PageBackground } from "@/components/page-background";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Need Hardware?",
  description:
    "Request professional equipment for qualified hackathons and university programs across Asia.",
  openGraph: {
    title: "Need Hardware? — ARTIFICER.ASIA",
    description:
      "Request professional equipment for qualified hackathons and university programs across Asia.",
    url: "/request-hardware",
    images: [
      {
        url: "/images/02_need_hardware/0_hero.png",
        width: 1672,
        height: 941,
        alt: "ARTIFICER.ASIA — Need Hardware?",
      },
    ],
  },
};

const categories = [
  {
    code: "Cat-01",
    title: "Robotics and autonomous systems",
    copy: "Robots, actuators, and autonomous platforms for movement and control projects.",
  },
  {
    code: "Cat-02",
    title: "AI and edge-computing devices",
    copy: "Accelerators and edge systems for on-device AI and inference work.",
  },
  {
    code: "Cat-03",
    title: "Sensors and IoT equipment",
    copy: "Environmental, motion, and connectivity sensors for networked builds.",
  },
  {
    code: "Cat-04",
    title: "Cameras and imaging systems",
    copy: "Visible, depth, and machine-vision imaging for computer vision projects.",
  },
  {
    code: "Cat-05",
    title: "Drones and aerial technology",
    copy: "Aerial platforms for mapping, sensing, and flight-focused builds.",
  },
  {
    code: "Cat-06",
    title: "Smart glasses and spatial-computing devices",
    copy: "Wearable and spatial interfaces for augmented and mixed-reality experiments.",
  },
  {
    code: "Cat-07",
    title: "Microcontrollers and prototyping systems",
    copy: "Boards, kits, and bench tools for rapid electronics prototyping.",
  },
  {
    code: "Cat-08",
    title: "Other specialized technical equipment",
    copy: "Category requests reviewed case by case against event needs.",
  },
];

const eligiblePrograms = [
  "Hackathons",
  "Universities",
  "Student technology programs",
  "Research or maker communities",
  "Nonprofit technical programs",
  "Other structured builder events in Asia",
];

const workflowSteps = [
  "The organizer submits an equipment request.",
  "ARTIFICER.ASIA reviews the event and technical requirements.",
  "Suitable equipment is identified and matched with the program.",
  "Hardware is delivered, prepared, and supported onsite.",
  "Equipment use and resulting projects are documented.",
  "Devices are reconciled, packed, and returned.",
];

const requestFields: FormField[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "organization", label: "Organization", required: true },
  { name: "location", label: "Country and city", required: true },
  {
    name: "orgType",
    label: "Organization type",
    type: "select",
    required: true,
    options: [
      "Hackathon",
      "University",
      "Student technology program",
      "Research or maker community",
      "Nonprofit technical program",
      "Other structured builder event",
    ],
  },
  { name: "eventName", label: "Event or program name", required: true },
  { name: "eventDates", label: "Event dates", placeholder: "e.g. 12–14 Dec 2026 (or TBD)" },
  { name: "participants", label: "Expected participant count", type: "number" },
  {
    name: "experience",
    label: "Participant experience level",
    type: "select",
    options: ["Beginner", "Mixed", "Intermediate", "Advanced"],
  },
  {
    name: "hardware",
    label: "Hardware requested",
    type: "textarea",
    required: true,
    full: true,
    placeholder: "Categories, quantities, and any specific requirements",
  },
  {
    name: "intent",
    label: "What participants intend to build",
    type: "textarea",
    required: true,
    full: true,
  },
  {
    name: "onsiteSupport",
    label: "Onsite technical support available",
    type: "select",
    required: true,
    options: [
      "Yes — dedicated onsite support",
      "Partial — some support available",
      "No — none planned",
    ],
  },
  { name: "message", label: "Message or supporting information", type: "textarea", full: true },
];

export default function RequestHardwarePage() {
  return (
    <div className="relative">
      <PageBackground id="canvas_bg_stack" overlay={false} tileVertical />
      <div className="relative">
        <Hero
        kicker="Equipment access — Request program"
        title="Give Your Builders Better Tools."
        copy={
          <>
            ARTIFICER.ASIA helps provide qualified hackathons and university programs{" "}
            <em>free</em> access to professional equipment that participants may not otherwise be
            able to use.
          </>
        }
        primary={{ label: "Start an Application", href: "#application" }}
        visual={
          <FieldImage
            id="02_need_hardware/0_hero"
            figure="Fig. 03"
            subject="Unpacking and testing equipment"
            alt="A diverse event team unpacking and testing robotics, AI, sensing, imaging, or prototyping hardware"
            priority
          />
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="01"
          kicker="Available hardware categories"
          title="Hardware categories."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CatalogCard key={category.code} code={category.code} title={category.title}>
              {category.copy}
            </CatalogCard>
          ))}
        </div>
        <p className="mt-8 border-l-4 border-coral bg-cream p-4 text-sm/6">
          Categories describe the kinds of equipment ARTIFICER.ASIA can coordinate for selected
          programs. Availability of any specific device is confirmed during review — no device
          listed here is guaranteed for a given event.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading index="02" kicker="Who can apply" title="Qualified programs across Asia." />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <ul className="self-start border-2 border-ink bg-cream p-5">
            {eligiblePrograms.map((program) => (
              <li
                key={program}
                className="flex items-center gap-3 border-b border-ink/20 px-1 py-3 font-tech text-xs uppercase tracking-wider last:border-b-0"
              >
                <span aria-hidden="true" className="text-coral">
                  ▣
                </span>
                {program}
              </li>
            ))}
          </ul>
          <aside className="self-start border-2 border-ink bg-cream p-5 shadow-[4px_4px_0_0_var(--color-ink)]">
            <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-coral">
              Selection considers
            </p>
            <p className="mt-3 text-sm/6">
              Technical readiness, event organization, participant capability, equipment
              suitability, and the likelihood of meaningful use.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          index="03"
          kicker="How it works"
          title="Request to return, in six steps."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <ol className="grid gap-4 sm:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <li key={step} className="border-2 border-ink bg-cream p-4">
                <p className="font-display text-3xl font-semibold leading-none text-coral">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm/6">{step}</p>
              </li>
            ))}
          </ol>
          <FieldImage
            id="02_need_hardware/1_how-it-works"
            figure="Fig. 04"
            subject="Delivery through event use and return"
            alt="A flat-lay or technical manifest showing equipment moving from delivery through event use and return"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading index="04" kicker="Application" title="Equipment request sheet." />
        <FormSheet
          anchorId="application"
          sheetCode="Form AR-01"
          sheetTitle="Equipment Request Sheet"
          fields={requestFields}
          buttonLabel="Submit Equipment Request"
          subject={{
            orgField: "organization",
            verb: "Need Hardware",
            segments: [
              { field: "participants", prefix: " for ", suffix: " builders" },
              { field: "eventDates", prefix: " on " },
            ],
          }}
          note={`* Required. Requests are reviewed for event suitability, technical readiness, and equipment availability. Submissions are emailed directly to ${site.email}.`}
        />
      </section>
      </div>
    </div>
  );
}
