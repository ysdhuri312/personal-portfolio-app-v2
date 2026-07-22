import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.dhuriyogesh.me',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dhuriyogesh.me/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dhuriyogesh.me/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dhuriyogesh.me/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dhuriyogesh.me/photos',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dhuriyogesh.me/blog/personal-portfolio-app-in-react',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dhuriyogesh.me/blog/express-typescript-template-blog',
      lastModified: new Date(),
    },
  ];
}
