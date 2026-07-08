/** @format */

import Link from 'next/link';
import { Badge } from '../components/ui/badge';
import Reddit from '@/public/icons/Reddit';
import Twitter from '@/public/icons/Twitter';
import Instagram from '@/public/icons/Instagram';
import Facebook from '@/public/icons/Facebook';
import Email from '@/public/icons/Mail';
import Blog from '@/public/icons/Blog';

export default function BlogPost() {
  return (
    <div className='container'>
      <article className='fade-in mt-7'>
        <div className='xl:divide-y '>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-1 text-center'>
              <dl className='space-y-10'>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-lg tracking-wide text-foreground/60'>
                    <time dateTime='2022-09-04T00:00:00.000Z'>
                      Sunday, September 4, 2022
                    </time>
                  </dd>
                </div>
              </dl>
              <h1 className='text-3xl font-extrabold tracking-tight mt-3 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
                System Design: The complete course
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
          </header>
          <div
            className='divide-y xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className='pt-6 pb-10 xl:sticky xl:top-0'>
              <dt className='sr-only'>Authors</dt>
            </dl>
            <div className='divide-y-2 xl:col-span-3 xl:row-span-2 xl:pb-0'>
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
                  <Link href='/blogs' className='text-lg'>
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
