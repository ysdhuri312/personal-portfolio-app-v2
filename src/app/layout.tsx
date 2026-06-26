/** @format */

import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yogesh Dhuri | Full Stack Web Developer Portfolio',
  description:
    'Yogesh Dhuri | Aspiring Full Stack Developer | Building Projects with React, Node.js & MongoDB | Open to Internship Opportunities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
