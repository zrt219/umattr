import {
  ButtonLink,
  CONSULTING_INQUIRY_HREF,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";

export const metadata = {
  title: "Consulting",
  description:
    "Premium consulting for decisions that carry real operational, financial, or risk weight.",
};

const useCases = [
  {
    title: "Vendor and tool decisions",
    description: "Choose the right tool without leaning on vague feature comparisons.",
  },
  {
    title: "Workflow design",
    description: "Shape the work so the system is actually usable after launch.",
  },
  {
    title: "AI implementation",
    description: "Move from interest to a more realistic plan for adoption.",
  },
  {
    title: "Higher-stakes decisions",
    description: "Use a more selective route when the call affects money or risk.",
  },
];

const consultingPackages = [
  {
    title: "Core",
    positioning: "Focused consulting for a defined decision.",
    fit: "Best when you need a clear read and a practical next step.",
    included: "Decision framing, a scoped response, and a concise recommendation.",
  },
  {
    title: "Plus",
    positioning: "Deeper consulting for decisions with more moving parts.",
    fit: "Best when the choice affects multiple people, systems, or timelines.",
    included: "Everything in Core plus deeper review and stronger alignment.",
  },
  {
    title: "Pro",
    positioning: "Highest-touch support for consequential decisions.",
    fit: "Best when the decision is expensive, sensitive, or difficult to reverse.",
    included: "Everything in Plus plus premium attention and tighter scope control.",
  },
];

const processSteps = [
  {
    title: "Request",
    description:
      "Send the decision, context, timing, and anything that changes the scope.",
  },
  {
    title: "Scope",
    description:
      "We clarify the work, agree on the route, and define what needs attention.",
  },
  {
    title: "Invoice",
    description:
      "You receive a custom invoice once the scope is set and the work is clear.",
  },
];

export default function ConsultingPage() {
  return (
    <MarketingChrome activeHref="/consulting">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <SectionLabel>PREMIUM SERVICE</SectionLabel>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              Consulting for decisions that carry real cost.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              Use Consulting when the decision touches systems, money, operations,
              vendors, or risk and you want a more selective human-guided route.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={CONSULTING_INQUIRY_HREF}
                className="premium-button rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
              >
                Request Consulting
              </ButtonLink>
              <ButtonLink
                href="/career-intelligence"
                className="premium-button rounded-[18px] border border-[rgba(198,165,92,0.18)] bg-white/75 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
              >
                Career Intelligence
              </ButtonLink>
            </div>
          </div>

          <Surface compact className="fade-up lg:self-end" featured>
            <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
              How consulting works
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Selective
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  This is the route for decisions that deserve more than a quick
                  answer.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  High-trust
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  The conversation stays focused on the actual decision, not on
                  generic support.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]">
                  Simple invoicing
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6B6B]">
                  We confirm scope first, then send a straightforward invoice when
                  the work is defined.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHEN TO USE CONSULTING</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Use the premium route when the call matters.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Surface key={useCase.title} compact>
              <h3 className="text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1A1A1A]">
                {useCase.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{useCase.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>CONSULTING PACKAGES</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Core, Plus, and Pro.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {consultingPackages.map((pkg, index) => (
            <Surface
              key={pkg.title}
              featured={index === 2}
              className={index === 2 ? "border-[rgba(168,132,58,0.30)]" : ""}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8843A]">
                {pkg.title}
              </div>
              <h3 className="mt-4 text-[26px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1A1A1A]">
                {pkg.positioning}
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-[#6B6B6B]">
                <span className="font-semibold text-[#1A1A1A]">Fit:</span> {pkg.fit}
              </p>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">
                <span className="font-semibold text-[#1A1A1A]">Included:</span>{" "}
                {pkg.included}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={CONSULTING_INQUIRY_HREF}
                  className="premium-button rounded-[16px] border border-[rgba(168,132,58,0.34)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                >
                  Request Consulting
                </ButtonLink>
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>HOW IT WORKS</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {processSteps.map((step) => (
            <Surface key={step.title} compact>
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
                {step.title}
              </div>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{step.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>REQUEST CONSULTING</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Request Consulting.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              Send the decision, timeline, and constraints. We will respond with
              scope and next steps.
            </p>
          </div>
          <ButtonLink
            href={CONSULTING_INQUIRY_HREF}
            className="premium-button shrink-0 rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
          >
            Request Consulting
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}
