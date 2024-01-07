import React from 'react'

function FilledSec(props) {
  return (
    <>
        <button className='w-full h-full bg-secondary text-primary-100 font-Itim text-lg 
                            flex-center rounded-full py-4 hover:shadow-3d  hover:shadow-[rgb(10,63,103,0.5)] 
                            active:shadow-inset' 
                            onClick={props.handler}>
                                {props.children}
        </button>
    </>
    
  )
}

export default FilledSec