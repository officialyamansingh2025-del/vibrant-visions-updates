import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Palette,
  Code2,
  Video,
  Search,
  Phone,
  Check,
  Crown,
  TrendingUp,
  Headphones,
  CalendarDays,
  Megaphone,
  UserCog,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Users,
  ShieldCheck,
  Award,
  Menu,
  X as XIcon,
  ChevronDown,
  Mail,
  MapPin,
  Quote,
  Zap,
  Eye,
} from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import { ParticlesBg } from "@/components/ParticlesBg";
import { useScrollReveal, useActiveSection } from "@/hooks/useScrollReveal";
import logo from "@/assets/trustme-logo.jpeg.asset.json";
import r1 from "@/assets/result-1.png.asset.json";
import r2 from "@/assets/result-2.png.asset.json";
import r3 from "@/assets/result-3.png.asset.json";
import r4 from "@/assets/result-4.png.asset.json";
import r5 from "@/assets/result-5.png.asset.json";
import r6 from "@/assets/result-6.png.asset.json";
import r7 from "@/assets/result-7.png.asset.json";
import r8 from "@/assets/result-8.png.asset.json";
import r9 from "@/assets/result-9.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trust Me Media — Performance Marketing That Converts" },
      {
        name: "description",
        content:
          "Trust Me Media helps brands scale with Facebook, Instagram, Google & WhatsApp ads. 3.2X average ROAS, 50+ brands served, 50L+ ad spend managed.",
      },
      { property: "og:title", content: "Trust Me Media — Turning Clicks Into Customers" },
      {
        property: "og:description",
        content:
          "Performance marketing agency delivering 3.2X ROAS for 50+ brands across Facebook, Instagram, Google & WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logo.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logo.url },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&family=Montserrat:wght@700;800&display=swap",
      },
      { rel: "icon", type: "image/jpeg", href: logo.url },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Facebook, title: "Facebook Ads", desc: "Targeted campaigns that drive conversions and maximize ROI on Meta." },
  { icon: Instagram, title: "Instagram Ads", desc: "Visual storytelling and influencer marketing that engages your audience." },
  { icon: Search, title: "Google Ads", desc: "Search and display advertising to capture high-intent customers." },
  { icon: MessageCircle, title: "WhatsApp Marketing", desc: "Personalized messaging and automation for higher engagement." },
  { icon: Palette, title: "Graphic Designing", desc: "Eye-catching visuals that communicate your brand effectively." },
  { icon: Code2, title: "Web Development", desc: "Fast, responsive, SEO-friendly websites that convert." },
  { icon: Send, title: "Telegram Ads", desc: "Reach targeted audiences through Telegram channels and groups." },
  { icon: Megaphone, title: "WhatsApp API", desc: "Business API integration for automated messaging and support." },
  { icon: Video, title: "Video Editing", desc: "Professional video editing for ads, reels and promotional content." },
];

const gallery = [
  { src: r1.url, alt: "Ad campaign result 1" },
  { src: r2.url, alt: "Ad campaign result 2" },
  { src: r3.url, alt: "Ad campaign result 3" },
  { src: r4.url, alt: "Ad campaign result 4" },
  { src: r5.url, alt: "Ad campaign result 5" },
  { src: r6.url, alt: "Ad campaign result 6" },
  { src: r7.url, alt: "Ad campaign result 7" },
  { src: r8.url, alt: "Ad campaign result 8" },
  { src: r9.url, alt: "Ad campaign result 9" },
];

type Feature = { icon: React.ComponentType<{ className?: string }>; text: string };

const weeklyFeatures: Feature[] = [
  { icon: Target, text: "Lead generation ads" },
  { icon: Sparkles, text: "Creative ads editing" },
  { icon: TrendingUp, text: "Unlimited sales ads" },
  { icon: MessageCircle, text: "WhatsApp support" },
  { icon: Phone, text: "WhatsApp & call support" },
  { icon: CalendarDays, text: "Run your ads for 7 days" },
  { icon: Facebook, text: "Requires Facebook account" },
];

