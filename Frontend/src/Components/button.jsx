import React from 'react'

const Button = ({className,children,id,disabled,type,...props}) => {
  return (
    <button id={id} onClick={props.onClick} disabled={disabled} className={className} type={type}>{children}</button>
  )
}

export default Button;