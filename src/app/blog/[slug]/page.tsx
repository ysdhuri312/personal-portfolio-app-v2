/** @format */

import BlogPost from '@/src/webPages/BlogPost';
import { getPost } from '@/src/lib/blog.server';
import { notFound } from 'next/navigation';
import { getPrevNext } from '@/src/lib/blog-navigation.server';

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const navigation = getPrevNext(slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} navigation={navigation} />;
}
