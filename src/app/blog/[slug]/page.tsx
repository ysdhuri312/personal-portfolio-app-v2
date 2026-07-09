/** @format */

import BlogPost from '@/src/pages/BlogPost';
import { getPost } from '@/src/services/blogPost';
import { notFound } from 'next/navigation';

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
