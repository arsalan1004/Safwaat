import React from 'react'
import safwaatLogoGreen from '../../Assets/Icons/safwaatLogoGreen.svg';
import userAcc from '../../Assets/Icons/userAcc.svg';
const ChatHeader = (props) => {
  return (
    <header 
    className='w-full bg-gradient-to-b from-[#1E5054] to-[#56A8AE]'>
      <div className='chatheader-shadow-bottom flex justify-between items-center py-1 px-6 border-b-2 border-b-primary-100'>
        <div className='flex items-center gap-x-4'>
          <img src={safwaatLogoGreen} alt='safwaat-logo' width={50} height={50}/>
          <h1 className='font-Poppins font-bold text-primary-100 tracking-wide'>ChatSpace</h1>
        </div>
        <div className='flex items-center gap-x-2'>
          <img src={userAcc} alt='user-profile-picture' width={40} height={40}/>
          <p className='text-primary-100 font-Roboto text-sm tracking-wide'>{props.userName || "Fahad Saleem"}</p>
        </div>
      </div>
    </header>
  )
}

export default ChatHeader