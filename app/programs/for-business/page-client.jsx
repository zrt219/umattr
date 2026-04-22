"use client";

import {
  BrandBirdMark,
  ButtonLink,
  MarketingChrome,
  PAYHIP_LINKS,
  PROGRAM_DETAIL_LINKS,
  SectionLabel,
  Surface,
} from "../../_components/marketing-system.jsx";
import { LocalizedText } from "../../_components/locale-provider.jsx";

const purposeCards = [
  {
    title: "Evaluate options",
    description: "Use AI more carefully when the decision has real cost attached.",
  },
  {
    title: "Frame risk",
    description: "Keep the tool inside a clearer decision process, not a guess.",
  },
  {
    title: "Support implementation",
    description: "Move from evaluation to action without losing judgment.",
  },
];

const learnCards = [
  {
    title: "Decision framing",
    description: "Set the question so you can compare options more cleanly.",
  },
  {
    title: "Vendor and tool fit",
    description: "Evaluate the tool on use, risk, and operational consequences.",
  },
  {
    title: "Workflow realities",
    description: "Map how the decision actually touches people and systems.",
  },
  {
    title: "Governance and judgment",
    description: "Keep human judgment visible when the stakes are higher.",
  },
];

const moduleCards = [
  {
    title: "Decision frame",
    description: "Turn vague AI interest into a business question worth answering.",
  },
  {
    title: "Vendor review",
    description: "Compare options with enough structure to avoid shallow hype.",
  },
  {
    title: "Implementation realities",
    description: "See what the choice means for work, systems, and people.",
  },
  {
    title: "Ongoing control",
    description: "Keep the decision under review once the tool is in play.",
  },
];

export default function ForBusinessPage() {
  return (
    <MarketingChrome activeHref="/programs">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <SectionLabel>AI PROGRAM</SectionLabel>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              <LocalizedText
                translationKey="products.aiForBusiness"
                fallback="AI for Business"
                suffix=" for higher-stakes decisions."
              />
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              A more careful route for decisions that touch tools, vendors,
              operations, spend, or risk. Use it when the call has business
              consequences and the judgment has to stay sharp.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={PAYHIP_LINKS.forBusiness}
                className="premium-button button-primary rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Access on Payhip
              </ButtonLink>
              <ButtonLink
                href={PROGRAM_DETAIL_LINKS.forWork}
                className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                Previous: <LocalizedText translationKey="products.aiForWork" fallback="AI for Work" />
              </ButtonLink>
              <ButtonLink
                href="/start"
                className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                Start Free
              </ButtonLink>
            </div>

            <p className="mt-8 max-w-[34rem] text-[14px] leading-7 text-[#6B6B6B]">
              UMATTR frames the program. Payhip handles preview access, checkout,
              and delivery.
            </p>
          </div>

          <Surface
            className="fade-up min-h-[24rem] border-[rgba(184,150,46,0.28)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,246,236,0.96))] shadow-[0_30px_88px_rgba(33,27,18,0.1)] lg:self-end"
            featured
          >
            <BrandBirdMark />
            <div className="relative text-[12px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
              Payhip delivery
            </div>
            <div className="relative mt-6 space-y-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  For
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Teams or leaders making decisions where weak AI judgment costs
                  more.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  You leave with
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  A cleaner business lens for evaluating tools, workflows, and risk.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Best next step
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Buy through Payhip when the decision is bigger than productivity
                  alone.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHAT THIS PROGRAM IS FOR</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Use AI with more judgment when the stakes rise.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {purposeCards.map((card) => (
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
        <SectionLabel>WHAT YOU WILL LEARN</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          A clearer path through business-level AI calls.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learnCards.map((card) => (
            <Surface key={card.title} compact>
              <h3 className="text-[20px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{card.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>OUTCOME / FIT</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Surface featured>
            <h2 className="text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A]">
              Best fit
            </h2>
            <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#6B6B6B]">
              <p>The decision affects operations, spend, or exposure.</p>
              <p>You need more than a productivity answer.</p>
              <p>You want a clearer route before you commit resources.</p>
            </div>
          </Surface>

          <Surface>
            <h2 className="text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A]">
              Outcome
            </h2>
            <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#6B6B6B]">
              <p>Sharper evaluation of tools, vendors, and implementation impact.</p>
              <p>A more disciplined way to compare options and risk.</p>
              <p>Cleaner handoff into the final access route on Payhip.</p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>MODULE OVERVIEW</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Modules as summaries only.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {moduleCards.map((card) => (
            <Surface key={card.title} compact>
              <h3 className="text-[20px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{card.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>ACCESS</SectionLabel>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Access <LocalizedText translationKey="products.aiForBusiness" fallback="AI for Business" /> on Payhip.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              Preview access, checkout, and delivery are handled through Payhip.
            </p>
          </div>
          <ButtonLink
            href={PAYHIP_LINKS.forBusiness}
            className="premium-button button-primary shrink-0 rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
          >
            Access on Payhip
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}

