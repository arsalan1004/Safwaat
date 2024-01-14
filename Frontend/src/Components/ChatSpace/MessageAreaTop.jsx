import React from 'react'
import userAcc from '../../Assets/Icons/userAcc.svg';
const MessageAreaTop = ({user, onlineStatus}) => {
  // Same logic as in conversation Component applied here to extract receiver's data
  return (
    <div className='bg-transparent flex p-2 gap-x-2 border-b-2 border-b-primary-100'>
      <img src={userAcc} alt='receiver-profile-image' width={40} height={40}/>
      <div>
        <h3 className='font-Montserrat text-primary-100 font-semibold tracking-wide'>{user.username}</h3>
        <div className='font-Itim text-primary-100 text-sm'>
          {onlineStatus == true ?  "Active Now" : "Inactive"}
        </div>
      </div>
    </div>
  )
}

export default MessageAreaTop