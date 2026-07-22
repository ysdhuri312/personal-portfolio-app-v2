export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  tags: string[];
  content: string;
}

export interface TagCount {
  tag: string;
  count: number;
}
