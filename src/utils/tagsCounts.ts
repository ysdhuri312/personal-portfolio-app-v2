export default function tagsCounts(posts: []) {
  const tagCounts = posts.reduce<Record<string, number>>((acc, post) => {
    post.tags.forEach((tag: any) => {
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
