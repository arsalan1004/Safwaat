import React from 'react'
import OutlineButton from '../../../UI/Button/OutlineButton'
import DeleteButton from '../../../UI/Button/DeleteButton'
import InvertedButton from '../../../UI/Button/InvertedButton'

function FlashSetBox() {
  return (
    <div className='flex-center'>

        <div className='w-5/6 min-h-15 bg-white rounded-3xl px-7 py-5 border-2 border-solid border-gray-200'>
         
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold font-Poppins text-secondary w-4/5'>Makharij Exploration</h1>
            <span className='font-Poppins font-semibold text-slate-600 text-lg ml-8 italic'>Basics</span>
          </div>
    
          <div className='mt-3 rounded-full w-20 h-5 bg-gray-200 flex-center py-3 '>
            <span className='text-gray-600 font-Itim '>3 cards</span>
          </div>
          
          <div className='mt-8 flex items-center justify-between' >

            <div className='w-32 h-12'>
              <InvertedButton />
            </div>
            
            <DeleteButton />

          </div>

        </div>

    </div>

  )
}

export default FlashSetBox