const monthlyFeatures: Feature[] = [
  { icon: Target, text: "Lead generation ads" },
  { icon: Users, text: "Online followers campaign" },
  { icon: BarChart3, text: "Affiliate / Network / MLM marketing" },
  { icon: Send, text: "Telegram / Dropshipping / Astrology ads" },
  { icon: Sparkles, text: "Creative ads editing" },
  { icon: TrendingUp, text: "Unlimited sales ads" },
  { icon: Code2, text: "Landing page + personal ads manager" },
  { icon: Headphones, text: "WhatsApp, calling & weekly Zoom support" },
  { icon: UserCog, text: "2 dedicated ads managers" },
  { icon: ShieldCheck, text: "Account manager" },
  { icon: CalendarDays, text: "Run your ads for 30 days" },
];

const whyUs = [
  { icon: Rocket, title: "3.2X Avg ROAS", desc: "Across 50+ brands and ₹50L+ ad spend, profitably scaled." },
  { icon: ShieldCheck, title: "Trusted Partner", desc: "3.5+ years of hands-on performance marketing experience." },
  { icon: TrendingUp, title: "Real Growth", desc: "184% higher CTR vs. industry benchmarks on our campaigns." },
  { icon: Headphones, title: "Direct Support", desc: "Personal WhatsApp & Telegram access. No ticket queues." },
];

const faqs = [
  {
    q: "How fast will I see results?",
    a: "Most clients start seeing measurable leads or sales within the first 7-10 days after the ads are live and optimised.",
  },
  {
    q: "Is the ad budget included in the package?",
    a: "No. Package fee is the service charge. You fund the ad spend directly to Meta / Google as per your goals.",
  },
  {
    q: "Which businesses do you work with?",
    a: "Coaches, e-commerce, local services, dropshipping, astrology, MLM/network, real estate, edtech and more.",
  },
  {
    q: "Do you handle creatives and landing pages too?",
    a: "Yes — the Monthly Plan includes creative editing and a custom landing page along with a dedicated ads manager.",
  },
  {
    q: "How do I get started?",
    a: "Tap Join Telegram or Book a Strategy Call — we'll discuss your goals and recommend the best plan in under 15 minutes.",
  },
];

const navItems = ["home", "about", "services", "results", "packages", "faq", "contact"];

