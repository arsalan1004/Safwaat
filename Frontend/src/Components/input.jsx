import React from 'react'

const InputWL = ({label,list,htmlFor,className='inputWL',placeholder,type,id,styleInput,children,...props}) => {
  return (
    <>
    <div className='flex flex-col'>
        <label htmlFor={htmlFor}>{label}</label>
        <input list={list} type={type} id={id} className={className} placeholder={placeholder} onChange={props.onChange}/>
        {children}
    </div>

    </>
  )
}

export default InputWL;