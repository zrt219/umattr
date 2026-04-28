import {
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { LocalizedText } from "../_components/locale-provider.jsx";

export const metadata = {
  title: "About UMATTR",
  description:
    "UMATTR helps people learn, position, and make clearer decisions in an AI-shaped world.",
};

const points = [
  {
    title: "Why it exists",
    description:
      "AI is changing the economy faster than most people can interpret. UMATTR exists to make that shift easier to understand and easier to respond to.",
  },
  {
    title: "What it does",
    description:
      "UMATTR helps people build practical AI skills, understand stronger career routes, and make more confident decisions about where to go next.",
  },
  {
    title: "How it connects",
    description: (
      <>
        Programs, <LocalizedText translationKey="products.careerIntelligence" fallback="Career Intelligence" />, and{" "}
        <LocalizedText translationKey="products.consulting" fallback="Consulting" /> work together as one route system so people can start free, learn clearly, and move into the path that fits.
      </>
    ),
  },
];

const futurePoints = [
  {
    title: "Practical AI learning",
    description:
      "Education that makes the tools understandable, usable, and connected to real decisions.",
  },
  {
    title: "Career positioning",
    description:
      "Direction for people who need a clearer next move, stronger story, and better signal in a changing market.",
  },
  {
    title: "Premium advisory support",
    description: (
      <>
        <LocalizedText translationKey="products.consulting" fallback="Consulting" /> for higher-stakes calls involving systems, operations, money, vendors, or risk.
      </>
    ),
  },
  {
    title: "Route-based decisions",
    description: (
      <>
        A simple path from free orientation into the program, <LocalizedText translationKey="products.careerIntelligence" fallback="Career Intelligence" />, or consulting route that fits the goal.
      </>
    ),
  },
];

const behindSignals = [
  {
    title: "Built from lived attention",
    description:
      "The work is grounded in close observation of what people are actually struggling to interpret and act on.",
  },
  {
    title: "Designed for real transitions",
    description:
      "UMATTR is for people in motion: learning, repositioning, rebuilding, or trying to move with more intention.",
  },
  {
    title: "Made to help people move with more confidence",
    description:
      "The goal is not more noise. It is stronger judgment, clearer choices, and steadier momentum.",
  },
];

const routeOptions = [
  {
    title: "I'm New to AI",
    description: "Foundations for clear AI judgment",
    href: "/programs/foundations",
    icon: "mind",
  },
  {
    title: "Practical Training",
    description: "AI for Work with sharper daily output",
    href: "/programs/for-work",
    icon: "work",
  },
  {
    title: "Career Intelligence",
    description: "Direction and positioning",
    href: "/career-intelligence",
    icon: "compass",
  },
  {
    title: "For My Team",
    description: "AI for Business for higher-stakes decisions",
    href: "/programs/for-business",
    icon: "team",
  },
];

function AboutSectionHeader({
  label,
  title,
  description,
  titleClassName = "",
  className = "",
}) {
  return (
    <div className={className}>
      <SectionLabel className="max-w-full text-[10px] tracking-[0.22em] sm:text-[11px] sm:tracking-[0.32em]">
        {label}
      </SectionLabel>
      <h2
        className={`mt-4 max-w-[14ch] text-[clamp(2rem,6.6vw,3rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1A1A1A] sm:leading-[0.96] sm:tracking-[-0.05em] ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[34rem] text-[16px] leading-8 text-[#6B6B6B] md:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function RouteIcon({ type }) {
  const common = {
    className: "h-7 w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "work") {
    return (
      <svg {...common}>
        <path d="M9 7V5.8C9 4.8 9.8 4 10.8 4h2.4C14.2 4 15 4.8 15 5.8V7" />
        <path d="M4.8 7h14.4c.9 0 1.6.7 1.6 1.6v8.8c0 .9-.7 1.6-1.6 1.6H4.8c-.9 0-1.6-.7-1.6-1.6V8.6C3.2 7.7 3.9 7 4.8 7Z" />
        <path d="M3.2 12h17.6" />
        <path d="M10.2 12v1.3h3.6V12" />
      </svg>
    );
  }

  if (type === "compass") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.2" />
        <path d="m15.2 8.8-2.1 5.1-4.3 1.3 2.1-5.1 4.3-1.3Z" />
      </svg>
    );
  }

  if (type === "team") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="2.3" />
        <path d="M7.3 18.2c.6-2.2 2.2-3.6 4.7-3.6s4.1 1.4 4.7 3.6" />
        <circle cx="5.7" cy="11" r="1.8" />
        <path d="M2.8 18c.4-1.8 1.5-2.9 3.2-3.1" />
        <circle cx="18.3" cy="11" r="1.8" />
        <path d="M21.2 18c-.4-1.8-1.5-2.9-3.2-3.1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 20.5c0-3 1.4-4.3 3.1-5.8 1.4-1.3 2.9-2.7 2.9-5.3C18 5.8 15.5 3 12 3S6 5.8 6 9.4c0 2.6 1.5 4 2.9 5.3C10.6 16.2 12 17.5 12 20.5Z" />
      <path d="M9.3 9.6c.4-1.2 1.3-2 2.7-2 1.5 0 2.5.8 2.5 2.1 0 1.1-.7 1.7-1.7 2.1-.8.3-1.2.8-1.2 1.7" />
      <path d="M11.6 16.4h.8" />
    </svg>
  );
}

function RouteSelectorSection() {
  return (
    <section className="mx-auto mt-16 max-w-[1200px]">
      <Surface
        featured
        className="border-[rgba(198,165,92,0.34)] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(250,247,240,0.9))] p-6 shadow-[0_28px_78px_rgba(86,70,34,0.10)] md:p-9 lg:p-12"
      >
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <SectionLabel className="tracking-[0.24em]">NEXT STEP</SectionLabel>
            <div className="mt-5 h-px w-16 bg-[linear-gradient(90deg,#A8843A,rgba(168,132,58,0))]" />
            <h2 className="mt-10 max-w-[11ch] text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1A1A1A]">
              Choose the route that fits the decision.
            </h2>
            <p className="mt-7 max-w-[30rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              Start with the path that matches what you need next.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4">
              {routeOptions.map((option) => (
                <ButtonLink
                  key={option.title}
                  href={option.href}
                  className="group flex min-h-[104px] items-center gap-5 rounded-[24px] border border-[rgba(198,165,92,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,247,240,0.9))] px-5 py-4 text-[#1A1A1A] no-underline shadow-[0_14px_34px_rgba(86,70,34,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.34)] hover:shadow-[0_18px_42px_rgba(86,70,34,0.12)] md:px-6"
                >
                  <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-[#B98D1C]/70 text-[#B98D1C] transition-all duration-200 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/8">
                    <RouteIcon type={option.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[clamp(1.45rem,3vw,2rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                      {option.title}
                    </span>
                    <span className="mt-1 block text-[15px] leading-6 text-[#6B6B6B] md:text-[16px]">
                      {option.description}
                    </span>
                  </span>
                  <span className="ml-auto text-[38px] font-light leading-none text-[#B98D1C] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </ButtonLink>
              ))}
            </div>

            <ButtonLink
              href="/consulting"
              className="group mt-7 flex items-center gap-4 border-t border-[rgba(198,165,92,0.16)] px-2 pt-6 text-[#1A1A1A] no-underline transition-colors duration-200 hover:text-[#A8843A]"
            >
              <span className="flex h-10 w-10 items-center justify-center text-[#B98D1C]">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 10.2 12 5l8 5.2" />
                  <path d="M5.5 10.5h13" />
                  <path d="M7 11v6" />
                  <path d="M12 11v6" />
                  <path d="M17 11v6" />
                  <path d="M5 18.5h14" />
                </svg>
              </span>
              <span className="text-[18px] font-medium tracking-[-0.02em]">
                Explore Consulting
              </span>
              <span className="ml-auto text-[32px] font-light leading-none text-[#B98D1C] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </ButtonLink>
          </div>
        </div>
      </Surface>
    </section>
  );
}

function OurJourneySection() {
  return (
    <section className="uj-journey mx-auto mt-16 max-w-[1200px]" aria-labelledby="umattr-journey-title">
      <style>{`
        .uj-journey {
          --uj-bg: #F8F6F1;
          --uj-card: rgba(255, 255, 255, 0.76);
          --uj-text: #1d1d1f;
          --uj-muted: #6f6a61;
          --uj-gold: #d8ad2f;
          --uj-gold-dark: #aa8120;
          --uj-border: rgba(216, 173, 47, 0.28);
          --uj-border-strong: rgba(216, 173, 47, 0.42);
          --uj-shadow: 0 34px 90px rgba(86, 70, 34, 0.13), 0 12px 34px rgba(86, 70, 34, 0.08);
          width: 100%;
          padding: clamp(42px, 6vw, 72px) 18px clamp(48px, 6vw, 78px);
          background: var(--uj-bg);
          color: var(--uj-text);
        }

        .uj-wrap {
          max-width: 1180px;
          margin: 0 auto;
        }

        .uj-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--uj-border);
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(255, 252, 246, 0.82)),
            var(--uj-card);
          box-shadow: var(--uj-shadow);
          padding: clamp(28px, 4vw, 52px);
          transform: translateY(-10px);
        }

        .uj-card::after {
          content: "";
          position: absolute;
          right: clamp(22px, 5vw, 64px);
          top: clamp(28px, 5vw, 60px);
          width: clamp(110px, 16vw, 190px);
          height: clamp(80px, 12vw, 140px);
          opacity: 0.15;
          background:
            url("data:image/svg+xml,%3Csvg width='220' height='150' viewBox='0 0 220 150' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 100C60 82 88 84 123 94C155 103 182 92 203 70' stroke='%23D8AD2F' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M122 80C138 48 164 27 199 20C177 40 166 61 169 86C151 75 137 74 122 80Z' stroke='%23D8AD2F' stroke-width='2' fill='none'/%3E%3Cpath d='M147 52C132 43 112 41 92 48C111 53 127 62 139 76' stroke='%23D8AD2F' stroke-width='2' fill='none'/%3E%3Cpath d='M162 30C155 19 143 11 128 7C136 24 143 38 153 50' stroke='%23D8AD2F' stroke-width='2' fill='none'/%3E%3C/svg%3E")
            center / contain no-repeat;
          pointer-events: none;
        }

        .uj-eyebrow {
          margin: 0 0 18px;
          color: var(--uj-gold-dark);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .uj-heading {
          max-width: 820px;
          margin: 0;
          font-size: clamp(34px, 5vw, 64px);
          line-height: 0.96;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .uj-intro {
          max-width: 700px;
          margin: 22px 0 0;
          color: var(--uj-muted);
          font-size: clamp(16px, 1.5vw, 20px);
          line-height: 1.7;
        }

        .uj-timeline {
          position: relative;
          display: grid;
          gap: 18px;
          margin-top: clamp(42px, 6vw, 72px);
        }

        .uj-timeline::before {
          content: "";
          position: absolute;
          top: 34px;
          bottom: 34px;
          left: 25px;
          width: 1px;
          background: linear-gradient(180deg, rgba(216, 173, 47, 0.12), rgba(216, 173, 47, 0.52), rgba(216, 173, 47, 0.12));
        }

        .uj-item {
          position: relative;
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 22px;
          align-items: stretch;
          min-width: 0;
        }

        .uj-node {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          padding-top: 27px;
        }

        .uj-dot {
          position: relative;
          display: block;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(216, 173, 47, 0.46);
          border-radius: 999px;
          background: radial-gradient(circle at 35% 30%, #fff0ad 0%, #e0bc3a 42%, var(--uj-gold) 74%);
          box-shadow:
            0 0 0 7px rgba(255, 250, 240, 0.86),
            0 0 0 11px rgba(216, 173, 47, 0.10),
            0 0 18px rgba(216, 173, 47, 0.28);
        }

        .uj-dot::before {
          content: "";
          position: absolute;
          inset: -17px;
          border: 1px solid rgba(216, 173, 47, 0.20);
          border-radius: 999px;
          pointer-events: none;
        }

        .uj-content {
          position: relative;
          min-width: 0;
          padding: clamp(22px, 3vw, 30px);
          border: 1px solid var(--uj-border-strong);
          border-radius: 26px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 250, 239, 0.48));
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.62),
            0 18px 44px rgba(86, 70, 34, 0.055);
        }

        .uj-content::before,
        .uj-content::after {
          content: "";
          position: absolute;
          left: 22px;
          right: 22px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(216, 173, 47, 0.46), transparent);
          pointer-events: none;
        }

        .uj-content::before {
          top: -1px;
        }

        .uj-content::after {
          bottom: -1px;
        }

        .uj-year {
          display: inline-flex;
          align-items: center;
          margin: 0 0 18px;
          color: var(--uj-gold-dark);
          font-size: clamp(18px, 1.7vw, 24px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .uj-year-text {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 8px 18px;
          border: 1px solid rgba(216, 173, 47, 0.34);
          border-radius: 999px;
          background: rgba(255, 251, 242, 0.76);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.72),
            0 0 16px rgba(216, 173, 47, 0.08);
        }

        .uj-title {
          margin: 0 0 10px;
          color: var(--uj-text);
          font-size: clamp(19px, 1.7vw, 26px);
          line-height: 1.12;
          font-weight: 800;
          letter-spacing: -0.035em;
        }

        .uj-copy {
          max-width: 820px;
          margin: 0;
          color: var(--uj-muted);
          font-size: clamp(15px, 1.35vw, 18px);
          line-height: 1.7;
        }

        .uj-footer {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: clamp(36px, 5vw, 58px);
          padding-top: 22px;
          border-top: 1px solid rgba(216, 173, 47, 0.22);
        }

        .uj-footer-line {
          margin: 0;
          color: var(--uj-gold-dark);
          font-size: 13px;
          line-height: 1.5;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        @media (max-width: 760px) {
          .uj-timeline::before {
            left: 21px;
          }

          .uj-item {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 16px;
          }

          .uj-node {
            padding-top: 24px;
          }

          .uj-dot {
            width: 26px;
            height: 26px;
            box-shadow:
              0 0 0 6px rgba(255, 250, 240, 0.86),
              0 0 0 10px rgba(216, 173, 47, 0.09),
              0 0 14px rgba(216, 173, 47, 0.22);
          }

          .uj-dot::before {
            inset: -14px;
          }

          .uj-content {
            border-radius: 22px;
            padding: 22px;
          }
        }

        @media (max-width: 560px) {
          .uj-journey {
            padding-left: 16px;
            padding-right: 16px;
          }

          .uj-card {
            border-radius: 22px;
            padding: 28px 18px;
          }

          .uj-heading {
            font-size: clamp(32px, 11vw, 46px);
            line-height: 0.98;
          }

          .uj-intro {
            font-size: 16px;
            line-height: 1.65;
          }

          .uj-timeline {
            gap: 16px;
          }

          .uj-item {
            grid-template-columns: 38px minmax(0, 1fr);
            gap: 12px;
          }

          .uj-timeline::before {
            left: 18px;
          }

          .uj-dot {
            width: 23px;
            height: 23px;
          }

          .uj-node {
            padding-top: 24px;
          }

          .uj-content {
            padding: 20px 18px;
            border-radius: 20px;
          }

          .uj-year-text {
            min-height: 38px;
            padding: 7px 15px;
          }

          .uj-copy {
            font-size: 14px;
          }

          .uj-footer-line {
            font-size: 11px;
            letter-spacing: 0.14em;
          }
        }
      `}</style>

      <div className="uj-wrap">
        <div className="uj-card">
          <p className="uj-eyebrow">Our Journey</p>

          <h2 className="uj-heading" id="umattr-journey-title">
            A journey built on clarity, since 1997.
          </h2>

          <p className="uj-intro">
            UMATTR was built from years of experience in sport, mentorship,
            motivational speaking, and youth development. What began as a
            passion for helping young people build confidence has grown into a
            wellness-focused movement centered on resilience, leadership, mental
            health, and personal growth.
          </p>

          <div className="uj-timeline" aria-label="UMATTR journey timeline">
            {[
              {
                year: "1997-2007",
                title: "The Foundation",
                copy:
                  "Our roots began in youth sport, coaching, and high-performance development, where discipline, mentorship, and confidence-building became the foundation of our work.",
              },
              {
                year: "2010-2017",
                title: "The Message Expands",
                copy:
                  "Through keynote talks, workshops, schools, conferences, and community events, the UMATTR message began reaching broader audiences through storytelling, teamwork, and resilience-based learning.",
              },
              {
                year: "2018-2021",
                title: "A Youth Wellness Movement",
                copy:
                  "UMATTR evolved into a dedicated youth empowerment platform, delivering motivational workshops and interactive sessions focused on mental health, leadership, and personal growth.",
              },
              {
                year: "2022-2024",
                title: "Sport, Mindset & Community",
                copy:
                  "We continued bridging athletics, wellness, and family support by creating spaces where athletes, parents, and youth could learn practical tools for confidence, goal-setting, and emotional resilience.",
              },
              {
                year: "Today & Beyond",
                title: "Building What Comes Next",
                copy:
                  "UMATTR is growing into a wellness and sports development brand committed to helping youth, families, teams, and communities move with purpose, lead with confidence, and understand that they matter.",
              },
            ].map((item) => (
              <article className="uj-item" key={item.year}>
                <span className="uj-node" aria-hidden="true">
                  <span className="uj-dot" />
                </span>
                <div className="uj-content">
                  <h3 className="uj-year">
                    <span className="uj-year-text">{item.year}</span>
                  </h3>
                  <h4 className="uj-title">{item.title}</h4>
                  <p className="uj-copy">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="uj-footer">
            <p className="uj-footer-line">
              Built over decades. Refined for youth, families, teams, and the
              next chapter of wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <MarketingChrome activeHref="/">
      <section className="mx-auto max-w-[1200px]">
        <SectionLabel>ABOUT</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <h1 className="max-w-[11ch] text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              UMATTR helps people move clearly in an AI-shaped world.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              AI is changing how people work, build, learn, and compete. UMATTR
              exists to make that shift easier to understand and easier to act
              on, moving people from uncertainty into the route that fits their
              goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/start"
                className="premium-button button-primary min-h-[56px] rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-0 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)] sm:min-w-[11.75rem]"
              >
                Start Free
              </ButtonLink>
              <ButtonLink
                href="/programs"
                className="premium-button button-secondary min-h-[56px] rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-0 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white sm:min-w-[11.75rem]"
              >
                View Programs
              </ButtonLink>
            </div>
          </div>

          <Surface
            className="fade-up min-h-[25rem] border-[rgba(184,150,46,0.28)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,246,236,0.96))] shadow-[0_30px_88px_rgba(33,27,18,0.1)] lg:self-end"
            featured
          >
            <img
              src="/brand/umattr-mark.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-5 w-28 opacity-20 sm:w-36 lg:right-7 lg:top-7 lg:w-40"
            />
            <div className="relative">
              <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
                BRAND SHAPE
              </div>
              <h2 className="mt-8 max-w-[12ch] text-[clamp(2rem,3vw,3.15rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#1A1A1A]">
                Clarity first. Then the right route.
              </h2>
              <p className="mt-5 max-w-[31rem] text-[16px] leading-8 text-[#5F5F5F] md:text-[17px]">
                UMATTR turns AI uncertainty into a calmer path: start free,
                learn the tools, sharpen positioning, or request human-guided
                support when the decision carries more weight.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-start">
                <ButtonLink
                  href="/start"
                  className="premium-button button-primary inline-flex w-full items-center justify-center whitespace-nowrap rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-7 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)] sm:w-fit sm:min-w-[11rem]"
                >
                  Start Free
                </ButtonLink>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8A7A58]">
                  Programs, <LocalizedText translationKey="products.careerIntelligence" fallback="Career Intelligence" />, or consulting when ready.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <AboutSectionHeader
          label="WHAT MATTERS"
          title="Three things matter now."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {points.map((point) => (
            <Surface key={point.title} compact>
              <h3 className="text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1A1A1A]">
                {point.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{point.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <AboutSectionHeader
              label="WHO IS BEHIND UMATTR"
              title="UMATTR is being built by someone paying close attention."
              titleClassName="max-w-[15ch] text-[clamp(2rem,6.2vw,3.2rem)]"
            />
            <div className="mt-5 max-w-[39rem] space-y-5 text-[16px] leading-8 text-[#6B6B6B] md:text-[17px]">
              <p>
                Behind UMATTR is a person watching how AI is changing work,
                confidence, and opportunity for ordinary ambitious people who do
                not have time to waste on noise.
              </p>
              <p>
                The project comes from a real belief that people need more than
                information right now. They need clarity, better judgment, and
                a calmer way to choose what matters next.
              </p>
              <p>
                UMATTR is being shaped as a practical route system with care,
                restraint, and respect for people trying to adapt well in
                public, in private, and under pressure.
              </p>
            </div>
            <p className="mt-6 max-w-[34rem] text-[13px] font-semibold uppercase tracking-[0.16em] text-[#8A7A58]">
              That is why the work stays focused on direction, not just content.
            </p>
          </div>

          <Surface
            featured
            className="border-[rgba(184,150,46,0.28)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,246,236,0.96))] shadow-[0_30px_88px_rgba(33,27,18,0.1)]"
          >
            <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
              What shapes the work
            </div>
            <div className="mt-6 space-y-5">
              {behindSignals.map((signal, index) => (
                <div
                  key={signal.title}
                  className={index > 0 ? "border-t border-[rgba(198,165,92,0.12)] pt-5" : ""}
                >
                  <h3 className="text-[21px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A]">
                    {signal.title}
                  </h3>
                  <p className="mt-3 max-w-[31rem] text-[15px] leading-7 text-[#5F5F5F]">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <AboutSectionHeader
              label="THE FUTURE"
              title="AI is not a trend. It is a shift in how opportunity works."
              titleClassName="max-w-[13ch]"
              description="The future will reward people who can learn quickly, think clearly, and apply new tools with confidence. UMATTR is built for that future, helping individuals and businesses understand what is changing, what matters, and how to move with more direction."
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {futurePoints.map((point) => (
              <Surface key={point.title} className="p-5 md:p-6">
                <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#A8843A]">
                  {point.title}
                </div>
                <p className="mt-4 text-[15px] leading-7 text-[#5F5F5F]">
                  {point.description}
                </p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      <OurJourneySection />

      <RouteSelectorSection />
    </MarketingChrome>
  );
}

