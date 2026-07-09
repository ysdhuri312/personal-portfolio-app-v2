/** @format */

'use client';

import { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import Link from 'next/link';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

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
          <nav className='md:flex'>
            <NavigationMenu>
              <NavigationMenuList className='gap-1'>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href='/' />}
                    className={`${navigationMenuTriggerStyle()} text-base`}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href='/about' />}
                    className={`${navigationMenuTriggerStyle()} text-base`}
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href='/projects' />}
                    className={`${navigationMenuTriggerStyle()} text-base`}
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href='/blog' />}
                    className={`${navigationMenuTriggerStyle()} text-base`}
                  >
                    Blogs
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href='/photos' />}
                    className={`${navigationMenuTriggerStyle()} text-base`}
                  >
                    Photos
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
