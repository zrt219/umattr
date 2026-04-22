"use client";

import {
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { LocalizedText } from "../_components/locale-provider.jsx";

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
                className="premium-button button-primary rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Start Free
              </ButtonLink>
              <ButtonLink
                href="/programs"
                className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
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
        <SectionLabel>WHAT MATTERS</SectionLabel>
        <h2 className="mt-4 max-w-[13ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Three things matter now.
        </h2>
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionLabel>THE FUTURE</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              AI is not a trend. It is a shift in how opportunity works.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[16px] leading-8 text-[#6B6B6B] md:text-[17px]">
              The future will reward people who can learn quickly, think clearly,
              and apply new tools with confidence. UMATTR is built for that
              future, helping individuals and businesses understand what is
              changing, what matters, and how to move with more direction.
            </p>
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

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-8 text-left md:flex-row md:items-start md:justify-between">
          <div className="max-w-[40rem]">
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className="mt-4 max-w-[13ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Start clear, then choose the route.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              UMATTR is built to help people respond to the AI era with more
              clarity, stronger positioning, and practical next steps.
            </p>
          </div>
          <ButtonLink
            href="/start"
            className="premium-button button-primary inline-flex w-full items-center justify-center whitespace-nowrap rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-8 py-5 text-[15px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)] md:w-auto md:min-w-[13rem]"
          >
            Start Free
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}

