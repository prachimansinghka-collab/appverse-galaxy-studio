import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, GlassCard } from "../components/ui-kit";
import { pricing } from "../lib/content";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — AppVerse Studios" },
      { name: "description", content: "Transparent pricing for MVPs, professional apps, and enterprise builds." },
      { property: "og:title", content: "Pricing — AppVerse Studios" },
      { property: "og:description", content: "Basic, Professional, and Enterprise plans." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Plans that scale with you"
        subtitle="Fixed-scope engagements or flexible retainers — choose what fits your product stage."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <GlassCard
              key={p.name}
              className={`relative flex flex-col ${
                p.featured ? "glow-strong md:-translate-y-3" : ""
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-semibold text-white glow">
                  Most Popular
                </span>
              )}
              <div className="text-sm font-medium text-muted-foreground">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold gradient-text">{p.price}</span>
                <span className="text-xs text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "gradient-primary text-white glow"
                    : "glass hover:bg-white/10"
                }`}
              >
                Get Started
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
