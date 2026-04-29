import {
  BrandBirdMark,
  ButtonLink,
  CONSULTING_INQUIRY_HREF,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";
import { LocalizedText } from "../_components/locale-provider.jsx";

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
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1F1F1F]">
              <LocalizedText translationKey="products.consulting" fallback="Consulting" suffix=" for decisions that carry real cost." />
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#5A5A5A] md:text-[18px]">
              Use <LocalizedText translationKey="products.consulting" fallback="Consulting" /> when the decision touches systems, money, operations, vendors, or risk and you want a more selective human-guided route.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={CONSULTING_INQUIRY_HREF}
                className="premium-button button-primary button-standout rounded-[18px] border border-[rgba(184,150,46,0.38)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-6 py-4 text-[15px] font-semibold tracking-[-0.02em] text-[#1F1F1F] shadow-[0_14px_34px_rgba(212,175,55,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(212,175,55,0.28)]"
              >
                Request <LocalizedText translationKey="products.consulting" fallback="Consulting" />
              </ButtonLink>
              <ButtonLink
                href="/career-intelligence"
                className="premium-button button-secondary button-standout rounded-[18px] border border-[rgba(212,175,55,0.18)] bg-white/75 px-6 py-4 text-[15px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
              >
                <LocalizedText
                  translationKey="products.careerIntelligence"
                  fallback="Career Intelligence"
                />
              </ButtonLink>
            </div>
          </div>

          <Surface
            className="fade-up min-h-[24rem] border-[rgba(184,150,46,0.30)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,246,236,0.96))] shadow-[0_30px_88px_rgba(33,27,18,0.1)] lg:self-end"
            featured
          >
            <BrandBirdMark />
            <div className="relative text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E]">
              High-trust route
            </div>
            <div className="relative mt-6 space-y-5">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F]">
                  Selective
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#5A5A5A]">
                  This is the route for decisions that deserve more than a quick
                  answer.
                </p>
              </div>
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F]">
                  High-trust
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#5A5A5A]">
                  The conversation stays focused on the actual decision, not on
                  generic support.
                </p>
              </div>
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F]">
                  Future billing
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#5A5A5A]">
                  Scope now, invoice later. Stripe invoice handling can slot in when
                  the flow is ready.
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>WHEN TO USE CONSULTING</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1F1F1F]">
          Use the premium route when the call matters.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Surface key={useCase.title} compact>
              <h3 className="text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F1F1F]">
                {useCase.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#5A5A5A]">{useCase.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>CONSULTING PACKAGES</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1F1F1F]">
          Core, Plus, and Pro.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {consultingPackages.map((pkg, index) => (
            <Surface
              key={pkg.title}
              featured={index === 2}
              className={index === 2 ? "border-[rgba(184,150,46,0.30)]" : ""}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.10em] text-[#B8962E]">
                {pkg.title}
              </div>
              <h3 className="mt-4 text-[26px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1F1F1F]">
                {pkg.positioning}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#5A5A5A]">
                <span className="font-semibold text-[#1F1F1F]">Fit:</span> {pkg.fit}
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[#5A5A5A]">
                <span className="font-semibold text-[#1F1F1F]">Included:</span>{" "}
                {pkg.included}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={CONSULTING_INQUIRY_HREF}
                  className="premium-button button-secondary button-standout rounded-[16px] border border-[rgba(184,150,46,0.34)] bg-white/88 px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.10em] text-[#1F1F1F] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.32)] hover:bg-white"
                >
                  Request <LocalizedText translationKey="products.consulting" fallback="Consulting" />
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
              <div className="text-[12px] font-semibold uppercase tracking-[0.20em] text-[#B8962E]">
                {step.title}
              </div>
              <p className="mt-3 text-[15px] leading-7 text-[#5A5A5A]">{step.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>REQUEST</SectionLabel>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1F1F1F]">
              Request <LocalizedText translationKey="products.consulting" fallback="Consulting" />.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#5A5A5A]">
              Send the decision, timeline, and constraints. We will respond with
              scope and next steps.
            </p>
          </div>
          <ButtonLink
            href={CONSULTING_INQUIRY_HREF}
            className="premium-button button-primary button-standout shrink-0 rounded-[18px] border border-[rgba(184,150,46,0.38)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-6 py-4 text-[15px] font-semibold tracking-[-0.02em] text-[#1F1F1F] shadow-[0_14px_34px_rgba(212,175,55,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(212,175,55,0.28)]"
          >
            Request <LocalizedText translationKey="products.consulting" fallback="Consulting" />
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}

