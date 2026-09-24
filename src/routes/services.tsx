import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteLayout } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | PrimeTech Digital Solutions" },
      {
        name: "description",
        content:
          "Website design, custom software, mobile apps, cloud, cybersecurity, SEO and automation services from PrimeTech Digital Solutions.",
      },
      { property: "og:title", content: "Services | PrimeTech Digital Solutions" },
      {
        property: "og:description",
        content: "One technology partner for design, engineering, cloud, security and growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="What we do"
        title="Services built around real business outcomes."
        description="From first concept to long-term support, we design, build and maintain the technology that keeps your business moving."
      />
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group bg-background p-7">
              <span className="grid size-11 place-items-center bg-brand text-brand-foreground">
                <Icon className="size-5 text-coral" />
              </span>
              <h2 className="mt-5 text-lg font-extrabold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary"
              >
                Request a quote <ArrowRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
