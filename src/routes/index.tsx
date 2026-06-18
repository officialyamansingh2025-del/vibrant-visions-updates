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
} from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
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

function Index() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const nextImg = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Telegram Button */}
      <a
        href="https://t.me/TrustMeMedia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Telegram"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white animate-telegram-pulse"
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
            <span className="truncate text-base sm:text-lg font-bold gradient-text">
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
            <a href="#home" className="hover:text-electric transition">Home</a>
            <a href="#services" className="hover:text-electric transition">Services</a>
            <a href="#packages" className="hover:text-electric transition">Packages</a>
            <a href="#results" className="hover:text-electric transition">Results</a>
            <a href="#about" className="hover:text-electric transition">About</a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-glow hover:scale-105 transition"
            >
              Get Growth
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/5 px-4 py-3 flex flex-col gap-3 text-sm">
            {["home", "services", "packages", "results", "about", "contact"].map((s) => (
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
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-hero"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h1 className="animate-fade-up text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Transform Your <span className="gradient-text">Digital Presence</span>
          </h1>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl mx-auto animate-fade-up">
            {[
              { v: "3+", l: "Years\nExperience" },
              { v: "50+", l: "Brands\nServed" },
              { v: "50L+", l: "Ad\nSpend" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4 sm:p-6">
                <h3 className="text-2xl sm:text-4xl font-extrabold gradient-text">{s.v}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground whitespace-pre-line">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground animate-fade-up">
            A dedicated team of specialists, delivering remarkable work to our clients worldwide.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-white shadow-glow hover:scale-105 transition"
            >
              <Phone className="h-4 w-4" /> Book a Strategy Call
            </a>
            <a
              href="https://t.me/TrustMeMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white hover:scale-105 transition"
              style={{ background: "var(--telegram-blue)" }}
            >
              <Send className="h-4 w-4" /> Chat on Telegram
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { v: "3.2X", l: "Avg ROAS" },
              { v: "184%", l: "Higher CTR" },
              { v: "25+", l: "Active Clients" },
            ].map((s) => (
              <div key={s.v} className="glass-strong rounded-2xl p-6 shadow-card">
                <h3 className="text-3xl font-extrabold gradient-text-alt">{s.v}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center">
            🎯 Our <span className="gradient-text">Performance Marketing Services</span>
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of services designed to propel your brand into the digital
            spotlight.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow group-hover:scale-110 transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 sm:py-28 bg-gradient-hero">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center">
            🚀 Our <span className="gradient-text">Service Packages</span>
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Two simple plans. Pick the one that fits your growth velocity.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Weekly */}
            <PackageCard
              title="Weekly Plan"
              price="₹3,599"
              period="/week"
              tagline="Quick start. Test your offer fast."
              features={weeklyFeatures}
              ctaHref="https://t.me/TrustMeMedia"
              ctaLabel="Get Started"
            />
            {/* Monthly */}
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

          <p className="mt-8 text-center text-xs text-muted-foreground">
            * Service charges only. Ad budget is extra as per your requirement.
          </p>
        </div>
      </section>

      {/* Results gallery */}
      <section id="results" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center">
            📊 Our <span className="gradient-text">Results Speak Louder</span>
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Real results from real campaigns we've managed for our clients. Tap any image to
            expand.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <button
                key={img.src}
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
                <div className="absolute bottom-3 left-3 right-3 text-left text-xs sm:text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition">
                  Click to view full size
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28 bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Meet Your <span className="gradient-text">Mentor</span>
            </h2>
          </div>

          <div className="mt-10 space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Hey there! 👋 I'm{" "}
              <span className="font-semibold text-foreground">Yaman Rana</span>, your go-to
              Facebook Ads expert with a proven track record. I've successfully completed over
              1000 projects, collaborating with individuals and businesses to drive remarkable
              results through the power of Facebook advertising.
            </p>
            <p>
              With years of hands-on experience, I understand the ever-evolving landscape of
              digital advertising. From small startups to established enterprises, I've helped my
              clients achieve their marketing goals with precision and impact.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { v: "1000+", l: "Projects" },
              { v: "50+", l: "Happy Clients" },
              { v: "3.5+", l: "Years Exp." },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-5 text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold gradient-text">{s.v}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 glass-strong rounded-3xl p-6 sm:p-8 shadow-purple">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Award className="h-6 w-6 text-electric" /> Why Choose Us?
            </h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "1000+ successful projects delivered",
                "3.5+ years hands-on experience",
                "Worked with 50+ brands across industries",
                "₹50L+ in ad spend managed profitably",
                "Personalized strategy for every client",
                "Direct WhatsApp & Telegram support",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-electric mt-0.5" />
                  <span className="text-muted-foreground">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold">
            Let's <span className="gradient-text">Grow Together</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ready to scale your business? Get in touch with us for a free consultation.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <a
              href="https://t.me/TrustMeMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-electric/40 hover:shadow-glow transition"
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
              href="https://t.me/+zTpETFHvPsE2Mjk9"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-electric/40 hover:shadow-glow transition"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3">
            <img src={logo.url} alt="" className="h-8 w-8 rounded-full" />
            <span className="font-bold gradient-text">Trust Me Media</span>
          </div>
          <p className="mt-3">© 2026 Trust Me Media. Turning Clicks Into Customers.</p>
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
        "relative rounded-3xl p-8 flex flex-col transition hover:-translate-y-1",
        featured
          ? "glass-strong shadow-purple ring-1 ring-nova/40"
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
        {ctaLabel}
      </a>
    </div>
  );
}
