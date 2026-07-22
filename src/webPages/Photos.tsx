/** @format */

import { underConstruction } from '@/public';
import Image from 'next/image';

export default function Photos() {
  return (
    <div className='container'>
      <section>
        <h1 className='text-6xl font-extrabold mt-20 mb-8'>Photos</h1>
        <hr />
        <ul
          style={{
            color: '#444',
            margin: 0,
            font: 'normal 14px/20px Arial, Helvetica, sans-serif',
            height: '100%',
            backgroundColor: '#fff',
          }}
        >
          {' '}
          <div>
            <div className='text-center'>
              <Image
                alt='under-construction'
                src={underConstruction}
                style={{
                  display: 'inline',
                  textAlign: 'center',
                  height: '150px',
                  width: '150px',
                }}
              />

              <h2 style={{ fontSize: '30px' }}>Coming Soon</h2>
              <p style={{ marginTop: '10px' }}>
                Our website is under construction!
              </p>
            </div>
          </div>
        </ul>
      </section>
    </div>
  );
}
