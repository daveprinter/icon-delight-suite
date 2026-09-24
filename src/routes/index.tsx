import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, GitBranch, MessageSquareText, Rocket, SearchCheck } from "lucide-react";
import { SiteLayout } from "@/components/site-shell";
import { services, testimonials } from "@/lib/site-data";
import webDesignVideo from "@/assets/primetek-web-design.mp4.asset.json";
import softwareVideo from "@/assets/primetek-software.mp4.asset.json";
import cloudVideo from "@/assets/primetech-cloud.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeTech Digital Solutions | Websites, Software & Technology" },
      {
        name: "description",
        content:
          "PrimeTech Digital Solutions builds websites, custom software, mobile apps and technology systems that solve real business problems.",
      },
      {
        property: "og:title",
        content: "PrimeTech Digital Solutions | Websites, Software & Technology",
      },
      {
        property: "og:description",
        content: "We turn ambitious ideas into digital products people want to use.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const proof = [
  { label: "Shipped", value: "Web & mobile products built for launch" },
  { label: "Stack", value: "Clean, maintainable code and systems" },
  { label: "Partner", value: "A senior team from brief to release" },
];

const highlights = services.slice(0, 6);

const videos = [webDesignVideo.url, softwareVideo.url, cloudVideo.url];

const metrics = [
  { value: "200+", label: "Clients satisfied" },
  { value: "100%", label: "Customer satisfaction" },
  { value: "100+", label: "Solutions offered" },
  { value: "20+", label: "Qualified staff" },
];

const process = [
  { title: "Discover", description: "We clarify the challenge, users and outcome.", icon: SearchCheck },
  { title: "Plan", description: "We shape the solution, scope and delivery path.", icon: GitBranch },
  { title: "Build", description: "Design and engineering move together in focused cycles.", icon: MessageSquareText },
  { title: "Launch", description: "We test, release and support measurable progress.", icon: Rocket },
];

function Index() {
  return (
    <SiteLayout>
      <main className="relative overflow-hidden">
        <section className="relative isolate min-h-[calc(100svh-6.5rem)] overflow-hidden text-brand-foreground">
          <div className="absolute inset-0 -z-20 bg-brand" aria-hidden="true">
            {videos.map((src, index) => (
              <video key={src} className={`hero-video hero-video-${index + 1}`} autoPlay muted loop playsInline preload="auto" aria-hidden="true">
                <source src={src} type="video/mp4" />
              </video>
            ))}
          </div>
          <div className="absolute inset-0 -z-10 bg-brand/70" aria-hidden="true" />
          <div className="mx-auto grid min-h-[calc(100svh-6.5rem)] max-w-[1240px] grid-cols-1 gap-10 px-5 py-14 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-0 lg:py-20">
          <div className="hero-enter lg:col-span-7 lg:pr-12">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-coral">
              Digital products · Software · Technology
            </p>
            <h1 className="max-w-[18ch] text-balance text-4xl font-extrabold leading-[1.04] text-brand-foreground sm:text-5xl lg:text-[3.65rem]">
              We shape bold ideas into <span className="text-coral">digital experiences</span>{" "}
              that create real progress.
            </h1>
            <p className="mt-6 max-w-[55ch] text-pretty text-[15px] leading-7 text-brand-foreground/80">
              PrimeTech combines product thinking, design and engineering to build websites, mobile
              apps, software and technology systems that solve real business problems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                className="inline-flex items-center gap-2 bg-coral px-5 py-3 text-sm font-bold text-coral-foreground transition-all hover:-translate-y-0.5 hover:bg-coral-strong"
                to="/contact"
              >
                Start Your Project <ArrowRight className="size-4 text-coral" />
              </Link>
              <Link
                className="inline-flex items-center border border-brand-foreground/40 bg-brand/30 px-5 py-3 text-sm font-bold text-brand-foreground backdrop-blur transition-colors hover:border-coral hover:text-coral"
                to="/services"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-11 grid border border-brand-foreground/20 bg-brand/45 backdrop-blur sm:grid-cols-3 sm:gap-px">
              {proof.map((item) => (
                <div className="border-brand-foreground/10 px-4 py-4 sm:border-r last:border-r-0" key={item.label}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-coral">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden border-l border-brand-foreground/20 lg:col-span-1 lg:block lg:h-[500px]" />

          <aside
            className="panel-enter border border-brand-foreground/15 bg-brand/80 p-7 text-brand-foreground backdrop-blur lg:col-span-4 lg:p-8"
            aria-labelledby="capabilities-title"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-coral">
              Digital capability
            </p>
            <h2 id="capabilities-title" className="mt-2 text-2xl font-extrabold">
              Built to move fast.
            </h2>
            <ul className="mt-7 divide-y divide-brand-foreground/10">
              {highlights.slice(0, 4).map((service, index) => (
                <li className="group flex items-start gap-4 py-4" key={service.title}>
                  <span className="pt-0.5 text-xs font-bold text-coral">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold leading-snug transition-transform group-hover:translate-x-1">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 border-t border-brand-foreground/10 pt-5 text-[11px] text-brand-foreground/60">
              <span className="size-1.5 bg-coral" />
              Strategy, design and engineering in one team
            </div>
          </aside>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/80">
          <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-5 px-5 py-10 sm:px-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-coral">
                What we do
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                One technology partner. Multiple capabilities.
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 self-start text-sm font-bold text-primary md:self-auto"
              to="/services"
            >
              Explore all services <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ title, description, icon: Icon }) => (
              <article key={title} className="bg-background p-7">
                <span className="grid size-11 place-items-center bg-brand text-brand-foreground">
                  <Icon className="size-5 text-coral" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand text-brand-foreground">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 px-5 py-14 sm:px-6 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-brand-foreground/15 px-4 py-6 text-center first:border-l border-r">
                <strong className="block text-3xl font-extrabold text-coral sm:text-4xl">{metric.value}</strong>
                <span className="mt-2 block text-xs font-bold uppercase text-brand-foreground/65">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-coral">How we work</p>
          <h2 className="mt-2 max-w-xl text-2xl font-extrabold sm:text-3xl">A clear path from first conversation to lasting results.</h2>
          <div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-border md:block" aria-hidden="true" />
            {process.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="relative flex gap-5 md:block md:text-center">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center border border-border bg-background text-coral md:mx-auto">
                  <Icon className="size-5" />
                </span>
                <span className="absolute left-6 top-16 hidden h-8 w-px bg-border md:hidden" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-bold uppercase text-coral">0{index + 1}</p>
                  <h3 className="mt-1 text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-coral">Ready when you are</p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Let’s build technology that moves your business forward.</h2>
            </div>
            <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 self-start bg-coral px-5 py-3 text-sm font-bold text-coral-foreground hover:bg-coral-strong">
              Request a quote <CheckCircle2 className="size-4" />
            </Link>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/60">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-coral">
              Client stories
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Work our clients are happy to talk about.
            </h2>
            <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
              {testimonials.slice(0, 3).map((item) => (
                <figure key={item.name} className="bg-background p-7">
                  <blockquote className="text-sm leading-7 text-muted-foreground">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4 text-sm font-extrabold">
                    {item.name}
                    <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.16em] text-coral">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <Link
              className="mt-8 inline-flex items-center gap-2 bg-coral px-5 py-3 text-sm font-bold text-coral-foreground hover:bg-coral-strong"
              to="/testimonials"
            >
              Read all testimonials <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
