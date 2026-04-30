import {
  ButtonLink,
  MarketingChrome,
} from "../_components/marketing-system.jsx";

export const metadata = {
  title: "Products | UMATTR",
  description:
    "Download and open UMATTR products for calm, clarity, connection, and growth.",
};

const WORD_SEARCH_APK =
  "/products-assets/UMATTR-Word-Search-ca.umattr.wordsearch-v1.0-debug.apk";
const MIND_URL = "https://umatter-mind.lovable.app";

const liveProducts = [
  {
    id: "word-search",
    title: "UMATTR Word Search",
    description:
      "Daily puzzles, gentle progress, and a calmer way to play with focus.",
    image: "/products-assets/umattr-campaign-word-search-display.png",
    alt: "UMATTR Word Search app preview",
    imageClassName:
      "h-full w-full object-cover object-[48%_center] filter-none",
    imageFrameClassName:
      "product-card__media--word-search bg-[radial-gradient(circle_at_24%_20%,rgba(216,173,47,0.08),transparent_32%),linear-gradient(135deg,#fff8ed_0%,#f7ead4_56%,#fffaf2_100%)]",
    tags: ["Android APK", "Daily puzzle flow", "Gentle focus"],
    detailHref: "#word-search",
    actionHref: WORD_SEARCH_APK,
    actionLabel: "Download APK",
    download: true,
  },
  {
    id: "mind",
    title: "UMATTR Mind",
    description:
      "A quiet companion for notes, reflection, mood check-ins, and support.",
    image: "/products-assets/umattr-mind-display-poster.png",
    alt: "UMATTR Mind product preview",
    imageClassName: "h-full w-full object-cover object-[center_56%]",
    imageFrameClassName:
      "product-card__media--mind bg-[radial-gradient(circle_at_72%_18%,rgba(216,173,47,0.10),transparent_34%),linear-gradient(135deg,#fff7ea_0%,#ead4aa_52%,#fff9ef_100%)]",
    tags: ["Web app", "Mood check-ins", "Warm AI guidance"],
    detailHref: MIND_URL,
    actionHref: MIND_URL,
    actionLabel: "Open UMATTR Mind",
    newTab: true,
  },
];

const comingSoonProducts = [
  {
    title: "UMATTR Signal",
    description:
      "Private conversations for clearer career momentum, support, and thoughtful follow-through.",
    image: "/products-assets/umattr-coming-soon-signal-teaser-blur.png",
    alt: "Soft teaser artwork for UMATTR Signal",
  },
  {
    title: "UMATTR Music",
    description:
      "A calm listening experience for focus, reflection, and rest.",
    image: "/products-assets/umattr-coming-soon-music-teaser-blur.png",
    alt: "Soft teaser artwork for UMATTR Music",
  },
  {
    title: "UMATTR Career Circle",
    description:
      "A private network for accountability, support, and next moves.",
    image: "/products-assets/umattr-coming-soon-career-circle-teaser-blur.png",
    alt: "Soft teaser artwork for UMATTR Career Circle",
  },
];

const stats = [
  ["2", "Live products", "Ready to use today"],
  ["3", "In development", "Coming soon"],
  ["10K+", "Active users", "Growing every day"],
  ["Secure & Private", "Your data stays yours.", "Always protected"],
];

function Arrow() {
  return <span aria-hidden="true">-&gt;</span>;
}

function ProductTag({ children }) {
  return (
    <span className="inline-flex min-h-[36px] items-center gap-2 rounded-full border border-[rgba(184,150,46,0.28)] bg-[linear-gradient(180deg,rgba(255,250,238,0.96),rgba(247,238,219,0.88))] px-3.5 text-[12.5px] font-semibold text-[#6F5420] shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-[#C49128] shadow-[0_0_0_3px_rgba(212,175,55,0.13)]"
      />
      {children}
    </span>
  );
}

function ProductButton({
  href,
  children,
  primary = false,
  download = false,
  newTab = false,
}) {
  const className = primary
    ? "premium-button button-primary inline-flex min-h-[46px] flex-1 items-center justify-center gap-3 whitespace-nowrap rounded-[16px] border border-[rgba(184,150,46,0.38)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-4 py-0 text-[12.5px] font-semibold tracking-[-0.01em] text-[#1F1F1F] shadow-[0_12px_30px_rgba(212,175,55,0.22)] hover:-translate-y-0.5"
    : "premium-button inline-flex min-h-[46px] flex-1 items-center justify-center whitespace-nowrap rounded-[16px] border border-[rgba(184,150,46,0.38)] bg-white/72 px-4 py-0 text-[12.5px] font-semibold text-[#A8843A] shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] hover:-translate-y-0.5 hover:bg-white";

  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }

  return (
    <ButtonLink href={href} newTab={newTab} className={className}>
      {children}
    </ButtonLink>
  );
}

