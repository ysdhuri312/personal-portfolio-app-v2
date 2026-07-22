/** @format */

import About from '@/src/webPages/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About me | Yogesh Sitaram Dhuri',
  description:
    'Learn more about Yogesh Dhuri, a full-stack developer specializing in Next.js, Node.js, and TypeScript.',
};

export default function page() {
  return <About />;
}