function Index() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useScrollReveal();
  useActiveSection(navItems);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const nextImg = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBg />

      {/* Floating Telegram Button */}
      <a
        href="https://t.me/TrustMeMedia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Telegram"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white animate-telegram-pulse hover:scale-110 transition"
        style={{ background: "var(--telegram-blue)" }}
      >
        <Send className="h-6 w-6" />
      </a>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Trust Me Media"
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-electric/40"
            />
            <span className="truncate text-base sm:text-lg font-bold gradient-text-animated">
              Trust Me Media
            </span>
          </a>

          <button
            className="md:hidden rounded-md p-2 text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.slice(0, 6).map((id) => (
              <a
                key={id}
                href={`#${id}`}
                data-nav-link={id}
                className="capitalize hover:text-electric transition"
              >
                {id}
              </a>
            ))}
            <a
              href="#contact"
              data-nav-link="contact"
              className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-glow hover:scale-105 transition"
            >
              Get Growth
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/5 px-4 py-3 flex flex-col gap-1 text-sm">
            {navItems.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setMenuOpen(false)}
                className="py-2 capitalize hover:text-electric"
              >
                {s}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-hero overflow-hidden"
      >
        {/* Floating blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-electric/20 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-nova/20 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent-pink/20 blur-3xl animate-blob [animation-delay:-8s]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <div data-reveal className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm text-muted-foreground mb-6">
            <Zap className="h-3.5 w-3.5 text-electric" />
            Performance Marketing Agency • 50+ Brands Scaled
          </div>

          <h1 data-reveal data-reveal-delay="1" className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Transform Your <span className="gradient-text-animated">Digital Presence</span>
          </h1>

          <p data-reveal data-reveal-delay="2" className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            A dedicated team of specialists delivering remarkable performance marketing results to brands worldwide.
          </p>

          <div data-reveal data-reveal-delay="3" className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://t.me/TrustMeMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white hover:scale-105 transition shadow-glow"
              style={{ background: "var(--telegram-blue)" }}
            >
              <Send className="h-4 w-4" /> Join Telegram
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-white shadow-glow hover:scale-105 transition"
            >
              <Crown className="h-4 w-4" /> View Packages
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:border-electric/50 hover:bg-white/10 transition"
            >
              <Eye className="h-4 w-4" /> See Results
            </a>
          </div>

          <div data-reveal data-reveal-delay="4" className="mt-12 grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl mx-auto">
            {[
              { v: "3+", l: "Years\nExperience" },
              { v: "50+", l: "Brands\nServed" },
              { v: "50L+", l: "Ad\nSpend" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4 sm:p-6 hover:border-electric/40 transition">
                <h3 className="text-2xl sm:text-4xl font-extrabold gradient-text">{s.v}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground whitespace-pre-line">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { v: "3.2X", l: "Avg ROAS" },
              { v: "184%", l: "Higher CTR" },
              { v: "25+", l: "Active Clients" },
            ].map((s, i) => (
              <div
                key={s.v}
                data-reveal
                data-reveal-delay={String(i + 1)}
                className="glass-strong rounded-2xl p-6 shadow-card hover:-translate-y-1 transition"
              >
                <h3 className="text-3xl font-extrabold gradient-text-alt">{s.v}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand marquee */}
      <div className="border-y border-white/5 py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-12 items-center text-muted-foreground/70 text-sm font-semibold uppercase tracking-widest shrink-0">
              <span className="flex items-center gap-2"><Facebook className="h-4 w-4 text-electric" /> Facebook Ads</span>
              <span className="flex items-center gap-2"><Instagram className="h-4 w-4 text-accent-pink" /> Instagram</span>
              <span className="flex items-center gap-2"><Search className="h-4 w-4 text-electric" /> Google Ads</span>
              <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-whatsapp" /> WhatsApp</span>
              <span className="flex items-center gap-2"><Send className="h-4 w-4 text-telegram" /> Telegram</span>
              <span className="flex items-center gap-2"><Video className="h-4 w-4 text-nova" /> Video Ads</span>
              <span className="flex items-center gap-2"><Palette className="h-4 w-4 text-accent-pink" /> Creatives</span>
              <span className="flex items-center gap-2"><Code2 className="h-4 w-4 text-electric" /> Landing Pages</span>
            </div>
          ))}
        </div>
      </div>

      {/* About / Why Choose Us */}
      <section id="about" className="py-20 sm:py-28 bg-gradient-hero relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p data-reveal data-reveal-delay="1" className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Performance, transparency, and creative firepower — wrapped in a personal partnership.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-reveal
                data-reveal-delay={String(i + 1)}
                className="group glass rounded-2xl p-6 hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow transition"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow group-hover:scale-110 transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Mentor */}
          <div data-reveal className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-30 rounded-3xl" />
              <div className="relative glass-strong rounded-3xl p-8 text-center">
                <div className="mx-auto h-28 w-28 rounded-full ring-4 ring-electric/40 overflow-hidden">
                  <img src={logo.url} alt="Yaman Rana" className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Yaman Rana</h3>
                <p className="text-sm text-muted-foreground">Founder • Facebook Ads Expert</p>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  {[
                    { v: "1000+", l: "Projects" },
                    { v: "50+", l: "Clients" },
                    { v: "3.5+", l: "Yrs Exp" },
                  ].map((s) => (
                    <div key={s.v} className="rounded-xl bg-white/5 p-3">
                      <div className="text-lg font-extrabold gradient-text">{s.v}</div>
                      <div className="text-[10px] uppercase text-muted-foreground">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-6 sm:p-8 shadow-purple">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                <Award className="h-6 w-6 text-electric" /> Meet Your Mentor
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Hey there! 👋 I'm <span className="text-foreground font-semibold">Yaman Rana</span>,
                your go-to Facebook Ads expert with 1000+ projects delivered. From small startups
                to established enterprises, I help brands achieve their marketing goals with
                precision and impact.
              </p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "1000+ successful projects",
                  "₹50L+ ad spend managed",
                  "Worked with 50+ brands",
                  "Personalized strategy",
                  "Direct WhatsApp support",
                  "Weekly Zoom reviews",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="h-5 w-5 shrink-0 text-electric mt-0.5" />
                    <span className="text-muted-foreground">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold text-center">
            🎯 Our <span className="gradient-text">Performance Marketing Services</span>
          </h2>
          <p data-reveal data-reveal-delay="1" className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of services designed to propel your brand into the digital spotlight.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-reveal
                data-reveal-delay={String((i % 3) + 1)}
                className="group relative glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow group-hover:scale-110 group-hover:rotate-3 transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 text-xl font-bold">{title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results gallery */}
      <section id="results" className="py-20 sm:py-28 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold text-center">
            📊 Our <span className="gradient-text">Results Speak Louder</span>
          </h2>
          <p data-reveal data-reveal-delay="1" className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Real results from real campaigns we've managed for our clients. Tap any image to expand.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <button
                key={img.src}
                data-reveal
                data-reveal-delay={String((i % 3) + 1)}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl glass shadow-card focus:outline-none focus:ring-2 focus:ring-electric"
                aria-label={`Open ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-left text-xs sm:text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition">
                  <Eye className="h-4 w-4" /> Click to view full size
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 sm:py-28 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold text-center">
            🚀 Our <span className="gradient-text">Service Packages</span>
          </h2>
          <p data-reveal data-reveal-delay="1" className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Two simple plans. Pick the one that fits your growth velocity.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div data-reveal data-reveal-delay="1">
              <PackageCard
                title="Weekly Plan"
                price="₹3,599"
                period="/week"
                tagline="Quick start. Test your offer fast."
                features={weeklyFeatures}
                ctaHref="https://t.me/TrustMeMedia"
                ctaLabel="Get Started"
              />
            </div>
            <div data-reveal data-reveal-delay="2">
              <PackageCard
                title="Monthly Plan"
                price="₹12,999"
                period="/month"
                tagline="Full-stack growth. Best value."
                features={monthlyFeatures}
                ctaHref="https://t.me/TrustMeMedia"
                ctaLabel="Get Started"
                featured
              />
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            * Service charges only. Ad budget is extra as per your requirement.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 bg-gradient-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold text-center">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p data-reveal data-reveal-delay="1" className="mt-4 text-center text-muted-foreground">
            Everything you need to know before partnering with us.
          </p>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  data-reveal
                  data-reveal-delay={String((i % 5) + 1)}
                  className={[
                    "glass rounded-2xl overflow-hidden transition",
                    open ? "border-electric/40 shadow-glow" : "hover:border-electric/30",
                  ].join(" ")}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-sm sm:text-base">{f.q}</span>
                    <ChevronDown
                      className={[
                        "h-5 w-5 shrink-0 text-electric transition",
                        open ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>
                  <div
                    className={[
                      "grid transition-all duration-300",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold">
            Let's <span className="gradient-text">Grow Together</span>
          </h2>
          <p data-reveal data-reveal-delay="1" className="mt-4 text-muted-foreground">
            Ready to scale your business? Get in touch with us for a free consultation.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <a
              data-reveal
              data-reveal-delay="1"
              href="https://t.me/TrustMeMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-electric/40 hover:shadow-glow hover:-translate-y-1 transition"
            >
              <div
                className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--telegram-blue)" }}
              >
                <Send className="h-6 w-6" />
              </div>
              <div className="min-w-0 text-left">
                <h4 className="font-semibold">Telegram Username</h4>
                <p className="truncate text-sm text-electric">@TrustMeMedia</p>
              </div>
            </a>

            <a
              data-reveal
              data-reveal-delay="2"
              href="https://t.me/+zTpETFHvPsE2Mjk9"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-electric/40 hover:shadow-glow hover:-translate-y-1 transition"
            >
              <div
                className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--telegram-blue)" }}
              >
                <Rocket className="h-6 w-6" />
              </div>
              <div className="min-w-0 text-left">
                <h4 className="font-semibold">Telegram Channel</h4>
                <p className="text-sm text-electric">Join Channel</p>
              </div>
            </a>
          </div>

          <div data-reveal className="mt-10 glass-strong rounded-3xl p-8 shadow-purple text-left">
            <Quote className="h-8 w-8 text-electric" />
            <p className="mt-3 text-lg sm:text-xl font-medium leading-relaxed">
              "Trust Me Media transformed our ad performance. ROAS jumped from 1.4X to 3.8X in
              just 6 weeks. Their team is responsive, creative and genuinely invested in our growth."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— Happy client, e-commerce brand</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/40 pt-14 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img src={logo.url} alt="" className="h-10 w-10 rounded-full ring-2 ring-electric/40" />
                <span className="text-lg font-bold gradient-text-animated">Trust Me Media</span>
              </div>
              <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                Performance marketing agency turning clicks into customers for ambitious brands.
                Facebook, Instagram, Google, WhatsApp & Telegram ads — done right.
              </p>
              <div className="mt-5 flex gap-3">
                {[
                  { icon: Send, href: "https://t.me/TrustMeMedia", label: "Telegram" },
                  { icon: Instagram, href: "https://www.instagram.com/growthxnova", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-electric/40 hover:shadow-glow hover:-translate-y-0.5 transition"
                  >
                    <Icon className="h-4 w-4 text-electric" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {navItems.map((s) => (
                  <li key={s}>
                    <a href={`#${s}`} className="capitalize hover:text-electric transition">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Reach Us</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Send className="h-4 w-4 mt-0.5 text-electric shrink-0" /> @TrustMeMedia
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-electric shrink-0" /> growthpainads@gmail.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-electric shrink-0" /> India • Worldwide remote
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2026 Trust Me Media. All rights reserved.</p>
            <p>Turning Clicks Into Customers.</p>
          </div>
        </div>
      </footer>

      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
        />
      )}
    </div>
  );
}

