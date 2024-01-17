import React from 'react'

const ButtonLog = ({className,children,id,type,auto,...props}) => {
  return (
    <button id={id} onClick={props.onClick} className={`${className}`} autoFocus={auto} type={type}>{children}</button>
  )
}

export default ButtonLog;