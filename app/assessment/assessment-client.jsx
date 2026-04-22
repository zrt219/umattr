"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ButtonLink,
  CONSULTING_INQUIRY_HREF,
  MarketingChrome,
  PAYHIP_LINKS,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { useLocale } from "../_components/locale-provider.jsx";

const QUESTIONS = [
  {
    prompt: "What are you trying to decide right now?",
    options: [
      {
        label: "Understand the model first",
        description: "I want a clean baseline before I get tactical.",
        scores: { foundations: 5, career: 1 },
      },
      {
        label: "Use AI in day-to-day work",
        description: "I want practical output inside real workflows.",
        scores: { work: 5, career: 1 },
      },
      {
        label: "Make a business decision",
        description: "The choice touches tools, spend, systems, or risk.",
        scores: { business: 5, career: 1 },
      },
      {
        label: "Clarify direction and positioning",
        description: "I need a clearer next step and a stronger story.",
        scores: { career: 5 },
      },
    ],
  },
  {
    prompt: "What kind of pressure is on the decision?",
    options: [
      {
        label: "Low stakes, I want orientation",
        description: "I am still getting my bearings.",
        scores: { foundations: 3, career: 2 },
      },
      {
        label: "Daily work output or workflow",
        description: "The pressure is about speed and quality in repeat work.",
        scores: { work: 4, career: 1 },
      },
      {
        label: "Money, tools, or systems",
        description: "A weaker answer would create more cost or drag.",
        scores: { business: 4, career: 1 },
      },
      {
        label: "A clearer next step or story",
        description: "The decision is more about route and positioning.",
        scores: { career: 5 },
      },
    ],
  },
  {
    prompt: "How much support do you want?",
    options: [
      {
        label: "A clean baseline",
        description: "I want a clear starting point and nothing heavier.",
        scores: { foundations: 3, career: 1 },
      },
      {
        label: "Practical guidance I can use myself",
        description: "I want something useful without turning it into a project.",
        scores: { work: 3, career: 1 },
      },
      {
        label: "A more careful business lens",
        description: "I need more judgment around consequence and exposure.",
        scores: { business: 3, career: 1 },
      },
      {
        label: "A stronger route for positioning",
        description: "I want more structure around direction and comparison.",
        scores: { career: 5 },
      },
    ],
  },
  {
    prompt: "What outcome matters most?",
    options: [
      {
        label: "A stable mental model",
        description: "I want to understand what AI is and what it is not.",
        scores: { foundations: 4, career: 1 },
      },
      {
        label: "Better output in daily work",
        description: "I want cleaner drafts, notes, and working output.",
        scores: { work: 4, career: 1 },
      },
      {
        label: "Cleaner judgment for risk",
        description: "I want sharper evaluation of tools and vendors.",
        scores: { business: 4, career: 1 },
      },
      {
        label: "Clearer route and story",
        description: "I need a better answer for direction and positioning.",
        scores: { career: 5 },
      },
    ],
  },
  {
    prompt: "Which next step sounds most like you?",
    options: [
      {
        label: "I am starting from scratch",
        description: "I need the basics before I spend or commit.",
        scores: { foundations: 5, career: 1 },
      },
      {
        label: "I already use AI and want stronger habits",
        description: "I want a better daily workflow and cleaner output.",
        scores: { work: 5, career: 1 },
      },
      {
        label: "I need to assess a higher-stakes decision",
        description: "I am weighing a decision that carries real business cost.",
        scores: { business: 5, career: 1 },
      },
      {
        label: "I need a more polished next-step route",
        description: "I want a clearer route and a better way forward.",
        scores: { career: 5 },
      },
    ],
  },
];

