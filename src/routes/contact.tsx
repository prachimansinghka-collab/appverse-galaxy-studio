import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, GlassCard } from "../components/ui-kit";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AppVerse Studios" },
      { name: "description", content: "Get in touch with AppVerse Studios. Book a free discovery call for your next app." },
      { property: "og:title", content: "Contact AppVerse Studios" },
      { property: "og:description", content: "Let's build your next app together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something great"
        subtitle="Tell us about your idea — we usually reply within one business day."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-5">
          <GlassCard className="lg:col-span-3">
            <h3 className="text-xl font-semibold">Send a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in the form and we'll get back to you shortly.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!form.name || !form.email || !form.message) return;
                setSent(true);
                setForm({ name: "", email: "", message: "" });
              }}
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Name</label>
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="mt-1.5 w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-1 ring-white/10 transition focus:ring-primary"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    maxLength={200}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="mt-1.5 w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-1 ring-white/10 transition focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Project details</label>
                <textarea
                  required
                  rows={5}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-1.5 w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-1 ring-white/10 transition focus:ring-primary"
                  placeholder="Tell us about your idea, timeline, and goals…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-white glow transition-transform hover:scale-105"
              >
                {sent ? "Message Sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </GlassCard>

          <div className="space-y-4 lg:col-span-2">
            <GlassCard>
              <ContactRow icon={Phone} title="Call us" value="+1 (555) 123-4567" />
              <ContactRow icon={Mail} title="Email" value="hello@appverse.studio" />
              <ContactRow icon={MapPin} title="Studio" value="Remote-first · HQ in San Francisco" />
            </GlassCard>
            <GlassCard className="!p-0 overflow-hidden">
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=San+Francisco&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
              />
            </GlassCard>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl gradient-primary p-5 text-white glow transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                <div>
                  <div className="text-sm font-semibold">Chat on WhatsApp</div>
                  <div className="text-xs opacity-80">Fastest way to reach us</div>
                </div>
              </div>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Live chat bubble */}
      <button
        type="button"
        aria-label="Open live chat"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full gradient-primary text-white glow-strong animate-pulse-glow"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
}

function ContactRow({ icon: Icon, title, value }: { icon: typeof Phone; title: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/10">
      <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="mt-0.5 text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
