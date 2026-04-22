"use client";

import {
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { LocalizedText } from "../_components/locale-provider.jsx";

const terms = [
  {
    term: "AI",
    definition: "A tool for generating, transforming, or organizing information.",
  },
  {
    term: "Prompt",
    definition: "The request or instruction you give the model.",
  },
  {
    term: "Context",
    definition: "The background that helps the tool answer more cleanly.",
  },
  {
    term: "Judgment",
    definition: "The human decision about whether the output is good enough.",
  },
  {
    term: "Workflow",
    definition: "The repeatable sequence where the tool actually adds value.",
  },
  {
    term: "Risk",
    definition: "The chance that a weak answer causes cost, confusion, or exposure.",
  },
  {
    term: "Positioning",
    definition: "How the story or direction is framed for others.",
  },
  {
    term: "Implementation",
    definition: "The part where the idea becomes a real working process.",
  },
];

export default function GlossaryPage() {
  return (
    <MarketingChrome activeHref="/start">
      <section className="mx-auto max-w-[1200px]">
        <SectionLabel>FREE TOOL</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <h1 className="max-w-[10ch] text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              Glossary.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              Short definitions for the words that matter before you buy, commit,
              or choose the next route.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/start"
                className="premium-button button-primary rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Back to Start Free
              </ButtonLink>
              <ButtonLink
                href="/programs"
                className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                View Programs
              </ButtonLink>
            </div>
          </div>

          <Surface compact className="fade-up lg:self-end" featured>
            <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
              Why it matters
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                A cleaner vocabulary makes the decision easier to see.
              </p>
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                The right words keep the product surfaces calm and commercial.
              </p>
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                This page gives you the shorthand before you move forward.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>TERMS</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          The words behind the routes.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {terms.map((term) => (
            <Surface key={term.term} compact>
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                {term.term}
              </div>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{term.definition}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Use the glossary, then move on.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              When the vocabulary is clear, the next route tends to be clearer too.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/start"
              className="premium-button button-secondary rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
            >
              Start Free
            </ButtonLink>
            <ButtonLink
              href="/career-intelligence"
              className="premium-button button-secondary rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
            >
              <LocalizedText
                translationKey="products.careerIntelligence"
                fallback="Career Intelligence"
              />
            </ButtonLink>
            <ButtonLink
              href="/consulting"
              className="premium-button button-primary rounded-[16px] border border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.24)]"
            >
              <LocalizedText translationKey="products.consulting" fallback="Consulting" />
            </ButtonLink>
          </div>
        </Surface>
      </section>
    </MarketingChrome>
  );
}

