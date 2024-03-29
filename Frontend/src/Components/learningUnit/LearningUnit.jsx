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
import { theoryComparativeSlideActions } from '../../Store/theoryComparativeSlideSlice';
import { modelSlideActions } from '../../Store/modelSlideSlice';
import { dndSlideActions } from '../../Store/dndSlideSlice';
import { matchingSlideAction } from '../../Store/matchingSlideSlice';
import { informationSlideActions } from '../../Store/informationSlideSlice';
import { teachAudioSlideActions } from '../../Store/teachAudioSlideSlice';



const LearningUnit = (props) => {

  // const [slideType, setSlideType] = useState("mcq");

  
  console.log("Data from useLocation: ")
  console.log(location);
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch();
  const currentSlide = useSelector(state => state.slideControl.currentSlide);
  const slideIdArray = useSelector(state => state.unitInfoSlice.slideIdArray);
  const learningUnitId = useSelector(state => state.unitInfoSlice.unitId)

  const getUnitDataHandler = async () => {
    setIsLoading(true)
    const response = await getUnitData(learningUnitId);
    // console.log(response.slideIdArray)
    console.log(response.slides)
    dispatch(unitInfoActions.setPerStarXp(response.perStarXp))
    dispatch(unitInfoActions.setTotalNumberOfQuestions(response.numOfQuestions));
    dispatch(slideControlActions.setTotalSlides(response.slides.length));
    dispatch(unitInfoActions.setSlideIdArray(response.slides))
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
          break;
        case "audio":
          dispatch(slideControlActions.setSlideType("audio"))
          dispatch(audioSlideActions.setAudioData(response.content))
          break;
        case "theoryImage":
          dispatch(slideControlActions.setSlideType("theoryImage"))
          dispatch(theoryImageSlideActions.setTheoryImageSlideData(response.content))
          break;
          case "theoryComparative":
            dispatch(slideControlActions.setSlideType("theoryComparative"))
            dispatch(theoryComparativeSlideActions.setTheoryComparativeSlideData(response.content))
            break;  
          case "model":
            dispatch(slideControlActions.setSlideType("model"))
            dispatch(modelSlideActions.setModelData(response.content))
            break;  
          case "dnd":
            dispatch(slideControlActions.setSlideType("dnd"))
            dispatch(dndSlideActions.setDndData(response.content))
            break; 
          case "match":
             dispatch(slideControlActions.setSlideType("match"))
             dispatch(matchingSlideAction.setMatchingSlideData(response.content))
             break;
          case "information":
              dispatch(slideControlActions.setSlideType("information"))
              dispatch(informationSlideActions.setInformationData(response.content))
              break;
          case "teachAudio":
              dispatch(slideControlActions.setSlideType("teachAudio"))
              dispatch(teachAudioSlideActions.setTeachAudioSlideData(response.content))
              break;
        default:
          break;
      }
    }
  }

  // Uncomment This only
  useEffect(() => {
    getUnitDataHandler();
    console.log("get unit Data Handler Run")
  }, [])


  useEffect(() => {

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
    !isLoading ? <Slide /> : <Spinner style={"primary"}/>
 
  )
}

export default LearningUnit

