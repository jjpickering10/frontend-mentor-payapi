import React from 'react';
import MainSection from './MainSection';

const Main = ({ sections }) => {
  const newSections = sections.map((section, index) => {
    return <MainSection key={index} section={section} />;
  });
  return (
    <div className='flex flex-col justify-center items-center gap-[80px]'>
      {newSections}
    </div>
  );
};

export default Main;
