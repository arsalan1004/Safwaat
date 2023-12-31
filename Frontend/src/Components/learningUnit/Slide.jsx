import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from './slideTop/ProgressBar';
import McqSlide from './slideMiddle/mcq/McqSlide';
import AudioSlide from './slideMiddle/audio/AudioSlide';
import Motivation from './Motivation';
import ExitLessonModal from './ExitLessonModal';
import TheorySlideComparative from './slideMiddle/theory/TheorySlideComparative';
import TheorySlideImageText from './slideMiddle/theory/TheorySlideImageText';
import ModelWindow from './slideMiddle/model/ModelWindow';
import SlideBottomControl from './slideBottom/SlideBottomControl';

const Slide = (props) => {
  const {isMotivation, slideType} = useSelector(state => state.slideControl);

  const [modalAppear, setModalAppear] = useState(false)
    let slideContent = "";
    switch(slideType) {
      case "mcq":
        slideContent = <McqSlide />
        break;
      case "audio":
        slideContent = <AudioSlide />
        break;
      case "theoryImage":
        slideContent = <TheorySlideImageText />
        break;
      case "theoryComparative":
        slideContent = <TheorySlideComparative />
        break;
      case "model":
        slideContent = <ModelWindow />
        break;
      default:
        break;
    }

  const slideBgStyles = {
    primaryStyle: 'h-screen bg-primary transition-colors',
    secondaryStyle: 'h-screen bg-[#051A22] transition-colors'
  }


  return (
    <div className={slideType == "model" ? slideBgStyles.secondaryStyle : slideBgStyles.primaryStyle}>
      <div className='pt-5 flex flex-col justify-between h-[100%]'>
        <ProgressBar exitModalHandler={setModalAppear}/>
          {isMotivation && <Motivation />}
          {!isMotivation && slideContent}
          {/* <TheorySlideComparative /> */}
          {/* <TheorySlideImageText /> */}
          {modalAppear && <ExitLessonModal exitModalHandler={setModalAppear} />}
        <SlideBottomControl slideType={props.slideType} />
      </div>
    </div>
  )
}

export default Slide