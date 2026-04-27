import {
  BrandBirdMark,
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { LocalizedText } from "../_components/locale-provider.jsx";
import { FREE_TOOL_LINKS } from "../../lib/umattr-links.js";

export const metadata = {
  title: "Start Free",
  description:
    "UMATTR's free entry layer for assessment, glossary, and sample Foundations previews.",
};

const freeTools = [
  {
    title: "Assessment",
    description:
      "A focused orientation check for deciding which UMATTR route fits the decision in front of you.",
    href: FREE_TOOL_LINKS.assessment,
    cta: "Open Assessment",
    featured: true,
  },
  {
    title: "Glossary",
    description: "Short definitions for the words that matter before you buy.",
    href: FREE_TOOL_LINKS.glossary,
    cta: "Open Glossary",
  },
  {
    title: "Sample Foundations",
    description: "Sample Foundations first and move forward with more context.",
    href: FREE_TOOL_LINKS.previews,
    cta: "Open Sample",
  },
];

const nextStepRows = [
  {
    title: "Start free",
    description: "Use the free tools to get oriented before you spend anything.",
  },
  {
    title: "Then choose the route",
    description: (
      <>
        Move into Programs, <LocalizedText translationKey="products.careerIntelligence" fallback="Career Intelligence" />, or{" "}
        <LocalizedText translationKey="products.consulting" fallback="Consulting" /> when the decision is clearer.
      </>
    ),
  },
  {
    title: "Keep the path simple",
    description:
      "Free lives on UMATTR. Paid access continues through Payhip or inquiry.",
  },
];

const routeGuidance = [
  {
    label: "AI BASICS",
    title: "Choose Foundations",
    description: "Use this when you need the model first and want a calm baseline before practical work.",
    href: "/programs/foundations",
    cta: "View Foundations",
    priority: "FIX NOW",
  },
  {
    label: "DAILY WORK",
    title: "Choose AI for Work",
    description: "Use this when the decision is about output, workflow, quality, and repeatable practical use.",
    href: "/programs/for-work",
    cta: "View AI for Work",
    priority: "IMPROVE NEXT",
  },
  {
    label: "CAREER",
    title: "Choose Career Intelligence",
    description: "Use this when you need role clarity, pivot direction, positioning, or a stronger next move.",
    href: "/career-intelligence",
    cta: "View Career Intelligence",
    priority: "IMPROVE NEXT",
  },
  {
    label: "HIGHER STAKES",
    title: "Choose Consulting",
    description: "Use this when the decision touches systems, spend, vendors, operations, or risk.",
    href: "/consulting",
    cta: "Request Consulting",
    priority: "TEST LATER",
  },
];

export default function StartPage() {
  return (
    <MarketingChrome activeHref="/start">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <SectionLabel>FREE ENTRY</SectionLabel>
            <h1 className="mt-4 max-w-[8ch] text-[clamp(3rem,6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              Start free.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              Get oriented before you pay. Use the assessment, glossary, and
              Sample Foundations to turn AI curiosity into a clearer next move.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={FREE_TOOL_LINKS.assessment}
                className="premium-button button-primary min-h-[56px] min-w-[166px] rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-0 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Open Assessment
              </ButtonLink>
              <ButtonLink
                href="/programs"
                className="premium-button button-secondary min-h-[56px] min-w-[166px] rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-0 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                View Programs
              </ButtonLink>
            </div>
          </div>

          <Surface
            className="fade-up min-h-[24rem] border-[rgba(184,150,46,0.28)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,246,236,0.96))] shadow-[0_30px_88px_rgba(33,27,18,0.1)] lg:self-end"
            featured
          >
            <BrandBirdMark />
            <div className="relative text-[12px] font-semibold uppercase tracking-[0.24em] text-[#A8843A]">
              Free tools live on UMATTR
            </div>
            <div className="relative mt-6 space-y-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Free first
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Start with assessment, glossary, and Sample Foundations before you move into paid access.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Paid routes
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Programs and <LocalizedText translationKey="products.careerIntelligence" fallback="Career Intelligence" /> continue through Payhip when you are ready.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Higher-touch
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  <LocalizedText translationKey="products.consulting" fallback="Consulting" /> stays inquiry-first for more selective decisions.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>FREE TOOLS</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Useful before you pay.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {freeTools.map((tool) => (
            <Surface
              key={tool.title}
              compact
              featured={tool.featured}
              className={tool.featured ? "border-[rgba(184,150,46,0.28)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,246,236,0.96))]" : ""}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8843A]">
                {tool.featured ? "Recommended first" : "Free tool"}
              </div>
              <h3 className="mt-3 text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1A1A1A]">
                {tool.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{tool.description}</p>
              <div className="mt-6">
                <ButtonLink
                  href={tool.href}
                  className={`${tool.featured ? "button-primary border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] shadow-[0_10px_24px_rgba(198,165,92,0.18)] hover:shadow-[0_14px_30px_rgba(198,165,92,0.24)]" : "button-secondary border-[rgba(198,165,92,0.18)] bg-white/88 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"} premium-button min-h-[46px] rounded-[16px] border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5`}
                >
                  {tool.cta}
                </ButtonLink>
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHAT HAPPENS NEXT</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {nextStepRows.map((row) => (
            <Surface key={row.title} compact>
              <h3 className="text-[20px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A]">
                {row.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{row.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>ROUTE GUIDANCE</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          If this is your situation, go here.
        </h2>
        <p className="mt-4 max-w-[42rem] text-[15px] leading-7 text-[#6B6B6B] md:text-[16px]">
          Free tools are the orientation layer. The next step should match the decision, not just the product name.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {routeGuidance.map((route, index) => (
            <Surface
              key={route.title}
              compact
              featured={index === 0}
              className={index === 0 ? "priority-high" : index === 3 ? "priority-strategic" : "priority-medium"}
            >
              <span className="priority-badge">{route.priority}</span>
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8843A]">
                {route.label}
              </div>
              <h3 className="mt-3 text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1A1A1A]">
                {route.title}
              </h3>
              <p className="mt-3 min-h-[6rem] text-[14px] leading-7 text-[#6B6B6B]">{route.description}</p>
              <ButtonLink
                href={route.href}
                className="premium-button button-secondary mt-5 min-h-[46px] rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                {route.cta}
              </ButtonLink>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Keep the next route visible.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              Jump from the free layer into the next decision path without losing
              context.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={FREE_TOOL_LINKS.assessment}
              className="premium-button button-secondary rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
            >
              Assessment
            </ButtonLink>
            <ButtonLink
              href={FREE_TOOL_LINKS.glossary}
              className="premium-button button-secondary rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
            >
              Glossary
            </ButtonLink>
            <ButtonLink
              href="/programs"
              className="premium-button button-primary rounded-[16px] border border-[rgba(168,132,58,0.34)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,165,92,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(198,165,92,0.24)]"
            >
              Programs
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
          </div>
        </Surface>
      </section>
    </MarketingChrome>
  );
}

