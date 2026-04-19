import {
  ButtonLink,
  MarketingChrome,
  SectionLabel,
  Surface,
} from "../_components/marketing-system.jsx";

export const metadata = {
  title: "Login",
  description:
    "UMATTR access is handled through the product routes and Payhip delivery.",
};

const routes = [
  {
    title: "Programs",
    description: "AI Foundations, AI for Work, and AI for Business.",
    href: "/programs",
  },
  {
    title: "Career Intelligence",
    description: "Core, Plus, and Pro package access through Payhip.",
    href: "/career-intelligence",
  },
  {
    title: "Consulting",
    description: "Selective inquiry-first consulting for higher-stakes decisions.",
    href: "/consulting",
  },
];

export default function LoginPage() {
  return (
    <MarketingChrome activeHref="/">
      <section className="mx-auto max-w-[1200px]">
        <SectionLabel>LOGIN</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="fade-up">
            <h1 className="max-w-[10ch] text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#1A1A1A]">
              Login is route access.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-8 text-[#6B6B6B] md:text-[18px]">
              UMATTR does not use a separate membership app here. The paid routes
              are handled through Payhip or consulting inquiry, so this page points
              you to the correct doorway.
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
              Access routes
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                The route is the access layer. There is no fake dashboard here.
              </p>
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                Choose the surface that matches the decision, then continue through
                the correct channel.
              </p>
              <p className="text-[15px] leading-7 text-[#6B6B6B]">
                This keeps the site honest and the path simple.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <SectionLabel>ROUTES</SectionLabel>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
          Choose the right doorway.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {routes.map((route) => (
            <Surface key={route.title} compact>
              <h3 className="text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1A1A1A]">
                {route.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[#6B6B6B]">{route.description}</p>
              <div className="mt-6">
                <ButtonLink
                  href={route.href}
                  className="premium-button rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[rgba(198,165,92,0.32)] hover:bg-white"
                >
                  Open route
                </ButtonLink>
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1200px]">
        <Surface featured className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>FINAL CTA</SectionLabel>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#1A1A1A]">
              Keep the access path simple.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-[#6B6B6B]">
              The premium feel stays intact when the doorway is clear.
            </p>
          </div>
          <ButtonLink
            href="/career-intelligence"
            className="premium-button rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_14px_34px_rgba(198,165,92,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(198,165,92,0.28)]"
          >
            Career Intelligence
          </ButtonLink>
        </Surface>
      </section>
    </MarketingChrome>
  );
}
