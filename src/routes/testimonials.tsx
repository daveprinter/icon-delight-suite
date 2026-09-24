import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteLayout } from "@/components/site-shell";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | PrimeTech Digital Solutions" },
      {
        name: "description",
        content:
          "Read what clients say about working with PrimeTech Digital Solutions on websites, software, mobile apps and automation projects.",
      },
      { property: "og:title", content: "Client Testimonials | PrimeTech Digital Solutions" },
      {
        property: "og:description",
        content: "Feedback from businesses that trusted PrimeTech with their technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Client stories"
        title="Trusted by teams that needed technology to work."
        description="Every project is judged by the same standard: did it make the business better? Here is what our clients say."
      />
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="bg-background p-7">
              <div className="flex gap-1" aria-label={`${item.rating} out of 5`}>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="size-4 fill-coral text-coral" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-7 text-muted-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="block text-sm font-extrabold">{item.name}</span>
                <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.16em] text-coral">
                  {item.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
