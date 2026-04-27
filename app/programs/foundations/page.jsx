import {
  BrandBirdMark,
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../../_components/marketing-system.jsx";
import { LocalizedText } from "../../_components/locale-provider.jsx";
import { PAYHIP_LINKS, PROGRAM_DETAIL_LINKS } from "../../../lib/umattr-links.js";

export const metadata = {
  title: "UMATTR AI Foundations",
  description:
    "A premium AI foundations program for clearer judgment, stronger questions, and better decisions.",
};

const purposeCards = [
  {
    title: "Build a stable model",
    description: "Understand what AI is before you rely on it in real work.",
  },
  {
    title: "Separate signal from noise",
    description: "See where the tool helps, where it drifts, and where it stops.",
  },
  {
    title: "Use it with restraint",
    description: "Make cleaner calls about when AI should enter the workflow.",
  },
];

const learnCards = [
  {
    title: "What AI is",
    description: "A clear baseline for the tool, the model, and the limits.",
  },
  {
    title: "What AI is not",
    description: "The boundaries that keep the work calm and accurate.",
  },
  {
    title: "How to frame the question",
    description: "A practical way to ask for better shape, context, and direction.",
  },
  {
    title: "How to judge output",
    description: "A simple review habit before you trust or reuse the answer.",
  },
];

const moduleCards = [
  {
    title: "Orientation",
    description: "Set the baseline so the rest of the program stays clear.",
  },
  {
    title: "Question shape",
    description: "Learn how to frame the prompt around the real decision.",
  },
  {
    title: "Judgment",
    description: "Use AI without losing the human call that matters most.",
  },
  {
    title: "Practical use",
    description: "Turn the model into a cleaner part of everyday work.",
  },
];

const formatCards = [
  {
    title: "Level",
    description: "Beginner-friendly. Best before Work or Business if AI still feels noisy.",
  },
  {
    title: "Format",
    description: "Self-paced digital access through Payhip, with concise lessons and practical framing.",
  },
  {
    title: "What you get",
    description: "Core concepts, prompt-shaping habits, judgment checks, and a clearer first route.",
  },
];

const faqItems = [
  {
    question: "Who is this for?",
    answer: "People who want the mental model before they start using AI more heavily in work or decisions.",
  },
  {
    question: "Do I need technical experience?",
    answer: "No. Foundations is built for clear judgment, not technical implementation.",
  },
  {
    question: "What happens after purchase?",
    answer: "Payhip handles secure checkout and delivery. UMATTR provides the program structure and route guidance.",
  },
  {
    question: "Can I start free first?",
    answer: "Yes. Use Start Free or Sample Foundations if you want orientation before paid access.",
  },
];

export default function FoundationsPage() {
  return (
    <MarketingChrome activeHref="/programs">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <SectionLabel>AI PROGRAM</SectionLabel>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              Foundations for practical AI judgment.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              Learn the model behind AI so you can ask better questions, judge the
              output more calmly, and decide when the tool should be in the work at
              all.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={PAYHIP_LINKS.foundations}
                className="premium-button button-primary rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Access on Payhip
              </ButtonLink>
              <ButtonLink
                href={PROGRAM_DETAIL_LINKS.forWork}
                className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                Next: <LocalizedText translationKey="products.aiForWork" fallback="AI for Work" />
              </ButtonLink>
              <ButtonLink
                href="/start"
                className="premium-button button-secondary rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                Start Free
              </ButtonLink>
            </div>

            <p className="mt-8 max-w-[34rem] text-[14px] font-semibold leading-7 text-[#A8843A]">
              UMATTR frames the program. Payhip handles secure checkout and delivery when you are ready.
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
                  People who need a cleaner mental model before they use AI more
                  broadly.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  You leave with
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  A calmer way to judge AI, frame the question, and check the answer.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Best next step
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Buy through Payhip, then move into Work or Business if the decision
                  gets more specific.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHAT THIS PROGRAM IS FOR</SectionLabel>
        <h2 className="mt-4 max-w-[11ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Get oriented before you get tactical.
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
          The core ideas that make AI feel useful, not vague.
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
              <p>You want orientation before more practical use.</p>
              <p>You want a calmer model for evaluating AI claims.</p>
              <p>You want a foundation that keeps later choices cleaner.</p>
            </div>
          </Surface>

          <Surface>
            <h2 className="text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A]">
              Outcome
            </h2>
            <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#6B6B6B]">
              <p>A clearer mental model of what AI does and does not do.</p>
              <p>Better questions and better judgment around output quality.</p>
              <p>A cleaner transition into the Work or Business routes.</p>
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
        <SectionLabel>FORMAT / TIMELINE</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Clear enough to start without overthinking.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {formatCards.map((card, index) => (
            <Surface key={card.title} compact featured={index === 0} className={index === 0 ? "priority-high" : "priority-medium"}>
              <span className="priority-badge">{index === 0 ? "FIX NOW" : "IMPROVE NEXT"}</span>
              <h3 className="mt-5 text-[20px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{card.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Questions before access.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <Surface key={item.question} compact>
              <h3 className="text-[20px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A]">
                {item.question}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{item.answer}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>ACCESS</SectionLabel>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Access <LocalizedText translationKey="products.aiFoundations" fallback="AI Foundations" /> on Payhip.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              You will check out through Payhip and receive access there. UMATTR provides the program structure, lessons, and route guidance.
            </p>
          </div>
          <ButtonLink
            href={PAYHIP_LINKS.foundations}
            className="premium-button button-primary shrink-0 rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
          >
            Access on Payhip
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}

