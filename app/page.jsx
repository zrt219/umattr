"use client";

import { SocialLinks } from "./_components/marketing-system";
import { LanguageSelector, useLocale } from "./_components/locale-provider.jsx";

const START_FREE_HREF = "https://umattr.ca/start";

export default function UmattrHomepage() {
  const { t } = useLocale();

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

  const productCards = [
    {
      type: "free",
      eyebrow: "FREE ENTRY",
      title: "Free Membership",
      description: "Assessment, glossary, dashboard, and previews.",
      bestWhen: "you want orientation before paying.",
      cta: "Start Free",
      href: START_FREE_HREF,
      featured: true,
    },
    {
      type: "program",
      eyebrow: "AI PROGRAM",
      title: `UMATTR ${t("products.aiFoundations", "AI Foundations")}`,
      description: "Start here for clarity and fundamentals.",
      bestWhen: "you need the right mental model first.",
      cta: "View Program",
      href: "/programs/foundations",
    },
    {
      type: "program",
      eyebrow: "AI PROGRAM",
      title: `UMATTR ${t("products.aiForWork", "AI for Work")}`,
      description: "Practical AI for day-to-day workflows.",
      bestWhen: "work speed and quality matter daily.",
      cta: "View Program",
      href: "/programs/for-work",
    },
    {
      type: "program",
      eyebrow: "AI PROGRAM",
      title: `UMATTR ${t("products.aiForBusiness", "AI for Business")}`,
      description: "AI judgment for higher-stakes decisions.",
      bestWhen: "the decision affects operations, vendors, or risk.",
      cta: "View Program",
      href: "/programs/for-business",
    },
    {
      type: "career",
      eyebrow: "CAREER INTELLIGENCE",
      title: t("products.careerIntelligence", "Career Intelligence"),
      description: "One premium route for direction and positioning.",
      bestWhen: "you need structured career clarity.",
      cta: `Explore ${t("products.careerIntelligence", "Career Intelligence")}`,
      href: "/career-intelligence",
    },
    {
      type: "consulting",
      eyebrow: "CONSULTING",
      title: t("products.consulting", "Consulting"),
      description: "Human-guided decisions for systems, spend, operations, and risk.",
      bestWhen: "the call changes systems, money, operations, or exposure.",
      cta: `Request ${t("products.consulting", "Consulting")}`,
      href: "/consulting",
      consulting: true,
    },
  ];

  const heroRailItems = [
    {
      eyebrow: "FREE ENTRY",
      title: "Free Membership",
      description: "Assessment, glossary, dashboard, previews.",
      cta: "Start Free",
      href: START_FREE_HREF,
      featured: true,
    },
    {
      eyebrow: "AI PROGRAMS",
      title: "Foundations • Work • Business",
      description: "Three Payhip-delivered programs.",
      cta: "Explore Programs",
      href: "/programs",
    },
    {
      eyebrow: "CAREER INTELLIGENCE",
      title: t("products.careerIntelligence", "Career Intelligence"),
      description: "Direction through one premium route.",
      cta: `Explore ${t("products.careerIntelligence", "Career Intelligence")}`,
      href: "/career-intelligence",
    },
    {
      eyebrow: "CONSULTING",
      title: t("products.consulting", "Consulting"),
      description: "Human-guided route for higher-stakes calls.",
      cta: `Request ${t("products.consulting", "Consulting")}`,
      href: "/consulting",
      consulting: true,
    },
  ];

  const previewCards = [
    {
      eyebrow: "FREE PREVIEW",
      title: "What AI Is",
      description:
        "A free preview on Payhip covering what AI is, what it is not, and where it fits best.",
      cta: "Open Foundations Preview",
      href: "/programs/foundations",
    },
    {
      eyebrow: "FREE PREVIEW",
      title: "Better Questions",
      description:
        "A free preview on Payhip focused on stronger context, cleaner structure, and better follow-up.",
      cta: "Open Foundations Preview",
      href: "/programs/foundations",
    },
    {
      eyebrow: "FREE PREVIEW",
      title: "Safer AI Use",
      description:
        "A free preview on Payhip focused on privacy, verification, and human judgment.",
      cta: "Open Foundations Preview",
      href: "/programs/foundations",
    },
  ];

  const cardTone = {
    free: {
      shell:
        "border-[rgba(198,165,92,0.14)] bg-white/88 shadow-[0_16px_40px_rgba(33,27,18,0.05)]",
      button:
        "button-primary border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.24)]",
    },
    program: {
      shell:
        "border-[rgba(198,165,92,0.18)] bg-white/92 shadow-[0_18px_44px_rgba(33,27,18,0.06)]",
      button:
        "button-secondary button-standout border-[rgba(198,165,92,0.18)] bg-white text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.3)]",
    },
    career: {
      shell:
        "border-[rgba(198,165,92,0.24)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(250,247,240,0.95))] shadow-[0_20px_54px_rgba(33,27,18,0.08)]",
      button:
        "button-secondary border-[rgba(198,165,92,0.18)] bg-white text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.3)]",
    },
    consulting: {
      shell:
        "border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,246,238,0.96))] shadow-[0_28px_80px_rgba(168,132,58,0.16)]",
      button:
        "button-primary button-standout border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] text-[#1A1A1A] shadow-[0_12px_30px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(198,165,92,0.28)]",
    },
  };

  function getCardClasses(type) {
    return cardTone[type] ?? cardTone.program;
  }

  function ButtonLink({ href, className, children }) {
    return (
      <a href={href} className={className}>
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
          color: var(--text-primary);
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
              <LanguageSelector className="w-[118px] sm:w-[148px]" />
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
          <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <div className="fade-up glass relative overflow-hidden rounded-[30px] border border-[rgba(198,165,92,0.16)] p-8 shadow-[var(--shadow-card)] md:p-10 lg:col-span-5 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,165,92,0.10),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.64),rgba(255,255,255,0.42))]" />
              <div className="relative">
                <div className="mb-10 flex justify-center">
                  <img
                    src="/brand/umattr-logo.png"
                    alt="UMATTR"
                    className="h-auto w-[218px] object-contain md:w-[248px]"
                  />
                </div>
                <h1 className="max-w-[9ch] text-[clamp(3.5rem,7vw,5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#1A1A1A]">
                  Premium AI learning for real decisions.
                </h1>
                <p className="mt-8 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
                  Start free on UMATTR. AI Programs and {t("products.careerIntelligence", "Career Intelligence")} continue through Payhip. {t("products.consulting", "Consulting")} is requested directly.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <ButtonLink
                    href={START_FREE_HREF}
                    className="premium-button button-primary rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[15px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.30)]"
                  >
                    Start Free
                  </ButtonLink>
                  <ButtonLink
                    href="/programs"
                    className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/70 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                  >
                    Explore AI Programs
                  </ButtonLink>
                  <ButtonLink
                    href="/career-intelligence"
                    className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/70 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                  >
                    Explore {t("products.careerIntelligence", "Career Intelligence")}
                  </ButtonLink>
                </div>

                <p className="mt-10 text-[14px] leading-7 text-[#6B6B6B]">
                  Free tools live on UMATTR. Previews, checkout, and delivery for AI Programs and {t("products.careerIntelligence", "Career Intelligence")} happen on Payhip.
                </p>
              </div>
            </div>

            <div className="fade-up relative lg:col-span-7" style={{ animationDelay: "120ms" }}>
              <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#C6A55C]/10 blur-3xl" />
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#A8843A]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[34px] border border-[rgba(198,165,92,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-4 shadow-[var(--shadow-card)] md:p-5 lg:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(198,165,92,0.12),transparent_26%),radial-gradient(circle_at_88%_18%,rgba(198,165,92,0.08),transparent_22%)]" />
                <div className="relative h-full rounded-[28px] border border-[rgba(198,165,92,0.12)] bg-white/70 p-8 md:p-10 lg:p-12">
                  <div className="max-w-[28rem]">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#A8843A]">Product rail</div>
                    <div className="mt-4 text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A] md:text-[32px] xl:text-[34px]">
                      Preview the routes.
                    </div>
                    <p className="mt-4 max-w-[25rem] text-[15px] leading-7 text-[#6B6B6B] md:text-[16px]">
                      Free, AI Programs, {t("products.careerIntelligence", "Career Intelligence")}, and {t("products.consulting", "Consulting")}.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4">
                    {heroRailItems.map((item, index) => (
                      <article
                        key={item.title}
                        className={`premium-card glass relative overflow-hidden rounded-[26px] border p-5 md:p-6 ${item.consulting ? "border-[#A8843A]/34 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,246,238,0.92))] shadow-[0_24px_68px_rgba(168,132,58,0.12)] hover:border-[#A8843A]/54 hover:shadow-[0_30px_82px_rgba(168,132,58,0.16)]" : "border-[rgba(198,165,92,0.14)] shadow-[0_16px_42px_rgba(33,27,18,0.06)] hover:shadow-[0_20px_54px_rgba(33,27,18,0.08)]"}`}
                        style={{ transitionDelay: `${index * 28}ms` }}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.18))]" />
                        <div className="relative flex h-full flex-col gap-5 md:flex-row md:items-end md:justify-between">
                          <div className="max-w-[26rem]">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                              {item.eyebrow}
                            </div>
                            <h3 className="mt-3 text-[24px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1A1A1A] md:text-[26px]">
                              {item.title}
                            </h3>
                            <p className="mt-3 text-[15px] leading-7 text-[#6B6B6B]">
                              {item.description}
                            </p>
                          </div>

                          <ButtonLink
                            href={item.href}
                            className={`premium-button shrink-0 self-start rounded-[15px] border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] ${item.featured || item.consulting ? `button-primary${item.consulting ? " button-standout" : ""} border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.20)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.26)]` : `button-secondary${item.eyebrow === "CAREER INTELLIGENCE" ? " button-standout" : ""} border-[rgba(198,165,92,0.18)] bg-white/86 text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.30)] hover:bg-white`}`}
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

          <section className="mx-auto mt-20 max-w-[1200px]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.62fr] lg:items-start lg:gap-10">
              <div className="flex flex-col justify-start px-2 py-2 md:px-3 lg:px-1 lg:pt-4">
                <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#A8843A]">
                  Decision system
                </div>

                <h2 className="mt-4 max-w-[10ch] text-[clamp(2.2rem,3.2vw,3.35rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
                  Choose the path that fits the decision.
                </h2>

                <p className="mt-4 max-w-[23rem] text-[15px] leading-6 text-[#6B6B6B] md:text-[16px] md:leading-7">
                  Compare the routes, then choose the one that fits the decision.
                </p>

                <div className="mt-6 space-y-3 text-[14px] leading-6 text-[#6B6B6B] md:text-[15px] md:leading-7">
                  <p>
                    <span className="font-semibold text-[#1A1A1A]">Start Free</span> for context first.
                  </p>
                  <p>
                    <span className="font-semibold text-[#1A1A1A]">AI Programs and {t("products.careerIntelligence", "Career Intelligence")}</span> are Payhip-delivered paths.
                  </p>
                  <p>
                    <span className="font-semibold text-[#1A1A1A]">{t("products.consulting", "Consulting")}</span> is the direct premium route for higher-stakes calls.
                  </p>
                </div>
              </div>

              <div className="rounded-[32px] border border-[rgba(198,165,92,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.46))] p-4 shadow-[0_14px_46px_rgba(33,27,18,0.05)] md:p-5 lg:p-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-4.5">
                  {productCards.map((card) => {
                    const tone = getCardClasses(card.type);

                    return (
                      <article
                        key={card.title}
                        className={[
                          "premium-card relative flex min-h-[216px] flex-col rounded-[26px] border p-5 md:min-h-[224px] md:p-6",
                          tone.shell,
                          card.type === "consulting" ? "xl:min-h-[228px]" : "",
                        ].join(" ")}
                      >
                        <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8843A]">
                          {card.eyebrow}
                        </div>

                        <h3 className="mt-3 text-[23px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1A1A1A] md:text-[24px]">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-6 text-[#6B6B6B]">
                          {card.description}
                        </p>

                        <div className="mt-4 border-t border-[rgba(198,165,92,0.10)] pt-4">
                          <p className="text-[13px] leading-5 text-[#6B6B6B] md:text-[13.5px] md:leading-6">
                            <span className="font-semibold text-[#1A1A1A]">Best when:</span>{" "}
                            {card.bestWhen}
                          </p>
                        </div>

                        <div className="mt-auto pt-5">
                          <ButtonLink
                            href={card.href}
                            className={[
                              "premium-button rounded-[15px] border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em]",
                              tone.button,
                            ].join(" ")}
                          >
                            {card.cta}
                          </ButtonLink>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-8 max-w-[1200px] rounded-[24px] border border-[rgba(168,132,58,0.16)] bg-[linear-gradient(180deg,rgba(255,250,244,0.78),rgba(255,255,255,0.72))] px-5 py-4 shadow-[0_10px_30px_rgba(33,27,18,0.04)] md:px-6 md:py-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">CONSULTING</div>
                <p className="mt-2 max-w-[40rem] text-[14px] leading-6 text-[#6B6B6B] md:text-[15px] md:leading-7">
                  The premium human-guided route for decisions that carry real operational, financial, or risk weight.
                </p>
              </div>
              <ButtonLink
                href="/consulting"
                className="premium-button button-primary shrink-0 self-start rounded-[14px] border border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] shadow-[0_8px_20px_rgba(198,165,92,0.16)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(198,165,92,0.22)] md:self-center"
              >
                Request {t("products.consulting", "Consulting")}
              </ButtonLink>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-[1200px] rounded-[30px] border border-[rgba(198,165,92,0.10)] bg-[linear-gradient(180deg,rgba(255,253,249,0.78),rgba(255,255,255,0.68))] p-6 shadow-[0_12px_38px_rgba(33,27,18,0.04)] md:p-7 lg:p-8">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.95fr_2.05fr] lg:items-start lg:gap-8">
              <div className="lg:pt-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">FREE PREVIEWS</div>
                <h2 className="mt-3 max-w-[12ch] text-[clamp(1.7rem,2.3vw,2.3rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#1A1A1A]">
                  Three free previews on Payhip
                </h2>
                <p className="mt-3 max-w-[26rem] text-[15px] leading-6 text-[#6B6B6B] md:text-[16px] md:leading-7">
                  Sample Foundations first. These previews are free and open on Payhip.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-1 gap-3.5 xl:grid-cols-3">
                  {previewCards.map((card, index) => (
                    <article
                      key={card.title}
                      className="premium-card relative overflow-hidden rounded-[22px] border border-[rgba(198,165,92,0.12)] bg-white/82 p-4 shadow-[0_10px_28px_rgba(33,27,18,0.04)] md:p-5"
                      style={{ transitionDelay: `${index * 36}ms` }}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.12))]" />
                      <div className="relative flex h-full min-h-[184px] flex-col justify-between md:min-h-[192px]">
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
                            {card.eyebrow}
                          </div>
                          <h3 className="mt-3 text-[20px] font-semibold leading-[1.04] tracking-[-0.035em] text-[#1A1A1A] md:text-[21px]">
                            {card.title}
                          </h3>
                          <p className="mt-3 max-w-[18rem] text-[13px] leading-6 text-[#6B6B6B] md:text-[13.5px]">
                            {card.description}
                          </p>
                        </div>

                        <div className="mt-5">
                          <ButtonLink
                            href={card.href}
                            className="premium-button button-secondary rounded-[14px] border border-[rgba(198,165,92,0.22)] bg-white/88 px-4 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] shadow-[0_6px_18px_rgba(33,27,18,0.03)] hover:-translate-y-0.5 hover:border-[rgba(168,132,58,0.30)] hover:bg-white"
                          >
                            {card.cta}
                          </ButtonLink>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
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
                  <a href="/login" className="subtle-link block">{t("common.login", "Login")}</a>
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
