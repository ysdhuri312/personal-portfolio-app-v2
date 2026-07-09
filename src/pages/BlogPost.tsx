/** @format */

import Link from 'next/link';
import { Badge } from '../components/ui/badge';
import Reddit from '@/public/icons/Reddit';
import Twitter from '@/public/icons/Twitter';
import Instagram from '@/public/icons/Instagram';
import Facebook from '@/public/icons/Facebook';
import Email from '@/public/icons/Mail';
import Blog from '@/public/icons/Blog';
import { AspectRatio } from '../components/ui/aspect-ratio';
import Image from 'next/image';
import { MarkdownRender } from '../lib/MarkdownRenderer';
import { formatedDateWithWeekDay } from '../utils/formatedDate';

export default async function BlogPost({ post }: any) {
  const { content, data: metadata } = await post;
  const { date, title, image } = metadata;

  return (
    <div className='container'>
      <article className='fade-in mt-7'>
        <div className='xl:divide-y '>
          <div className='pt-6 xl:pb-6'>
            <div className='space-y-1 text-center'>
              <dl className='space-y-10'>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-lg tracking-wide text-foreground/60'>
                    <time dateTime='2022-09-04T00:00:00.000Z'>
                      {formatedDateWithWeekDay(date)}
                    </time>
                  </dd>
                </div>
              </dl>
              <h1 className='text-3xl font-extrabold tracking-tight mt-3 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
                {title}
              </h1>
              <p className='text-foreground/60 leading-6 tracking-wide mb-3'>
                204 min read
              </p>
              <ul className='flex items-center justify-center pt-2'>
                <li>
                  <Reddit className='w-9 p-1 fill-foreground/60 hover:fill-amber-600' />
                </li>
                <li>
                  <Twitter className='w-9 p-1 fill-foreground/60 hover:fill-sky-500' />
                </li>
                <li>
                  <Instagram className='w-9 p-1 fill-foreground/60 hover:fill-pink-600' />
                </li>
                <li>
                  <Facebook className='w-9 p-1 fill-foreground/60 hover:fill-blue-800' />
                </li>
                <li>
                  <Email className='w-9 p-1 fill-foreground/60 hover:fill-red-700' />
                </li>
                <li>
                  <Blog className='w-9 p-1 fill-foreground/60 hover:fill-primary' />
                </li>
              </ul>
            </div>
          </div>
          <div
            className='divide-y xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className='pt-6 pb-10 xl:sticky xl:top-0 xl:border-b xl:border-gray-100 xl:pt-11 xl:dark:border-gray-800'>
              <dt className='sr-only'>Authors</dt>
              <dd>
                <ul className='flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8'>
                  <li className='flex items-center space-x-2'>
                    <AspectRatio
                      ratio={1 / 1}
                      className='w-full max-w-15 rounded-full bg-muted'
                    >
                      <Image
                        src='https://avatar.vercel.sh/vercel.svg?text=YD'
                        alt='Photo'
                        fill
                        className='rounded-full object-cover grayscale dark:brightness-20'
                      />
                    </AspectRatio>
                    <dl className='whitespace-nowrap text-sm font-medium leading-5'>
                      <dt className='sr-only'>Name</dt>
                      <dd className=' text-lg'>Yogesh Sitaram Dhuri</dd>
                      <dt className='sr-only'>Twitter</dt>
                      <dd>
                        <Link href='#'>@yogesh_6864</Link>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className='divide-y-2 xl:col-span-3 xl:row-span-2 xl:pb-0'>
              <img
                src={image}
                className='object-cover object-center'
                alt='banner'
              />
              <div>
                <MarkdownRender>{content}</MarkdownRender>
              </div>
              <div className='pt-6 pb-6 text-sm'>
                <Link href='#'>Discuss on Twitter</Link>
                {` • `}
                <Link href='#'>View on GitHub</Link>
              </div>
            </div>
            <footer>
              <div className='xl:sticky xl:top-32'>
                <div className='text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y'>
                  <div className='py-4 xl:py-8'>
                    <h2 className='text-lg mb-2 tracking-wide text-foreground/60'>
                      Tags
                    </h2>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline' className='text-sm p-3'>
                        system-design
                      </Badge>
                      <Badge variant='outline' className='text-sm p-3'>
                        distributedsystems
                      </Badge>
                    </div>
                  </div>

                  <div className='flex justify-between py-4 xl:block xl:space-y-8 xl:py-8'>
                    <div>
                      <h2 className='text-lg text-foreground/60'>
                        Previous article
                      </h2>
                      <Link href='#' className='text-[16px]'>
                        CSP vs Actor model for concurrency
                      </Link>
                    </div>
                    <div>
                      <h2 className='text-lg text-foreground/60'>
                        Next article
                      </h2>
                      <Link href='#' className='text-[16px]'>
                        System Design: The complete course
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='pt-4 xl:pt-8'>
                  <Link href='/blog' className='text-lg'>
                    &larr; Back to the blogs
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
}
