import React from 'react'

const InputWL = ({label,labelClass,list,htmlFor,classes,placeholder,type,id,styleInput,children,...props}) => {
  return (
    <>
    <div className='flex flex-col'>
        <label className={labelClass} htmlFor={htmlFor}>{label}</label>
        <input list={list} type={type} id={id} className={classes} placeholder={placeholder} onChange={props.onChange} required 
        />
          {children}
    </div>

    </>
  )
}

export default InputWL;