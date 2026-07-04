/** @format */

import type { Metadata } from 'next';
import { Inter, Open_Sans, Poppins, Geist } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const interHeading = Inter({subsets:['latin'],variable:'--font-heading'});

const openSans = Open_Sans({
  variable: '--font-body',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['100', '200'],
  variable: '--font-poppins',
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
      className={cn("antialiased", openSans.variable, poppins.variable, "font-sans", geist.variable, interHeading.variable)}
    >
      <body className='bg-white-custom'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
