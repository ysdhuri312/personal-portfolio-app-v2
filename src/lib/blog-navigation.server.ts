import 'server-only';

import { getAllPosts } from '../lib/blog.server';

export function getPrevNext(current: string) {
  const posts = getAllPosts();
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const index = sortedPosts.findIndex((post) => post.slug === current);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? sortedPosts[index - 1] : null,
    next: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null,
  };
}
