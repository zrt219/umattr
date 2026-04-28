"use client";

import Link from "next/link";
import { GTranslateWidget, useLocale } from "./locale-provider.jsx";
import {
  FREE_TOOL_LINKS,
  PAYHIP_LINKS,
  PROGRAM_DETAIL_LINKS,
  START_FREE_HREF,
} from "../../lib/umattr-links.js";

export { FREE_TOOL_LINKS, PAYHIP_LINKS, PROGRAM_DETAIL_LINKS, START_FREE_HREF };

export const SITE_NAV_ITEMS = [
  { key: "common.home", fallback: "Home", href: "/" },
  { label: "AI Programs", href: "/programs" },
  {
    key: "products.careerIntelligence",
    fallback: "Career Intelligence",
    href: "/career-intelligence",
  },
  { key: "products.consulting", fallback: "Consulting", href: "/consulting" },
  { key: "common.about", fallback: "About", href: "/about" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Navigation",
    links: [
      { key: "common.home", fallback: "Home", href: "/" },
      { label: "AI Programs", href: "/programs" },
      {
        key: "products.careerIntelligence",
        fallback: "Career Intelligence",
        href: "/career-intelligence",
      },
      { key: "products.consulting", fallback: "Consulting", href: "/consulting" },
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
      { key: "common.about", fallback: "About", href: "/about" },
      { label: "Start Free", href: "/start" },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@umattrofficial",
    icon: "tiktok",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/umattr",
    icon: "linkedin",
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/UmattrOfficial",
    icon: "reddit",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@UMATTROfficial",
    icon: "youtube",
  },
  {
    label: "Kick",
    href: "https://kick.com/umattr",
    icon: "kick",
  },
  {
    label: "Pinterest",
    href: "https://ca.pinterest.com/umattrofficial/",
    icon: "pinterest",
  },
  {
    label: "X",
    href: "https://x.com/UMATTROfficial",
    icon: "x",
  },
];

export const CONSULTING_INQUIRY_HREF =
  "mailto:consulting@umattr.com?subject=UMATTR%20Consulting%20Request&body=Decision%3A%0ATimeline%3A%0AContext%3A%0AWhat%20needs%20attention%3A";

export const DEFAULT_FOOTER_LINE =
  "Start free, then move into the route that fits the decision.";

function isExternalHref(href) {
  return typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);
}

