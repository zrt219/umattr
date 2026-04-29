"use client";

import { useMemo, useState } from "react";
import {
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { LocalizedText } from "../_components/locale-provider.jsx";

const terms = [
  {
    category: "AI basics",
    term: "AI",
    definition:
      "A tool for generating, transforming, or organizing information from patterns in data.",
  },
  {
    category: "AI basics",
    term: "Model",
    definition:
      "The system behind the tool that predicts, generates, or classifies output from input.",
  },
  {
    category: "AI basics",
    term: "Prompt",
    definition: "The request, instruction, or question you give the model.",
  },
  {
    category: "AI basics",
    term: "Context",
    definition:
      "The background, constraints, examples, and goal that help the model answer more cleanly.",
  },
  {
    category: "AI basics",
    term: "Token",
    definition:
      "A small piece of text the model reads or produces while processing a request.",
  },
  {
    category: "Judgment",
    term: "Hallucination",
    definition:
      "A confident answer that sounds plausible but is unsupported, wrong, or invented.",
  },
  {
    category: "Judgment",
    term: "Verification",
    definition:
      "The habit of checking important output against sources, evidence, or real-world constraints.",
  },
  {
    category: "Judgment",
    term: "Human-in-the-loop",
    definition:
      "A workflow where a person reviews, guides, or approves the AI-assisted output.",
  },
  {
    category: "Judgment",
    term: "Guardrail",
    definition:
      "A rule, boundary, or review step that keeps the AI use safer and more consistent.",
  },
  {
    category: "Judgment",
    term: "Bias",
    definition:
      "A pattern in data or output that can unfairly shape what the model suggests or ignores.",
  },
  {
    category: "Workflow",
    term: "Workflow",
    definition:
      "The repeatable sequence where the tool actually adds value to real work.",
  },
  {
    category: "Workflow",
    term: "Automation",
    definition:
      "A repeated task handled by software, usually after the steps and rules are clear.",
  },
  {
    category: "Workflow",
    term: "Agent",
    definition:
      "An AI-assisted system that can take steps toward a goal, often using tools or memory.",
  },
  {
    category: "Workflow",
    term: "Retrieval",
    definition:
      "Pulling relevant information from trusted sources so the model has better grounding.",
  },
  {
    category: "Workflow",
    term: "Source of truth",
    definition:
      "The canonical place a team trusts when a fact, link, rule, or product detail matters.",
  },
  {
    category: "Decision language",
    term: "Judgment",
    definition:
      "The human decision about whether the output is accurate, useful, and good enough to use.",
  },
  {
    category: "Decision language",
    term: "Risk",
    definition:
      "The chance that a weak answer causes cost, confusion, exposure, or poor positioning.",
  },
  {
    category: "Decision language",
    term: "Use case",
    definition:
      "A specific job the AI is meant to help with, tied to a real task or decision.",
  },
  {
    category: "Decision language",
    term: "Positioning",
    definition:
      "How the story, value, or direction is framed so other people understand it quickly.",
  },
  {
    category: "Decision language",
    term: "Implementation",
    definition:
      "The part where the idea becomes a real process, page, workflow, or operating habit.",
  },
  {
    category: "Career intelligence",
    term: "Career signal",
    definition:
      "Evidence that clarifies direction, fit, readiness, credibility, or next-step priority.",
  },
  {
    category: "Career intelligence",
    term: "Narrative",
    definition:
      "The career story that connects your experience, direction, and value into one clear frame.",
  },
  {
    category: "Career intelligence",
    term: "Referral",
    definition:
      "A warm introduction or recommendation that can create a stronger path into opportunity.",
  },
  {
    category: "Career intelligence",
    term: "Portfolio proof",
    definition:
      "Visible work that shows capability more clearly than a claim on a resume.",
  },
];

function matchesTerm(term, query) {
  const haystack = `${term.term} ${term.category} ${term.definition}`.toLowerCase();
  return haystack.includes(query);
}

export default function GlossaryClient() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredTerms = useMemo(() => {
    if (!normalizedQuery) {
      return terms;
    }

    return terms.filter((term) => matchesTerm(term, normalizedQuery));
  }, [normalizedQuery]);

  const categoryCount = new Set(terms.map((term) => term.category)).size;

  return (
    <MarketingChrome activeHref="/start">
      <section className="mx-auto max-w-[1200px]">
        <SectionLabel>FREE TOOL</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <h1 className="max-w-[10ch] text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1F1F1F]">
              Glossary.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#5A5A5A] md:text-[18px]">
              Search the words that matter before you buy, commit, or choose the
              next route.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/start"
                className="premium-button button-primary min-h-[56px] rounded-[18px] border border-[rgba(184,150,46,0.38)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-6 py-0 text-[15px] font-semibold tracking-[-0.02em] text-[#1F1F1F] shadow-[0_14px_34px_rgba(212,175,55,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(212,175,55,0.28)]"
              >
                Back to Start Free
              </ButtonLink>
              <ButtonLink
                href="/programs"
                className="premium-button button-secondary min-h-[56px] rounded-[18px] border border-[rgba(212,175,55,0.18)] bg-white/75 px-6 py-0 text-[15px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
              >
                View Programs
              </ButtonLink>
            </div>
          </div>

          <Surface compact className="fade-up lg:self-end" featured>
            <div className="text-[12px] font-semibold uppercase tracking-[0.20em] text-[#B8962E]">
              Searchable reference
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] leading-7 text-[#5A5A5A]">
                {terms.length} definitions across {categoryCount} practical categories.
              </p>
              <p className="text-[15px] leading-7 text-[#5A5A5A]">
                Built for AI programs, career decisions, and cleaner judgment.
              </p>
              <p className="text-[15px] leading-7 text-[#5A5A5A]">
                Use it as a calm source of language before choosing the next route.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>TERMS</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1F1F1F]">
              The words behind the routes.
            </h2>
          </div>
          <label className="block w-full max-w-[32rem]">
            <span className="sr-only">Search glossary terms</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search AI, judgment, workflow, career..."
              className="h-14 w-full rounded-[18px] border border-[rgba(212,175,55,0.22)] bg-white/88 px-5 text-[15px] text-[#1F1F1F] shadow-[0_14px_34px_rgba(33,27,18,0.04)] outline-none transition focus:border-[rgba(184,150,46,0.48)] focus:bg-white focus:shadow-[0_16px_42px_rgba(212,175,55,0.12)]"
            />
          </label>
        </div>

        <div className="mt-5 text-[15px] font-semibold uppercase tracking-[0.20em] text-[#B8962E]">
          Showing {filteredTerms.length} of {terms.length}
        </div>

        {filteredTerms.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {filteredTerms.map((term) => (
              <Surface key={`${term.category}-${term.term}`} compact>
                <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E]">
                  {term.category}
                </div>
                <h3 className="mt-3 text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F1F1F]">
                  {term.term}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5A5A5A]">
                  {term.definition}
                </p>
              </Surface>
            ))}
          </div>
        ) : (
          <Surface featured className="mt-8">
            <h3 className="text-[24px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#1F1F1F]">
              No glossary match yet.
            </h3>
            <p className="mt-3 max-w-[38rem] text-[15px] leading-7 text-[#5A5A5A]">
              Try a broader word like AI, workflow, risk, career, source, or judgment.
            </p>
          </Surface>
        )}
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1F1F1F]">
              Use the glossary, then move on.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#5A5A5A]">
              When the vocabulary is clear, the next route tends to be clearer too.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/start"
              className="premium-button button-secondary min-h-[46px] rounded-[16px] border border-[rgba(212,175,55,0.18)] bg-white/88 px-4 py-0 text-[13px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
            >
              Start Free
            </ButtonLink>
            <ButtonLink
              href="/career-intelligence"
              className="premium-button button-secondary min-h-[46px] rounded-[16px] border border-[rgba(212,175,55,0.18)] bg-white/88 px-4 py-0 text-[13px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
            >
              <LocalizedText
                translationKey="products.careerIntelligence"
                fallback="Career Intelligence"
              />
            </ButtonLink>
            <ButtonLink
              href="/consulting"
              className="premium-button button-primary min-h-[46px] rounded-[16px] border border-[rgba(184,150,46,0.34)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-4 py-0 text-[13px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] shadow-[0_10px_24px_rgba(212,175,55,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(212,175,55,0.24)]"
            >
              <LocalizedText translationKey="products.consulting" fallback="Consulting" />
            </ButtonLink>
          </div>
        </Surface>
      </section>
    </MarketingChrome>
  );
}
