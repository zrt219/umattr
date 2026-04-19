import {
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";

export const metadata = {
  title: "About UMATTR",
  description:
    "Learn what UMATTR is for, how the routes are structured, and how the free and paid layers fit together.",
};

const points = [
  {
    title: "What it is",
    description: "A premium route system for learning, positioning, and consulting.",
  },
  {
    title: "What it does",
    description: "Moves people from free orientation into the path that fits the decision.",
  },
  {
    title: "How it sells",
    description: "Programs and Career Intelligence continue through Payhip, while Consulting stays inquiry-first.",
  },
];

export default function AboutPage() {
  return (
    <MarketingChrome activeHref="/">
      <section className="mx-auto max-w-[1200px]">
        <SectionLabel>ABOUT</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <h1 className="max-w-[10ch] text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              UMATTR keeps the route clear.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              The brand is built to help people start free, then move into the
              route that matches the decision: programs, career intelligence, or
              consulting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/start"
                className="premium-button rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Start Free
              </ButtonLink>
              <ButtonLink
                href="/programs"
                className="premium-button rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                View Programs
              </ButtonLink>
            </div>
          </div>

          <Surface compact className="fade-up lg:self-end" featured>
            <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
              Brand shape
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                Calm, commercial, and clear.
              </p>
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                A route system that starts free and becomes more specific as the
                decision gets sharper.
              </p>
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                Designed to feel premium without adding noise.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHAT MATTERS</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Three simple truths.
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
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>FINAL CTA</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Start free, then choose the route.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              The site stays calm when each route has a clear job.
            </p>
          </div>
          <ButtonLink
            href="/start"
            className="premium-button rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
          >
            Start Free
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}
