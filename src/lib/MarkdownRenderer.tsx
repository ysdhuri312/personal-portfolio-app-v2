import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';

export const MarkdownRender = ({ children }: { children: string }) => {
  return (
    <div className='prose prose-neutral dark:prose-invert prose-code:before:content-none prose-code:after:content-none mt-5 max-w-3xl mx-auto pb-6'>
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {children}
      </Markdown>
    </div>
  );
};
