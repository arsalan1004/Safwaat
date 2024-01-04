import React from 'react';
import { useSelector } from 'react-redux';
import threeStars from '../../assets/icons/threeStars.png';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { postUnitData } from '../../API/slideApi';
// SVG'S for two,one,zero stars Required (Not in figma)

const Result = () => {
  const navigate = useNavigate();
  const {stars, perStarXp, numberOfCorrectAnswers, numberofWrongAnswers, unitNumber} = useSelector(state => state.unitInfoSlice);

  let image;
  let subTitle = "";
  switch(stars) {
    case 3:
      image = threeStars;
      subTitle = "Awesome Performance";
      break;
    case 2:
      image = threeStars;
      subTitle = "Great Performance"
      break;
    case 1:
      image = threeStars;
      subTitle = "Good Performance"
      break;
    default:
      image = threeStars;
      subTitle = "Better luck next time"
      break;
  }

  const postUnitDataHandler = async () => {
    const completetionData = {
      // id: userId, // From Login Data stored in redux store
      unitNumber: unitNumber,
      Xp: stars * perStarXp,
      stars: stars
    }
    // await postUnitData(completetionData);
  }
  const lessonCompleteHandler = () => {
    // postUnitDataHandler();
    navigate("/")
  }

  return (
    <div className='h-screen bg-primary flex justify-center items-center'>
      <div className='flex flex-col w-2/5 mx-auto justify-center text-center gap-5'>
        <img src={image} alt={"stars-image"} 
          className='w-[210px] h-[95px] mx-auto'
        />
        <h2 className='text-[25px] font-semibold font-poppins tracking-wide text-secondary'>{subTitle}</h2>
        <p className='text-2xl text-secondary font-poppins'>{stars} Stars</p>
        <p className='text-2xl text-secondary font-poppins'>{perStarXp * stars} Xp Awarded</p>
        <div className='flex flex-col justify-center items-center font-itim gap-2'>
          <div className='flex justify-between items-center w-[30%]'>
            <div className='text-correct'>Correct</div>
            <div className='flex justify-center items-center text-correct bg-[#AAF491] w-[25px] h-[25px] rounded-[40px]'>{numberOfCorrectAnswers}</div>
          </div>
          <div className='flex justify-between items-center w-[30%]'>
            <div className='text-wrong'>Wrong</div>
            <div className='flex justify-center items-center text-wrong bg-[#F98C8C] w-[25px] h-[25px] rounded-[40px]'>{numberofWrongAnswers}</div>
          </div>
        </div>
        <div className='mt-5'>
        <Button 
            contentType={"text"}
            styleType={"solid-correct"}
            content={"Complete"}
            handler = {lessonCompleteHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default Result