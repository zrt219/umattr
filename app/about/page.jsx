import {
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";

export const metadata = {
  title: "About UMATTR",
  description:
    "Learn what UMATTR is for, why it exists, and how the free and paid routes fit together.",
};

const points = [
  {
    title: "Brand purpose",
    description:
      "UMATTR helps people make clearer decisions with disciplined AI learning, stronger career direction, and cleaner next steps.",
  },
  {
    title: "Operating model",
    description:
      "Free Membership stays free on UMATTR. Programs and Career Intelligence continue through Payhip, while Consulting stays inquiry-first.",
  },
  {
    title: "Customer journey",
    description:
      "Start free when you want orientation, then move into the route that matches the decision and the level of support required.",
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
              UMATTR helps people make clearer decisions.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              It combines disciplined AI learning, practical career direction,
              and direct consulting into one premium route system. Start free
              when you need orientation, then move into the path that fits the
              decision.
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
              What UMATTR is for
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                Clear enough to trust, calm enough to use, and commercial enough
                to support a real decision.
              </p>
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                The brand is built for people who want better judgment rather than
                more noise.
              </p>
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                Free tools create orientation. Paid routes handle the next level
                of support when the decision gets sharper.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>HOW IT WORKS</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          A simple route system for different kinds of decisions.
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
            <SectionLabel>NEXT STEP</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Start free, then choose the route that fits.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              UMATTR stays calm and useful when each route has a clear job.
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
