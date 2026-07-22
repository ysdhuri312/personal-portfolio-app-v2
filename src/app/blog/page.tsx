/** @format */

import BlogList from '@/src/webPages/BlogList';
import { getAllPosts } from '@/src/lib/blog.server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Blog | Web Development & Programming ',
  description:
    'Explore the latest personal blog posts and discover practical tips on tech, and travel. Find valuable insights and start reading today',
};

export default function page() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
