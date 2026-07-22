/** @format */

import Projects from '@/src/webPages/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | MERN, Next.js & Backend Development',
  description:
    'Explore my full-stack web development, backend, and Next.js projects.',
};

export default function page() {
  return <Projects />;
}
