import React from 'react'

function FilledButton(props) {
  return (
    <button className='w-full cursor-pointer justify-center rounded-full bg-accent flex-center md:first-letter:px-3 md:py-4 px-2 py-3 hover:scale-110 transistion-transform duration-150 hover:drop-shadow-xl'
    onClick={props.clickHandler} >
                        <p className='text-primary-100 text-itim text-xl'>{props.children} </p>
    </button>
  )
}

export default FilledButton