export default function ProductsPage() {
  return (
    <MarketingChrome
      activeHref="/products"
      footerLine="Download what is ready, then follow the next products as they take shape."
      mainClassName="mx-auto max-w-[1280px] px-6 pb-20 pt-10 md:px-10 lg:px-12 lg:pb-28 lg:pt-12"
    >
      <style>{`
        .product-card__media--word-search {
          display: grid;
          place-items: center;
        }

        .product-card__media--word-search::before,
        .product-card__media--word-search::after {
          content: none !important;
        }

        .product-card__media--word-search img {
          filter: none !important;
          transform: none !important;
        }
      `}</style>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[38px] border border-[rgba(198,165,92,0.18)] bg-white/80 p-8 shadow-[0_24px_76px_rgba(33,27,18,0.06)] md:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-x-[-12%] bottom-[-34%] h-[320px] bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_62%)]" />
          <div className="relative">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
              ALL PRODUCTS
            </div>
            <h1 className="mt-5 max-w-[9ch] font-serif text-[clamp(4.2rem,8vw,6.7rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#1A1A1A]">
              Products to download.
            </h1>
            <p className="mt-7 max-w-[35rem] text-[19px] leading-9 text-[#5F5F5F]">
              Tools for calm, clarity, connection, and growth. Access on the
              web, desktop, or mobile anytime, anywhere.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="#live-products"
                className="premium-button button-primary inline-flex min-h-[56px] items-center justify-center gap-3 rounded-[18px] border border-[rgba(184,150,46,0.38)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-7 py-0 text-[15px] font-semibold text-[#1F1F1F] shadow-[0_14px_34px_rgba(212,175,55,0.24)] hover:-translate-y-0.5"
              >
                Browse Products <Arrow />
              </ButtonLink>
              <ButtonLink
                href="#coming-soon"
                className="premium-button inline-flex min-h-[56px] items-center justify-center rounded-[18px] border border-[rgba(168,132,58,0.46)] bg-white/74 px-7 py-0 text-[15px] font-semibold text-[#A8843A] hover:-translate-y-0.5 hover:bg-white"
              >
                See What&apos;s Coming
              </ButtonLink>
            </div>
          </div>
        </div>

        <aside className="rounded-[36px] border border-[rgba(198,165,92,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,240,0.84))] p-7 shadow-[0_24px_76px_rgba(33,27,18,0.06)]">
          <div className="divide-y divide-[rgba(198,165,92,0.24)]">
            {stats.map(([value, label, note]) => (
              <div key={label} className="grid grid-cols-[64px_1fr] gap-5 py-5 first:pt-0 last:pb-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(212,175,55,0.34)] bg-white/70 text-[22px] font-semibold text-[#B8962E] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  {value === "Secure & Private" ? "S" : value}
                </div>
                <div>
                  <div className="font-serif text-[30px] leading-none tracking-[-0.03em] text-[#1A1A1A]">
                    {value}
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-[#1A1A1A]">
                    {label}
                  </div>
                  <div className="text-[13px] leading-6 text-[#6B6B6B]">
                    {note}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ButtonLink
            href="#live-products"
            className="premium-button button-primary mt-7 inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-[16px] border border-[rgba(184,150,46,0.38)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-6 py-0 text-[15px] font-semibold text-[#1F1F1F] shadow-[0_14px_34px_rgba(212,175,55,0.24)] hover:-translate-y-0.5"
          >
            View Products <Arrow />
          </ButtonLink>
        </aside>
      </section>

      <section id="live-products" className="mt-16">
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
          LIVE PRODUCTS
        </div>
        <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-normal leading-[1] tracking-[-0.04em] text-[#1A1A1A]">
          Open the products already in motion.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-2">
          {liveProducts.map((product) => (
            <article
              id={product.id}
              key={product.title}
              className="grid rounded-[26px] border border-[rgba(198,165,92,0.18)] bg-white/84 p-3 shadow-[0_18px_54px_rgba(33,27,18,0.06)] md:p-4"
            >
              <div
                className={`relative flex aspect-[4/3] min-h-[330px] items-center justify-center overflow-hidden rounded-[26px_26px_20px_20px] border border-[rgba(196,145,40,0.18)] bg-[#fbf6ea] ${
                  product.imageFrameClassName ?? ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className={
                    product.imageClassName ??
                    "h-full w-full object-cover object-center"
                  }
                />
              </div>
              <div className="px-2 pb-1 pt-4">
                <h3 className="font-serif text-[clamp(1.9rem,3vw,2.45rem)] font-normal leading-none tracking-[-0.045em] text-[#1A1A1A]">
                  {product.title}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-[#6B6B6B]">
                  {product.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <ProductTag key={tag}>{tag}</ProductTag>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <ProductButton href={product.detailHref} newTab={product.newTab}>
                    View Details
                  </ProductButton>
                  <ProductButton
                    href={product.actionHref}
                    primary
                    download={product.download}
                    newTab={product.newTab}
                  >
                    {product.actionLabel} <Arrow />
                  </ProductButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="coming-soon" className="mt-16">
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8843A]">
          COMING SOON
        </div>
        <h2 className="mt-4 font-serif text-[clamp(2rem,3.8vw,3.3rem)] font-normal leading-[1] tracking-[-0.04em] text-[#1A1A1A]">
          The next products are still taking shape.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {comingSoonProducts.map((product) => (
            <article
              key={product.title}
              className="rounded-[28px] border border-[rgba(198,165,92,0.16)] bg-white/82 p-4 shadow-[0_16px_46px_rgba(33,27,18,0.05)]"
            >
              <div className="relative overflow-hidden rounded-[20px] border border-[rgba(198,165,92,0.16)] bg-[#F7F1E4]">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
                <span className="absolute left-4 top-4 rounded-full border border-[rgba(184,150,46,0.34)] bg-[rgba(255,252,244,0.94)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8A641B] shadow-[0_10px_24px_rgba(33,27,18,0.10)]">
                  Coming Soon
                </span>
              </div>
              <div className="px-1 pt-5">
                <h3 className="font-serif text-[25px] font-normal leading-none tracking-[-0.035em] text-[#1A1A1A]">
                  {product.title}
                </h3>
                <p className="mt-3 min-h-[84px] text-[14px] leading-6 text-[#5F5F5F]">
                  {product.description}
                </p>
                <button
                  type="button"
                  disabled
                  className="mt-5 inline-flex min-h-[46px] w-full cursor-not-allowed items-center justify-center rounded-[14px] border border-[rgba(198,165,92,0.20)] bg-[linear-gradient(180deg,rgba(250,238,209,0.92),rgba(235,215,173,0.78))] px-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8A641B]/82"
                >
                  Coming Soon
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 overflow-hidden rounded-[28px] border border-[rgba(198,165,92,0.18)] bg-[linear-gradient(100deg,rgba(255,255,255,0.96),rgba(248,239,219,0.74))] p-8 shadow-[0_18px_54px_rgba(33,27,18,0.06)] md:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div>
            <h2 className="max-w-[11ch] font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal leading-[0.96] tracking-[-0.04em] text-[#1A1A1A]">
              Start with the product that fits your next move.
            </h2>
            <p className="mt-4 max-w-[40rem] text-[16px] leading-7 text-[#6B6B6B]">
              Word Search for focus, Mind for clarity, Signal for support,
              Music for rest, and Career Circle for growth.
            </p>
            <ButtonLink
              href="/"
              className="premium-button button-primary mt-6 inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[16px] border border-[rgba(184,150,46,0.38)] bg-[linear-gradient(180deg,#E6C65C_0%,#D4AF37_52%,#B8962E_100%)] px-7 py-0 text-[14px] font-semibold text-[#1F1F1F] shadow-[0_14px_34px_rgba(212,175,55,0.24)] hover:-translate-y-0.5"
            >
              Visit UMATTR <Arrow />
            </ButtonLink>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[24px] border border-[rgba(198,165,92,0.18)] bg-[#F8F1E2] shadow-[inset_0_1px_0_rgba(255,255,255,0.76)] lg:h-full">
            <img
              src="/products-assets/products-bottom-cta.png"
              alt="UMATTR book and mug on a warm tabletop"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </MarketingChrome>
  );
}
