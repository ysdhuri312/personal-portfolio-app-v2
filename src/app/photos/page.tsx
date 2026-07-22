/** @format */

import { Metadata } from 'next';
import Photos from '../../webPages/Photos';

export const metadata: Metadata = {
  title: 'Photography & Travel Photos | Yogesh Dhuri',
  description: 'A collection of travel, nature, and personal photography.',
};

export default function page() {
  return <Photos />;
}
