import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../public/assets/shared/desktop/logo.svg';
import menu from '../public/assets/shared/mobile/menu.svg';
import close from '../public/assets/shared/mobile/close.svg';

console.log(logo);

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };
  return (
    <>
      <div className='flex justify-between md:justify-start items-center px-6 md:px-[39px] lg:px-[165px] pt-10'>
        <Link href={'/'}>
          <div>
            <Image
              src={logo.src}
              alt='logo'
              width={logo.width}
              height={logo.height}
              className='cursor-pointer'
            />
          </div>
        </Link>
        <div onClick={handleNav} className='md:hidden'>
          <Image
            src={menu.src}
            alt='menu'
            width={menu.width}
            height={menu.height}
            className='cursor-pointer'
          />
        </div>
        <div className=' hidden md:flex w-full items-center justify-between ml-16 text-[15px] text-mirageBlue '>
          <ul className='font-bold flex items-center justify-center gap-10'>
            <Link href={'/'}>
              <li className='opacity-70 hover:opacity-100 '>Pricing</li>
            </Link>
            <Link href={'/'}>
              <li className='opacity-70 hover:opacity-100'>About</li>
            </Link>
            <Link href={'/'}>
              <li className='opacity-70 hover:opacity-100'>Contact</li>
            </Link>
          </ul>
          <button className='w-[173px] h-12'>
            {/* <button className='w-[173px] h-12 ml-[84px] lg:ml-[506px]'> */}
            Schedule a Demo
          </button>
        </div>
      </div>
      {nav && (
        <div className='fixed top-0 right-0 bg-mirageBlue h-full w-[300px] text-waterWhite'>
          <div onClick={handleNav} className=' mt-12 ml-[251px]'>
            <Image
              src={close.src}
              alt='close'
              width={close.width}
              height={close.height}
              className='cursor-pointer'
            />
          </div>
          <div className='flex items-center flex-col justify-center border-waterWhite border-t ml-6 mr-[27px] mt-6 border-opacity-[0.15]'>
            <ul className='font-bold text-[20px] flex flex-col items-center justify-center gap-8 opacity-70 mb-8 mt-[43px]'>
              <Link href={'/'}>
                <li className=''>Pricing</li>
              </Link>
              <Link href={'/'}>
                <li className=''>About</li>
              </Link>
              <Link href={'/'}>
                <li className=''>Contact</li>
              </Link>
            </ul>
            <button className='w-[258px] h-12'>Schedule a Demo</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
