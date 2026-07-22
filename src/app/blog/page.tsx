/** @format */

import BlogList from '@/src/webPages/BlogList';
import { getAllPosts } from '@/src/lib/blog.server';

export default function page() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
