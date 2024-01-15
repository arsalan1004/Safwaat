// CardDetail.js

import React from 'react';

function CardDetail({onTermChange, onDefinitionChange }) {
  return (
    <div className='w-full shadow-[0_4px_4px_rgba(0,0,0,.25)] rounded-xl h-40 
           hover:shadow-[1px_3px_7px_7px_rgba(10,63,103,.15)] hover:scale-110  hover: transistion duration-300 hover:border-2 border-secondary '>
      <div className='mt-2 mx-10 w-11/12'>
        <input
          
          onChange={(e) => onTermChange(e.target.value)}
          className='border-b-2 border-secondary w-full outline-none pb-1.5 bg-primary-100
          mb-2 text-secondary text-[13px]'
          type='text'
        />
        <br />
        <span className='font-Inter text-base font-bold text-secondary'>Term</span>
      </div>
      <div className='mt-1 mx-10 w-11/12'>
        <input
          onChange={(e) => onDefinitionChange(e.target.value)}
          className='border-b-2 border-secondary w-full outline-none pb-1.5 bg-primary-100
          mb-2 text-secondary text-[13px]'
          type='text'
        />
        <br />
        <span className='font-Inter text-base font-bold text-secondary'>Definition</span>
      </div>
    </div>
  );
}

export default CardDetail;
