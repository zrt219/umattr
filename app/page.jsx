"use client";

import { track } from "@vercel/analytics/react";
import { useEffect, useRef } from "react";
import {
  PAYHIP_LINKS,
  SocialLinks,
} from "./_components/marketing-system";
import { GTranslateWidget, useLocale } from "./_components/locale-provider.jsx";

const START_FREE_HREF = "https://umattr.ca/start";

const routeComparisonItems = [
  {
    eyebrow: "FREE ENTRY",
    title: "Get oriented",
    description:
      "Use assessment, glossary, and previews before you spend anything.",
    cta: "Start with Free Tools",
    href: START_FREE_HREF,
  },
  {
    eyebrow: "AI PROGRAMS",
    title: "Learn AI clearly",
    description:
      "Choose Foundations, Work, or Business based on the level of decision in front of you.",
    cta: "View Programs",
    href: "/programs",
  },
  {
    eyebrow: "CAREER",
    title: "Clarify the next move",
    description:
      "Use Career Intelligence for role clarity, pivot direction, and positioning.",
    cta: "Explore Career Intelligence",
    href: "/career-intelligence",
  },
  {
    eyebrow: "CONSULTING",
    title: "Get higher-touch support",
    description:
      "Use Consulting when the call touches systems, spend, operations, vendors, or risk.",
    cta: "Request Consulting",
    href: "/consulting",
  },
];

const trustLayerItems = [
  {
    title: "Built for practical decisions",
    description:
      "UMATTR is designed for people using AI around real work, not hype cycles.",
  },
  {
    title: "Structured around route fit",
    description:
      "Free tools, programs, career support, and consulting each have a clear role.",
  },
  {
    title: "Previews before paid access",
    description:
      "Sample Foundations previews let you see the standard before you commit.",
  },
];

const decisionSystemItems = [
  {
    eyebrow: "FREE ENTRY",
    title: "Free Membership",
    description:
      "Assessment, glossary, and sample Foundations previews.",
    detail:
      "Best when you need orientation before choosing a paid route.",
    cta: "Start with Free Tools",
    href: START_FREE_HREF,
  },
  {
    eyebrow: "AI PROGRAM",
    title: "UMATTR AI Foundations",
    description:
      "Start here for clarity and fundamentals.",
    detail:
      "Best when you need the right mental model first.",
    cta: "View Program",
    href: "/programs/foundations",
    featured: true,
  },
  {
    eyebrow: "AI PROGRAM",
    title: "UMATTR AI for Work",
    description:
      "Practical AI for day-to-day workflows.",
    detail:
      "Best when your real goal is better quality and judgment daily.",
    cta: "View Program",
    href: "/programs/for-work",
  },
  {
    eyebrow: "AI PROGRAM",
    title: "UMATTR AI for Business",
    description:
      "A judgment tier for higher-stakes decisions.",
    detail:
      "Best when the decision affects operations, vendors, or risk.",
    cta: "View Program",
    href: "/programs/for-business",
  },
  {
    eyebrow: "CAREER INTELLIGENCE",
    title: "Career Intelligence",
    description:
      "Role clarity, pivot direction, positioning, and next-step confidence.",
    detail:
      "Best when the decision is personal, professional, and hard to frame.",
    cta: "Explore Career Intelligence",
    href: "/career-intelligence",
  },
  {
    eyebrow: "CONSULTING",
    title: "Consulting",
    description:
      "Human-guided decisions for systems, spend, operations, and risk.",
    detail:
      "Best when the call touches systems, money, operations, or real risk.",
    cta: "Request Consulting",
    href: "/consulting",
  },
];

const freePreviewItems = [
  {
    title: "What AI Is",
    description:
      "A first preview on Payhip covering what AI is, what it is not, and where it fits best.",
  },
  {
    title: "Better Questions",
    description:
      "A free preview on Payhip focused on stronger context, clearer direction, and better inputs.",
  },
  {
    title: "Safer AI Use",
    description:
      "A free preview on Payhip focused on privacy, verification, and human judgment.",
  },
];

