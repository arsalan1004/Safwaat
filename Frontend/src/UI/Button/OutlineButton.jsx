import React from 'react'

function OutlineButton(props) {
  return (
    <button className='w-full justify-center rounded-full border-2 border-accent border-solid flex-center px-3 py-4 hover:scale-110 transistion-transform duration-150 cursor-pointer hover:drop-shadow-xl'
        onClick={props.clickHandler} >
                        <p className='text-accent text-itim text-xl'>{props.children} </p>
    </button>
  )
}

export default OutlineButton