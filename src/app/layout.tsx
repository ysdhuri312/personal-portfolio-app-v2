/** @format */

import type { Metadata } from 'next';
import { Inter, Open_Sans, Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({
  variable: '--font-heading',
  subsets: ['latin'],
});

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
      className={`${inter.variable} ${openSans.variable} ${poppins.variable} antialiased`}
    >
      <body className='bg-white-custom'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
