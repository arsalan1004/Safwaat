import React from 'react'

const InputWL = ({label,list,htmlFor,className='inputWL',placeholder,type,id,styleInput,children,...props}) => {
  return (
    <>
    <div className='flex flex-col'>
        <label className={`label`} htmlFor={htmlFor}>{label}</label>
        <input list={list} type={type} id={id} className={`text-[13px] ${className}`} placeholder={placeholder} onChange={props.onChange} required />
        {children}
    </div>

    </>
  )
}

export default InputWL;