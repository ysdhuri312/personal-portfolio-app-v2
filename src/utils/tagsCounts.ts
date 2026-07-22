import { BlogPost } from '../types/blog';

export default function tagsCounts(posts: BlogPost[]) {
  const tagCounts = posts.reduce<Record<string, number>>((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] ?? 0) + 1;
    });

    return acc;
  }, {});

  const uniqueTags = Object.entries(tagCounts).map(([tag, count]) => ({
    tag,
    count,
  }));
  return uniqueTags;
}
