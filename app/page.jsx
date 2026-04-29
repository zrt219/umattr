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
      title: "Foundations \u2022 Work \u2022 Business",
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

  const valueNotes =
    "Start with free tools when you need clarity first. Move into programs for practical AI learning, then step into Career Intelligence or Consulting when the decision carries more weight.";

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
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#1F1F1F] antialiased selection:bg-[#D4AF37]/20">
      <style>{`
        :root {
          --ivory: #F7F6F2;
          --white: #FFFFFF;
          --gold: #D4AF37;
          --gold-deep: #B8962E;
          --gold-primary: #D4AF37;
          --gold-hover: #E6C65C;
          --gold-deep-hover: #B8962E;
          --button-primary-bg: #D4AF37;
          --button-primary-bg-hover: #E6C65C;
          --button-primary-border: #D4AF37;
          --button-primary-border-hover: #E6C65C;
          --button-primary-text: #1F1F1F;
          --button-secondary-bg: #D4AF37;
          --button-secondary-bg-hover: #E6C65C;
          --button-secondary-border: #D4AF37;
          --button-secondary-border-hover: #E6C65C;
          --button-secondary-text: #1F1F1F;
          --text-primary: #1F1F1F;
          --text-secondary: #5A5A5A;
          --border-soft: rgba(212, 175, 55, 0.18);
          --border-strong: rgba(212, 175, 55, 0.28);
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
            radial-gradient(circle at 20% 20%, rgba(212,175,55,0.14) 0, transparent 26%),
            radial-gradient(circle at 80% 12%, rgba(184,150,46,0.10) 0, transparent 24%),
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

        .button-unified {
          min-height: 45px !important;
          border-radius: 15px !important;
          padding: 0 20px !important;
          font-family: inherit !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          line-height: 1 !important;
          letter-spacing: 0.045em !important;
          text-transform: none !important;
          text-align: center !important;
          border: 1px solid rgba(184, 150, 46, 0.58) !important;
          background: linear-gradient(180deg, #E6C65C 0%, #D4AF37 58%, #B8962E 100%) !important;
          color: #1F1F1F !important;
          box-shadow: 0 10px 24px rgba(184, 150, 46, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.34) !important;
          transform: translateY(0);
          white-space: normal;
        }

        .button-unified:not(:disabled):hover {
          border-color: #E6C65C !important;
          background: linear-gradient(180deg, #F0D878 0%, #E6C65C 48%, #D4AF37 100%) !important;
          box-shadow: 0 14px 32px rgba(184, 150, 46, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.42) !important;
          transform: translateY(-2px);
        }

        .button-unified-premium {
          border-color: rgba(184, 150, 46, 0.76) !important;
          background: linear-gradient(180deg, #F0D878 0%, #D4AF37 50%, #B8962E 100%) !important;
          box-shadow: 0 16px 38px rgba(184, 150, 46, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.48), inset 0 -1px 0 rgba(97, 75, 15, 0.14) !important;
        }

        .button-unified-premium:not(:disabled):hover {
          border-color: #E6C65C !important;
          box-shadow: 0 20px 46px rgba(184, 150, 46, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.54), inset 0 -1px 0 rgba(97, 75, 15, 0.16) !important;
        }

        .button-compact {
          min-height: 45px !important;
          border-radius: 15px !important;
          padding: 0 20px !important;
          font-size: 13px !important;
          line-height: 1 !important;
          letter-spacing: 0.045em !important;
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

        .premium-button.button-unified {
          border: 1px solid rgba(184, 150, 46, 0.58) !important;
          background: linear-gradient(180deg, #E6C65C 0%, #D4AF37 58%, #B8962E 100%) !important;
          color: #1F1F1F !important;
          box-shadow: 0 10px 24px rgba(184, 150, 46, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.34) !important;
        }

        .premium-button.button-unified:not(:disabled):hover {
          border-color: #E6C65C !important;
          background: linear-gradient(180deg, #F0D878 0%, #E6C65C 48%, #D4AF37 100%) !important;
          color: #1F1F1F !important;
          box-shadow: 0 14px 32px rgba(184, 150, 46, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.42) !important;
          transform: translateY(-2px);
        }

        .premium-button.button-unified-premium {
          border-color: rgba(184, 150, 46, 0.76) !important;
          background: linear-gradient(180deg, #F0D878 0%, #D4AF37 50%, #B8962E 100%) !important;
          box-shadow: 0 16px 38px rgba(184, 150, 46, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.48), inset 0 -1px 0 rgba(97, 75, 15, 0.14) !important;
        }

        .premium-button.button-unified-premium:not(:disabled):hover {
          border-color: #E6C65C !important;
          box-shadow: 0 20px 46px rgba(184, 150, 46, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.54), inset 0 -1px 0 rgba(97, 75, 15, 0.16) !important;
        }

        .premium-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-strong);
        }

        .readability-card {
          transition: transform 220ms var(--ease-premium), border-color 220ms var(--ease-premium), box-shadow 220ms var(--ease-premium), background 220ms var(--ease-premium);
        }

        .readability-card:hover {
          transform: translateY(-3px);
          border-color: rgba(212, 175, 55, 0.34);
          box-shadow: 0 18px 54px rgba(33, 27, 18, 0.07), 0 10px 24px rgba(212, 175, 55, 0.10);
          background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,247,240,0.92));
        }

        .readability-card:hover h3 {
          color: #1F1F1F;
        }

        .readability-card.signature-card:hover {
          border-color: rgba(212, 175, 55, 0.62);
          background: linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(250,232,169,0.96) 48%, rgba(212,175,55,0.38) 100%);
          box-shadow: 0 0 0 1px rgba(230, 198, 92, 0.28), 0 20px 58px rgba(212, 175, 55, 0.22), inset 0 1px 0 rgba(255,255,255,0.76);
        }

        .section-heading-gold {
          color: #D4AF37;
          text-shadow: 0 10px 30px rgba(212, 175, 55, 0.10);
        }

        .section-title-underline {
          position: relative;
          display: inline-block;
          padding-bottom: 0.65rem;
        }

        .section-title-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 96px;
          height: 1px;
          background: linear-gradient(90deg, #D4AF37, rgba(212, 175, 55, 0));
        }

        .mango-ambient-ring {
          border-color: rgba(212, 175, 55, 0.48) !important;
          box-shadow:
            0 0 0 2px rgba(230, 198, 92, 0.34),
            0 0 0 12px rgba(230, 198, 92, 0.12),
            0 22px 72px rgba(212, 175, 55, 0.32),
            0 10px 32px rgba(184, 150, 46, 0.16);
        }

        .mango-ambient-ring::before {
          content: "";
          position: absolute;
          inset: -18px;
          z-index: -1;
          border-radius: 34px;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 50%, rgba(230, 198, 92, 0.30), transparent 58%),
            conic-gradient(from 24deg, rgba(230, 198, 92, 0.16), rgba(184, 150, 46, 0.46), rgba(230, 198, 92, 0.16), rgba(184, 150, 46, 0.42), rgba(230, 198, 92, 0.16));
          filter: blur(14px);
          opacity: 0.88;
        }

        .premium-card.mango-ambient-ring:hover {
          transform: none;
          border-color: rgba(212, 175, 55, 0.48) !important;
          box-shadow:
            0 0 0 2px rgba(230, 198, 92, 0.34),
            0 0 0 12px rgba(230, 198, 92, 0.12),
            0 22px 72px rgba(212, 175, 55, 0.32),
            0 10px 32px rgba(184, 150, 46, 0.16);
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
          background: linear-gradient(90deg, rgba(212,175,55,0), rgba(212,175,55,0.95), rgba(212,175,55,0));
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
          border: 1px solid rgba(212, 175, 55, 0.16);
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
          border-color: rgba(212, 175, 55, 0.28);
          box-shadow: 0 18px 50px rgba(184, 150, 46, 0.10);
        }

        .priority-high:hover {
          border-color: rgba(212, 175, 55, 0.48);
          box-shadow: 0 24px 68px rgba(184, 150, 46, 0.16);
        }

        .priority-medium {
          border-color: rgba(212, 175, 55, 0.16);
          background: rgba(247, 246, 242, 0.72);
        }

        .priority-strategic {
          border-color: rgba(212, 175, 55, 0.12);
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
          color: #1F1F1F !important;
          font-family: inherit !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          letter-spacing: -0.02em !important;
          outline: none !important;
          cursor: pointer;
        }

        .gtranslate-shell select option {
          color: #1F1F1F;
        }
      `}</style>

      <div className="relative overflow-hidden noise">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.14),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(212,175,55,0.08),transparent_24%),radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.85),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,246,242,0.88)_55%,rgba(247,246,242,0.56)_100%)]" />

        <header className="relative z-10 mx-auto max-w-[1440px] px-6 pt-6 md:px-10 lg:px-12">
          <div className="glass fade-up mx-auto flex max-w-[1200px] items-center justify-between rounded-[28px] border border-[rgba(212,175,55,0.16)] px-5 py-4 shadow-[var(--shadow-nav)] md:px-7">
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
                  className={`nav-link text-[15px] font-medium tracking-[-0.02em] text-[#1F1F1F]/78 hover:text-[#1F1F1F] ${index === 0 ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              <GTranslateWidget />
              <ButtonLink
                href={START_FREE_HREF}
                className="premium-button button-primary button-unified"
              >
                Start Free
              </ButtonLink>
            </div>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-10 md:px-10 lg:px-12 lg:pb-28 lg:pt-12">
          <section className="mx-auto grid max-w-[1260px] grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-12">
            <div className="fade-up glass relative overflow-hidden rounded-[34px] border border-[rgba(212,175,55,0.16)] p-8 shadow-[var(--shadow-card)] md:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.5))]" />
              <div className="relative flex h-full flex-col">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/brand/umattr-logo.png"
                    alt="UMATTR"
                    className="h-[74px] w-auto object-contain md:h-[88px]"
                  />
                </div>

                <h1 className="mt-10 max-w-[9ch] text-[clamp(2.65rem,5.2vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.062em] text-[#1F1F1F]">
                  Practical AI learning and career intelligence.
                </h1>
                <p className="mt-8 max-w-[27rem] text-[16px] leading-8 text-[#5A5A5A] md:text-[17px]">
                  Start with free tools, then choose the right path for AI skills, career direction, or higher-stakes consulting support.
                </p>

                <div className="mt-10 flex max-w-[260px] flex-col gap-3">
                  <ButtonLink
                    href={START_FREE_HREF}
                    onClick={() => trackCta("Start with Free Tools", START_FREE_HREF)}
                    className="premium-button button-primary button-unified w-full"
                  >
                    Start with Free Tools
                  </ButtonLink>
                  <ButtonLink
                    href="#route-comparison"
                    onClick={() => trackCta("Compare the Routes", "#route-comparison")}
                    className="premium-button button-primary button-unified w-full"
                  >
                    Compare the Routes
                  </ButtonLink>
                  <ButtonLink
                    href="/programs"
                    onClick={() => trackCta("Explore AI Programs", "/programs")}
                    className="premium-button button-primary button-unified w-full"
                  >
                    Explore AI Programs
                  </ButtonLink>
                </div>

                <p className="mt-auto pt-14 max-w-[28rem] text-[15px] leading-8 text-[#5A5A5A]">
                  {valueNotes}
                </p>
              </div>
            </div>

            <div className="fade-up relative" style={{ animationDelay: "120ms" }}>
              <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#D4AF37]/10 blur-3xl" />
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#B8962E]/10 blur-3xl" />

              <div className="glass relative h-full rounded-[34px] border border-[rgba(212,175,55,0.16)] p-4 shadow-[var(--shadow-card)] md:p-5 lg:p-6">
                <div className="rounded-[30px] border border-[rgba(212,175,55,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(252,249,242,0.86))] p-8 md:p-9">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E]">
                    PRODUCT RAIL
                  </div>
                  <h2 className="section-title-underline mt-5 text-[clamp(1.95rem,3vw,3.1rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1F1F1F]">
                    Preview the routes.
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-[#5A5A5A] md:text-[16px]">
                    Free, AI Programs, Career Intelligence, and Consulting.
                  </p>

                  <div className="mt-10 space-y-5">
                    {productRailItems.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-[28px] border border-[rgba(212,175,55,0.12)] bg-white/88 px-7 py-7 shadow-[0_16px_40px_rgba(33,27,18,0.05)]"
                      >
                        <div className="flex min-h-[136px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                          <div className="max-w-[27rem]">
                            <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E]">
                              {item.eyebrow}
                            </div>
                            <h3 className="mt-4 text-[clamp(1.55rem,2.4vw,2.25rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#1F1F1F]">
                              {item.title}
                            </h3>
                            <p className="mt-4 max-w-[24rem] text-[15px] leading-7 text-[#5A5A5A] md:text-[15px]">
                              {item.description}
                            </p>
                          </div>

                          <ButtonLink
                            href={item.href}
                            onClick={() => trackCta(item.cta, item.href)}
                            className="premium-button button-primary button-unified shrink-0"
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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="readability-card rounded-[28px] border border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-6 shadow-[0_14px_42px_rgba(33,27,18,0.05)] md:p-7">
                <div>
                  <h1 className="section-heading-gold section-title-underline max-w-[10ch] text-[clamp(1.85rem,3vw,3.15rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                    Route Comparison
                  </h1>
                  <p className="mt-4 max-w-[19rem] text-[clamp(1.25rem,1.8vw,1.8rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1F1F1F]">
                    Choose by what you need next.
                  </p>
                  <p className="mt-4 max-w-[28rem] text-[16px] leading-8 text-[#5A5A5A]">
                    Start free when you need orientation before a paid route. Move into a program, career path, or consulting only when the decision calls for it.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-[15px] leading-7 text-[#5A5A5A]">
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />Use free tools to get clear first.</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />Choose AI Programs for practical learning.</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />Use Career Intelligence or Consulting when the decision has more weight.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {routeComparisonItems.map((item) => (
                  <article
                    key={item.title}
                    className="readability-card flex h-full min-h-[210px] flex-col rounded-[24px] border border-[rgba(212,175,55,0.14)] bg-white/86 p-5 shadow-[0_14px_38px_rgba(33,27,18,0.05)]"
                  >
                    <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E]">
                      {item.eyebrow}
                    </div>
                    <h3 className="mt-4 text-[19px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#1F1F1F]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-8 text-[#5A5A5A]">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <ButtonLink
                        href={item.href}
                        onClick={() => trackCta(item.cta, item.href)}
                        className="premium-button button-primary button-unified"
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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="readability-card min-h-[320px] rounded-[28px] border border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-6 shadow-[0_14px_42px_rgba(33,27,18,0.05)] md:p-7">
                <h1 className="section-heading-gold section-title-underline max-w-[9ch] text-[clamp(1.85rem,3vw,3.05rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
                  Trust Layer
                </h1>
                <p className="mt-4 max-w-[13ch] text-[clamp(1.25rem,1.8vw,1.8rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#1F1F1F]">
                  Built for practical decisions, not AI hype.
                </p>
                <p className="mt-4 max-w-[31rem] text-[16px] leading-8 text-[#5A5A5A]">
                  A simple way to judge every route by usefulness, fit, and confidence before you spend time or money.
                </p>
                <p className="mt-3 max-w-[31rem] text-[16px] leading-8 text-[#5A5A5A]">
                  It helps you compare what is free, what is practical, and what deserves more serious support before the next move gets expensive.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {trustLayerItems.map((item) => (
                  <article
                    key={item.title}
                    className="readability-card flex h-full min-h-[220px] flex-col rounded-[24px] border border-[rgba(212,175,55,0.14)] bg-white/86 p-5 shadow-[0_14px_38px_rgba(33,27,18,0.05)]"
                  >
                    <h3 className="text-[17px] font-semibold leading-[1.12] tracking-[-0.015em] text-[#1F1F1F]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-8 text-[#5A5A5A]">
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
            className="mx-auto mt-16 max-w-[1260px]"
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="readability-card rounded-[28px] border border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-6 shadow-[0_14px_42px_rgba(33,27,18,0.05)] md:p-7">
                <div>
                  <h1 className="section-heading-gold section-title-underline max-w-[9ch] text-[clamp(1.85rem,3vw,3.05rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
                    Decision System
                  </h1>
                  <p className="mt-4 max-w-[14ch] text-[clamp(1.25rem,1.8vw,1.8rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#1F1F1F]">
                    Choose the path that fits the decision.
                  </p>
                  <p className="mt-4 max-w-[29rem] text-[16px] leading-8 text-[#5A5A5A]">
                    Compare the routes, then choose the one that matches the level of clarity, commitment, and support you actually need right now.
                  </p>
                  <p className="mt-3 max-w-[29rem] text-[16px] leading-8 text-[#5A5A5A]">
                    The goal is not to buy too early. The goal is to enter the right route with better judgment, stronger fit, and less wasted motion.
                  </p>
                  <ul className="mt-6 space-y-3 text-[15px] leading-8 text-[#5A5A5A]">
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />Start with free tools when you need orientation before you commit.</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />Choose a program when you need stronger AI fundamentals or practical execution help.</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />Move into Career Intelligence or Consulting when the decision becomes more personal, strategic, or expensive.</li>
                  </ul>
                  <div className="mt-6">
                    <ButtonLink
                      href="/start"
                      onClick={() => trackCta("Start with Free Tools", "/start")}
                      className="premium-button button-primary button-unified"
                    >
                      Start with Free Tools
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="max-w-[700px] rounded-[30px] border border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-4 shadow-[0_18px_46px_rgba(33,27,18,0.05)] md:p-5 lg:ml-auto">
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                  {decisionSystemItems.map((item) => (
                    <article
                      key={item.title}
                      className={`readability-card relative flex min-h-[236px] flex-col overflow-hidden rounded-[22px] border p-5 ${
                        item.featured
                          ? "signature-card border-[rgba(212,175,55,0.44)] bg-[linear-gradient(160deg,rgba(255,255,255,0.96)_0%,rgba(246,229,172,0.92)_52%,rgba(212,175,55,0.30)_100%)] shadow-[0_18px_52px_rgba(212,175,55,0.20),inset_0_1px_0_rgba(255,255,255,0.74)]"
                          : "border-[rgba(212,175,55,0.12)] bg-white/88 shadow-[0_12px_30px_rgba(33,27,18,0.04)]"
                      }`}
                    >
                      {item.featured ? (
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#B8962E,#E6C65C,#D4AF37)]" />
                      ) : null}
                      <div className="flex flex-wrap items-center gap-2">
                        {item.featured ? (
                          <span className="rounded-full border border-[rgba(184,150,46,0.34)] bg-[rgba(255,255,255,0.62)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.10em] text-[#B8962E] shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]">
                            SIGNATURE COURSE
                          </span>
                        ) : null}
                        <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E]">
                          {item.eyebrow}
                        </div>
                      </div>
                      <h3 className={`mt-3 text-[16px] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[17px] ${item.featured ? "text-[#1F1F1F]" : "text-[#1F1F1F]"}`}>
                        {item.title}
                      </h3>
                      <p className={`mt-3 text-[14.5px] leading-8 ${item.featured ? "text-[#4F4A38]" : "text-[#5A5A5A]"}`}>
                        {item.description}
                      </p>
                      <p className={`mt-4 border-t pt-4 text-[14.5px] leading-8 ${item.featured ? "border-[rgba(184,150,46,0.22)] text-[#4F4A38]" : "border-[rgba(212,175,55,0.10)] text-[#5A5A5A]"}`}>
                        <span className="font-semibold text-[#1F1F1F]">Best when:</span> {item.detail}
                      </p>
                      <div className="mt-auto pt-5">
                        <ButtonLink
                          href={item.href}
                          onClick={() => trackCta(item.cta, item.href)}
                          className={`premium-button button-primary button-unified ${
                            item.featured ? "button-unified-premium" : ""
                          }`}
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
            className="readability-card mx-auto mt-10 max-w-[1320px] rounded-[30px] border border-[rgba(212,175,55,0.20)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(250,247,240,0.92))] px-6 py-7 shadow-[0_18px_54px_rgba(33,27,18,0.07),inset_0_1px_0_rgba(255,255,255,0.72)] md:px-8"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[66rem]">
                <h1 className="section-heading-gold section-title-underline max-w-[14ch] text-[clamp(2.1rem,3.4vw,3.45rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
                  Consulting
                </h1>
                <p className="mt-5 max-w-[58rem] text-[16px] leading-8 text-[#5A5A5A]">
                  UMATTR Consulting is for decisions where a weak call costs more than the service itself.
                </p>
                <p className="mt-3 max-w-[62rem] text-[16px] leading-8 text-[#5A5A5A]">
                  Use it when the next move touches systems, spend, vendors, process, or execution risk and you want sharper judgment, outside perspective, and a more disciplined decision before committing time or budget.
                </p>
              </div>
              <ButtonLink
                href="/consulting"
                onClick={() => trackCta("Request Consulting", "/consulting")}
                className="premium-button button-primary button-unified button-unified-premium shrink-0 lg:mr-3"
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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <div className="readability-card flex h-full min-h-[300px] flex-col rounded-[28px] border border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-6 shadow-[0_14px_42px_rgba(33,27,18,0.05)] md:p-7">
                <h1 className="section-heading-gold section-title-underline max-w-[9ch] text-[clamp(2.05rem,3.3vw,3.2rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
                  Free Previews
                </h1>
                <h2 className="mt-5 max-w-[11ch] text-[clamp(1.45rem,2.45vw,2.15rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1F1F1F]">
                  Three free previews on Payhip
                </h2>
                <p className="mt-4 max-w-[28rem] text-[15px] leading-7 text-[#5A5A5A] md:text-[16px]">
                  Sample Foundations first. These previews are free and open on Payhip.
                </p>
              </div>

              <div className="readability-card flex h-full rounded-[30px] border border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-4 shadow-[0_18px_46px_rgba(33,27,18,0.05)] md:p-5">
                <div className="grid w-full grid-cols-1 items-stretch gap-4 xl:grid-cols-3">
                {freePreviewItems.map((item) => (
                  <article
                    key={item.title}
                    className="readability-card flex h-full min-h-[250px] flex-col rounded-[24px] border border-[rgba(212,175,55,0.14)] bg-white/86 p-5 shadow-[0_14px_38px_rgba(33,27,18,0.05)]"
                  >
                    <h3 className="text-[18px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1F1F1F]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#5A5A5A]">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <ButtonLink
                        href={PAYHIP_LINKS.sampleFoundations}
                        onClick={() => trackCta("Open Preview", PAYHIP_LINKS.sampleFoundations)}
                        className="premium-button button-primary button-unified"
                      >
                        Open Preview
                      </ButtonLink>
                    </div>
                  </article>
                ))}
              </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[rgba(184,150,46,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.96))]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.08fr_1.92fr] lg:gap-14 lg:px-12 lg:py-18">
            <div className="border-b border-[rgba(212,175,55,0.10)] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
              <a href="/" className="block max-w-[240px] no-underline">
                <img
                  src="/brand/umattr-logo.png"
                  alt="UMATTR"
                  className="h-auto w-full object-contain"
                />
              </a>
              <p className="mt-5 max-w-[24rem] text-[15px] leading-7 text-[#5A5A5A] md:text-[16px] md:leading-8">
                Start free, then move into the path that fits the decision.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="/start"
                  className="inline-flex items-center rounded-full border border-[rgba(212,175,55,0.16)] bg-white/80 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E] no-underline transition-all duration-200 hover:border-[rgba(212,175,55,0.28)] hover:text-[#1F1F1F]"
                >
                  Start Free
                </a>
                <a
                  href="/programs"
                  className="inline-flex items-center rounded-full border border-[rgba(212,175,55,0.16)] bg-white/80 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E] no-underline transition-all duration-200 hover:border-[rgba(212,175,55,0.28)] hover:text-[#1F1F1F]"
                >
                  Programs
                </a>
                <a
                  href="/career-intelligence"
                  className="inline-flex items-center rounded-full border border-[rgba(212,175,55,0.16)] bg-white/80 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E] no-underline transition-all duration-200 hover:border-[rgba(212,175,55,0.28)] hover:text-[#1F1F1F]"
                >
                  Career Intelligence
                </a>
                <a
                  href="/consulting"
                  className="inline-flex items-center rounded-full border border-[rgba(212,175,55,0.16)] bg-white/80 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E] no-underline transition-all duration-200 hover:border-[rgba(212,175,55,0.28)] hover:text-[#1F1F1F]"
                >
                  Consulting
                </a>
              </div>
              <SocialLinks className="mt-6" />
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:pl-2">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F]">NAVIGATION</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1F1F1F] md:text-[16px]">
                  <a href="/" className="subtle-link block">{t("common.home", "Home")}</a>
                  <a href="/programs" className="subtle-link block">AI Programs</a>
                  <a href="/career-intelligence" className="subtle-link block">{t("products.careerIntelligence", "Career Intelligence")}</a>
                  <a href="/consulting" className="subtle-link block">{t("products.consulting", "Consulting")}</a>
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F]">PROGRAMS</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1F1F1F] md:text-[16px]">
                  <a href="/programs/foundations" className="subtle-link block">UMATTR {t("products.aiFoundations", "AI Foundations")}</a>
                  <a href="/programs/for-work" className="subtle-link block">UMATTR {t("products.aiForWork", "AI for Work")}</a>
                  <a href="/programs/for-business" className="subtle-link block">UMATTR {t("products.aiForBusiness", "AI for Business")}</a>
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F]">ACCOUNT</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1F1F1F] md:text-[16px]">
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
