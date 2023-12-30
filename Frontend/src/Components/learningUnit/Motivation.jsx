import React from 'react';
import motivationCamel from '../../assets/images/motivationCamel.png';
import { useSelector } from 'react-redux';

const Motivation = () => {
  const currentSlide = useSelector(state => state.slideControl.currentSlide);
  const numOfCorrectAns = useSelector(state => state.unitInfoSlice.numberOfCorrectAnswers);

  let conversation = "";
  if(numOfCorrectAns == currentSlide) {
    conversation = "You have been Phenomenal";
  }
  else if (numOfCorrectAns  == 0) {
    conversation = "Push A little Harder, You can do it";
  }
  else {
    conversation = "You are Doing Good";
  }

  console.log(`Number of Correct Answers: ${numOfCorrectAns} `)
  console.log(`Current Slide: ${currentSlide}`)
  return (
    
    <div className='w-3/5 flex justify-between items-center mx-auto'>
      <div className='font-poppins text-secondary'>
        <p>{conversation}</p>
        <p>Just Few More Slides to Go..!</p>
      </div>
      <img src={motivationCamel} alt="camel-motivating-learning" 
        className='w-[392px]'
      />
    </div>
  )
}

export default Motivation