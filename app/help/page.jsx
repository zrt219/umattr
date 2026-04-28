import { CHATBASE_HELP_BASE_URL } from "../../lib/chatbase-config.mjs";

export const metadata = {
  title: "UMATTR Career Intelligence",
  description:
    "AI-powered career guidance on UMATTR. Ask questions, get direction, and explore career support through the Career Intelligence assistant.",
  alternates: {
    canonical: "https://umattr.ca/help",
  },
  openGraph: {
    title: "UMATTR Career Intelligence",
    description:
      "AI-powered career guidance on UMATTR through the Career Intelligence assistant.",
    url: "https://umattr.ca/help",
    siteName: "UMATTR",
    type: "website",
    images: [
      {
        url: "https://umattr.ca/help/opengraph-image",
        width: 1200,
        height: 630,
        alt: "UMATTR Career Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UMATTR Career Intelligence",
    description:
      "AI-powered career guidance on UMATTR through the Career Intelligence assistant.",
    images: ["https://umattr.ca/help/opengraph-image"],
  },
};

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <h1 className="sr-only">UMATTR Career Intelligence</h1>
      <iframe
        title="UMATTR Career Intelligence"
        src={CHATBASE_HELP_BASE_URL}
        className="h-screen w-full border-0"
        allow="clipboard-write"
      />
    </main>
  );
}
