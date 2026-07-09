import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

const postDirectory = path.join(process.cwd(), 'src/data/blog/');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(postDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContent);
    const { title, date, summary, image, tags } = data;

    return {
      slug: fileName.replace('.md', ''),
      title,
      date,
      summary,
      image,
      tags,
      content,
    };
  });
}

export async function getPost(slug: string) {
  const posts = getAllPosts();
  const post = posts.find((post) => post.slug == slug);

  if (!post) {
    throw new Error('Post not found');
  }

  return post;
}
