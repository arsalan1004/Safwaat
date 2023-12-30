import React from 'react'

function InvertedButton() {
  return (
    <button className='rounded-full border-2 border-solid border-secondary flex-center
            text-secondary font-Poppins px-4 h-full w-full cursor-pointer overflow-hidden bg-transparent
            hover:bg-secondary hover:text-primary-100 hover:transistion duration-150 ease-in-out delay-75 ' >
        <span className='font-medium z-10 tracking-wide'> 
            Practice
        </span>
    </button>
  )
}

export default InvertedButton