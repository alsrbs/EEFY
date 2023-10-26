'use client';

import type { Metadata } from 'next';
import './globals.css';
import { RecoilRoot } from 'recoil';

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='w-full h-full' data-theme='dracula'>
      <head>
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className='w-full h-full'>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
