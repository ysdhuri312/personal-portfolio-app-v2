/** @format */

'use client';

import { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import Link from 'next/link';
import { Hamburger, Menu, Sun, X } from 'lucide-react';
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
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header>
      <div className='container py-4 md:px-10 lg:px-14'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='text-3xl font-heading -tracking-widest'>
            YD
          </Link>

          <NavigationMenu className='hidden sm:flex'>
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

          {/* Mobile nav */}
          <NavigationMenu
            className={`absolute top-16 right-6 pb-2 bg-background transition-all duration-200 ${open ? '-left-full' : 'left-0'} sm:hidden`}
          >
            <NavigationMenuList className='flex flex-col w-screen text-center gap-1'>
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
            <Button
              variant='outline'
              size='icon-lg'
              className='sm:hidden ml-2'
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label='Menu toggle'
            >
              {open ? <Menu /> : <X />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
