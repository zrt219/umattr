import './globals.css';
import { Analytics } from "@vercel/analytics/next";
import { LocaleProvider } from "./_components/locale-provider.jsx";

export const metadata = {
  metadataBase: new URL('https://umattr.ca'),
  title: 'UMATTR | AI programs, career intelligence, and consulting',
  description: 'Premium UMATTR routes for free entry, AI programs, career intelligence, and consulting.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LocaleProvider>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
