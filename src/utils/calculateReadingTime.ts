export default function calculateReadingTime(markdown: string): number {
  const wordsPerMinute = 200;

  // const plainText = markdown
  //   .replace(/```[\s\S]*?```/g, '') // Remove code blocks
  //   .replace(/`.*?`/g, '') // Remove inline code
  //   .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
  //   .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to link text
  //   .replace(/[#>*_\-]/g, ''); // Remove common Markdown symbols

  const words = markdown.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
