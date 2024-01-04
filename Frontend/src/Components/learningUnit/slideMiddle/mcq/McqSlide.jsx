import React from 'react'
import McqOption from './McqOption'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const McqSlide = (props) => {
  // Using Index as means of storing the selected option
  // const [selectedOption, setSelectedOption] = useState(null)
  const {selectedOption, mcqQuestion, mcqOptions} = useSelector(state => state.mcqSlideSlice);
  // const selectedOptionStyle = "text-primary border-2 bg-secondary border-secondary mcq-inner-shadow"
  return (
    <div>
      <div className='flex flex-col justify-center items-center font-itim text-secondary mb-3'>
        <h1 className='text-[30px]'>Choose the Correct Option</h1>
        <h2 className='text-2xl'>{mcqQuestion}</h2>
      </div>
      <div className='w-[80%] mx-auto flex flex-col gap-4'>
        {
          mcqOptions.map((option, index) => 
            <McqOption 
              key={index} 
              option={option} 
              index={index} 
              // setSelectedOption={setSelectedOption}
              isSelected = {index == selectedOption ? true : false}
            />
          )
        }
      </div>
    </div>
  )
}

export default McqSlide