import {
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { LocalizedText } from "../_components/locale-provider.jsx";

export const metadata = {
  title: "Dashboard",
  description:
    "A public working view that keeps the route visible without pretending to be a gated account area.",
};

const panels = [
  {
    title: "Current state",
    description: "Start free if you need orientation before you pay.",
  },
  {
    title: "Recommended route",
    description: (
      <>
        Pick Foundations for clarity, Work for practice, Business for higher stakes, or{" "}
        <LocalizedText translationKey="products.careerIntelligence" fallback="Career Intelligence" /> for positioning.
      </>
    ),
  },
  {
    title: "Best next move",
    description: (
      <>
        Move into the route that fits the decision, then use <LocalizedText translationKey="products.consulting" fallback="Consulting" /> only when the call is more selective.
      </>
    ),
  },
];

export default function DashboardPage() {
  return (
    <MarketingChrome activeHref="/start">
      <section className="mx-auto max-w-[1200px]">
        <SectionLabel>FREE TOOL</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <h1 className="max-w-[10ch] text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1F1F1F]">
              Dashboard.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#5A5A5A] md:text-[18px]">
              A public working view that keeps the route visible. It is not a
              gated account area, and it does not pretend to show personal data.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/start"
                className="premium-button button-primary rounded-[18px] border border-[rgba(184,150,46,0.38)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-6 py-4 text-[15px] font-semibold tracking-[-0.02em] text-[#1F1F1F] shadow-[0_14px_34px_rgba(212,175,55,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(212,175,55,0.28)]"
              >
                Back to Start Free
              </ButtonLink>
              <ButtonLink
                href="/programs"
                className="premium-button button-secondary rounded-[18px] border border-[rgba(212,175,55,0.18)] bg-white/75 px-6 py-4 text-[15px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
              >
                View Programs
              </ButtonLink>
            </div>
          </div>

          <Surface compact className="fade-up lg:self-end" featured>
            <div className="text-[12px] font-semibold uppercase tracking-[0.20em] text-[#B8962E]">
              Working view
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] leading-7 text-[#5A5A5A]">
                The dashboard keeps the decision path legible without adding noise.
              </p>
              <p className="text-[15px] leading-7 text-[#5A5A5A]">
                It is a calm orientation surface, not an account system.
              </p>
              <p className="text-[15px] leading-7 text-[#5A5A5A]">
                Use it to keep the next route visible.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>PANELS</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1F1F1F]">
          The route map stays visible.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {panels.map((panel) => (
            <Surface key={panel.title} compact>
              <h3 className="text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F1F1F]">
                {panel.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#5A5A5A]">{panel.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1F1F1F]">
              Keep the next route visible.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#5A5A5A]">
              Move from the free layer into the route that fits the decision
              without losing context.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/start"
              className="premium-button button-secondary rounded-[16px] border border-[rgba(212,175,55,0.18)] bg-white/88 px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
            >
              Start Free
            </ButtonLink>
            <ButtonLink
              href="/programs"
              className="premium-button button-secondary rounded-[16px] border border-[rgba(212,175,55,0.18)] bg-white/88 px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
            >
              Programs
            </ButtonLink>
            <ButtonLink
              href="/career-intelligence"
              className="premium-button button-secondary rounded-[16px] border border-[rgba(212,175,55,0.18)] bg-white/88 px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
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

