import Reddit from '@/public/icons/Reddit';
import Twitter from '@/public/icons/Twitter';
import Instagram from '@/public/icons/Instagram';
import Facebook from '@/public/icons/Facebook';
import Email from '@/public/icons/Mail';
import Blog from '@/public/icons/Blog';

export default function ShareLinks() {
  return (
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
  );
}
