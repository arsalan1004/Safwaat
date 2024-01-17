// NavOption.jsx

import React from 'react';

function NavOption(props) {
  return (
    <div
      className={`group flex items-center mb-3 pl-4 py-2 rounded-lg
        hover:bg-[#C7F6FA] hover:border-2 border-[#24B6FB]
        ${props.isSelected ? 'bg-[#C7F6FA] border-2 border-[#24B6FB]' : 'bg-transparent'}`}
    >
      <img src={props.imgSrc} alt={props.altText} className="mr-10" />
      <h2
        className={`py-1 truncate font-Montserrat h-full w-full font-bold tracking-widest text-sm group-hover:text-[#24B6FB]  
            ${props.isSelected ? 'text-[#24B6FB]' : 'text-secondary'}`}
      >
        {props.optionText}
      </h2>
    </div>
  );
}

export default NavOption;
