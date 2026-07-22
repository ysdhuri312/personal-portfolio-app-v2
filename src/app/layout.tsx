/** @format */

import type { Metadata } from 'next';
import { Inter, Geist, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cn } from '@/src/lib/utils';
import { ThemeProvider } from '../components/theme-provider';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' });

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
      data-scroll-behavior='smooth'
      className={cn('antialiased', 'font-sans', openSans.variable)}
      suppressHydrationWarning
    >
      <body className='min-h-screen flex flex-col justify-between'>
        <ThemeProvider>
          <Header />
          <main className='flex justify-center items-center flex-1'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
