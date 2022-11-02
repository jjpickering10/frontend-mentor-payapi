import React from 'react';
import SectionInfo from './SectionInfo';

const Info = ({ sections }) => {
  const newSections = sections.map((section, index) => {
    return <SectionInfo key={index} section={section} />;
  });
  return (
    <div className='flex flex-col md:flex-row items-center justify-center mx-6 md:mx-[39px] lg:mx-[165px] text-center gap-12 md:gap-[10px] lg:gap-[30px] my-[80px]'>
      {newSections}
    </div>
  );
};

export default Info;
