import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { NavBar } from './NavBar';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "WcDonald's",
  description: "Designed and inspired by McDonald's",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={open_sans.className}>
        <NavBar />
        <hr />
        {children}
      </body>
    </html>
  );
}
