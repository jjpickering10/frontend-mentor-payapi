import Image from 'next/image';
import React from 'react';

const MainSection = ({ section }) => {
  return (
    <div
      className={`flex flex-col ${
        section.heading === 'Easy to implement'
          ? 'lg:flex-row'
          : 'lg:flex-row-reverse'
      }  items-center justify-between text-center lg:text-left mx-6 md:mx-[97px] lg:mx-0 lg:w-full lg:px-[165px] overflow-x-hidden mt-6 lg:mt-[96px]`}
    >
      <div>
        <Image
          src={section.image.src}
          height={section.image.height}
          width={section.image.width}
          alt={section.heading + '-image'}
          className={`translate-x-[18px] translate-y-[12px] lg:translate-y-0 ${
            section.heading === 'Easy to implement'
              ? 'lg:-translate-x-[48px]'
              : 'lg:translate-x-[96px]'
          }`}
        />
      </div>
      <div className='lg:w-[445px]'>
        <h2 className=' mb-6'>{section.heading}</h2>
        <p className=' leading-[25px] font-light'>{section.paragraph}</p>
      </div>
    </div>
  );
};

export default MainSection;
