import { Nunito } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const fontFamily = Nunito({ subsets: ['latin'] });

function Layout({ children, title, link }) {
  return (
    <>
      <div className={fontFamily.className}>
        <header className={'flex h-[80px] w-full items-center border-b'}>
          <div className={'container mx-auto flex justify-between px-5'}>
            {title ? (
              <Link href={link || '/'} className={'flex items-center gap-x-2'}>
                <HiOutlineArrowLeft className={'text-2xl'} />
                <h3 className={'text-xl font-bold'}>{title}</h3>
              </Link>
            ) : null}
            <div>sd</div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}

export default React.memo(Layout);
