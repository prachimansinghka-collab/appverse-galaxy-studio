import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { GlassCard, SectionHeading } from "../components/ui-kit";
import { services, portfolio, processSteps, testimonials, faqs } from "../lib/content";

export const Route = createFileRoute("/")({
  component: Home,
});

function useCounter(target: number, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return n;
}

function Stat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const n = useCounter(value);
  return (
    <div className="text-center">
      <div className="text-3xl font-bold sm:text-4xl gradient-text">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:px-6 sm:pt-16 sm:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground animate-fade-up"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Turning Ideas into Powerful Apps
          </div>

          <h1
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <span className="gradient-text">We Build Amazing</span>
            <br />
            <span className="gradient-text animate-gradient">Mobile &amp; Web Apps</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Professional Android, iOS, AI, and Web Application Development for teams that
            demand exceptional design, engineering, and outcomes.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-white glow-strong transition-transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              View Portfolio
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Floating device mockup */}
          <div
            className="relative mx-auto mt-16 max-w-4xl animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <div className="relative rounded-3xl glass-strong p-6 sm:p-10 glow">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-[9/16] overflow-hidden rounded-2xl gradient-primary p-[1px] animate-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <div className="relative flex h-full w-full flex-col items-center justify-between rounded-2xl bg-background/80 p-4 backdrop-blur">
                      <div className="h-1 w-10 rounded-full bg-white/20" />
                      <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-2xl">
                        {["📱", "🤖", "🌐"][i]}
                      </div>
                      <div className="w-full space-y-2">
                        <div className="h-2 w-3/4 rounded-full bg-white/20" />
                        <div className="h-2 w-1/2 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-6 rounded-2xl glass p-8 sm:grid-cols-4">
        <Stat value={120} suffix="+" label="Apps Shipped" />
        <Stat value={45} suffix="+" label="Enterprise Clients" />
        <Stat value={99} suffix="%" label="Client Retention" />
        <Stat value={12} suffix="M+" label="Users Reached" />
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="What we do"
        title="Services built for ambition"
        subtitle="Full-cycle product engineering — design, build, launch, and grow."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((s) => (
          <GlassCard key={s.title} className="min-h-[180px]">
            <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary">
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">{s.desc}</p>
          </GlassCard>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/10"
        >
          Explore all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Selected work"
        title="Apps we're proud of"
        subtitle="A glimpse of the products we've designed and shipped."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.slice(0, 8).map((p) => (
          <div
            key={p.name}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass transition hover:-translate-y-1"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-30 transition group-hover:opacity-60`}
            />
            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="grid h-14 w-14 place-items-center rounded-2xl glass-strong text-2xl">
                {p.emoji}
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {p.tag}
                </div>
                <div className="mt-1 text-xl font-bold">{p.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Our process"
        title="From spark to shipped"
        subtitle="A proven, transparent workflow that turns ideas into products users love."
      />
      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
        <ol className="space-y-8 lg:space-y-14">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className={`grid gap-6 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:col-start-2" : ""
              }`}
            >
              <GlassCard className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{step.desc}</p>
              </GlassCard>
              <div className="hidden lg:block" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by founders & teams"
        subtitle="A few kind words from the people we've built with."
      />
      <div className="mt-14">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-14">
          <div className="flex items-center justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p
            key={i}
            className="mx-auto mt-6 max-w-3xl text-center text-xl font-medium leading-relaxed sm:text-2xl animate-fade-up"
          >
            "{testimonials[i].quote}"
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full gradient-primary text-sm font-semibold text-white">
              {testimonials[i].avatar}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold">{testimonials[i].name}</div>
              <div className="text-xs text-muted-foreground">{testimonials[i].role}</div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-primary" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />
      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-2xl glass">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronRight
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    isOpen ? "rotate-90 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center sm:p-16 glow-strong">
        <div className="pointer-events-none absolute inset-0 opacity-40 gradient-primary blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Have an idea? Let's build it.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a free 30-minute discovery call. We'll map out scope, timelines, and cost.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3 text-sm font-semibold text-white glow-strong transition-transform hover:scale-105"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
