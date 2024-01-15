import Link from 'next/link';
import React from 'react';

const Header = (props) => {
  return (
    <>
      <header className='bg-green text-center bg-black text-orange-600 font-bold text-2xl p-4'>
        <img src='' alt='Logo' className='h-8 w-8 inline-block mr-2' />
        Koretechx Digital {props.user}
      </header>
      <nav className='flex justify-center bg-gray-800 p-4 text-white gap-10'>
        <Link href='/Home'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/Products'>Products</Link>
        <Link href='/Contact'>Contact</Link>
      </nav>
    </>
  );
};

export default Header;
