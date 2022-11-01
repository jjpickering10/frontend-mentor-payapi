import React from 'react';
import tesla from '../public/assets/shared/desktop/tesla-white.svg';
import microsoft from '../public/assets/shared/desktop/microsoft-white.svg';
import hewlettPackard from '../public/assets/shared/desktop/hewlett-packard-white.svg';
import oracle from '../public/assets/shared/desktop/oracle-white.svg';
import google from '../public/assets/shared/desktop/google-white.svg';
import nvidia from '../public/assets/shared/desktop/nvidia-white.svg';
import Image from 'next/image';

const Work = () => {
  return (
    <div className='text-waterWhite bg-mirageBlue text-center lg:text-left flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center lg:px-[165px]'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-[80px] mb-14 mx-12 lg:mx-0 lg:mb-0 lg:mt-0'>
        <div>
          <Image
            src={tesla.src}
            height={tesla.height}
            width={tesla.width}
            alt={'tesla-image'}
          />
        </div>
        <div>
          <Image
            src={microsoft.src}
            height={microsoft.height}
            width={microsoft.width}
            alt={'microsoft-image'}
          />
        </div>
        <div>
          <Image
            src={hewlettPackard.src}
            height={hewlettPackard.height}
            width={hewlettPackard.width}
            alt={'hewlett-packard-image'}
          />
        </div>
        <div>
          <Image
            src={oracle.src}
            height={oracle.height}
            width={oracle.width}
            alt={'oracle-image'}
          />
        </div>
        <div>
          <Image
            src={google.src}
            height={google.height}
            width={google.width}
            alt={'google-image'}
          />
        </div>
        <div>
          <Image
            src={nvidia.src}
            height={nvidia.height}
            width={nvidia.width}
            alt={'nvidia-image'}
          />
        </div>
      </div>
      <div className=' mb-[80px] lg:mb-[100px] lg:mt-[100px] lg:w-[445px]'>
        <h2 className='text-waterWhite'>Who we work with</h2>
        <p className=' mt-4 md:mt-6 mb-[60px] md:mb-8 opacity-70 mx-6 md:mx-[155px] lg:mx-0'>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button className='secondary__light'>About Us</button>
      </div>
    </div>
  );
};

export default Work;
