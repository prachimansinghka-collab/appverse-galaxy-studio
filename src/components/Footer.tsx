import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin, Github, Sparkles, Mail } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl gradient-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">
                AppVerse<span className="gradient-text"> Studios</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Turning ideas into powerful apps. We design and build premium mobile,
              web, and AI experiences for ambitious teams around the world.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSent(true);
                setEmail("");
              }}
              className="mt-6 flex max-w-md items-center gap-2 rounded-full glass p-1.5"
            >
              <Mail className="ml-3 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email for updates"
                className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="rounded-full gradient-primary px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105"
              >
                {sent ? "Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Twitter, Instagram, Linkedin, Facebook, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full glass transition hover:scale-110 hover:glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} AppVerse Studios. All rights reserved.</p>
          <p>Crafted with precision — built to scale.</p>
        </div>
      </div>
    </footer>
  );
}
