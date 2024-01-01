import React from 'react'
import FlashCardSet from './FlashCardSet/FlashCardSet'
import FlashSetBox from './FlashSetBox/FlashSetBox'
import SlidingIconButton from '../../../UI/Button/SlidingIconButton'
import SetCreation from './SetCreation/SetCreation'


function FlashCraftMain() {
  return (
    <div className='w-screen min-h-screen flex-column bg-primary-100'>
   
               {/* header */}
               <div className='h-16 w-full bg-gradient-to-b from-[#1E5054] to-[#56A8AE] flex items-center justify-between'>
            <h1 className='font-Poppins text-2xl font-bold tracking-wide text-primary-100 text-center ml-6'>
              FlashCraft
            </h1>
            <SlidingIconButton />
        </div>

      {/* Main Area */}
        <div className='w-5/6 mb-7 flex-column mt-8'>

          {/* Search Bar */}
          <div className="flex items-center justify-between w-[60%] p-4 px-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
         
            {/* Inner Search Bar Input  */}
            <div className="flex p-4 w-3/4 rounded-lg bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input className="text-secondary bg-gray-100 w-5/6 outline-none ml-7" type="text" placeholder="Enter the Flashcard Set Title ..." />
            </div>
      
            {/* Search Button */}
            <div className="bg-secondary text-white ml-5 py-3 px-5 font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
        
          </div>

          {/* Flash Sets Boxes */}
          <div className='w-full h-full mt-9 grid grid-cols-2 gap-4'>
            <FlashSetBox />
            <FlashSetBox />
            <FlashSetBox />
            <FlashSetBox />
      
    
          </div>

          <div className='flex-center mt-12'>
            <p className='text-center font-bold font-Poppins text-2xl text-secondary '>You are on Fire! <br/>
                 Create More Flashcard Sets to Expand your knowledge!!
            </p>        
          </div>

        </div>

        {/* <FlashCardSet /> */}
    </div>

    // <SetCreation />
  )
}

export default FlashCraftMain