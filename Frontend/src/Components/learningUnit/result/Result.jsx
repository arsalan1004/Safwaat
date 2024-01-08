import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import threeStars from '../../../assets/icons/threeStars.png';
import twoStars from '../../../assets/icons/twoStars.png';
import oneStar from '../../../assets/icons/oneStar.png';
import zeroStars from '../../../assets/icons/zeroStars.png';

import Button from '../../../UI/Button';
import { useNavigate } from 'react-router-dom';
import { postUnitData } from '../../../API/slideApi';
import ShareButton from '../shareButton/ShareButton';
import style from './Result.module.css'

// SVG'S for two,one,zero stars Required (Not in figma)

const Result = () => {
  const navigate = useNavigate();
  const {stars, perStarXp, numberOfCorrectAnswers, numberofWrongAnswers, unitNumber} = useSelector(state => state.unitInfoSlice);
  const [wrongAnsCount, setWrongAnsCount] = useState(0);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  
  let image;
  let subTitle = "";
  switch(stars) {
    case 3:
      image = threeStars;
      subTitle = "Awesome Performance";
      break;
    case 2:
      image = twoStars;
      subTitle = "Great Performance"
      break;
    case 1:
      image = oneStar;
      subTitle = "Good Performance"
      break;
    default:
      image = zeroStars;
      subTitle = "Better luck next time"
      break;
  }

  const postUnitDataHandler = async () => {
    const completetionData = {
      // // id: userId, // From Login Data stored in redux store
      userId: "659008aa4f03360cefe237db",
      learningUnit: "658fdbe94f03360cefe237cc",
      unitNum: 1,
      starsEarned: stars,
      xpCount: stars * perStarXp,
    }
    await postUnitData(completetionData);
  }
  const lessonCompleteHandler = async () => {
   
      // postUnitDataHandler();
      navigate("/")

  }
  useEffect(() => {
    let intervalId;
    console.log('interval run')
    const incrementCounts = () => {
      setCorrectAnsCount((prevCount) =>
        prevCount < numberOfCorrectAnswers ? prevCount + 1 : prevCount
      );
      setWrongAnsCount((prevCount) =>
        prevCount < numberofWrongAnswers ? prevCount + 1 : prevCount
      );
    };
  
    intervalId = setInterval(() => incrementCounts(), 600);
  
    // Clear the interval when the counts reach the redux state values or when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  console.log('result called')
  return (
    <div className='h-screen bg-primary-100 flex justify-center items-center'>
      <div className='flex flex-col w-2/5 mx-auto justify-center text-center gap-5 min-w-max'>
        <img src={image} alt={"stars-image"} 
          className='w-[210px] h-[95px] mx-auto min-w-fit'
        />
        <h2 className='text-[25px] font-semibold font-poppins tracking-wide text-secondary'>{subTitle}</h2>
        <p className='text-2xl text-secondary font-poppins'>{stars} Stars</p>
        <p className='text-2xl text-secondary font-poppins'>{perStarXp * stars} Xp Awarded</p>
        <div className='flex flex-col justify-center items-center font-Itim gap-2'>
          <div className='flex justify-between items-center min-w-max w-[30%] gap-2'>
            <div className='text-correct'>Correct</div>
            <div className={`${numberOfCorrectAnswers <= correctAnsCount ?  style['bump'] : ""} ${numberOfCorrectAnswers == correctAnsCount ?  style['result-box-correct'] : ""} flex justify-center items-center text-correct w-[25px] h-[25px] rounded-[40px]`}><p className='z-10'>{correctAnsCount}</p></div>
          </div>
          <div className='flex justify-between items-center min-w-max w-[30%] gap-2'>
            <div className='text-wrong'>Wrong</div>
            <div className={`${numberofWrongAnswers <= wrongAnsCount ?  style['bump'] : ""} ${numberofWrongAnswers == wrongAnsCount ?  style['result-box-wrong'] : ""} flex justify-center items-center text-wrong w-[25px] h-[25px] rounded-[40px]`}><p className='z-10'>{wrongAnsCount}</p></div>
          </div>
        </div>
        <div className='mt-5'>
        <Button 
            contentType={"text"}
            styleType={"solid-correct"}
            content={"Complete"}
            handler = {lessonCompleteHandler}
          />
          <ShareButton />
        </div>
      </div>
    </div>
  )
}

export default Result