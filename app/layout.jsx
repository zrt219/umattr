import './globals.css';

export const metadata = {
  metadataBase: new URL('https://umattr.ca'),
  title: 'UMATTR | AI programs, career intelligence, and consulting',
  description: 'UMATTR offers practical AI programs, career intelligence, and premium advisory to help people and businesses grow, adapt, and stay ahead.',
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
