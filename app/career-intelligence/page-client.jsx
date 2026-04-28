"use client";

import {
  BrandBirdMark,
  ButtonLink,
  MarketingChrome,
  PAYHIP_LINKS,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { LocalizedText } from "../_components/locale-provider.jsx";

const fitCards = [
  {
    title: "Role clarity",
    description:
      "Use this when the next role, lane, or market direction needs to become more legible.",
  },
  {
    title: "Pivot decisions",
    description:
      "Use this when you are comparing paths and need a calmer way to choose the next move.",
  },
  {
    title: "Positioning",
    description:
      "Use this when the story, signal, or framing around your path needs to get stronger.",
  },
];

const includedCards = [
  {
    title: "Direction scan",
    description:
      "A cleaner read on the decision, the current position, and the route forward.",
  },
  {
    title: "Positioning prompts",
    description:
      "Structured prompts that tighten the story and make the path more legible.",
  },
  {
    title: "Next-step route",
    description:
      "A grounded recommendation for what to do next without turning it into guesswork.",
  },
];

const outcomeRows = [
  {
    title: "Best fit",
    description:
      "People who need a clearer next move, a stronger narrative, and a more grounded route forward.",
  },
  {
    title: "What it changes",
    description:
      "It turns loose uncertainty into a clearer path, stronger positioning, and a more usable decision.",
  },
];

const helpCenterHighlights = [
  "Understand how Career Intelligence fits your next move.",
  "Browse help without leaving the UMATTR domain.",
  "Use the live assistant if you want a faster answer.",
];

export default function CareerIntelligencePageClient() {
  return (
    <MarketingChrome activeHref="/career-intelligence">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <SectionLabel>CAREER INTELLIGENCE</SectionLabel>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              <LocalizedText
                translationKey="products.careerIntelligence"
                fallback="Career Intelligence"
                suffix=" for direction and positioning."
              />
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              A single premium package for people making a next-move decision in
              an AI-shaped market: role clarity, pivot direction, positioning,
              and a more grounded route forward.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={PAYHIP_LINKS.careerFamily}
                className="premium-button button-primary button-standout rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Access{" "}
                <LocalizedText
                  translationKey="products.careerIntelligence"
                  fallback="Career Intelligence"
                />
              </ButtonLink>
              <ButtonLink
                href="/start"
                className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                Start Free
              </ButtonLink>
            </div>
          </div>

          <Surface
            className="fade-up min-h-[24rem] border-[rgba(184,150,46,0.28)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,246,236,0.96))] shadow-[0_30px_88px_rgba(33,27,18,0.1)] lg:self-end"
            featured
          >
            <BrandBirdMark />
            <div className="relative text-[12px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
              Distinction
            </div>
            <div className="relative mt-6 space-y-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Not AI training
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  <LocalizedText translationKey="products.careerIntelligence" fallback="Career Intelligence" /> is not about learning the tool. It is about getting clearer on direction and positioning.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  What it is for
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Choosing the next move, tightening the story, and making the path
                  more legible.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Access route
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Access the package on Payhip when direction and positioning are
                  the real decision.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHAT IT IS FOR</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          One package for route clarity.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {fitCards.map((card) => (
            <Surface key={card.title} compact>
              <h3 className="text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{card.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHAT'S INCLUDED</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          A clearer read, a stronger story, and a next-step route.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {includedCards.map((card) => (
            <Surface key={card.title} compact>
              <h3 className="text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{card.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>FIT / OUTCOME</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {outcomeRows.map((row, index) => (
            <Surface key={row.title} featured={index === 0}>
              <h2 className="text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A]">
                {row.title}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#6B6B6B]">{row.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface
          featured
          className="overflow-hidden border-[rgba(168,132,58,0.28)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,246,236,0.96))] shadow-[0_30px_88px_rgba(33,27,18,0.1)]"
        >
          <BrandBirdMark />
          <div className="relative mx-auto max-w-[760px] text-center">
            <SectionLabel className="justify-center">HELP CENTER</SectionLabel>
            <h2 className="mt-4 text-[clamp(2rem,3.2vw,3.35rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Explore the Help Center without leaving UMATTR.
            </h2>
            <p className="mx-auto mt-5 max-w-[40rem] text-[15px] leading-8 text-[#6B6B6B] md:text-[16px]">
              Get clearer answers on fit, access, and how Career Intelligence is
              meant to be used. The full help experience stays on the UMATTR
              domain, and the live assistant remains available in the bottom
              right corner.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <ButtonLink
                href="/help"
                className="premium-button button-primary button-standout rounded-[20px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-8 py-5 text-[15px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Ask the assistant
              </ButtonLink>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 text-left md:grid-cols-3">
              {helpCenterHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-[rgba(198,165,92,0.14)] bg-white/76 px-5 py-5 shadow-[0_16px_40px_rgba(33,27,18,0.05)]"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
                    Support
                  </div>
                  <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Surface>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>ACCESS</SectionLabel>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Access{" "}
              <LocalizedText
                translationKey="products.careerIntelligence"
                fallback="Career Intelligence"
              />{" "}
              on Payhip.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              This package is the premium route for clearer direction, stronger
              positioning, and a more grounded next move.
            </p>
          </div>
          <ButtonLink
            href={PAYHIP_LINKS.careerFamily}
            className="premium-button button-primary button-standout shrink-0 rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
          >
            Access{" "}
            <LocalizedText
              translationKey="products.careerIntelligence"
              fallback="Career Intelligence"
            />
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}
