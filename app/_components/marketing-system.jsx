import Link from "next/link";

export const MAIN_CTA_LINK = "https://payhip.com/UMATTR";

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
      { label: "Start Free", href: MAIN_CTA_LINK },
    ],
  },
];

export const PROGRAM_DETAIL_LINKS = {
  foundations: "/programs/foundations",
  forWork: "/programs/for-work",
  forBusiness: "/programs/for-business",
};

export function BrandLogoMark({
  className = "h-12 w-auto",
  title,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <BrandLogoMarkShape />
    </svg>
  );
}

export function BrandLogoWordmark({
  className = "h-11 w-auto",
  ...props
}) {
  return (
    <svg
      viewBox="0 0 520 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <text
        x="0"
        y="86"
        fill={BRAND_GOLD}
        fontSize="84"
        fontWeight="900"
        letterSpacing="-0.06em"
        style={{
          fontFamily:
            '"Arial Black", "Avenir Next Condensed", "Helvetica Neue", Arial, sans-serif',
        }}
        textLength="480"
        lengthAdjust="spacingAndGlyphs"
        shapeRendering="geometricPrecision"
      >
        UMATTR
      </text>
    </svg>
  );
}

export function BrandLogo({
  variant = "inline",
  className = "",
  title = "UMATTR",
  ...props
}) {
  if (variant === "icon") {
    return <BrandLogoMark className={className} title={title} {...props} />;
  }

  if (variant === "stacked") {
    return (
      <div className={`inline-flex flex-col items-start gap-2 ${className}`} {...props}>
        <BrandLogoMark className="h-12 w-auto" aria-hidden="true" />
        <BrandLogoWordmark className="h-12 w-auto" />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`} {...props}>
      <BrandLogoMark className="h-10 w-auto" aria-hidden="true" />
      <BrandLogoWordmark className="h-8 w-auto" />
    </div>
  );
}

export const PAYHIP_LINKS = {
  foundations: "https://payhip.com/b/FKJ7n",
  forWork: "https://payhip.com/b/HshI4",
  forBusiness: "https://payhip.com/b/T5xuf",
  careerIntelligence: "https://payhip.com/b/iybAI",
};

const BRAND_GOLD = "#C6A55C";
const BRAND_GOLD_DEEP = "#A8843A";

const BRAND_BIRD_PATH =
  "M15 58C26 47 39 40 54 36C68 33 82 33 94 36C104 39 113 44 120 50C128 45 136 43 144 43C138 49 132 54 126 57C119 60 111 61 103 60C97 59 92 57 87 53C83 59 78 64 71 67C64 70 57 71 49 70C41 69 34 66 28 61C23 63 18 63 13 62C11 61 11 60 15 58Z";

export function BrandLogoMarkShape() {
  return (
    <>
      <path d={BRAND_BIRD_PATH} fill={BRAND_GOLD} />
      <path
        d="M58 58C68 52 79 49 92 50C88 54 83 57 77 59C72 61 66 62 59 62C55 61 55 60 58 58Z"
        fill={BRAND_GOLD_DEEP}
      />
      <path
        d="M71 66C76 68 80 72 82 76C84 80 83 84 79 87C74 90 67 90 61 87C56 84 53 81 52 77C52 73 56 69 64 67C66 66 68 66 71 66Z"
        fill={BRAND_GOLD}
      />
    </>
  );
}

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
          className="no-underline"
        >
          <BrandLogo variant="inline" />
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
            href={MAIN_CTA_LINK}
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
          <ButtonLink
            href="/"
            className="inline-flex no-underline"
          >
            <BrandLogo variant="stacked" />
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
