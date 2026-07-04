import { Smartphone, Apple, Globe, Brain, ShoppingCart, Briefcase, Gamepad2, Cloud, Shield, Rocket } from "lucide-react";

export const services = [
  { icon: Smartphone, title: "Android App Development", desc: "Native Kotlin & Jetpack Compose apps engineered for performance." },
  { icon: Apple, title: "iOS App Development", desc: "Swift & SwiftUI experiences crafted to feel effortlessly premium." },
  { icon: Globe, title: "Web Development", desc: "Blazing-fast web platforms built with modern React & edge infra." },
  { icon: Brain, title: "AI Applications", desc: "LLM-powered assistants, agents, RAG, and computer vision products." },
  { icon: ShoppingCart, title: "E-Commerce Apps", desc: "Conversion-obsessed storefronts with seamless payments & CMS." },
  { icon: Briefcase, title: "Business Management", desc: "Custom ERPs, CRMs and internal tools that scale with your team." },
  { icon: Gamepad2, title: "Game Development", desc: "2D & 3D games with rich mechanics, physics, and multiplayer." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud architecture on AWS, GCP, and Cloudflare edge." },
  { icon: Shield, title: "Cyber Security", desc: "Threat modeling, audits, and hardening for mission-critical apps." },
  { icon: Rocket, title: "Startup MVP", desc: "Ship a validated MVP in weeks — designed to raise and grow." },
] as const;

export const portfolio = [
  { name: "PulseFit", tag: "Fitness App", color: "from-pink-500 to-purple-500", emoji: "💪" },
  { name: "ScholarHub", tag: "School App", color: "from-blue-500 to-cyan-500", emoji: "🎓" },
  { name: "Nova AI", tag: "AI Chatbot", color: "from-violet-500 to-fuchsia-500", emoji: "🤖" },
  { name: "Kartly", tag: "Shopping App", color: "from-orange-500 to-red-500", emoji: "🛍️" },
  { name: "Zesta", tag: "Restaurant App", color: "from-amber-500 to-orange-500", emoji: "🍽️" },
  { name: "Wandr", tag: "Travel App", color: "from-teal-500 to-emerald-500", emoji: "✈️" },
  { name: "VaultPay", tag: "Banking App", color: "from-indigo-500 to-blue-500", emoji: "💳" },
  { name: "Learnify", tag: "Learning App", color: "from-purple-500 to-pink-500", emoji: "📚" },
] as const;

export const processSteps = [
  { title: "Idea", desc: "We turn your vision into a sharp product hypothesis." },
  { title: "Research", desc: "User interviews, market maps, and competitive audits." },
  { title: "UI Design", desc: "Pixel-perfect design systems and interactive prototypes." },
  { title: "Development", desc: "Clean architecture, TDD, and continuous delivery." },
  { title: "Testing", desc: "Automated + manual QA across devices and edge cases." },
  { title: "Launch", desc: "App store submissions, marketing sites, and analytics." },
  { title: "Support", desc: "Ongoing iteration, monitoring, and growth partnership." },
] as const;

export const pricing = [
  {
    name: "Basic",
    price: "$2,499",
    period: "one-time",
    tagline: "Perfect for MVPs & simple apps",
    features: [
      "Single platform (iOS or Android)",
      "Up to 8 screens",
      "Custom UI design",
      "Basic backend integration",
      "1 month post-launch support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$6,999",
    period: "one-time",
    tagline: "For serious products ready to scale",
    features: [
      "iOS + Android + Web",
      "Up to 25 screens",
      "Premium design system",
      "Auth, payments, cloud backend",
      "Analytics & crash reporting",
      "3 months support & iteration",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per project",
    tagline: "Complex, mission-critical builds",
    features: [
      "Unlimited screens & platforms",
      "AI, ML, & advanced integrations",
      "Dedicated product team",
      "SLA & compliance (SOC2, HIPAA)",
      "24/7 monitoring & support",
      "Ongoing growth partnership",
    ],
    featured: false,
  },
] as const;

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, PulseFit",
    quote: "AppVerse shipped our fitness app in 10 weeks. Retention doubled after launch — the design is truly next-level.",
    avatar: "SC",
  },
  {
    name: "Marcus Reed",
    role: "Founder, Nova AI",
    quote: "They understood our AI vision instantly and built infrastructure that scales to millions of queries a day.",
    avatar: "MR",
  },
  {
    name: "Priya Kapoor",
    role: "CTO, VaultPay",
    quote: "Bank-grade security, gorgeous UI, and a team that ships. Best engineering partner we've worked with.",
    avatar: "PK",
  },
  {
    name: "James Okafor",
    role: "Product Lead, Wandr",
    quote: "From strategy to App Store, AppVerse handled every detail. Our travel app is now featured by Apple.",
    avatar: "JO",
  },
] as const;

export const faqs = [
  {
    q: "How long does it take to build an app?",
    a: "Typical MVPs launch in 6–10 weeks. Complex products with AI or advanced integrations run 3–6 months. We'll give you a precise timeline after our discovery call.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. We sign mutual NDAs before any detailed discussions and protect your IP with strict internal controls.",
  },
  {
    q: "Will I own the source code?",
    a: "Yes — you own 100% of the code, designs, and IP. We hand over clean repositories, documentation, and deployment access at launch.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Every plan includes a support window. We also offer growth-partnership retainers for ongoing iteration, monitoring, and new features.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Definitely. We embed with in-house engineering and design teams, or work as a fully autonomous product squad — whichever fits.",
  },
  {
    q: "What technologies do you use?",
    a: "Swift, Kotlin, React Native, Flutter, React, Next.js, TanStack, Node, Python, Postgres, and modern AI stacks (OpenAI, Anthropic, RAG, vector DBs).",
  },
] as const;
