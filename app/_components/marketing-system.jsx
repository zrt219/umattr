import Link from "next/link";

export const SITE_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "AI Programs", href: "/programs" },
  { label: "Career Intelligence", href: "/career-intelligence" },
  { label: "Consulting", href: "/consulting" },
  { label: "About", href: "/about" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "AI Programs", href: "/programs" },
      { label: "Career Intelligence", href: "/career-intelligence" },
      { label: "Consulting", href: "/consulting" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "UMATTR AI Foundations", href: "/programs/foundations" },
      { label: "UMATTR AI for Work", href: "/programs/for-work" },
      { label: "UMATTR AI for Business", href: "/programs/for-business" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "About", href: "/about" },
      { label: "Login", href: "/login" },
      { label: "Start Free", href: "/start" },
    ],
  },
];

export const PROGRAM_DETAIL_LINKS = {
  foundations: "/programs/foundations",
  forWork: "/programs/for-work",
  forBusiness: "/programs/for-business",
};

export const PAYHIP_LINKS = {
  foundations: "https://payhip.com/umattr/foundations",
  forWork: "https://payhip.com/umattr/for-work",
  forBusiness: "https://payhip.com/umattr/for-business",
  careerFamily: "https://payhip.com/umattr/career-intelligence",
  careerCore: "https://payhip.com/umattr/career-intelligence/core",
  careerPlus: "https://payhip.com/umattr/career-intelligence/plus",
  careerPro: "https://payhip.com/umattr/career-intelligence/pro",
};

export const FREE_TOOL_LINKS = {
  assessment: "/assessment",
  glossary: "/glossary",
  dashboard: "/dashboard",
  previews: "/programs/foundations",
};

export const CONSULTING_INQUIRY_HREF =
  "mailto:consulting@umattr.com?subject=UMATTR%20Consulting%20Request&body=Decision%3A%0ATimeline%3A%0AContext%3A%0AWhat%20needs%20attention%3A";

export const DEFAULT_FOOTER_LINE =
  "Start free, then move into the route that fits the decision.";

