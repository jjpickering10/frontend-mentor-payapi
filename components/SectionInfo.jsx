import Image from 'next/image';
import React from 'react';

const SectionInfo = ({ section }) => {
  return (
    <div className='flex flex-col items-center justify-between h-[280px] md:h-[311px] lg:h-[279px]'>
      <div className='md:w-[88px] lg:w-auto'>
        <Image
          src={section.image.src}
          height={section.image.height}
          width={section.image.width}
          alt={section.heading + '-icon'}
        />
      </div>
      <h3 className='small'>{section.heading}</h3>
      <p className=' leading-[25px]'>{section.paragraph}</p>
    </div>
  );
};

export default SectionInfo;
