import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/ui-kit";
import { portfolio } from "../lib/content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — AppVerse Studios" },
      { name: "description", content: "A gallery of premium apps designed and built by AppVerse Studios." },
      { property: "og:title", content: "Portfolio — AppVerse Studios" },
      { property: "og:description", content: "Fitness, banking, AI, learning, travel and more." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected apps we've shipped"
        subtitle="A cross-section of products across fintech, health, education, AI, and commerce."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolio.map((p) => (
            <div
              key={p.name}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl glass transition hover:-translate-y-1 hover:glow"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-30 transition group-hover:opacity-60`} />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="grid h-16 w-16 place-items-center rounded-2xl glass-strong text-3xl">
                  {p.emoji}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.tag}
                  </div>
                  <div className="mt-1 text-2xl font-bold">{p.name}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                    Case study →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
