import React, { useState } from 'react';
import AnalyticsDialog from './Analytics/analyticsDialog';
import Statschart from './statistics/statsChart';

function ProfileSections() {
  const tabsText = ['Statistics', 'Analytics'];
  const [currentSection, setCurrentSection] = useState(0);

  const moveNext = (index) => {
    console.log('moveNext called!');
    setCurrentSection(index);
  };

  return (
    <>
    <div className='w-full pl-0 mt-8 flex ' id='sectionWrapper2'>
      {tabsText.map((txt, i) => (
        <div
          className={`h-10 w-1/2 border-r-2 py-1 border-r-slate-300 flex-center cursor-pointer ${
            i === currentSection
              ? 'border-b-[3px] border-b-accent'
              : 'border-b-2 border-b-slate-300'
          } border-t-2 border-t-slate-300`}
          onClick={() => moveNext(i)}
          key={i}
        >
          <span className='text-center text-secondary font-bold tracking-wide'>
            {txt}
          </span>
        </div>
      ))}
    </div>
    {currentSection? <AnalyticsDialog/> : <Statschart/> }
    </>
  );
}

export default ProfileSections;