const RESULT_MAP = {
  foundations: {
    title: "UMATTR AI Foundations",
    family: "AI Programs",
    summary:
      "Best when you want the model first. This route gives you a calmer baseline before you move into more tactical work.",
    why: [
      "You want orientation before you get tactical.",
      "You want a cleaner mental model for AI.",
      "You want the lightest route into the paid stack.",
    ],
    href: PAYHIP_LINKS.foundations,
    pageHref: "/programs/foundations",
    cta: "Access Foundations on Payhip",
    pageCta: "View Foundations Page",
    note:
      "If the decision grows into a broader operational or vendor question, Consulting becomes the higher-touch route.",
  },
  work: {
    title: "UMATTR AI for Work",
    family: "AI Programs",
    summary:
      "Best when you need practical leverage in daily work. This route helps AI fit the workflow without lowering the standard.",
    why: [
      "You already know the basics and want practical leverage.",
      "You need better output in repeat work.",
      "You want speed with less rework.",
    ],
    href: PAYHIP_LINKS.forWork,
    pageHref: "/programs/for-work",
    cta: "Access AI for Work on Payhip",
    pageCta: "View Work Page",
    note:
      "If the call becomes about larger business cost or exposure, move up to AI for Business.",
  },
  business: {
    title: "UMATTR AI for Business",
    family: "AI Programs",
    summary:
      "Best when the decision touches tools, vendors, systems, spend, or risk. This is the more careful business route.",
    why: [
      "The decision has real business consequences.",
      "You need a sharper lens on tools and vendors.",
      "You want more judgment before you commit resources.",
    ],
    href: PAYHIP_LINKS.forBusiness,
    pageHref: "/programs/for-business",
    cta: "Access AI for Business on Payhip",
    pageCta: "View Business Page",
    note:
      "If the decision requires direct human-guided support, Consulting is the premium next layer.",
  },
  career: {
    title: "Career Intelligence",
    family: "Career Intelligence",
    summary:
      "Best when the real decision is direction and positioning. This route helps you get clearer on the next move, tighten the story, and choose a stronger path forward.",
    why: [
      "You need a clearer read on the next move.",
      "You want stronger positioning and a better story.",
      "You need one premium route for direction, not AI training.",
    ],
    href: PAYHIP_LINKS.careerFamily,
    pageHref: "/career-intelligence",
    cta: "Access Career Intelligence",
    pageCta: "View Career Intelligence",
    note:
      "If the issue becomes more about systems, vendors, money, or operational risk, AI for Business or Consulting may be the better route.",
  },
};

function emptyScores() {
  return {
    foundations: 0,
    work: 0,
    business: 0,
    career: 0,
  };
}

function scoreSelection(answers) {
  const totals = emptyScores();

  answers.forEach((answer) => {
    if (!answer) {
      return;
    }

    Object.entries(answer.scores).forEach(([key, value]) => {
      totals[key] = (totals[key] || 0) + value;
    });
  });

  const familyTotals = {
    foundations: totals.foundations,
    work: totals.work,
    business: totals.business,
    career: totals.career,
  };

  const familyOrder = ["business", "career", "work", "foundations"];
  const familyEntries = Object.entries(familyTotals).sort(
    ([familyA, scoreA], [familyB, scoreB]) =>
      scoreB - scoreA || familyOrder.indexOf(familyA) - familyOrder.indexOf(familyB)
  );
  const [familyKey, topScore] = familyEntries[0];
  const secondScore = familyEntries[1]?.[1] ?? 0;
  const confidence =
    topScore - secondScore >= 4
      ? "Strong match"
      : topScore - secondScore >= 2
        ? "Clear match"
        : "Close match";

  return {
    ...RESULT_MAP[familyKey],
    key: familyKey,
    familyScore: topScore,
    gap: topScore - secondScore,
    confidence,
    totals,
  };
}

function ScorePill({ label, value }) {
  return (
    <div className="rounded-full border border-[rgba(198,165,92,0.16)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B6B6B]">
      {label}: <span className="text-[#1A1A1A]">{value}</span>
    </div>
  );
}

