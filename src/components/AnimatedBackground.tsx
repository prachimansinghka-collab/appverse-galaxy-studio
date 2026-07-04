export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl animate-float" />
      <div
        className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-neon-purple/30 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-neon-blue/25 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}
