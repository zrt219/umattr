import {
  ButtonLink,
  MarketingChrome,
  PAYHIP_LINKS,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";

export const metadata = {
  title: "Career Intelligence",
  description:
    "A premium course for direction, positioning, and next-step clarity.",
};

const payhipHref = PAYHIP_LINKS.careerIntelligence;

const purposeCards = [
  {
    title: "Choose the next move",
    description:
      "Get clearer on the decision in front of you instead of staying in broad uncertainty.",
  },
  {
    title: "Tighten the story",
    description:
      "Make the way you talk about your direction easier to understand and trust.",
  },
  {
    title: "Move with more confidence",
    description:
      "Use a calmer route when the next step needs more structure and judgment.",
  },
];

const learnCards = [
  {
    title: "Direction scan",
    description:
      "A simple way to get a firmer read on what should happen next.",
  },
  {
    title: "Positioning prompts",
    description:
      "Questions that help you frame the story with more clarity and less noise.",
  },
  {
    title: "Route comparison",
    description:
      "A practical way to compare options without overcomplicating the decision.",
  },
  {
    title: "Next-step planning",
    description:
      "Turn the clearer read into a decision you can actually act on.",
  },
];

const moduleCards = [
  {
    title: "Orientation",
    description:
      "Set the baseline for what is happening and what kind of decision this is.",
  },
  {
    title: "Positioning",
    description:
      "Refine the story so the direction reads more clearly to you and others.",
  },
  {
    title: "Decision support",
    description:
      "Pressure-test the path so you can choose with more confidence.",
  },
  {
    title: "Next steps",
    description:
      "Move from clarity into action with a more grounded plan.",
  },
];

export default function CareerIntelligencePage() {
  return (
    <MarketingChrome activeHref="/career-intelligence">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <SectionLabel>CAREER INTELLIGENCE</SectionLabel>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              Career Intelligence for direction and positioning.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              A single course for people who want a clearer read on their next
              step, a stronger position, and a more grounded route forward.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={payhipHref}
                className="premium-button rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Access on Payhip
              </ButtonLink>
              <ButtonLink
                href="/start"
                className="premium-button rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                Start Free
              </ButtonLink>
            </div>
          </div>

          <Surface compact className="fade-up lg:self-end" featured>
            <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
              How access works
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  For
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  People who want a clearer read on their next step and how to
                  position it.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  You leave with
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Better direction, clearer language, and a more grounded next move.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Best next step
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Open the course on Payhip when you want a cleaner decision path.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHAT THIS COURSE IS FOR</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Get clearer before you commit.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {purposeCards.map((card) => (
            <Surface key={card.title} compact>
              <h3 className="text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">
                {card.description}
              </p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHAT YOU WILL LEARN</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          The ideas that make the path easier to see.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learnCards.map((card) => (
            <Surface key={card.title} compact>
              <h3 className="text-[20px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">
                {card.description}
              </p>
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
              <p>You want clarity before taking the next step.</p>
              <p>You need a stronger way to position the decision.</p>
              <p>You want the route to feel more grounded and less reactive.</p>
            </div>
          </Surface>

          <Surface>
            <h2 className="text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A]">
              Outcome
            </h2>
            <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#6B6B6B]">
              <p>A clearer view of what move makes sense next.</p>
              <p>A more confident story around your direction.</p>
              <p>A cleaner transition into action once the decision is set.</p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>MODULE OVERVIEW</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Module overview.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {moduleCards.map((card) => (
            <Surface key={card.title} compact>
              <h3 className="text-[20px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">
                {card.description}
              </p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface
          featured
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Access Career Intelligence on Payhip.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              Open the course when you want a cleaner read on the route ahead.
            </p>
          </div>
          <ButtonLink
            href={payhipHref}
            className="premium-button shrink-0 rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
          >
            Access on Payhip
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}
