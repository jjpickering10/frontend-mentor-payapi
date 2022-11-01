import Link from 'next/link';
import React from 'react';
import Form from './Form';
import phoneImage from '../public/assets/home/desktop/illustration-phone-mockup.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:justify-between  lg:flex-row-reverse gap-6 md:gap-12 lg:gap-[174px] mt-[72px] lg:mx-[165px]'>
      {/* <div className='relative grid place-items-center'> */}
      <div className='relative grid place-items-center w-[128px] md:w-[159px] lg:w-[263px] h-[240px] md:h-[300px] lg:h-[500px] ml-[32px] lg:ml-0 lg:-translate-x-[62px]'>
        <Image
          src={phoneImage.src}
          //   height={phoneImage.height}
          //   width={phoneImage.width}
          alt={'phone-image'}
          fill={true}
          style={{ objectFit: 'cover' }}
          className=' scale-150 lg:scale-125'
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-6 md:gap-[22px] lg:w-[546px]'>
        <h1 className='text-center lg:text-left mx-6 md:mx-[97px] lg:mx-0 lg:h-[243px]'>
          Start building with our APIs for absolutely free.
        </h1>
        <div className='w-full flex flex-col justify-center items-center lg:items-start gap-6 md:gap-4'>
          <Form />
          <p className='font-regular lg:ml-[27px]'>
            Have any questions?
            <Link href={'/'}>
              <span className='font-bold ml-1'>Contact Us</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
