import React from 'react'

const Checkbox = ({type,name,id,classNameInput,htmlFor,classNameLabel,label,children,...props}) => {
  return (
    <div>
        <input type='checkbox' name={name} id={id} className={classNameInput}/>
        <label htmlFor={htmlFor} className={classNameLabel}>{children}{label}</label>
    </div>
  )
}

export default Checkbox