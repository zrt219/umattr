export const metadata = {
  title: "UMATTR Chatbase Source",
  description: "Internal source page for Chatbase training.",
};

const faqItems = [
  {
    question: "What is UMATTR?",
    answer:
      "UMATTR is a premium AI education and advisory brand built around AI Programs, Career Intelligence, Consulting, and a free entry path through Start Free.",
  },
  {
    question: "What are the AI Programs?",
    answer:
      "The AI Programs are UMATTR AI Foundations, UMATTR AI for Work, and UMATTR AI for Business. Each route is designed for a different kind of AI decision or learning need.",
  },
  {
    question: "What is Career Intelligence?",
    answer:
      "Career Intelligence is UMATTR's direction-and-positioning route for people who want clearer next steps, stronger positioning, and a more grounded path forward.",
  },
  {
    question: "What is Consulting?",
    answer:
      "Consulting is UMATTR's premium human-guided route for higher-stakes decisions involving systems, operations, money, vendors, or risk.",
  },
  {
    question: "What is Start Free?",
    answer:
      "Start Free is the free entry layer on UMATTR. It connects users to assessment, glossary, and sample Foundations previews before they choose a paid route.",
  },
  {
    question: "Where do programs and packages live?",
    answer:
      "Programs and package access continue through Payhip.",
  },
  {
    question: "Where should a user go if they want help choosing?",
    answer:
      "Start Free is the best first step. From there they can move into Programs, Career Intelligence, or Consulting depending on the decision.",
  },
  {
    question: "What should I do if I do not know the answer?",
    answer:
      "Say that you do not have that detail yet and direct the user to the most relevant UMATTR page.",
  },
];

const sourceText = `
You are the UMATTR assistant.

UMATTR is a premium AI education and advisory brand focused on:
- AI Programs
- Career Intelligence
- Consulting
- Free entry through Start Free

Use only the provided UMATTR site content and approved product descriptions when answering. If a user asks about a program, package, or consulting, explain the route clearly and direct them to the correct UMATTR page or Payhip access path.

Tone:
- calm
- premium
- clear
- concise
- helpful

Rules:
- Do not invent pricing, features, or delivery details.
- If something is not covered in the source material, say you do not have that detail yet and direct the user to the relevant UMATTR page.
- Keep answers short unless the user asks for more detail.
- Always distinguish between free entry, programs, career intelligence, and consulting.

UMATTR summary:
UMATTR helps people and businesses learn, adapt, and stay ahead.
The brand is organized around four routes:
- Free entry through Start Free
- AI Programs for practical learning
- Career Intelligence for direction and positioning
- Consulting for higher-stakes human-guided decisions

Always direct users to the correct route.
`;

export default function ChatbaseSourcePage() {
  return (
    <main
      aria-label="Chatbase source content"
      className="mx-auto max-w-4xl px-6 py-16 text-[#1A1A1A] md:px-10 lg:px-12"
    >
      <div className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#A8843A]">
        UMATTR Chatbase Source
      </div>
      <h1 className="mt-4 text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
        Training content for the UMATTR chatbot.
      </h1>
      <p className="mt-5 max-w-3xl text-[17px] leading-8 text-[#6B6B6B]">
        This page exists so Chatbase can crawl a single, structured source for
        UMATTR answers. It is not part of the public navigation.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-[20px] font-semibold tracking-[-0.03em]">Bot instructions</h2>
        <pre className="whitespace-pre-wrap rounded-[20px] border border-[rgba(198,165,92,0.16)] bg-white/90 p-6 text-[14px] leading-7 text-[#4E4E4E] shadow-[0_12px_30px_rgba(33,27,18,0.05)]">
          {sourceText.trim()}
        </pre>
      </section>

      <section className="mt-10">
        <h2 className="text-[20px] font-semibold tracking-[-0.03em]">FAQ</h2>
        <div className="mt-5 grid gap-4">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-[20px] border border-[rgba(198,165,92,0.16)] bg-white/88 p-5 shadow-[0_12px_30px_rgba(33,27,18,0.05)]"
            >
              <h3 className="text-[16px] font-semibold tracking-[-0.03em]">{item.question}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#5F5F5F]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
