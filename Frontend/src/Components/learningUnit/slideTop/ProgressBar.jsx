import React from 'react'
import Button from '../../../UI/Button'
import { useSelector } from 'react-redux'
import cancel from '../../../assets/icons/cancel.svg'
import { useNavigate } from 'react-router-dom'

/**
 * props: barWidth Percentage
 * cancelBtn: To route to nextSlide or cancel
 * 
 */




const ProgressBar = (props) => {
  // const navigate = useNavigate();
  const {progressCounter, totalSlides} = useSelector(state => state.slideControl);
  let width = Number((progressCounter - 1) / totalSlides) * 100;
  console.log(totalSlides)
  console.log(progressCounter);
  console.log(`Width: ${width}`)


  const cancelLearningUnitHandler = () => {
    // Navigate back to homepage 
    // navigate('/');
    props.exitModalHandler(true);
  }


  return (
    <div className='flex gap-4 justify-between items-center px-[100px]'>
      <Button 
        contentType={"icon"}
        color={"correct"}
        content={cancel}
        handler={cancelLearningUnitHandler}
      />
      <div className='w-[90%] bg-disabled rounded-[40px] h-[23px]'>
        <div className={`bg-correct rounded-[40px] h-[23px]`} style={{width: `${width}%`, transition: 'width 0.4s ease-in-out'}}>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar