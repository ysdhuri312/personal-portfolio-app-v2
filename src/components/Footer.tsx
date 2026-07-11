/** @format */

import Blog from '@/public/icons/Blog';
import Coffee from '@/public/icons/Coffee';
import Facebook from '@/public/icons/Facebook';
import Github from '@/public/icons/Github';
import GoogleScholer from '@/public/icons/GoogleScholer';
import Instagram from '@/public/icons/Instagram';
import Linkedin from '@/public/icons/Linkedin';
import Email from '@/public/icons/Mail';
import Twitter from '@/public/icons/Twitter';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className='container py-4 sm:px-10 lg:px-14'>
        <div className='mt-5 flex flex-col-reverse justify-between items-center gap-3 sm:flex-row'>
          <div className='text-foreground/60'>© 2026 Yogesh Sitaram Dhuri.</div>
          <div className='flex gap-2'>
            <div>
              <Link href='https://github.com/ysdhuri312' target='_blank'>
                <Github className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
            <div>
              <Link
                href='http://www.linkedin.com/in/dhuriyogesh0312'
                target='_blank'
              >
                <Linkedin className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
            <div>
              <Link href='https://x.com/ysdhuri312' target='_blank'>
                <Twitter className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
            <div>
              <Link
                href='https://www.instagram.com/dhuri_yogesh_1994_'
                target='_blank'
              >
                <Instagram className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
            <div>
              <Link href='#' target='_blank'>
                <Facebook className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
            <div>
              <Link href='mailto:ysdhuri312@gmail.com' target='_blank'>
                <Email className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
            <div>
              <Link href='#'>
                <Blog className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
            <div>
              <Link href='#'>
                <Coffee className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
            <div>
              <Link href='#'>
                <GoogleScholer className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
