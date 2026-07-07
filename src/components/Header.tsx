/** @format */

'use client';

import { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import Link from 'next/link';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header>
      <div className='container py-4 md:px-10 lg:px-14'>
        <div className='md:flex justify-between items-center'>
          <Link href='/' className='text-3xl font-heading -tracking-widest'>
            YD
          </Link>
          <nav className='md:flex gap-4 text-4xl'>
            <Tabs defaultValue='home'>
              <TabsList variant='line'>
                <TabsTrigger value='home'>
                  <Link href='/'>Home</Link>
                </TabsTrigger>
                <TabsTrigger value='about'>
                  <Link href='/about'>About</Link>
                </TabsTrigger>
                <TabsTrigger value='projects'>
                  <Link href='/projects'>Projects</Link>
                </TabsTrigger>
                <TabsTrigger value='blogs'>
                  <Link href='/blogs'>Blogs</Link>
                </TabsTrigger>
                <TabsTrigger value='photos'>
                  <Link href='/photos'>Photos</Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
          <div>
            <Button
              variant='outline'
              size='icon-lg'
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {resolvedTheme === 'dark' ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
