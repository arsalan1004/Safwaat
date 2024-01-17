import React from 'react'
import rose from '../../../../Assets/Images/rose.jpg';
import { useSelector } from 'react-redux';
const TheorySlideImageText = () => {
  const {title, imageUrl, content} = useSelector(state => state.theoryImageSlideSlice); 

  return (
    <div className='flex flex-col items-center w-[70%] mx-auto gap-10 mb-5'>
      <h1 className='text-secondary text-3xl font-Itim'>{title}</h1>
      <div className='flex flex-col justify-center items-center gap-y-6'>
        <div className='w-2/5 mix-blend-multiply'>
          <img src={imageUrl} alt='image' className='rounded-[15px] block mx-auto mb-5 w-[700px]' 
            
          />
        </div>
        <div className='text-secondary text-center font-Itim w-4/5 ml-10'>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default TheorySlideImageText