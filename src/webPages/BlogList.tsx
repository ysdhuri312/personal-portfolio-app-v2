import { Search } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../components/ui/input-group';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { formatedDateWithoutWeekDay } from '../utils/formatedDate';
import tagsCounts from '../utils/tagsCounts';
import { BlogPost } from '../types/blog';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const tags = tagsCounts(posts);

  return (
    <div className='container'>
      <section className='min-h-screen'>
        <h1 className='text-6xl font-extrabold mt-20 mb-5'>Blog</h1>
        <InputGroup className='max-w-xl mb-5 h-10'>
          <InputGroupInput
            placeholder='Search...'
            className='placeholder:text-sm'
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align='inline-end'>
            <Dialog>
              <DialogTrigger
                render={
                  <Button variant='ghost'>
                    {' '}
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 16 16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'></path>
                    </svg>
                  </Button>
                }
              />
              <DialogContent className='sm:max-w-sm'>
                <DialogHeader>
                  <DialogTitle className='text-xl'>Tags</DialogTitle>
                </DialogHeader>
                <div className='flex max-w-lg flex-wrap'>
                  {tags.map(({ tag, count }) => (
                    <div className='mt-2 mb-2 mr-5' key={tag}>
                      <Link
                        className='mt-1 mr-3 text-sm font-medium'
                        href={`tags/${tag}`}
                      >
                        {tag}
                      </Link>
                      <Link
                        className='-ml-2 text-sm font-semibold text-primary'
                        href={`tags/${tag}`}
                      >
                        ({count})
                      </Link>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </InputGroupAddon>
        </InputGroup>
        <hr />
        <ul>
          {sortedPosts.map((post: any, i: number) => {
            const { slug, title, date, summary, tags } = post;

            return (
              <li className='py-8' key={i}>
                <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                  <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-[16px] text-foreground/60'>
                      <time dateTime='2022-09-04T00:00:00.000Z'>
                        {formatedDateWithoutWeekDay(date)}
                      </time>
                    </dd>
                  </dl>
                  <div className='space-y-3 xl:col-span-3'>
                    <div>
                      <h3 className='text-3xl font-bold tracking-tight'>
                        <Link href={`/blog/${slug}`}>{title}</Link>
                      </h3>
                      <div className='flex flex-wrap gap-1 my-2'>
                        {tags.map((tag: string, i: number) => (
                          <Badge
                            variant='outline'
                            className='text-sm p-3'
                            key={i}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
