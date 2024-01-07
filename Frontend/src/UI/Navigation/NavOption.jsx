import React from 'react'

function NavOption(props) {
  return (
    <div className={`group flex items-center mb-3 px-4 py-2 rounded-lg
        hover:bg-[#C7F6FA] hover:border-2 border-[#24B6FB]
        ${props.altText == 'Home Option' ? 'bg-[#C7F6FA] border-2 border-[#24B6FB] ' : 'bg-transparent' }`}>
        <img src={props.imgSrc} alt={props.altText} className='mr-10' />
        <h2 className={` px-2 py-1 font-Montserrat font-bold tracking-widest text-sm group-hover:text-[#24B6FB]
            ${props.altText == 'Home Option' ?  'text-[#24B6FB]' : 'text-secondary' } `}>{props.optionText}</h2>
    </div>
  )
}

export default NavOption