import React from 'react'

function OutlineButton(props) {
  return (
    <div className='w-2/5 justify-center rounded-full border-2 border-accent border-solid flex-center px-3 py-4 hover:scale-110 transistion-transform duration-150 hover:drop-shadow-xl' >
                        <p className='text-accent text-itim text-xl'>{props.children} </p>
    </div>
  )
}

export default OutlineButton