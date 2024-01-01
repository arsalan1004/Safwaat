import React from 'react'

function InvertedButton(props) {
  return (
    <button className='rounded-full border-2 border-solid border-secondary flex-center
            text-secondary font-Poppins px-4 h-full w-full cursor-pointer overflow-hidden bg-transparent
            hover:bg-secondary hover:text-primary-100 hover:transistion duration-150 ease-in-out delay-75 '
            onClick={props.clickHandler} >
        <span className='font-medium z-10 tracking-wide'> 
            {props.children}
        </span>
    </button>
  )
}

export default InvertedButton