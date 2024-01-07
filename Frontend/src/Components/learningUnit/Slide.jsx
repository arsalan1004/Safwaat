import React, { useState } from 'react';
import ProgressBar from './slideTop/ProgressBar';
import McqSlide from './slideMiddle/mcq/McqSlide';
import SlideBottomControl from './slideBottom/SlideBottomControl';
import Motivation from './Motivation';
import { useSelector } from 'react-redux';
import ExitLessonModal from './ExitLessonModal';
import AudioSlide from './slideMiddle/audio/AudioSlide';
import TheorySlideComparative from './slideMiddle/theory/TheorySlideComparative';
import TheorySlideImageText from './slideMiddle/theory/TheorySlideImageText';

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
      default:
        break;
    }

  const slideBgStyles = {
    primaryStyle: 'h-screen bg-primary-100',
    secondaryStyle: 'h-screen bg-[#051A22]'
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