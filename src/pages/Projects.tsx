/** @format */

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { projects } from '../constants';
import { Button } from '../components/ui/button';
import Image from 'next/image';
import { Badge } from '../components/ui/badge';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className='container'>
      <section className='m-h-screen'>
        <h1 className='text-6xl font-extrabold mt-20 mb-8'>Projects</h1>
        <hr />
        <div className='flex justify-center flex-wrap gap-2 my-10'>
          {projects.map((project, i) => {
            return (
              <Card
                className='relative mx-auto w-full max-w-sm pt-0 m-2 hover:-translate-y-3 transition-all'
                key={i}
              >
                <div className='absolute inset-0 z-30 aspect-video bg-black/35' />
                <Image
                  src={project.image}
                  alt={project.name}
                  className='relative z-20 aspect-video w-full object-cover dark:brightness-40 '
                />
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardAction className='ml-4'>
                  {project.tags.map((tag, i) => {
                    return (
                      <Badge variant='outline' key={i} className='mr-1'>
                        {tag.name}
                      </Badge>
                    );
                  })}
                </CardAction>
                <CardFooter>
                  <Button className='mr-1'>
                    <Link href={project.live_app_link} target='_blank'>
                      Live
                    </Link>
                  </Button>
                  <Button className=''>
                    <Link href={project.source_code_link} target='_blank'>
                      Github
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
