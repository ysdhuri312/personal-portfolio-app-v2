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

export default function Footer() {
  return (
    <footer>
      <div className='container py-4 md:px-10 lg:px-14'>
        <div className='md:flex justify-between items-center'>
          <div className='text-foreground/60'>
            © 2026 Yogesh Dhuri. All rights reserved.
          </div>
          <div className='flex gap-2'>
            <div>
              <Github className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
            <div>
              <Linkedin className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
            <div>
              <Twitter className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
            <div>
              <Instagram className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
            <div>
              <Facebook className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
            <div>
              <Email className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
            <div>
              <Blog className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
            <div>
              <Coffee className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
            <div>
              <GoogleScholer className='hover:fill-primary border rounded-sm w-9 p-1 fill-foreground/60 hover:-translate-y-1 hover:scale-110 transition-all' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
