/** @format */

import { Badge } from '../components/ui/badge';

export default function BlogList() {
  return (
    <div className='container'>
      <section className='min-h-screen'>
        <h1 className='text-6xl font-extrabold mt-20 mb-8'>Blog</h1>
        <hr />
        <ul>
          <li className='py-8'>
            <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-xl text-foreground/60 tracking-wide '>
                  <time dateTime='2022-09-04T00:00:00.000Z'>
                    September 4, 2022
                  </time>
                </dd>
              </dl>
              <div className='space-y-3 xl:col-span-3'>
                <div>
                  <h3 className='text-3xl font-bold'>
                    <a href='/blog/system-design-the-complete-course'>
                      System Design: The complete course
                    </a>
                  </h3>
                  <div className='flex flex-wrap gap-1 my-2'>
                    <Badge variant='outline' className='text-sm p-3'>
                      system-design
                    </Badge>
                    <Badge variant='outline' className='text-sm p-3'>
                      distributedsystems
                    </Badge>
                    <Badge variant='outline' className='text-sm p-3'>
                      architecture
                    </Badge>
                  </div>
                </div>
                <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                  Learn how to design systems at scale and prepare for system
                  design interviews
                </div>
              </div>
            </article>
          </li>
          <li className='py-8'>
            <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-xl text-foreground/60 tracking-wide '>
                  <time dateTime='2022-09-04T00:00:00.000Z'>
                    September 4, 2022
                  </time>
                </dd>
              </dl>
              <div className='space-y-3 xl:col-span-3'>
                <div>
                  <h3 className='text-3xl font-bold'>
                    <a href='/blog/system-design-the-complete-course'>
                      System Design: The complete course
                    </a>
                  </h3>
                  <div className='flex flex-wrap gap-1 my-2'>
                    <Badge variant='outline' className='text-sm p-3'>
                      system-design
                    </Badge>
                    <Badge variant='outline' className='text-sm p-3'>
                      distributedsystems
                    </Badge>
                    <Badge variant='outline' className='text-sm p-3'>
                      architecture
                    </Badge>
                  </div>
                </div>
                <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                  Learn how to design systems at scale and prepare for system
                  design interviews
                </div>
              </div>
            </article>
          </li>
          <li className='py-8'>
            <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-xl text-foreground/60 tracking-wide '>
                  <time dateTime='2022-09-04T00:00:00.000Z'>
                    September 4, 2022
                  </time>
                </dd>
              </dl>
              <div className='space-y-3 xl:col-span-3'>
                <div>
                  <h3 className='text-3xl font-bold'>
                    <a href='/blog/system-design-the-complete-course'>
                      System Design: The complete course
                    </a>
                  </h3>
                  <div className='flex flex-wrap gap-1 my-2'>
                    <Badge variant='outline' className='text-sm p-3'>
                      system-design
                    </Badge>
                    <Badge variant='outline' className='text-sm p-3'>
                      distributedsystems
                    </Badge>
                    <Badge variant='outline' className='text-sm p-3'>
                      architecture
                    </Badge>
                  </div>
                </div>
                <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                  Learn how to design systems at scale and prepare for system
                  design interviews
                </div>
              </div>
            </article>
          </li>
          <li className='py-8'>
            <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-xl text-foreground/60 tracking-wide '>
                  <time dateTime='2022-09-04T00:00:00.000Z'>
                    September 4, 2022
                  </time>
                </dd>
              </dl>
              <div className='space-y-3 xl:col-span-3'>
                <div>
                  <h3 className='text-3xl font-bold'>
                    <a href='/blog/system-design-the-complete-course'>
                      System Design: The complete course
                    </a>
                  </h3>
                  <div className='flex flex-wrap gap-1 my-2'>
                    <Badge variant='outline' className='text-sm p-3'>
                      system-design
                    </Badge>
                    <Badge variant='outline' className='text-sm p-3'>
                      distributedsystems
                    </Badge>
                    <Badge variant='outline' className='text-sm p-3'>
                      architecture
                    </Badge>
                  </div>
                </div>
                <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                  Learn how to design systems at scale and prepare for system
                  design interviews
                </div>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}
