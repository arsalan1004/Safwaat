import React from 'react'
import { useSelector } from 'react-redux'

const TheorySlideInformation = () => {
  const {title, mainContent, extraInfo} = useSelector(state => state.informationSlideSlice)

  return (
    <div className='w-[60%] mx-auto flex flex-col justify-center items-center font-Itim text-secondary text-center gap-y-6'>
      <div className='text-3xl font-semibold tracking-wider'>{title}</div>
      <div className='text-2xl mt-6'>{mainContent}</div>
      <div className='text-xl'>{extraInfo}</div>
    </div>
  )
}

export default TheorySlideInformation