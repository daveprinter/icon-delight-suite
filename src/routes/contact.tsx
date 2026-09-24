import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { QuoteForm } from "@/components/quote-form";
import { SiteLayout } from "@/components/site-shell";
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_URL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quotes | PrimeTech Digital Solutions" },
      {
        name: "description",
        content:
          "Request a quote from PrimeTech Digital Solutions by form, phone, WhatsApp or email. Tell us about your website, software or app project.",
      },
      { property: "og:title", content: "Contact & Quotes | PrimeTech Digital Solutions" },
      {
        property: "og:description",
        content: "Send your project details and we'll respond with a practical next step.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Contact"
        title="Tell us what you want to build."
        description="Share a few details and we'll come back with clear next steps, timelines and a quote for your project."
      />
      <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-extrabold">Request a quote</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Every request reaches our team directly. Expect a reply within one business day.
          </p>
          <div className="mt-8">
            <QuoteForm />
          </div>
        </div>
        <aside className="bg-brand p-7 text-brand-foreground lg:col-span-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-coral">Talk to us</p>
          <h2 className="mt-2 text-2xl font-extrabold">Prefer a quicker route?</h2>
          <div className="mt-8 space-y-4 text-sm">
            <a className="flex items-center gap-3 hover:text-coral" href={`tel:${PHONE_LINK}`}>
              <Phone className="size-4 text-coral" /> {PHONE_DISPLAY}
            </a>
            <a className="flex items-center gap-3 break-all hover:text-coral" href={`mailto:${EMAIL}`}>
              <Mail className="size-4 text-coral" /> {EMAIL}
            </a>
            <a
              className="flex items-center gap-3 hover:text-coral"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4 text-coral" /> Chat on WhatsApp
            </a>
          </div>
          <p className="mt-8 border-t border-brand-foreground/10 pt-5 text-[11px] leading-6 text-brand-foreground/60">
            Office hours: Monday to Friday, 8:00am – 6:00pm EAT.
          </p>
        </aside>
      </section>
    </SiteLayout>
  );
}
