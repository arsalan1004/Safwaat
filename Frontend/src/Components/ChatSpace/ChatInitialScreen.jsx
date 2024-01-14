import React from 'react'
import safwaatLogoGreen from '../../Assets/Icons/safwaatLogoGreen.svg';
const ChatInitialScreen = () => {
  return (
    <div className='w-[70%] flex flex-col justify-center items-center'>
      <img src={safwaatLogoGreen} alt='safwaat-logo' />
      <h3>Welcome to ChatSpace</h3>
      <p>Converse with your In-App Friends</p>
    </div>
  )
}

export default ChatInitialScreen