function isExternalHref(href) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function ButtonLink({
  href,
  children,
  className = "",
  newTab = false,
  ...props
}) {
  if (isExternalHref(href) || href === "#") {
    return (
      <a
        href={href}
        className={className}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}

export function SectionLabel({ children, className = "" }) {
  return (
    <div
      className={`text-[11px] font-semibold uppercase tracking-[0.32em] text-[#A8843A] ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  return (
    <div className={className}>
      {label ? <SectionLabel>{label}</SectionLabel> : null}
      <h1
        className={`mt-4 text-[clamp(2.4rem,5vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#1A1A1A] ${titleClassName}`}
      >
        {title}
      </h1>
      {description ? (
        <p
          className={`mt-5 max-w-[38rem] text-[16px] leading-8 text-[#6B6B6B] md:text-[17px] ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Surface({
  children,
  className = "",
  featured = false,
  compact = false,
}) {
  const shellClasses = featured
    ? "border-[rgba(168,132,58,0.24)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,247,240,0.94))] shadow-[0_24px_70px_rgba(33,27,18,0.08)]"
    : "border-[rgba(198,165,92,0.14)] bg-white/88 shadow-[0_18px_52px_rgba(33,27,18,0.06)]";

  return (
    <div
      className={`premium-card relative overflow-hidden rounded-[28px] border ${compact ? "p-4 md:p-5" : "p-6 md:p-7"} ${shellClasses} ${className}`}
    >
      {children}
    </div>
  );
}

function getIsActive(href, activeHref) {
  if (!activeHref) {
    return false;
  }

  if (href === "/") {
    return activeHref === "/";
  }

  return (
    activeHref === href ||
    activeHref.startsWith(`${href}/`) ||
    activeHref.startsWith(`${href}#`)
  );
}

function MarketingStyles() {
  return (
    <style>{`
      :root {
        --ivory: #F8F6F1;
        --white: #FFFFFF;
        --gold: #C6A55C;
        --gold-deep: #A8843A;
        --text-primary: #1A1A1A;
        --text-secondary: #6B6B6B;
        --border-soft: rgba(198, 165, 92, 0.16);
        --border-strong: rgba(198, 165, 92, 0.28);
        --shadow-card: 0 22px 68px rgba(33, 27, 18, 0.07), 0 8px 24px rgba(33, 27, 18, 0.04);
        --shadow-hover: 0 28px 84px rgba(33, 27, 18, 0.11), 0 12px 30px rgba(33, 27, 18, 0.07);
        --shadow-nav: 0 10px 40px rgba(35, 28, 18, 0.06);
        --ease-premium: cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(16px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes sheen {
        0% {
          transform: translateX(-140%) skewX(-18deg);
          opacity: 0;
        }
        30% {
          opacity: 0.18;
        }
        100% {
          transform: translateX(180%) skewX(-18deg);
          opacity: 0;
        }
      }

      .fade-up {
        animation: fadeUp 700ms var(--ease-premium) both;
      }

      .glass {
        background: rgba(255, 255, 255, 0.82);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      .noise::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0.035;
        background-image:
          radial-gradient(circle at 18% 18%, rgba(198,165,92,0.14) 0, transparent 28%),
          radial-gradient(circle at 82% 14%, rgba(168,132,58,0.10) 0, transparent 24%),
          radial-gradient(circle at 50% 80%, rgba(255,255,255,0.5) 0, transparent 30%);
        mix-blend-mode: multiply;
      }

      .premium-button,
      .premium-card,
      .nav-link,
      .subtle-link {
        transition: all 180ms var(--ease-premium);
      }

      .premium-button {
        position: relative;
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }

      .premium-button::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 32%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
        transform: translateX(-160%) skewX(-18deg);
      }

      .premium-button:hover::after {
        animation: sheen 900ms var(--ease-premium);
      }

      .premium-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-hover);
        border-color: var(--border-strong);
      }

      .nav-link {
        position: relative;
        text-decoration: none;
      }

      .nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 1.5px;
        background: linear-gradient(90deg, rgba(198,165,92,0), rgba(198,165,92,0.95), rgba(198,165,92,0));
        transform: scaleX(0.28);
        transform-origin: center;
        opacity: 0;
        transition: all 180ms var(--ease-premium);
      }

      .nav-link:hover::after,
      .nav-link.active::after {
        transform: scaleX(1);
        opacity: 1;
      }

      .subtle-link {
        text-decoration: none;
      }

      .subtle-link:hover {
        color: var(--text-primary);
      }
    `}</style>
  );
}

function SiteHeader({ activeHref }) {
  return (
    <header className="relative z-10 mx-auto max-w-[1440px] px-6 pt-6 md:px-10 lg:px-12">
      <div className="glass fade-up mx-auto flex max-w-[1200px] items-center justify-between rounded-[28px] border border-[rgba(198,165,92,0.16)] px-5 py-4 shadow-[var(--shadow-nav)] md:px-7">
        <ButtonLink
          href="/"
          className="flex items-center gap-3 text-[28px] font-semibold tracking-[-0.04em] text-[#1A1A1A] no-underline"
        >
          UMATTR
        </ButtonLink>

        <nav className="hidden items-center gap-7 lg:flex lg:gap-8">
          {SITE_NAV_ITEMS.map((item) => {
            const active = getIsActive(item.href, activeHref);

            return (
              <ButtonLink
                key={item.label}
                href={item.href}
                className={`nav-link text-[15px] font-medium tracking-[-0.02em] ${active ? "active text-[#1A1A1A]" : "text-[#1A1A1A]/78 hover:text-[#1A1A1A]"}`}
              >
                {item.label}
              </ButtonLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <ButtonLink
            href="/login"
            className="subtle-link hidden text-[15px] font-medium text-[#1A1A1A]/78 lg:inline-flex"
          >
            Login
          </ButtonLink>
          <ButtonLink
            href="/start"
            className="premium-button rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-5 py-3 text-[15px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_10px_30px_rgba(198,165,92,0.24)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(198,165,92,0.28)]"
          >
            Start Free
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ footerLine = DEFAULT_FOOTER_LINE }) {
  return (
    <footer className="border-t border-[rgba(168,132,58,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.96))]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.08fr_1.92fr] lg:gap-14 lg:px-12">
        <div className="border-b border-[rgba(198,165,92,0.10)] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#A8843A]">
            UMATTR
          </div>
          <ButtonLink
            href="/"
            className="mt-4 block text-[60px] font-semibold leading-none tracking-[-0.065em] text-[#C6A55C] no-underline md:text-[72px]"
          >
            UMATTR
          </ButtonLink>
          <p className="mt-5 max-w-[24rem] text-[15px] leading-7 text-[#6B6B6B] md:text-[16px] md:leading-8">
            {footerLine}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:pl-2">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#1A1A1A]">
                {column.title}
              </div>
              <div className="mt-5 space-y-3 text-[15px] text-[#1A1A1A] md:text-[16px]">
                {column.links.map((link) => (
                  <ButtonLink key={link.label} href={link.href} className="subtle-link block">
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function MarketingChrome({
  activeHref,
  children,
  footerLine = DEFAULT_FOOTER_LINE,
  mainClassName = "mx-auto max-w-[1440px] px-6 pb-20 pt-10 md:px-10 lg:px-12 lg:pb-28 lg:pt-12",
}) {
  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#1A1A1A] antialiased selection:bg-[#C6A55C]/20">
      <MarketingStyles />

      <div className="relative overflow-hidden noise">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(198,165,92,0.14),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(198,165,92,0.08),transparent_24%),radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.85),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,246,241,0.88)_55%,rgba(248,246,241,0.56)_100%)]" />

        <SiteHeader activeHref={activeHref} />

        <main className={`relative z-10 ${mainClassName}`}>{children}</main>

        <SiteFooter footerLine={footerLine} />
      </div>
    </div>
  );
}
