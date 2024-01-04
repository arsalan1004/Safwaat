import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import { getNextSlideData, getUnitData } from '../../API/slideApi';
import { useDispatch, useSelector } from 'react-redux';
import { mcqSlideActions } from '../../Store/mcqSlide';
import { slideControlActions } from '../../Store/slideControl';
import { unitInfoActions } from '../../Store/unitInfo';
import { audioSlideActions } from '../../Store/audioSlideSlice';
import Spinner from '../../UI/Spinner';
import { theoryImageSlideActions } from '../../Store/theoryImageSlideSlice';

const LearningUnit = (props) => {

  // const [slideType, setSlideType] = useState("mcq");
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch();
  const currentSlide = useSelector(state => state.slideControl.currentSlide);
  const slideIdArray = useSelector(state => state.unitInfoSlice.slideIdArray);

  const getUnitDataHandler = async () => {
    setIsLoading(true)
    const response = await getUnitData();
    console.log(response.slideIdArray)
    dispatch(unitInfoActions.setPerStarXp(response.perStarXp))
    dispatch(unitInfoActions.setTotalNumberOfQuestions(response.numOfQuestions));
    dispatch(slideControlActions.setTotalSlides(response.slideIdArray.length));
    dispatch(unitInfoActions.setSlideIdArray(response.slideIdArray))
    setIsLoading(false);
  }

  const slideChangeHandler = async () => {
    if(slideIdArray) {
      console.log("currentSlide: ", currentSlide )
      console.log(slideIdArray[0])
      const response =  await getNextSlideData(slideIdArray[currentSlide-1]);
      console.log(response);
      switch(response?.slideType) {
        case "mcq":
          dispatch(slideControlActions.setSlideType("mcq"))
          dispatch(mcqSlideActions.setMcqData(response.content));
          // setSlideType(response.slideType);
          break;
        case "audio":
          dispatch(slideControlActions.setSlideType("audio"))
          dispatch(audioSlideActions.setAudioData(response.content))
          break;
          // TODO
        case "theoryImage":
          dispatch(slideControlActions.setSlideType("theoryImage"))
          dispatch(theoryImageSlideActions.setTheoryImageSlideData(response.content))
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    setTimeout(() => getUnitDataHandler(), 1000);
  }, [])
  // useEffect(() => {
  //   slideChangeHandler();
  //   console.log("SlideIDARray useEfffect");
  //   console.log(slideIdArray)
  // }, [slideIdArray])

  useEffect(() => {
    slideChangeHandler();
    console.log("Slide Change Run")
  }, [currentSlide, slideIdArray])

  return (
    !isLoading ? <Slide /> : <Spinner />
  )
}

export default LearningUnit



// const slideChangeHandler = async () => {
//   const response =  await getNextSlideData(currentSlide);
//   console.log(response);
//   if(response.id == 1) {
//     dispatch(unitInfoActions.setPerStarXp(response.perStarXp))
//     // Adding One to accomodate Motivation Slide
//     dispatch(unitInfoActions.setTotalNumberOfQuestions(response.numOfQuestions) );
//     dispatch(slideControlActions.setTotalSlides(response.numOfQuestions) );
//   }
//   switch(response.slideType) {
//     case "mcq":
//       dispatch(slideControlActions.setSlideType("mcq"))
//       dispatch(mcqSlideActions.setMcqData(response.content));
//       // setSlideType(response.slideType);
//       break;
//     case "audio":
//       dispatch(slideControlActions.setSlideType("audio"))
//       dispatch(audioSlideActions.setAudioData(response.content))
//       // TODO
//     default:
//       break;
//   }
// }