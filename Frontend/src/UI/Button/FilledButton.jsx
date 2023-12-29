import React from 'react'

function FilledButton(props) {
  return (
    <div className='w-2/5 justify-center rounded-full bg-accent flex-center px-3 py-4 hover:scale-110 transistion-transform duration-150 hover:drop-shadow-xl' >
                        <p className='text-primary-100 text-itim text-xl'>{props.children} </p>
    </div>
  )
}

export default FilledButton