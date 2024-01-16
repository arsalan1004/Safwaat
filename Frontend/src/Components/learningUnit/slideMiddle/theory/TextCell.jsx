import React from 'react'

const TextCell = (props) => {

  const textCellStyle = {
    filled: 'text-primary-100 font-Itim bg-secondary text-[12px] sm:text-[14x] lg:text-[16px] p-4 w-[45%] text-center rounded-[15px]',
    outline: 'text-secondary font-Itim bg-primary-100 text-[12px] sm:text-[14px] lg:text-[16px] py-4 px-8 w-[45%] text-center rounded-[15px] border-2 border-secondary'
  }


  return (
    <p
      className={props.type == 'filled' ?  textCellStyle.filled : textCellStyle.outline}
    >{props.content}</p>
  )
}

export default TextCell