function PackageCard({
  title,
  price,
  period,
  tagline,
  features,
  ctaHref,
  ctaLabel,
  featured,
}: {
  title: string;
  price: string;
  period: string;
  tagline: string;
  features: Feature[];
  ctaHref: string;
  ctaLabel: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative h-full rounded-3xl p-8 flex flex-col transition hover:-translate-y-1",
        featured
          ? "glass-strong shadow-purple ring-1 ring-nova/40 hover:shadow-glow"
          : "glass shadow-card hover:shadow-glow",
      ].join(" ")}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-xs font-bold text-white shadow-glow flex items-center gap-1">
          <Crown className="h-3.5 w-3.5" /> Best Value
        </span>
      )}

      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-extrabold gradient-text">{price}</span>
        <span className="text-base text-muted-foreground">{period}</span>
      </div>

      <ul className="mt-8 space-y-3 flex-1">
        {features.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 text-sm">
            <span
              className={[
                "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                featured ? "bg-gradient-primary text-white" : "bg-white/5 text-electric",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-muted-foreground">{text}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105",
          featured
            ? "bg-gradient-primary text-white shadow-glow"
            : "bg-white/5 text-white border border-white/10 hover:border-electric/50",
        ].join(" ")}
      >
        <Send className="h-4 w-4" /> {ctaLabel}
      </a>
    </div>
  );
}
