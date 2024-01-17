import React from 'react'

const ButtonLog = ({className,children,id,type,...props}) => {
  return (
    <button id={id} onClick={props.onClick} className={`b ${className}`} type={type}>{children}</button>
  )
}

export default ButtonLog;