import React from 'react'

const ButtonLog = ({className,children,id,auto,type,...props}) => {
  return (
    <button id={id} onClick={props.onClick} className={`${className}`} type={type} autoFocus={auto}>{children}</button>
  )
}

export default ButtonLog;