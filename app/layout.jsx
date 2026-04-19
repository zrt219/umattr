import './globals.css';

export const metadata = {
  title: 'UMATTR | AI programs, career intelligence, and consulting',
  description: 'Premium UMATTR routes for free entry, AI programs, career intelligence, and consulting.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
