/** @format */

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
import { getAllPosts } from '../services/blogPost';
import { formatedDateWithoutWeekDay } from '../utils/formatedDate';

export default function BlogList() {
  const posts = getAllPosts();
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

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
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase'
                      href='/tags/go'
                    >
                      go
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase'
                      href='/tags/go'
                    >
                      {' '}
                      (16)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/javascript'
                    >
                      javascript
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/javascript'
                    >
                      {' '}
                      (13)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/nats'
                    >
                      nats
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/nats'
                    >
                      {' '}
                      (11)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/docker'
                    >
                      docker
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/docker'
                    >
                      {' '}
                      (11)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/devops'
                    >
                      devops
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/devops'
                    >
                      {' '}
                      (11)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/react'
                    >
                      react
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/react'
                    >
                      {' '}
                      (10)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/aws'
                    >
                      aws
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/aws'
                    >
                      {' '}
                      (10)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/distributedsystems'
                    >
                      distributedsystems
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/distributedsystems'
                    >
                      {' '}
                      (9)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/typescript'
                    >
                      typescript
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/typescript'
                    >
                      {' '}
                      (9)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/node'
                    >
                      node
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/node'
                    >
                      {' '}
                      (9)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/tutorial'
                    >
                      tutorial
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/tutorial'
                    >
                      {' '}
                      (6)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/reactnative'
                    >
                      reactnative
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/reactnative'
                    >
                      {' '}
                      (5)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/productivity'
                    >
                      productivity
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/productivity'
                    >
                      {' '}
                      (5)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/kubernetes'
                    >
                      kubernetes
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/kubernetes'
                    >
                      {' '}
                      (4)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/beginners'
                    >
                      beginners
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/beginners'
                    >
                      {' '}
                      (4)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/microservices'
                    >
                      microservices
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/microservices'
                    >
                      {' '}
                      (4)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/monitoring'
                    >
                      monitoring
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/monitoring'
                    >
                      {' '}
                      (2)
                    </a>
                  </div>
                  <div className='mt-2 mb-2 mr-5'>
                    <a
                      className='mt-1 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                      href='/tags/postgres'
                    >
                      postgres
                    </a>
                    <a
                      className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
                      href='/tags/postgres'
                    >
                      {' '}
                      (2)
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </InputGroupAddon>
        </InputGroup>
        <hr />
        <ul>
          {sortedPosts.map((post, i) => {
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
