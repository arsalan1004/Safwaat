import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mcqSlideActions } from '../../../../Store/mcqSlide';

const McqOption = (props) => {
  const dispatch = useDispatch();
  const isChecked = useSelector(state => state.slideControl.isChecked);
  const {correctAnswer, selectedOption} = useSelector(state => state.mcqSlideSlice);
  
  const setMcqOptionHandler = () => {
    // props.setSelectedOption(props.index)
    dispatch(mcqSlideActions.setSelected(props.index))
  }
  let style = "";
  const mcqStyles = {
    defaultStyle: "mcq-shadow-outer flex justify-center items-center text-xl font-itim bg-[#DEF1F2] text-secondary py-1 rounded-[15px] w-[50%] mx-auto border-[#DEF1F2] border-2 cursor-pointer",
    selectedStyle: "flex justify-center items-center text-xl font-itim py-1 rounded-[15px] w-[50%] mx-auto cursor-pointer text-primary border-2 bg-secondary border-secondary mcq-shadow-inner",
    correctionStyle: "mcq-shadow-outer flex justify-center items-center text-xl font-itim bg-correct text-primary py-1 rounded-[15px] w-[50%] mx-auto border-correct border-2 cursor-pointer",
    wrongStyle: "mcq-shadow-outer flex justify-center items-center text-xl font-itim bg-wrong text-primary py-1 rounded-[15px] w-[50%] mx-auto border-wrong border-2 cursor-pointer",
    selectedWrong: "mcq-shadow-inner flex justify-center items-center text-xl font-itim bg-wrong text-primary py-1 rounded-[15px] w-[50%] mx-auto border-wrong border-2 cursor-pointer",
    selectedCorrect: "mcq-shadow-inner flex justify-center items-center text-xl font-itim bg-correct text-primary py-1 rounded-[15px] w-[50%] mx-auto border-correct border-2 cursor-pointer"
  
  }

  if(isChecked == true) {
    if(correctAnswer == props.index && selectedOption == props.index) {
      style = mcqStyles.selectedCorrect;
    }
    else if (correctAnswer == props.index) {
      style = mcqStyles.correctionStyle;
    }
    else if(selectedOption == props.index) {
      style = mcqStyles.selectedWrong;
    }
    else {
      style = mcqStyles.wrongStyle;
    }
  } else {
    style = props.isSelected ? mcqStyles.selectedStyle : mcqStyles.defaultStyle;
  }
  
  return (
    <button id='abc' className={style}
    onClick={() => setMcqOptionHandler()}
    disabled = {isChecked ? true : false}
    style={{transition: "all 0.3s"}}
    >
      {props.option} 
    
    </button>
  )
}

export default McqOption