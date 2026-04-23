import './globals.css';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LocaleProvider } from "./_components/locale-provider.jsx";

export const metadata = {
  metadataBase: new URL('https://umattr.ca'),
  title: 'UMATTR | AI programs, career intelligence, and consulting',
  description: 'Premium UMATTR routes for free entry, AI programs, career intelligence, and consulting.',
  other: {
    "p:domain_verify": "abebe2ece85ef332d4af671acdebed29",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LocaleProvider>{children}</LocaleProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
