import React from 'react';
import Form from './Form';

const ScheduleDemo = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:mx-[165px] gap-8 md:gap-10 mb-20'>
      <h2 className=' '>Ready to start?</h2>
      <Form />
    </div>
  );
};

export default ScheduleDemo;
