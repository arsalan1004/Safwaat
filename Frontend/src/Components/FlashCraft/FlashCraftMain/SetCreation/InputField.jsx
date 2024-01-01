import React from 'react'


function InputField(props) {
  return (

        <div className='w-[35%]'>
            <h2 className='font-Inter text-secondary text-base font-bold tracking-wide'>{props.heading}</h2>
            <input className='mt-3 px-5 py-3 rounded-xl  placeholder:text-secondary 
                    placeholder:opacity-50 placeholder:text-small
                    border-secondary border-solid border-2 bg-transparent w-full text-secondary font-Inter text-sm outline-none
                    hover:shadow-[3px_3px_8px_rgba(0,0,0,0.2)] ' 
                    type="text" 
                    placeholder={props.placeholder}
            />
        </div>
  )
}

export default InputField