export default function UmattrHomepage() {
  const { t } = useLocale();
  const sectionRefs = useRef({});
  const observedSections = useRef(new Set());

  const navItems = [
    { label: t("common.home", "Home"), href: "/" },
    { label: "AI Programs", href: "/programs" },
    {
      label: t("products.careerIntelligence", "Career Intelligence"),
      href: "/career-intelligence",
    },
    { label: t("products.consulting", "Consulting"), href: "/consulting" },
    { label: t("common.about", "About"), href: "/about" },
  ];

  const productRailItems = [
    {
      eyebrow: "FREE ENTRY",
      title: "Free Membership",
      description: "Assessment, glossary, sample previews.",
      cta: "Start with Free Tools",
      href: START_FREE_HREF,
    },
    {
      eyebrow: "AI PROGRAMS",
      title: "Foundations / Work / Business",
      description: "Practical AI learning for different levels of decision.",
      cta: "Explore Programs",
      href: "/programs",
    },
    {
      eyebrow: "CAREER INTELLIGENCE",
      title: "Career Intelligence",
      description: "Career clarity, pivot, and positioning support.",
      cta: "Explore Career Intelligence",
      href: "/career-intelligence",
    },
    {
      eyebrow: "CONSULTING",
      title: "Consulting",
      description: "Human-guided support for decisions with real cost.",
      cta: "Request Consulting",
      href: "/consulting",
    },
  ];

  const valueNotes = [
    "Get oriented.",
    "Learn AI.",
    "Clarify your career direction.",
    "Get support for decisions with real cost.",
  ];

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionName = entry.target.getAttribute("data-section-name");

          if (entry.isIntersecting && sectionName && !observedSections.current.has(sectionName)) {
            observedSections.current.add(sectionName);
            track("homepage_section_view", { section: sectionName });
          }
        }
      },
      { threshold: 0.42 }
    );

    const observedNodes = Object.values(sectionRefs.current).filter(Boolean);
    observedNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  function registerSection(name) {
    return (node) => {
      if (node) {
        sectionRefs.current[name] = node;
      }
    };
  }

  function trackCta(label, destination) {
    track("homepage_cta_click", { label, destination });
  }

  function ButtonLink({ href, className, children, ...props }) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#1A1A1A] antialiased selection:bg-[#C6A55C]/20">
      <style>{`
        :root {
          --ivory: #F8F6F1;
          --white: #FFFFFF;
          --gold: #C6A55C;
          --gold-deep: #A8843A;
          --gold-primary: #D4AF37;
          --gold-hover: #E6C65C;
          --gold-deep-hover: #B8962E;
          --button-primary-bg: #D4AF37;
          --button-primary-bg-hover: #E6C65C;
          --button-primary-border: #D4AF37;
          --button-primary-border-hover: #E6C65C;
          --button-primary-text: #1A1A1A;
          --button-secondary-bg: #D4AF37;
          --button-secondary-bg-hover: #E6C65C;
          --button-secondary-border: #D4AF37;
          --button-secondary-border-hover: #E6C65C;
          --button-secondary-text: #1A1A1A;
          --text-primary: #1A1A1A;
          --text-secondary: #6B6B6B;
          --border-soft: rgba(198, 165, 92, 0.18);
          --border-strong: rgba(198, 165, 92, 0.28);
          --shadow-card: 0 24px 80px rgba(33, 27, 18, 0.08), 0 8px 24px rgba(33, 27, 18, 0.05);
          --shadow-hover: 0 30px 90px rgba(33, 27, 18, 0.12), 0 12px 32px rgba(33, 27, 18, 0.08);
          --shadow-nav: 0 10px 40px rgba(35, 28, 18, 0.06);
          --ease-premium: cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sheen {
          0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          30% { opacity: 0.18; }
          100% { transform: translateX(180%) skewX(-18deg); opacity: 0; }
        }

        @keyframes nodePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.72;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        .hero-node {
          transform-origin: center;
          animation: nodePulse 5.4s var(--ease-premium) infinite;
        }

        .hero-node-delayed {
          animation-delay: 1.2s;
        }

        .hero-node-late {
          animation-delay: 2.4s;
        }

        .hero-float {
          animation: floatSoft 7.2s ease-in-out infinite;
        }

        .fade-up {
          animation: fadeUp 700ms var(--ease-premium) both;
        }

        .glass {
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .noise::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.035;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(198,165,92,0.14) 0, transparent 26%),
            radial-gradient(circle at 80% 12%, rgba(168,132,58,0.10) 0, transparent 24%),
            radial-gradient(circle at 50% 80%, rgba(255,255,255,0.5) 0, transparent 28%);
          mix-blend-mode: multiply;
        }

        .premium-button,
        .premium-card,
        .nav-link,
        .subtle-link {
          transition: all 180ms var(--ease-premium);
        }

        .premium-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .premium-button::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 32%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
          transform: translateX(-160%) skewX(-18deg);
        }

        .premium-button:hover::after {
          animation: sheen 900ms var(--ease-premium);
        }

        .button-primary {
          background: var(--button-primary-bg) !important;
          border-color: var(--button-primary-border) !important;
          color: var(--button-primary-text) !important;
          box-shadow: 0 12px 30px rgba(184, 150, 46, 0.24);
        }

        .button-primary:not(:disabled):hover {
          background: var(--button-primary-bg-hover) !important;
          border-color: var(--button-primary-border-hover) !important;
          color: var(--button-primary-text) !important;
          box-shadow: 0 16px 38px rgba(184, 150, 46, 0.28);
        }

        .premium-button.button-standout {
          border-color: var(--gold-deep-hover) !important;
          box-shadow: 0 15px 36px rgba(184, 150, 46, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.28);
        }

        .premium-button.button-standout:not(:disabled):hover {
          box-shadow: 0 19px 46px rgba(184, 150, 46, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.34);
        }

        .button-secondary {
          background: var(--button-secondary-bg) !important;
          border-color: var(--button-secondary-border) !important;
          color: var(--button-secondary-text) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.76), 0 7px 20px rgba(33, 27, 18, 0.03);
        }

        .button-secondary:not(:disabled):hover {
          background: var(--button-secondary-bg-hover) !important;
          border-color: var(--button-secondary-border-hover) !important;
          color: var(--button-secondary-text) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 12px 28px rgba(184, 150, 46, 0.16);
        }

        .premium-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-strong);
        }

        .mango-ambient-ring {
          border-color: rgba(233, 159, 37, 0.48) !important;
          box-shadow:
            0 0 0 2px rgba(255, 186, 73, 0.34),
            0 0 0 12px rgba(255, 188, 73, 0.12),
            0 22px 72px rgba(255, 159, 28, 0.32),
            0 10px 32px rgba(168, 102, 20, 0.16);
        }

        .mango-ambient-ring::before {
          content: "";
          position: absolute;
          inset: -18px;
          z-index: -1;
          border-radius: 34px;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 50%, rgba(255, 188, 73, 0.30), transparent 58%),
            conic-gradient(from 24deg, rgba(255, 204, 96, 0.16), rgba(255, 145, 38, 0.46), rgba(255, 204, 96, 0.16), rgba(255, 145, 38, 0.42), rgba(255, 204, 96, 0.16));
          filter: blur(14px);
          opacity: 0.88;
        }

        .premium-card.mango-ambient-ring:hover {
          transform: none;
          border-color: rgba(233, 159, 37, 0.48) !important;
          box-shadow:
            0 0 0 2px rgba(255, 186, 73, 0.34),
            0 0 0 12px rgba(255, 188, 73, 0.12),
            0 22px 72px rgba(255, 159, 28, 0.32),
            0 10px 32px rgba(168, 102, 20, 0.16);
        }

        .nav-link {
          position: relative;
          text-decoration: none;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 1.5px;
          background: linear-gradient(90deg, rgba(198,165,92,0), rgba(198,165,92,0.95), rgba(198,165,92,0));
          transform: scaleX(0.28);
          transform-origin: center;
          opacity: 0;
          transition: all 180ms var(--ease-premium);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
          opacity: 1;
        }

        .subtle-link {
          text-decoration: none;
        }

        .subtle-link:hover {
          color: var(--gold-deep);
        }

        .priority-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          border-radius: 999px;
          border: 1px solid rgba(198, 165, 92, 0.16);
          background: rgba(255, 255, 255, 0.72);
          padding: 0.42rem 0.62rem;
          color: var(--gold-deep);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          line-height: 1;
          text-transform: uppercase;
        }

        .priority-high {
          border-color: rgba(198, 165, 92, 0.28);
          box-shadow: 0 18px 50px rgba(184, 150, 46, 0.10);
        }

        .priority-high:hover {
          border-color: rgba(212, 175, 55, 0.48);
          box-shadow: 0 24px 68px rgba(184, 150, 46, 0.16);
        }

        .priority-medium {
          border-color: rgba(198, 165, 92, 0.16);
          background: rgba(248, 246, 241, 0.72);
        }

        .priority-strategic {
          border-color: rgba(198, 165, 92, 0.12);
          color: var(--text-secondary);
        }

        .gtranslate-shell {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gtranslate-shell .gtranslate_wrapper,
        .gtranslate-shell select {
          width: 100%;
        }

        .gtranslate-shell select {
          height: 44px;
          border: 0 !important;
          background: transparent !important;
          color: #1A1A1A !important;
          font-family: inherit !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          letter-spacing: -0.02em !important;
          outline: none !important;
          cursor: pointer;
        }

        .gtranslate-shell select option {
          color: #1A1A1A;
        }
      `}</style>

      <div className="relative overflow-hidden noise">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(198,165,92,0.14),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(198,165,92,0.08),transparent_24%),radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.85),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,246,241,0.88)_55%,rgba(248,246,241,0.56)_100%)]" />

        <header className="relative z-10 mx-auto max-w-[1440px] px-6 pt-6 md:px-10 lg:px-12">
          <div className="glass fade-up mx-auto flex max-w-[1200px] items-center justify-between rounded-[28px] border border-[rgba(198,165,92,0.16)] px-5 py-4 shadow-[var(--shadow-nav)] md:px-7">
            <a href="/" className="flex items-center gap-3 no-underline">
              <img
                src="/brand/umattr-logo.png"
                alt="UMATTR"
                className="h-[34px] w-auto object-contain"
              />
            </a>

            <nav className="hidden items-center gap-7 lg:flex lg:gap-8">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link text-[15px] font-medium tracking-[-0.02em] text-[#1A1A1A]/78 hover:text-[#1A1A1A] ${index === 0 ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              <GTranslateWidget />
              <ButtonLink
                href={START_FREE_HREF}
                className="premium-button button-primary rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-7 py-4 text-[15px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_10px_30px_rgba(198,165,92,0.24)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(198,165,92,0.28)]"
              >
                Start Free
              </ButtonLink>
            </div>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-10 md:px-10 lg:px-12 lg:pb-28 lg:pt-12">
          <section className="mx-auto grid max-w-[1260px] grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-12">
            <div className="fade-up glass relative overflow-hidden rounded-[34px] border border-[rgba(198,165,92,0.16)] p-8 shadow-[var(--shadow-card)] md:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,165,92,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.5))]" />
              <div className="relative flex h-full flex-col">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/brand/umattr-logo.png"
                    alt="UMATTR"
                    className="h-[74px] w-auto object-contain md:h-[88px]"
                  />
                </div>

                <h1 className="mt-10 max-w-[9ch] text-[clamp(2.65rem,5.2vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.062em] text-[#1A1A1A]">
                  Practical AI learning and career intelligence.
                </h1>
                <p className="mt-8 max-w-[27rem] text-[16px] leading-8 text-[#6B6B6B] md:text-[17px]">
                  Start with free tools, then choose the right path for AI skills, career direction, or higher-stakes consulting support.
                </p>

                <div className="mt-10 flex max-w-[260px] flex-col gap-3">
                  <ButtonLink
                    href={START_FREE_HREF}
                    onClick={() => trackCta("Start with Free Tools", START_FREE_HREF)}
                    className="premium-button button-primary min-h-[56px] rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-0 text-[15px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.30)]"
                  >
                    Start with Free Tools
                  </ButtonLink>
                  <ButtonLink
                    href="#route-comparison"
                    onClick={() => trackCta("Compare the Routes", "#route-comparison")}
                    className="premium-button button-primary min-h-[56px] rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-0 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.26)]"
                  >
                    Compare the Routes
                  </ButtonLink>
                  <ButtonLink
                    href="/programs"
                    onClick={() => trackCta("Explore AI Programs", "/programs")}
                    className="premium-button button-primary min-h-[56px] rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-0 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.26)]"
                  >
                    Explore AI Programs
                  </ButtonLink>
                </div>

                <p className="mt-auto pt-14 max-w-[28rem] text-[14px] leading-8 text-[#6B6B6B]">
                  {valueNotes.join(" ")}
                </p>
              </div>
            </div>

            <div className="fade-up relative" style={{ animationDelay: "120ms" }}>
              <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#C6A55C]/10 blur-3xl" />
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#A8843A]/10 blur-3xl" />

              <div className="glass relative h-full rounded-[34px] border border-[rgba(198,165,92,0.16)] p-4 shadow-[var(--shadow-card)] md:p-5 lg:p-6">
                <div className="rounded-[30px] border border-[rgba(198,165,92,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(252,249,242,0.86))] p-8 md:p-9">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#A8843A]">
                    PRODUCT RAIL
                  </div>
                  <h2 className="mt-5 text-[clamp(1.95rem,3vw,3.1rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1A1A1A]">
                    Preview the routes.
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-[#6B6B6B] md:text-[16px]">
                    Free, AI Programs, Career Intelligence, and Consulting.
                  </p>

                  <div className="mt-10 space-y-5">
                    {productRailItems.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-[28px] border border-[rgba(198,165,92,0.12)] bg-white/88 px-7 py-7 shadow-[0_16px_40px_rgba(33,27,18,0.05)]"
                      >
                        <div className="flex min-h-[136px] flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                          <div className="max-w-[27rem]">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.30em] text-[#A8843A]">
                              {item.eyebrow}
                            </div>
                            <h3 className="mt-4 text-[clamp(1.55rem,2.4vw,2.25rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#1A1A1A]">
                              {item.title}
                            </h3>
                            <p className="mt-4 max-w-[24rem] text-[14px] leading-7 text-[#6B6B6B] md:text-[15px]">
                              {item.description}
                            </p>
                          </div>

                          <ButtonLink
                            href={item.href}
                            onClick={() => trackCta(item.cta, item.href)}
                            className="premium-button button-primary inline-flex min-h-[48px] items-center rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-0 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.26)]"
                          >
                            {item.cta}
                          </ButtonLink>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={registerSection("trust")}
            data-section-name="trust"
            className="mx-auto mt-16 max-w-[1320px] overflow-hidden rounded-[38px] border border-[#F0E5CF] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(248,243,233,0.95))] p-4 shadow-[0_26px_80px_rgba(33,27,18,0.06)] md:p-6 lg:p-8"
          >
            <img
              src="/trust/umattr-trust-reference.png"
              alt="Organizations connected to UMATTR learners and professionals"
              className="mx-auto h-auto w-full rounded-[28px] object-contain object-center"
            />
          </section>
          <section
            ref={registerSection("route-comparison")}
            data-section-name="route-comparison"
            id="route-comparison"
            className="mx-auto mt-16 max-w-[1260px]"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-8">
              <div className="pt-2">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                  ROUTE COMPARISON
                </div>
                <h2 className="mt-4 max-w-[10ch] text-[clamp(1.85rem,3vw,3.15rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#1A1A1A]">
                  Choose by what you need next.
                </h2>
                <p className="mt-4 max-w-[27rem] text-[14px] leading-7 text-[#6B6B6B] md:text-[15px]">
                  Start free if you need orientation. Choose AI Programs for practical learning. Choose Career Intelligence when the next move is personal. Choose Consulting when the decision carries organizational weight.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
                {routeComparisonItems.map((item) => (
                  <article
                    key={item.title}
                    className="flex h-full min-h-[246px] flex-col rounded-[24px] border border-[rgba(198,165,92,0.14)] bg-white/86 p-5 shadow-[0_14px_38px_rgba(33,27,18,0.05)]"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
                      {item.eyebrow}
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#6B6B6B]">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <ButtonLink
                        href={item.href}
                        onClick={() => trackCta(item.cta, item.href)}
                        className="premium-button button-primary inline-flex min-h-[44px] items-center rounded-[14px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-0 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] shadow-[0_8px_22px_rgba(198,165,92,0.16)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.22)]"
                      >
                        {item.cta}
                      </ButtonLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            ref={registerSection("trust-layer")}
            data-section-name="trust-layer"
            className="mx-auto mt-16 max-w-[1260px]"
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[28px] border border-[rgba(198,165,92,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-6 shadow-[0_14px_42px_rgba(33,27,18,0.05)] md:p-7">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                  TRUST LAYER
                </div>
                <h2 className="mt-4 max-w-[9ch] text-[clamp(1.85rem,3vw,3.05rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#1A1A1A]">
                  Built for practical decisions, not AI hype.
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {trustLayerItems.map((item) => (
                  <article
                    key={item.title}
                    className="min-h-[172px] rounded-[24px] border border-[rgba(198,165,92,0.14)] bg-white/86 p-5 shadow-[0_14px_38px_rgba(33,27,18,0.05)]"
                  >
                    <h3 className="text-[16px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#6B6B6B]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            ref={registerSection("decision-system")}
            data-section-name="decision-system"
            id="decision-system"
            className="mx-auto mt-16 max-w-[1200px]"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-7">
              <div className="pt-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                  DECISION SYSTEM
                </div>
                <h2 className="mt-4 max-w-[8.5ch] text-[clamp(1.65rem,2.7vw,2.8rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#1A1A1A]">
                  Choose the path that fits the decision.
                </h2>
                <p className="mt-4 max-w-[23rem] text-[13px] leading-7 text-[#6B6B6B] md:text-[14px]">
                  Compare the routes, then choose the one that fits the decision.
                </p>
                <div className="mt-6 space-y-3.5 text-[12.5px] leading-7 text-[#6B6B6B] md:text-[13px]">
                  <p><span className="font-semibold text-[#1A1A1A]">Start with Free Tools</span> for orientation first.</p>
                  <p><span className="font-semibold text-[#1A1A1A]">AI Programs</span> and <span className="font-semibold text-[#1A1A1A]">Career Intelligence</span> are Payhip-delivered paths.</p>
                  <p><span className="font-semibold text-[#1A1A1A]">Consulting</span> is the direct premium route for higher-stakes calls.</p>
                </div>
              </div>

              <div className="ml-auto max-w-[700px] rounded-[30px] border border-[rgba(198,165,92,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-4 shadow-[0_18px_46px_rgba(33,27,18,0.05)] md:p-5">
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                  {decisionSystemItems.map((item) => (
                    <article
                      key={item.title}
                      className={`flex min-h-[236px] flex-col rounded-[22px] border p-5 shadow-[0_12px_30px_rgba(33,27,18,0.04)] ${item.featured ? "border-[rgba(198,165,92,0.28)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,247,240,0.96))] shadow-[0_0_0_2px_rgba(230,198,92,0.32),0_12px_30px_rgba(198,165,92,0.18)]" : "border-[rgba(198,165,92,0.12)] bg-white/88"}`}
                    >
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
                        {item.eyebrow}
                      </div>
                      <h3 className="mt-3 text-[15px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#1A1A1A] md:text-[16px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[11.5px] leading-7 text-[#6B6B6B] md:text-[12px]">
                        {item.description}
                      </p>
                      <p className="mt-4 border-t border-[rgba(198,165,92,0.10)] pt-4 text-[11.5px] leading-7 text-[#6B6B6B] md:text-[12px]">
                        <span className="font-semibold text-[#1A1A1A]">Best when:</span> {item.detail}
                      </p>
                      <div className="mt-auto pt-5">
                        <ButtonLink
                          href={item.href}
                          onClick={() => trackCta(item.cta, item.href)}
                          className="premium-button button-primary inline-flex min-h-[40px] items-center rounded-[14px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] shadow-[0_8px_18px_rgba(198,165,92,0.14)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(198,165,92,0.20)]"
                        >
                          {item.cta}
                        </ButtonLink>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            ref={registerSection("consulting-band")}
            data-section-name="consulting-band"
            className="mx-auto mt-10 max-w-[1320px] rounded-[24px] border border-[rgba(198,165,92,0.12)] bg-white/82 px-6 py-5 shadow-[0_12px_30px_rgba(33,27,18,0.04)]"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A8843A]">
                  CONSULTING
                </div>
                <p className="mt-2 max-w-[42rem] text-[14px] leading-7 text-[#6B6B6B]">
                  The premium human-guided route for decisions that carry real operational, financial, or risk weight.
                </p>
              </div>
              <ButtonLink
                href="/consulting"
                onClick={() => trackCta("Request Consulting", "/consulting")}
                className="premium-button button-primary inline-flex min-h-[48px] items-center rounded-[16px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-5 py-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.16)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.22)]"
              >
                Request Consulting
              </ButtonLink>
            </div>
          </section>

          <section
            ref={registerSection("free-previews")}
            data-section-name="free-previews"
            className="mx-auto mt-16 max-w-[1320px]"
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="rounded-[28px] border border-[rgba(198,165,92,0.14)] bg-white/84 p-6 shadow-[0_14px_42px_rgba(33,27,18,0.05)] md:p-7">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                  FREE PREVIEWS
                </div>
                <h2 className="mt-4 max-w-[9ch] text-[clamp(2rem,3.3vw,3.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
                  Three free previews on Payhip
                </h2>
                <p className="mt-4 max-w-[28rem] text-[15px] leading-7 text-[#6B6B6B] md:text-[16px]">
                  Sample Foundations first. These previews are free and open on Payhip.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                {freePreviewItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[rgba(198,165,92,0.14)] bg-white/86 p-5 shadow-[0_14px_38px_rgba(33,27,18,0.05)]"
                  >
                    <h3 className="text-[18px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-7 text-[#6B6B6B]">
                      {item.description}
                    </p>
                    <div className="mt-5">
                      <ButtonLink
                        href={PAYHIP_LINKS.sampleFoundations}
                        onClick={() => trackCta("Open Foundations Preview", PAYHIP_LINKS.sampleFoundations)}
                        className="premium-button button-primary inline-flex min-h-[44px] items-center rounded-[14px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-0 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] shadow-[0_8px_22px_rgba(198,165,92,0.16)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.22)]"
                      >
                        Open Foundations Preview
                      </ButtonLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[rgba(168,132,58,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.96))]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.08fr_1.92fr] lg:gap-14 lg:px-12 lg:py-18">
            <div className="border-b border-[rgba(198,165,92,0.10)] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
              <a href="/" className="block max-w-[240px] no-underline">
                <img
                  src="/brand/umattr-logo.png"
                  alt="UMATTR"
                  className="h-auto w-full object-contain"
                />
              </a>
              <p className="mt-5 max-w-[24rem] text-[15px] leading-7 text-[#6B6B6B] md:text-[16px] md:leading-8">
                Start free, then move into the path that fits the decision.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="/start"
                  className="inline-flex items-center rounded-full border border-[rgba(198,165,92,0.16)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8843A] no-underline transition-all duration-200 hover:border-[rgba(198,165,92,0.28)] hover:text-[#1A1A1A]"
                >
                  Start Free
                </a>
                <a
                  href="/programs"
                  className="inline-flex items-center rounded-full border border-[rgba(198,165,92,0.16)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8843A] no-underline transition-all duration-200 hover:border-[rgba(198,165,92,0.28)] hover:text-[#1A1A1A]"
                >
                  Programs
                </a>
                <a
                  href="/career-intelligence"
                  className="inline-flex items-center rounded-full border border-[rgba(198,165,92,0.16)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8843A] no-underline transition-all duration-200 hover:border-[rgba(198,165,92,0.28)] hover:text-[#1A1A1A]"
                >
                  Career Intelligence
                </a>
              </div>
              <SocialLinks className="mt-6" />
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:pl-2">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#1A1A1A]">NAVIGATION</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1A1A1A] md:text-[16px]">
                  <a href="/" className="subtle-link block">{t("common.home", "Home")}</a>
                  <a href="/programs" className="subtle-link block">AI Programs</a>
                  <a href="/career-intelligence" className="subtle-link block">{t("products.careerIntelligence", "Career Intelligence")}</a>
                  <a href="/consulting" className="subtle-link block">{t("products.consulting", "Consulting")}</a>
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#1A1A1A]">PROGRAMS</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1A1A1A] md:text-[16px]">
                  <a href="/programs/foundations" className="subtle-link block">UMATTR {t("products.aiFoundations", "AI Foundations")}</a>
                  <a href="/programs/for-work" className="subtle-link block">UMATTR {t("products.aiForWork", "AI for Work")}</a>
                  <a href="/programs/for-business" className="subtle-link block">UMATTR {t("products.aiForBusiness", "AI for Business")}</a>
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#1A1A1A]">ACCOUNT</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1A1A1A] md:text-[16px]">
                  <a href="/about" className="subtle-link block">{t("common.about", "About")}</a>
                  <a href={START_FREE_HREF} className="subtle-link block">Start Free</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
