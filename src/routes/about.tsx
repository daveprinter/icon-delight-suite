import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Handshake, Lightbulb, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteLayout } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | PrimeTech Digital Solutions" },
      {
        name: "description",
        content:
          "PrimeTech Digital Solutions is a Kenyan technology team building websites, software and systems with strategy, design and engineering under one roof.",
      },
      { property: "og:title", content: "About Us | PrimeTech Digital Solutions" },
      {
        property: "og:description",
        content: "A technology partner focused on practical, lasting business impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Clarity first",
    description: "We start with the business problem, not the technology, so every build has a purpose.",
    icon: Compass,
  },
  {
    title: "Practical craft",
    description: "Clean, maintainable systems that your team can grow with long after launch.",
    icon: Lightbulb,
  },
  {
    title: "Honest partnership",
    description: "Clear timelines, direct communication and no surprises during delivery.",
    icon: Handshake,
  },
  {
    title: "Built to last",
    description: "Security, performance and support considered from the very first decision.",
    icon: ShieldCheck,
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Who we are"
        title="A technology team built for useful, lasting work."
        description="PrimeTech Digital Solutions brings strategy, design and engineering together to help businesses in Kenya and beyond run on technology they can trust."
      />
      <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Our approach</h2>
          <p className="mt-5 text-[15px] leading-7 text-muted-foreground">
            We work in small, senior teams that stay close to the people using what we build. Discovery
            shapes the brief, design makes it understandable, and engineering makes it dependable.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
            The result is software that fits the way your business actually works — simple for customers,
            practical for your team and ready to grow.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-soft"
          >
            Start a conversation <ArrowRight className="size-4 text-coral" />
          </Link>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {values.map(({ title, description, icon: Icon }) => (
            <div key={title} className="bg-background p-6">
              <span className="inline-flex items-center gap-3">
                <Icon className="size-5 text-coral" />
                <span className="text-sm font-extrabold">{title}</span>
              </span>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
