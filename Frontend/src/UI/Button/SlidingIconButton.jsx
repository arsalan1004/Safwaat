import React from 'react'

function SlidingIconButton(props) {
  return (
    <button className="group relative w-48 h-10 rounded-xl flex items-center border-2
              border-solid border-secondary bg-primary-100 overflow-hidden cursor-pointer 
              transistion-all duration-300 shadow-[3px_3px_rgba(10,63,103)] mr-6
              active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_rgba(10,63,103)]" 
              type="button"
              onClick={props.clickHandler}>

          <span className="text-secondary font-semibold text-sm transistion-all duration-300 pl-6 group-hover:invisible ">{props.children}</span>
          <span className="transistion-all duration-300
                            absolute h-12 w-12 flex-center bg-primary-200 translate-x-[8.75rem] 
                            group-hover:w-full group-hover:translate-x-0 ">
            <svg className="fill-secondary text-secondary w-5 " fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
    </button> 
  )
}

export default SlidingIconButton