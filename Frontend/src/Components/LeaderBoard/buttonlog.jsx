import React from 'react'

const ButtonLog = ({className,children,id,type,...props}) => {
  return (
    <button id={id} onClick={props.onClick} className={`${className}`} type={type}>{children}</button>
  )
}

export default ButtonLog;