export default function AssessmentClient() {
  const { t } = useLocale();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(() => Array(QUESTIONS.length).fill(null));
  const [completed, setCompleted] = useState(false);
  const resultRef = useRef(null);

  const currentAnswer = answers[step];

  const recommendation = useMemo(() => {
    return scoreSelection(answers);
  }, [answers]);

  const localizedRecommendation = {
    ...recommendation,
    title:
      recommendation.key === "foundations"
        ? `UMATTR ${t("products.aiFoundations", "AI Foundations")}`
        : recommendation.key === "work"
          ? `UMATTR ${t("products.aiForWork", "AI for Work")}`
          : recommendation.key === "business"
            ? `UMATTR ${t("products.aiForBusiness", "AI for Business")}`
            : t("products.careerIntelligence", "Career Intelligence"),
    cta:
      recommendation.key === "work"
        ? `Access ${t("products.aiForWork", "AI for Work")} on Payhip`
        : recommendation.key === "business"
          ? `Access ${t("products.aiForBusiness", "AI for Business")} on Payhip`
          : recommendation.key === "career"
            ? `Access ${t("products.careerIntelligence", "Career Intelligence")}`
            : recommendation.cta,
    pageCta:
      recommendation.key === "career"
        ? `View ${t("products.careerIntelligence", "Career Intelligence")}`
        : recommendation.pageCta,
  };

  useEffect(() => {
    if (completed && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [completed]);

  function selectOption(optionIndex) {
    const nextAnswers = [...answers];
    nextAnswers[step] = QUESTIONS[step].options[optionIndex];
    setAnswers(nextAnswers);
  }

  function goNext() {
    if (step === QUESTIONS.length - 1) {
      setCompleted(true);
      return;
    }

    setStep((current) => current + 1);
  }

  function goBack() {
    if (step === 0) {
      return;
    }

    setStep((current) => current - 1);
  }

  function restart() {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setStep(0);
    setCompleted(false);
  }

  const progress = ((step + 1) / QUESTIONS.length) * 100;
  const answeredCount = answers.filter(Boolean).length;

  return (
    <MarketingChrome activeHref="/start">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="fade-up">
            <SectionLabel>FREE TOOL</SectionLabel>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,6vw,4.8rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              Find the right UMATTR route.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              Answer a few multiple-choice questions and get a direct recommendation
              for the program or route that fits the decision best.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

            <p className="mt-8 max-w-[34rem] text-[14px] leading-7 text-[#6B6B6B]">
              The assessment uses the decision, the stakes, and the support level
              to match you to the closest paid route.
            </p>
          </div>

          <Surface compact className="fade-up lg:self-end" featured>
            <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
              How it works
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  1. Answer
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Choose the option that best matches the decision in front of you.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  2. Score
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  We score the answers and find the route with the clearest fit.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  3. Route
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  You get a direct Payhip link to the program or route that fits
                  best.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="overflow-hidden">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>ASSESSMENT</SectionLabel>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
                Five questions. One clear route.
              </h2>
              <p className="mt-4 max-w-[40rem] text-[15px] leading-7 text-[#6B6B6B]">
                The strongest route usually shows up from the combination of
                decision type, stakes, and support level.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
              <ScorePill label="Answered" value={`${answeredCount}/${QUESTIONS.length}`} />
              <ScorePill label="Step" value={`${step + 1}/${QUESTIONS.length}`} />
            </div>
          </div>

          <div className="mt-7 h-2 w-full overflow-hidden rounded-full bg-[rgba(198,165,92,0.12)]">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#D2B16A_0%,#C6A55C_55%,#B79247_100%)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-7 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="rounded-[24px] border border-[rgba(198,165,92,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(251,248,242,0.88))] p-5 md:p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                Question {step + 1}
              </div>
              <h3 className="mt-4 max-w-[18ch] text-[clamp(1.7rem,2.4vw,2.2rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#1A1A1A]">
                {QUESTIONS[step].prompt}
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-3">
                {QUESTIONS[step].options.map((option, index) => {
                  const isSelected = currentAnswer?.label === option.label;

                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => selectOption(index)}
                      aria-pressed={isSelected}
                      className={`premium-card rounded-[18px] border px-4 py-4 text-left transition-all ${
                        isSelected
                          ? "border-[rgba(168,132,58,0.36)] bg-white shadow-[0_16px_34px_rgba(33,27,18,0.07)]"
                          : "border-[rgba(198,165,92,0.14)] bg-white/74 hover:border-[rgba(198,165,92,0.28)] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[12px] font-semibold ${
                            isSelected
                              ? "border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] text-[#1A1A1A]"
                              : "border-[rgba(198,165,92,0.16)] bg-[#FCFBF7] text-[#6B6B6B]"
                          }`}
                        >
                          {String(index + 1)}
                        </div>
                        <div className="min-w-0">
                          <div className="text-[15px] font-semibold leading-6 tracking-[-0.02em] text-[#1A1A1A]">
                            {option.label}
                          </div>
                          <p className="mt-1 text-[13px] leading-6 text-[#6B6B6B]">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <ButtonLink
                  href="/start"
                  className="premium-button button-secondary rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                >
                  Start Free
                </ButtonLink>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 0}
                    className="premium-button button-secondary rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] disabled:cursor-not-allowed disabled:opacity-40 hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!currentAnswer}
                    className="premium-button button-primary rounded-[16px] border border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.18)] disabled:cursor-not-allowed disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.24)]"
                  >
                    {step === QUESTIONS.length - 1 ? "See Result" : "Next"}
                  </button>
                </div>
              </div>
            </div>

            <Surface compact className="lg:sticky lg:top-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                What the scoring weighs
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
                    Decision type
                  </div>
                  <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                    Whether you need foundations, work output, business judgment, or
                    direction and positioning.
                  </p>
                </div>
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
                    Stakes
                  </div>
                  <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                    Low-stakes orientation scores differently from money, systems, and
                    exposure.
                  </p>
                </div>
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
                    Support level
                  </div>
                  <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                    The routing logic favors the amount of help you actually want.
                  </p>
                </div>
              </div>
            </Surface>
          </div>
        </Surface>
      </section>

      {completed ? (
        <section ref={resultRef} className="mx-auto mt-16 max-w-[1200px]">
          <Surface featured className="overflow-hidden">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
              <div>
                <SectionLabel>YOUR RESULT</SectionLabel>
                <h2 className="mt-4 max-w-[14ch] text-[clamp(2.1rem,3vw,3.3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
                  {localizedRecommendation.title}
                </h2>
                <p className="mt-5 max-w-[34rem] text-[16px] leading-8 text-[#6B6B6B]">
                  {recommendation.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href={recommendation.href}
                    className="premium-button button-primary rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
                  >
                    {recommendation.cta}
                  </ButtonLink>
                  <ButtonLink
                    href={recommendation.pageHref}
                    className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                  >
                    {recommendation.pageCta}
                  </ButtonLink>
                  <button
                    type="button"
                    onClick={restart}
                    className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                  >
                    Retake Assessment
                  </button>
                </div>

                <p className="mt-7 max-w-[34rem] text-[14px] leading-7 text-[#6B6B6B]">
                  This result is based on your answers to the decision, stakes, and
                  support questions. If the decision needs more human-guided help,
                  {t("products.consulting", "Consulting")} is still available separately.
                </p>
              </div>

              <Surface compact className="self-start" featured>
                <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                  Why this fit
                </div>
                <div className="mt-4 space-y-4">
                  {recommendation.why.map((item) => (
                    <p key={item} className="text-[15px] leading-7 text-[#6B6B6B]">
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-6 rounded-[18px] border border-[rgba(198,165,92,0.12)] bg-white/72 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
                    Confidence
                  </div>
                  <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                    {recommendation.confidence}. The recommendation leans on how
                    clearly this route outscored the others.
                  </p>
                </div>
                <div className="mt-6 rounded-[18px] border border-[rgba(198,165,92,0.12)] bg-white/72 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1A1A1A]">
                    Payhip link
                  </div>
                  <p className="mt-2 break-all text-[13px] leading-6 text-[#6B6B6B]">
                    {recommendation.href}
                  </p>
                </div>
              </Surface>
            </div>
          </Surface>
        </section>
      ) : null}

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Start free, then move into the right path.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              The assessment is the fastest way to get to the right route without
              starting the decision over.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/programs"
              className="premium-button button-secondary rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
            >
              Programs
            </ButtonLink>
            <ButtonLink
              href="/career-intelligence"
              className="premium-button button-secondary rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
            >
              {t("products.careerIntelligence", "Career Intelligence")}
            </ButtonLink>
            <ButtonLink
              href={CONSULTING_INQUIRY_HREF}
              className="premium-button button-primary rounded-[16px] border border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.24)]"
            >
              Request {t("products.consulting", "Consulting")}
            </ButtonLink>
          </div>
        </Surface>
      </section>
    </MarketingChrome>
  );
}

