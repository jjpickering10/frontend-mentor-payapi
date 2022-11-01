import React from 'react';

const Form = () => {
  return (
    <div className='w-full md:w-[445px] px-6 md:px-[162px] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:relative'>
      <form action='' method='post' className='w-full md:w-auto'>
        <div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email address'
            className='rounded-[100vw] w-full md:w-[445px] h-12 pl-[27px] placeholder:text-mirageBlue placeholder:opacity-50 placeholder:font-bold'
          />
        </div>
      </form>
      <button className='w-full md:w-[173px] h-12 md:absolute md:right-0'>
        Schedule a Demo
      </button>
    </div>
  );
};

export default Form;