export function ButtonLink({
  href,
  children,
  className = "",
  newTab = false,
  ...props
}) {
  const effectiveHref = href === "/start" ? START_FREE_HREF : href || "#";

  if (isExternalHref(effectiveHref)) {
    return (
      <a
        href={effectiveHref}
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
    <Link href={effectiveHref} className={className} {...props}>
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

export function BrandBirdMark({ className = "" }) {
  return (
    <img
      src="/brand/umattr-mark.png"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute right-5 top-5 w-28 opacity-20 sm:w-36 lg:right-7 lg:top-7 lg:w-40 ${className}`}
    />
  );
}

function SocialIcon({ icon }) {
  const iconClassName = "h-4 w-4";

  if (icon === "tiktok") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M16.6 2.2c.4 2.4 1.8 4 4.1 4.3v3.4a8.1 8.1 0 0 1-4.1-1.2v6.2c0 4-2.6 6.8-6.4 6.8-3.5 0-6.1-2.3-6.1-5.6 0-3.4 2.7-5.8 6.3-5.8.4 0 .8 0 1.1.1v3.5a4 4 0 0 0-1.2-.2c-1.6 0-2.7.9-2.7 2.3s1 2.3 2.5 2.3c1.7 0 2.7-1 2.7-3V2.2h3.8Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M5.3 8.9H2.1v12.2h3.2V8.9ZM3.7 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Zm17.9 10.7c0-3.3-1.8-5.1-4.5-5.1-2 0-3.1 1.1-3.6 2h-.1V8.9h-3.1v12.2h3.2v-6.4c0-1.7.8-2.9 2.4-2.9 1.5 0 2.4 1.1 2.4 2.9v6.4h3.2v-7.4Z" />
      </svg>
    );
  }

  if (icon === "reddit") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M21.7 11.7c0-1.4-1.1-2.5-2.5-2.5-.7 0-1.3.3-1.8.7-1.3-.8-3.1-1.4-5-1.5l.9-4.1 2.8.6a2 2 0 1 0 .2-1.3l-3.5-.7a.7.7 0 0 0-.8.5l-1.1 5c-2 .1-3.8.6-5.2 1.5a2.5 2.5 0 1 0-2.8 4.1v.4c0 3.3 3.7 6 8.3 6s8.3-2.7 8.3-6v-.4c.8-.4 1.2-1.2 1.2-2.3Zm-14.2 2a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 0 1-2.8 0Zm7.6 3.4c-.8.8-1.8 1.1-3 1.1s-2.2-.4-3-1.1a.6.6 0 0 1 .8-.9c.5.5 1.2.7 2.2.7s1.7-.2 2.2-.7a.6.6 0 0 1 .8.9Zm-.5-2a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z" />
      </svg>
    );
  }

  if (icon === "kick") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M5.8 4.2h4.1v5l4.4-5h5l-5.5 6.2 5.9 9.4h-4.8L11.7 14l-1.8 2v3.8H5.8V4.2Z" />
      </svg>
    );
  }

  if (icon === "pinterest") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2.2a9.8 9.8 0 0 0-3.6 18.9c-.1-.8-.2-2 .1-2.9l1.4-5.8s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.3 1.1.6 2 1.7 2 2.1 0 3.6-2.6 3.6-5.7 0-2.4-1.6-4.3-4.6-4.3-3.4 0-5.5 2.6-5.5 5.5 0 1 .3 1.7.8 2.2.2.2.2.3.2.5-.1.4-.2 1.2-.2 1.4 0 .2-.1.3-.4.2-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.9 0 3.5-2.2 6.3-5.3 6.3-1 0-1.9-.5-2.2-1.1l-.6 2.2c-.2.9-.8 2-1.2 2.7A9.8 9.8 0 1 0 12 2.2Z" />
      </svg>
    );
  }

  if (icon === "x") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M4.5 4.5h3.7l4 5.7 4.6-5.7h3.2l-6.4 7.9 6.7 7.1h-3.7l-4.4-5.1-4.9 5.1H4l6.9-8.3L4.5 4.5Z" />
      </svg>
    );
  }

  return (
    <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 1.9 12c0 1.7.1 3.4.5 4.9A3 3 0 0 0 4.5 19c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.4-1.5.5-3.2.5-4.9s-.1-3.4-.5-4.9ZM10 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

export function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          title={link.label}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/45 text-[#D4AF37] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E6C65C] hover:bg-[#E6C65C]/12 hover:text-[#B8962E] sm:h-10 sm:w-10"
        >
          <SocialIcon icon={link.icon} />
        </a>
      ))}
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
        --gold-primary: #D4AF37;
        --gold-hover: #E6C65C;
        --gold-deep-hover: #B8962E;
        --button-primary-bg: #D4AF37;
        --button-primary-bg-hover: #E6C65C;
        --button-primary-border: #D4AF37;
        --button-primary-border-hover: #E6C65C;
        --button-primary-text: #1A1A1A;
        --button-secondary-bg: #D4AF37;
        --button-secondary-bg-hover: #E6C65C;
        --button-secondary-border: #D4AF37;
        --button-secondary-border-hover: #E6C65C;
        --button-secondary-text: #1A1A1A;
        --text-primary: #1A1A1A;
        --text-secondary: #6B6B6B;
        --border-soft: rgba(198, 165, 92, 0.16);
        --border-strong: rgba(198, 165, 92, 0.28);
        --priority-high: #D4AF37;
        --priority-medium: #A8843A;
        --priority-strategic: #6B6B6B;
        --priority-high-border: rgba(198, 165, 92, 0.28);
        --priority-medium-border: rgba(198, 165, 92, 0.16);
        --priority-strategic-border: rgba(198, 165, 92, 0.12);
        --priority-soft-bg: rgba(248, 246, 241, 0.72);
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

      .button-primary {
        background: var(--button-primary-bg) !important;
        border-color: var(--button-primary-border) !important;
        color: var(--button-primary-text) !important;
        box-shadow: 0 12px 30px rgba(184, 150, 46, 0.24);
      }

      .button-primary:not(:disabled):hover {
        background: var(--button-primary-bg-hover) !important;
        border-color: var(--button-primary-border-hover) !important;
        color: var(--button-primary-text) !important;
        box-shadow: 0 16px 38px rgba(184, 150, 46, 0.28);
      }

      .premium-button.button-standout {
        border-color: var(--gold-deep-hover) !important;
        box-shadow: 0 15px 36px rgba(184, 150, 46, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.28);
      }

      .premium-button.button-standout:not(:disabled):hover {
        box-shadow: 0 19px 46px rgba(184, 150, 46, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.34);
      }

      .button-secondary {
        background: var(--button-secondary-bg) !important;
        border-color: var(--button-secondary-border) !important;
        color: var(--button-secondary-text) !important;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.76), 0 7px 20px rgba(33, 27, 18, 0.03);
      }

      .button-secondary:not(:disabled):hover {
        background: var(--button-secondary-bg-hover) !important;
        border-color: var(--button-secondary-border-hover) !important;
        color: var(--button-secondary-text) !important;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 12px 28px rgba(184, 150, 46, 0.16);
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
        color: var(--gold-deep);
      }

      .priority-badge {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        border-radius: 999px;
        border: 1px solid var(--priority-medium-border);
        background: rgba(255, 255, 255, 0.72);
        padding: 0.42rem 0.62rem;
        color: var(--gold-deep);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.22em;
        line-height: 1;
        text-transform: uppercase;
      }

      .priority-high {
        border-color: var(--priority-high-border);
        box-shadow: 0 18px 50px rgba(184, 150, 46, 0.10);
      }

      .priority-high:hover {
        border-color: rgba(212, 175, 55, 0.48);
        box-shadow: 0 24px 68px rgba(184, 150, 46, 0.16);
      }

      .priority-medium {
        border-color: var(--priority-medium-border);
        background: var(--priority-soft-bg);
      }

      .priority-strategic {
        border-color: var(--priority-strategic-border);
        color: var(--priority-strategic);
      }

      .gtranslate-shell {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .gtranslate-shell .gtranslate_wrapper,
      .gtranslate-shell select {
        width: 100%;
      }

      .gtranslate-shell select {
        height: 44px;
        border: 0 !important;
        background: transparent !important;
        color: #1A1A1A !important;
        font-family: inherit !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        letter-spacing: -0.02em !important;
        outline: none !important;
        cursor: pointer;
      }

      .gtranslate-shell select option {
        color: #1A1A1A;
      }
    `}</style>
  );
}

function SiteHeader({ activeHref }) {
  const { t } = useLocale();

  return (
    <header className="relative z-10 mx-auto max-w-[1440px] px-6 pt-6 md:px-10 lg:px-12">
      <div className="glass fade-up mx-auto flex max-w-[1200px] items-center justify-between rounded-[28px] border border-[rgba(198,165,92,0.16)] px-5 py-4 shadow-[var(--shadow-nav)] md:px-7">
        <ButtonLink
          href="/"
          className="flex items-center gap-3 no-underline"
        >
          <img
            src="/brand/umattr-logo.png"
            alt="UMATTR"
            className="h-[34px] w-auto object-contain"
          />
        </ButtonLink>

        <nav className="hidden items-center gap-7 lg:flex lg:gap-8">
          {SITE_NAV_ITEMS.map((item) => {
            const active = getIsActive(item.href, activeHref);
            const label = item.key ? t(item.key, item.fallback) : item.label;

            return (
              <ButtonLink
                key={item.href}
                href={item.href}
                className={`nav-link text-[15px] font-medium tracking-[-0.02em] ${active ? "active text-[#1A1A1A]" : "text-[#1A1A1A]/78 hover:text-[#1A1A1A]"}`}
              >
                {label}
              </ButtonLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <GTranslateWidget />
          <ButtonLink
            href="/start"
            className="premium-button button-primary rounded-[18px] border border-[rgba(168,132,58,0.38)] bg-[linear-gradient(180deg,#D2B16A_0%,#C6A55C_52%,#B79247_100%)] px-7 py-4 text-[15px] font-semibold tracking-[-0.02em] text-[#1A1A1A] shadow-[0_10px_30px_rgba(198,165,92,0.24)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(198,165,92,0.28)]"
          >
            Start Free
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ footerLine = DEFAULT_FOOTER_LINE }) {
  const { t } = useLocale();

  return (
    <footer className="border-t border-[rgba(168,132,58,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.96))]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.08fr_1.92fr] lg:gap-14 lg:px-12">
        <div className="border-b border-[rgba(198,165,92,0.10)] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
          <ButtonLink
            href="/"
            className="block max-w-[240px] no-underline"
          >
            <img
              src="/brand/umattr-logo.png"
              alt="UMATTR"
              className="h-auto w-full object-contain"
            />
          </ButtonLink>
          <p className="mt-5 max-w-[24rem] text-[15px] leading-7 text-[#6B6B6B] md:text-[16px] md:leading-8">
            {footerLine}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <ButtonLink
              href="/start"
              className="inline-flex items-center rounded-full border border-[rgba(198,165,92,0.16)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8843A] no-underline transition-all duration-200 hover:border-[rgba(198,165,92,0.28)] hover:text-[#1A1A1A]"
            >
              Start Free
            </ButtonLink>
            <ButtonLink
              href="/programs"
              className="inline-flex items-center rounded-full border border-[rgba(198,165,92,0.16)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8843A] no-underline transition-all duration-200 hover:border-[rgba(198,165,92,0.28)] hover:text-[#1A1A1A]"
            >
              Programs
            </ButtonLink>
            <ButtonLink
              href="/career-intelligence"
              className="inline-flex items-center rounded-full border border-[rgba(198,165,92,0.16)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8843A] no-underline transition-all duration-200 hover:border-[rgba(198,165,92,0.28)] hover:text-[#1A1A1A]"
            >
              Career Intelligence
            </ButtonLink>
          </div>
          <SocialLinks className="mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:pl-2">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <div className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#1A1A1A]">
                {column.title}
              </div>
              <div className="mt-5 space-y-3 text-[15px] text-[#1A1A1A] md:text-[16px]">
                {column.links.map((link) => (
                  <ButtonLink
                    key={link.href}
                    href={link.href}
                    className="subtle-link block"
                  >
                    {link.label === "UMATTR AI Foundations"
                      ? `UMATTR ${t("products.aiFoundations", "AI Foundations")}`
                      : link.label === "UMATTR AI for Work"
                        ? `UMATTR ${t("products.aiForWork", "AI for Work")}`
                        : link.label === "UMATTR AI for Business"
                          ? `UMATTR ${t("products.aiForBusiness", "AI for Business")}`
                          : link.key
                            ? t(link.key, link.fallback)
                            : link.label}
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
