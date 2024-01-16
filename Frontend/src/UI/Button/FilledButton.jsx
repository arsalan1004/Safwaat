import React from 'react'

function FilledButton(props) {
  return (
    <button className='w-full cursor-pointer justify-center rounded-full bg-accent flex-center md:px-3 md:py-4 py-3 hover:scale-105
     transistion-transform duration-150 hover:drop-shadow-xl active:shadow-inset'
    onClick={props.clickHandler} >
                        <p className='text-primary-100 text-Itim text-base'>{props.children} </p>
    </button>
  )
}

export default FilledButton