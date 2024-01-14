import React from 'react'
import userAcc from '../../Assets/Icons/userAcc.svg'

const Message = ({message, own, user, type}) => {
  // message, own
  return (
    <div className={`flex flex-row justify-start gap-x-4 ${own == true ? 'flex-row-reverse' : ""}`}>
      
      {type == 'group' ? 
      <div>
        <img 
          src={userAcc} 
          alt='user-profile-pic' 
          className='z-[10] bg-[#6BB4C5] rounded-full'
          width={40} height={40}
        /> 
      </div>
         : ""
      }
      <div className={`flex flex-col mt-4 text-accent bg-primary-100 rounded-full ${own == true ? 'rounded-se-none' : 'rounded-ss-none'} w-fit px-4 py-[1px] pt-2 max-w-[50%]`}>
        <p className='text-[12px] font-Itim' style={{textWrap: 'wrap'}}>{message.text || "No Message"}</p>
        <time className='text-[10px] self-end mr-2' >{message.createdAt || "No Time"}</time>
      </div>
    </div>
  )
}

export default Message