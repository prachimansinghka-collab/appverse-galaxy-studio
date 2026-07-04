import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, GlassCard } from "../components/ui-kit";
import { services } from "../lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AppVerse Studios" },
      { name: "description", content: "Android, iOS, Web, AI, e-commerce, and enterprise app development services from AppVerse Studios." },
      { property: "og:title", content: "Services — AppVerse Studios" },
      { property: "og:description", content: "Full-cycle product engineering for mobile, web, and AI." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need, built by one team"
        subtitle="From MVPs to enterprise platforms — a single studio for design, engineering, and growth."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <GlassCard key={s.title} className="min-h-[220px]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary glow">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
