/** @format */
'use client';

import { Button } from '../components/ui/button';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  console.log(error);
  return (
    <html>
      <body>
        <div className='container'>
          <section
            style={{
              margin: 0,
              font: 'normal 14px/20px Arial, Helvetica, sans-serif',
              height: 'min-100vh',
              backgroundColor: '#fff',
            }}
          >
            <div style={{ height: 'auto', minHeight: '100%' }}>
              <div
                style={{
                  textAlign: 'center',
                  width: '800px',
                  marginLeft: '-400px',
                  position: 'absolute',
                  top: '30%',
                  left: '50%',
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontSize: '150px',
                    lineHeight: '150px',
                    fontWeight: 'bold',
                  }}
                >
                  500
                </h1>
                <h2 style={{ marginTop: '20px', fontSize: '30px' }}>
                  Internal server error !
                </h2>
                <p style={{ marginTop: '10px' }}>
                  The resource requested could not be found on this server!
                </p>
                <Button className='my-3 h-8' onClick={() => unstable_retry()}>
                  Try again
                </Button>
              </div>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
