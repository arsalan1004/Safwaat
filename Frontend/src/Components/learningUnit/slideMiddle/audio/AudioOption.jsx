import React from 'react'
import { useDispatch } from 'react-redux'
import { audioSlideActions } from '../../../../Store/audioSlideSlice';
import { useSelector } from 'react-redux';
import AudioButton from './AudioButton';
const AudioOption = (props) => {
  const dispatch = useDispatch();
  const audioStyles = {
    defaultStyle: "text-secondary w-[55%] mx-auto text-center text-2xl px-4 py-4 border-[3px] border-secondary rounded-[10px] cursor-pointer",
    selectedStyle: "text-secondary w-[55%] mx-auto text-center text-2xl px-4 py-4 border-[3px] border-accent rounded-[10px] cursor-pointer",
    correctionStyle: "text-correct w-[55%] mx-auto text-center text-2xl px-4 py-4 border-[3px] border-correct rounded-[10px] cursor-pointer",
    wrongStyle: "text-wrong w-[55%] mx-auto text-center text-2xl px-4 py-4 border-[3px] border-wrong rounded-[10px] cursor-pointer",
    selectedWrong: "text-wrong w-[55%] mx-auto text-center text-2xl px-4 py-4 border-[3px] border-accent rounded-[10px] cursor-pointer"
  }

  const isChecked = useSelector(state => state.slideControl.isChecked);
  const {correctAnswer, selectedOption} = useSelector(state => state.audioSlideSlice);
  let style = "";

  if(isChecked == true) {
    if(correctAnswer == props.index) {
      style = audioStyles.correctionStyle;
    }
    else if(selectedOption == props.index) {
      style = audioStyles.selectedWrong;
    }
    else {
      style = audioStyles.defaultStyle;
    }
  } else {
    style = props.isSelected ? audioStyles.selectedStyle : audioStyles.defaultStyle;
  }
  


  // if(correctAnswer == props.index && isChecked == true) {
  //   style = audioStyles.correctionStyle;
  // }
  //  else {
  //   style = props.isSelected ? audioStyles.selectedStyle : audioStyles.defaultStyle;
  // }


  const setAudioOptionHandler = () => {
    // some other component is playing so don't select current
    if(props.playing == false) {
      dispatch(audioSlideActions.setSelected(props.index))
    }
  }

  return (
    <AudioButton
      src={props.url}
      setPlayingHandler = {props.setPlayingHandler}
      playing = {props.playing}
    >
      <div  className={style}
      onClick={() => setAudioOptionHandler()}
      disabled = {isChecked ? true : false}
      style={{transition: "all 0.3s"}}
      >
        {props.option} 
      
      </div>
    </AudioButton>
  )
}

export default AudioOption