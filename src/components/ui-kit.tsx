import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto text-center" : "text-left"
      } max-w-2xl`}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 gradient-border" />
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground animate-fade-up">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl animate-fade-up">
          <span className="gradient-text">{title}</span>
        </h1>
        {subtitle && (
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
