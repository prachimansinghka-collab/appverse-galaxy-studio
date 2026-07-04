import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, GlassCard, SectionHeading } from "../components/ui-kit";
import { Target, Eye, Award, Users, Zap, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AppVerse Studios" },
      { name: "description", content: "The story, mission, and vision behind AppVerse Studios — a premium app development studio." },
      { property: "og:title", content: "About AppVerse Studios" },
      { property: "og:description", content: "Design-led engineering for ambitious teams." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "Craftsmanship", desc: "Every pixel, every function — obsessively refined." },
  { icon: Zap, title: "Velocity", desc: "We ship fast without compromising on quality." },
  { icon: Users, title: "Partnership", desc: "We treat your product like it's our own." },
  { icon: Heart, title: "Care", desc: "We only take on work we can genuinely be proud of." },
];

const timeline = [
  { year: "2018", title: "Founded", desc: "Started as a two-person design + engineering duo." },
  { year: "2020", title: "First 1M users", desc: "Our early apps crossed the million-user mark." },
  { year: "2022", title: "Global team", desc: "Expanded to a distributed team across 8 countries." },
  { year: "2024", title: "AI division", desc: "Launched dedicated AI product engineering practice." },
  { year: "2026", title: "120+ apps shipped", desc: "Trusted by startups and Fortune 500s alike." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A studio built for what's next"
        subtitle="AppVerse Studios is a small, senior team of designers and engineers building premium apps for the world's most ambitious founders."
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              To help visionary founders and teams turn ambitious ideas into apps that
              users love — with the design, engineering, and craft they deserve.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary">
                <Eye className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              A world where every great idea has an equally great app — beautiful,
              accessible, and built to last.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="Why choose us" title="What sets us apart" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <GlassCard key={v.title}>
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary">
                <v.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Our journey" title="Milestones" />
        <div className="relative mt-14 pl-6 sm:pl-12">
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:left-4" />
          <ul className="space-y-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <div className="absolute -left-6 top-1 h-4 w-4 rounded-full gradient-primary glow sm:-left-10" />
                <div className="text-xs font-semibold uppercase tracking-widest gradient-text">
                  {t.year}
                </div>
                <div className="mt-1 text-lg font-semibold">{t.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
