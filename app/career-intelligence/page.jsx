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
    "A premium package family for direction, positioning, and next-step clarity.",
};

const packages = [
  {
    title: "Core",
    tone: "default",
    positioning: "A clean orientation package for getting clear on the next move.",
    fit: "Use this when you need a firmer read before you commit to a direction.",
    included:
      "Direction scan, positioning prompts, and a short next-step route.",
    href: PAYHIP_LINKS.careerCore,
    cta: "Access Core on Payhip",
  },
  {
    title: "Plus",
    tone: "default",
    positioning: "A deeper package for refining the story and pressure-testing the path.",
    fit: "Use this when you have options and need the narrative to hold up better.",
    included:
      "Everything in Core plus deeper framing and route comparison.",
    href: PAYHIP_LINKS.careerPlus,
    cta: "Access Plus on Payhip",
  },
  {
    title: "Pro",
    tone: "featured",
    positioning: "The highest-touch route for more consequential career decisions.",
    fit: "Use this when the decision has consequences and needs more human judgment.",
    included:
      "Everything in Plus plus premium review and higher-touch direction support.",
    href: PAYHIP_LINKS.careerPro,
    cta: "Access Pro on Payhip",
  },
];

const comparisonRows = [
  { label: "Core", value: "Orientation first" },
  { label: "Plus", value: "Positioning plus depth" },
  { label: "Pro", value: "Highest-touch support" },
];

export default function CareerIntelligencePage() {
  return (
    <MarketingChrome activeHref="/career-intelligence">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <SectionLabel>PACKAGE FAMILY</SectionLabel>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              Career Intelligence for direction and positioning.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              This is the package family for people who want a clearer read on
              their next step, a stronger position, and a more grounded route
              forward.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={PAYHIP_LINKS.careerFamily}
                className="premium-button rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Access Packages on Payhip
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
              Distinction
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Not AI training
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Career Intelligence is not about learning the tool. It is about
                  getting clearer on direction and positioning.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  What it is for
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Choosing the next move, tightening the story, and making the path
                  more legible.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Access route
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  Open the package that fits your level of clarity and support.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>PACKAGE TIERS</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Core, Plus, and Pro.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Surface key={pkg.title} featured={pkg.tone === "featured"}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8843A]">
                {pkg.title}
              </div>
              <h3 className="mt-4 text-[26px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A]">
                {pkg.positioning}
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-[#6B6B6B]">
                <span className="font-semibold text-[#1A1A1A]">Who it is for:</span>{" "}
                {pkg.fit}
              </p>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">
                <span className="font-semibold text-[#1A1A1A]">Included:</span>{" "}
                {pkg.included}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={pkg.href}
                  className="premium-button rounded-[16px] border border-[rgba(168,132,58,0.34)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                >
                  {pkg.cta}
                </ButtonLink>
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>COMPARISON</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {comparisonRows.map((row) => (
            <Surface key={row.label} compact>
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                {row.label}
              </div>
              <p className="mt-3 text-[18px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#1A1A1A]">
                {row.value}
              </p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>FINAL CTA</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Access Career Intelligence on Payhip.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              Choose Core, Plus, or Pro based on the amount of clarity and support
              you need.
            </p>
          </div>
          <ButtonLink
            href={PAYHIP_LINKS.careerFamily}
            className="premium-button shrink-0 rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
          >
            Access Packages on Payhip
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}
