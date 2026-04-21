import './globals.css';

export const metadata = {
  metadataBase: new URL('https://umattrv4.vercel.app'),
  title: 'UMATTR | AI programs, career intelligence, and consulting',
  description: 'Premium UMATTR routes for free entry, AI programs, career intelligence, and consulting.',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
