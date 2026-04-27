import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BotIdClient } from "botid/client";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ChatbaseWidget from "../components/chatbase/ChatbaseWidget";
import { SecurityBoot } from "../components/security/SecurityBoot";
import { LocaleProvider } from "./_components/locale-provider.jsx";

const botIdProtectedRoutes: Array<{ path: string; method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE" }> = [];

export const metadata: Metadata = {
  metadataBase: new URL("https://umattr.ca"),
  title: "UMATTR | AI Programs, Career Intelligence, and Consulting",
  description: "Premium Pathways into AI, Career Growth, and Consulting.",
  other: {
    "p:domain_verify": "abebe2ece85ef332d4af671acdebed29",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <BotIdClient protect={botIdProtectedRoutes} />
      </head>
      <body>
        <SecurityBoot />
        <LocaleProvider>{children}</LocaleProvider>
        <ChatbaseWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
