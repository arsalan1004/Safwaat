import React from 'react'

function Perk(props) {

return (
    <div className={'flex-center gap-2 s4:gap-3 mb-8 s4:mb-0'}
        >
                <img src={props.imgSrc} alt={props.altText} className='h-[35px] w-[35px]'/>
                <span className='font-Itim text-secondary text-lg'>{props.text}</span>
    </div>
  )
}

export default Perk