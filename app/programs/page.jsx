import { BrandLogo, MAIN_CTA_LINK, PAYHIP_LINKS } from "../_components/marketing-system";

export default function UmattrProgramsPage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "AI Programs", href: "/programs", active: true },
    { label: "Career Intelligence", href: "/career-intelligence" },
    { label: "Consulting", href: "/consulting" },
    { label: "About", href: "/about" },
  ];

  const detailLinks = {
    foundations: "/programs/foundations",
    forWork: "/programs/for-work",
    forBusiness: "/programs/for-business",
    previewWhatAiIs: "/programs/foundations",
    previewBetterQuestions: "/programs/foundations",
    previewSaferAiUse: "/programs/foundations",
  };

  const programs = [
    {
      eyebrow: "AI PROGRAM",
      title: "UMATTR AI Foundations",
      description:
        "Start here for clarity, fundamentals, and the right mental model before moving into practical or business-level use.",
      bestFor: "understanding what AI is, where it fits, and how to think with it cleanly.",
      detailHref: detailLinks.foundations,
      payhipHref: PAYHIP_LINKS.foundations,
      featured: true,
    },
    {
      eyebrow: "AI PROGRAM",
      title: "UMATTR AI for Work",
      description:
        "Use AI more effectively across day-to-day workflows where speed, clarity, and output quality matter repeatedly.",
      bestFor: "individual execution, workflow improvement, and stronger practical use inside real work.",
      detailHref: detailLinks.forWork,
      payhipHref: PAYHIP_LINKS.forWork,
    },
    {
      eyebrow: "AI PROGRAM",
      title: "UMATTR AI for Business",
      description:
        "Approach higher-stakes AI decisions with more judgment when the conversation touches operations, tools, risk, or spend.",
      bestFor: "business-level decisions where the cost of weak AI judgment is materially higher.",
      detailHref: detailLinks.forBusiness,
      payhipHref: PAYHIP_LINKS.forBusiness,
    },
  ];

  const previewProducts = [
    {
      eyebrow: "FREE PREVIEW",
      title: "What AI Is",
      description:
        "A free preview on Payhip covering what AI is, what it is not, and where it fits best.",
      href: detailLinks.previewWhatAiIs,
    },
    {
      eyebrow: "FREE PREVIEW",
      title: "Better Questions",
      description:
        "A free preview on Payhip focused on context, structure, and better follow-up.",
      href: detailLinks.previewBetterQuestions,
    },
    {
      eyebrow: "FREE PREVIEW",
      title: "Safer AI Use",
      description:
        "A free preview on Payhip focused on privacy, verification, and human judgment.",
      href: detailLinks.previewSaferAiUse,
    },
  ];

  function ButtonLink({ href, className, children }) {
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        className={className}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
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
          --text-primary: #1A1A1A;
          --text-secondary: #6B6B6B;
          --border-soft: rgba(198, 165, 92, 0.16);
          --border-strong: rgba(198, 165, 92, 0.28);
          --shadow-card: 0 22px 68px rgba(33, 27, 18, 0.07), 0 8px 24px rgba(33, 27, 18, 0.04);
          --shadow-hover: 0 28px 84px rgba(33, 27, 18, 0.11), 0 12px 30px rgba(33, 27, 18, 0.07);
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
            radial-gradient(circle at 18% 18%, rgba(198,165,92,0.14) 0, transparent 28%),
            radial-gradient(circle at 82% 14%, rgba(168,132,58,0.10) 0, transparent 24%),
            radial-gradient(circle at 50% 80%, rgba(255,255,255,0.5) 0, transparent 30%);
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(198,165,92,0.12),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(198,165,92,0.07),transparent_24%),radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.85),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,246,241,0.86)_58%,rgba(248,246,241,0.52)_100%)]" />

        <header className="relative z-10 mx-auto max-w-[1440px] px-6 pt-6 md:px-10 lg:px-12">
          <div className="glass fade-up mx-auto flex max-w-[1200px] items-center justify-between rounded-[28px] border border-[rgba(198,165,92,0.16)] px-5 py-4 shadow-[var(--shadow-nav)] md:px-7">
            <a href="/" className="no-underline">
              <BrandLogo variant="inline" />
            </a>

            <nav className="hidden items-center gap-7 lg:flex lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link text-[15px] font-medium tracking-[-0.02em] text-[#1A1A1A]/78 hover:text-[#1A1A1A] ${item.active ? "active" : ""}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="/login"
                className="subtle-link hidden text-[15px] font-medium text-[#1A1A1A]/78 lg:inline-flex"
              >
                Login
              </a>
              <ButtonLink
                href={MAIN_CTA_LINK}
                className="premium-button rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-5 py-3 text-[15px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_10px_30px_rgba(198,165,92,0.24)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(198,165,92,0.28)]"
              >
                Start Free
              </ButtonLink>
            </div>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-10 md:px-10 lg:px-12 lg:pb-28 lg:pt-12">
          <section className="mx-auto max-w-[1200px]">
            <div className="fade-up glass relative overflow-hidden rounded-[32px] border border-[rgba(198,165,92,0.16)] p-8 shadow-[var(--shadow-card)] md:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,165,92,0.10),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.42))]" />
              <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#A8843A]">AI PROGRAMS</div>
                  <h1 className="mt-5 max-w-[10ch] text-[clamp(2.9rem,5.6vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#1A1A1A]">
                    Three programs. Three different decisions.
                  </h1>
                  <p className="mt-6 max-w-[36rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
                    Choose the program that matches the kind of AI decision you are actually trying to make, then open the detail page for access and delivery.
                  </p>
                </div>

                <div className="grid gap-4 rounded-[26px] border border-[rgba(198,165,92,0.12)] bg-white/70 p-5 md:p-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">PRODUCT TRUTH</div>
                    <p className="mt-3 text-[15px] leading-7 text-[#6B6B6B]">
                      UMATTR frames the programs clearly. Payhip handles previews, checkout, access, and delivery.
                    </p>
                  </div>
                  <ButtonLink
                    href="/programs/foundations"
                    className="premium-button self-start rounded-[16px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.20)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.26)]"
                  >
                    Start with Foundations
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-[1200px]">
            <div className="grid gap-5">
              {programs.map((program, index) => (
                <article
                  key={program.title}
                  className={`premium-card relative overflow-hidden rounded-[30px] border p-6 md:p-7 lg:p-8 ${program.featured ? "border-[rgba(168,132,58,0.24)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(250,247,240,0.92))] shadow-[0_24px_70px_rgba(33,27,18,0.08)]" : "border-[rgba(198,165,92,0.14)] bg-white/88 shadow-[var(--shadow-card)]"}`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.30),rgba(255,255,255,0.14))]" />
                  <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">{program.eyebrow}</div>
                      <h2 className="mt-4 text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A] md:text-[34px]">
                        {program.title}
                      </h2>
                      <p className="mt-4 max-w-[42rem] text-[15px] leading-7 text-[#6B6B6B] md:text-[16px] md:leading-8">
                        {program.description}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-[rgba(198,165,92,0.10)] bg-white/74 p-5 md:p-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8843A]">BEST FOR</div>
                      <p className="mt-3 text-[14px] leading-6 text-[#6B6B6B] md:text-[15px] md:leading-7">
                        {program.bestFor}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <ButtonLink
                          href={program.detailHref}
                          className="premium-button rounded-[15px] border border-[rgba(198,165,92,0.18)] bg-white/90 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.30)] hover:bg-white"
                        >
                          View Program
                        </ButtonLink>
                        <ButtonLink
                          href={program.payhipHref}
                          className="premium-button rounded-[15px] border border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.24)]"
                        >
                          Access on Payhip
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-[1200px] rounded-[28px] border border-[rgba(198,165,92,0.10)] bg-[linear-gradient(180deg,rgba(255,253,249,0.78),rgba(255,255,255,0.68))] p-6 shadow-[0_12px_38px_rgba(33,27,18,0.04)] md:p-7 lg:p-8">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.95fr_2.05fr] lg:items-start lg:gap-8">
              <div className="lg:pt-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">FREE PREVIEWS</div>
                <h2 className="mt-3 max-w-[12ch] text-[clamp(1.7rem,2.3vw,2.2rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#1A1A1A]">
                  Sample before the full program.
                </h2>
                <p className="mt-3 max-w-[26rem] text-[15px] leading-6 text-[#6B6B6B] md:text-[16px] md:leading-7">
                  Three free preview products on Payhip give users a lower-friction way into Foundations.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-1 gap-3.5 xl:grid-cols-3">
                  {previewProducts.map((preview, index) => (
                    <article
                      key={preview.title}
                      className="premium-card relative overflow-hidden rounded-[22px] border border-[rgba(198,165,92,0.12)] bg-white/82 p-4 shadow-[0_10px_28px_rgba(33,27,18,0.04)] md:p-5"
                      style={{ transitionDelay: `${index * 36}ms` }}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.12))]" />
                      <div className="relative flex h-full min-h-[184px] flex-col justify-between md:min-h-[192px]">
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
                            {preview.eyebrow}
                          </div>
                          <h3 className="mt-3 text-[20px] font-semibold leading-[1.04] tracking-[-0.035em] text-[#1A1A1A] md:text-[21px]">
                            {preview.title}
                          </h3>
                          <p className="mt-3 max-w-[18rem] text-[13px] leading-6 text-[#6B6B6B] md:text-[13.5px]">
                            {preview.description}
                          </p>
                        </div>

                        <div className="mt-5">
                          <ButtonLink
                            href={preview.href}
                            className="premium-button rounded-[14px] border border-[rgba(198,165,92,0.22)] bg-white/88 px-4 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] shadow-[0_6px_18px_rgba(33,27,18,0.03)] hover:-translate-y-0.5 hover:border-[rgba(168,132,58,0.30)] hover:bg-white"
                          >
                            Open Preview
                          </ButtonLink>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-8 max-w-[1200px] rounded-[24px] border border-[rgba(168,132,58,0.16)] bg-[linear-gradient(180deg,rgba(255,250,244,0.78),rgba(255,255,255,0.72))] px-5 py-4 shadow-[0_10px_30px_rgba(33,27,18,0.04)] md:px-6 md:py-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">PRODUCT TRUTH</div>
                <p className="mt-2 max-w-[42rem] text-[14px] leading-6 text-[#6B6B6B] md:text-[15px] md:leading-7">
                  UMATTR explains the products clearly. Payhip handles access, checkout, and delivery for AI Programs and free previews.
                </p>
              </div>
              <ButtonLink
                href="/programs/foundations"
                className="premium-button shrink-0 self-start rounded-[14px] border border-[rgba(198,165,92,0.18)] bg-white/90 px-4 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(168,132,58,0.30)] hover:bg-white"
              >
                View Foundations
              </ButtonLink>
            </div>
          </section>
        </main>

        <footer className="border-t border-[rgba(168,132,58,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.96))]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.08fr_1.92fr] lg:gap-14 lg:px-12">
            <div className="border-b border-[rgba(198,165,92,0.10)] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
              <a href="/" className="inline-flex no-underline">
                <BrandLogo variant="stacked" />
              </a>
              <p className="mt-5 max-w-[24rem] text-[15px] leading-7 text-[#6B6B6B] md:text-[16px] md:leading-8">
                Start free, then move into the path that fits the decision.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:pl-2">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#1A1A1A]">NAVIGATION</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1A1A1A] md:text-[16px]">
                  <a href="/" className="subtle-link block">
                    Home
                  </a>
                  <a href="/programs" className="subtle-link block">
                    AI Programs
                  </a>
                  <a href="/career-intelligence" className="subtle-link block">
                    Career Intelligence
                  </a>
                  <a href="/consulting" className="subtle-link block">
                    Consulting
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#1A1A1A]">PROGRAMS</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1A1A1A] md:text-[16px]">
                  <a href="/programs/foundations" className="subtle-link block">
                    UMATTR AI Foundations
                  </a>
                  <a href="/programs/for-work" className="subtle-link block">
                    UMATTR AI for Work
                  </a>
                  <a href="/programs/for-business" className="subtle-link block">
                    UMATTR AI for Business
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#1A1A1A]">ACCOUNT</div>
                <div className="mt-5 space-y-3 text-[15px] text-[#1A1A1A] md:text-[16px]">
                  <a href="/about" className="subtle-link block">
                    About
                  </a>
                  <a href="/login" className="subtle-link block">
                    Login
                  </a>
                  <a href={MAIN_CTA_LINK} className="subtle-link block">
                    Start Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
