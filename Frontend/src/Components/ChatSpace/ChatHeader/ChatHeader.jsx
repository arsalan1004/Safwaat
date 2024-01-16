import React from 'react'
import safwaatLogoGreen from '../../../Assets/Icons/safwaatLogoGreen.svg';
import userAcc from '../../../Assets/Icons/userAcc.svg';
import { useNavigate } from 'react-router-dom';
const ChatHeader = ({user}) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  }

  return (
    <header 
    className='w-full bg-gradient-to-b from-[#1E5054] to-[#56A8AE]'>
      <div className='chatheader-shadow-bottom flex justify-between items-center py-1 px-6 border-b-2 border-b-primary-100'>
        <div className='flex items-center gap-x-4'>
          <div className="hover:scale-110 transition-all cursor-pointer" onClick={navigateToHome}>
            <img src={safwaatLogoGreen} alt='safwaat-logo' width={50} height={50}/>
          </div>
          <h1 className='font-Poppins font-bold text-primary-100 tracking-wide'>ChatSpace</h1>
        </div>
        <div className='flex items-center gap-x-2'>
          <img src={userAcc} className='w-[40px] h-[40px]' alt='user-profile-picture' />
          <div className='flex flex-col'>
            <p className='text-primary-100 font-Roboto text-sm tracking-wide'>{user?.fullName || "no fullname"}</p>
            <p className='text-primary-100 font-Roboto text-[12px] font-regular tracking-wide'>@{user?.username || "no username"}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ChatHeader