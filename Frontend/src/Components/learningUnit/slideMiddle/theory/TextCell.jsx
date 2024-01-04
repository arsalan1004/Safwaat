import React from 'react'

const TextCell = (props) => {

  const textCellStyle = {
    filled: 'text-primary bg-secondary text-[16x] p-4 w-[45%] text-center rounded-[15px]',
    outline: 'text-secondary bg-primary text-[16px] py-4 px-8 w-[45%] text-center rounded-[15px] border-2 boder-secondary'
  }


  return (
    <p
      className={props.type == 'filled' ?  textCellStyle.filled : textCellStyle.outline}
    >{props.content}</p>
  )
}

export default TextCell