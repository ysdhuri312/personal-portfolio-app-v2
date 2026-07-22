'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments() {
  const { resolvedTheme } = useTheme();

  return (
    <Giscus
      id='comments'
      repo='ysdhuri312/personal-portfolio-app-v2'
      repoId={`${process.env.VITE_GISCUS_REPO_ID}`}
      category='General'
      categoryId={`${process.env.VITE_GISCUS_CATEGORY_ID}`}
      mapping='pathname'
      term='Welcome to @giscus/react component!'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      lang='en'
      loading='lazy'
    />
  );
}
