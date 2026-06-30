/** @format */

'use client';

import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(true);

  return (
    <div className='bg-amber-400 font-poppins'>
      <div className='container px-8'>nav</div>
    </div>
  );
}
