import React, { useEffect, useState } from 'react';


import Button from '../../../UI/Button';
import correctAnswerImage from '../../../assets/icons/correctAnswer.svg';
import wrongAnswerImage from '../../../assets/icons/wrongAnswer.svg';

import { useSelector, useDispatch } from 'react-redux'
import { slideControlActions } from '../../../Store/slideControl.js'
import { useNavigate } from 'react-router-dom';
import { unitInfoActions } from '../../../Store/unitInfo.js';
import { mcqSlideActions } from '../../../Store/mcqSlide.js';
import { audioSlideActions } from '../../../Store/audioSlideSlice.js';



const SlideBottomControl = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lessonComplete, setLessonComplete] = useState(false);


  const {isCorrect, isChecked, currentSlide, totalSlides, isMotivation, slideType} = useSelector((state) => state.slideControl);
  // let selectorFunction = () => getSelector(slideType);
  // const {selectedOption, correctAnswer} = useSelector(() => selectorFunction())
  // let selectedOption = '';
  // let correctAnswer = '';
  // const setMcqSlice = () => {
  //   ({selectedOption, correctAnswer} = useSelector(state => state.mcqSlideSlice))
  // }
  // const setAudioSlice = () => {
  //   ({selectedOption, correctAnswer} = useSelector(state => state.audioSlideSlice))
  // }
  
  useEffect(() => {
    if(lessonComplete == true) {
      
      // setInterval(() => {navigate('/learningUnit/result')}, 400);
      navigate('/learningUnit/result')
      // dispatch(slideControlActions.decrementCurrentSlide());
      // current slide needs to be decremented
    }

  }, [lessonComplete])
  
//   function getSelector(slideType) {
//   switch (slideType) {
//     case "mcq":
//       console.log("Returned mcq selector")
//       return (state => state.mcqSlideSlice);
//     case "audio":
//       console.log("Returned audio selector")
//       return (state => state.audioSlideSlice);
//     default:
//       // Risky
//       return () => {}; // Or handle differently for other types
//   }
// }
  let selectedOption = '';
  let correctAnswer = '';
  switch(slideType) {
    case "mcq":
      ({selectedOption, correctAnswer} = useSelector(state => state.mcqSlideSlice))
      break;
    case "audio":
      ({selectedOption, correctAnswer} = useSelector(state => state.audioSlideSlice))
      break;
    case "theoryImage":
      // Written for all 
      useSelector(state => state.mcqSlideSlice);
  
      break;
  }
  // switch(slideType) {
  //   case "mcq": setMcqSlice();
  //   break;
  //   case "audio": setAudioSlice();
  //   break;
  //   default:
  //     break;

  // }
  
  // const isChecked = useSelector((state) => state.slideControl.isChecked);
  // const {selectedOption: selectedOptionMcq, correctAnswer: correctAnswerMcq} = useSelector((state) => state.mcqSlideSlice);
  // const {selectedOption: selectedOptionAudio, correctAnswer: correctAnswerAudio} = useSelector((state) => state.audioSlideSlide)
  // const seletedOpt
  
  // const correctAnswer = useSelector((state) => state.mcqSlideSlice.correctAnswer);

 

  // const [isChecked, setIsChecked] = useState(false);
  // const [isCorrect, setIsCorrect] = useState(true);





  const dispatchCorrect = () => {
    dispatch(slideControlActions.setIsCorrect(true));
    dispatch(unitInfoActions.incrementCorrectAnswer());
  }

  const dispatchWrong = () => {
    dispatch(slideControlActions.setIsCorrect(false));
    dispatch(unitInfoActions.incrementWrongAnswer());
  }
  const isTheorySlide = () => {
    console.log("Entered isThoerySlideFuntion")
    if(slideType == 'theoryComparative' || slideType == 'theoryImage' || slideType == 'model' ) {
      console.log("returned true")
      return true
    }
    else {
      return false
    }


    // switch(slideType) {
    //   case 'theoryComparative': 
    //   case 'theoryImage': 
    //   case 'model':
    //     return true
    //   default:
    //     return false;
    // }
  }




  const isCheckedHandler = () => {
    console.log("Entered isCheckedHandler")
    // switch(props.slideType) {
    //   case: 
    // }

    // Perform some logic here
    // 
    if(isTheorySlide() == false) {
    if(selectedOption == -1) {
      console.log("Entered Selected Option -1")
      // Initial Condition When option is unselected, Clicking button then won't run
      return;
    }
    
    if(isChecked == false && isMotivation == false) {
        // When User Clicks Check
        dispatch(slideControlActions.setIsChecked(true))
        if(selectedOption == correctAnswer) dispatchCorrect();
        else dispatchWrong()
      // switch(slideType) {
      //   case "mcq": 
      //     {
      //       if(selectedOptionMcq == selectedOptionMcq) dispatchCorrect();
      //       else dispatchWrong()
      //       // if(selectedOption == correctAnswer) {
      //       //   dispatch(slideControlActions.setIsCorrect(true));
      //       //   dispatch(unitInfoActions.incrementCorrectAnswer());
      //       // } else {
      //       //   dispatch(slideControlActions.setIsCorrect(false));
      //       //   // dispatch(slideControlActions.setIsCorrect(false));
      //       //   dispatch(unitInfoActions.incrementWrongAnswer());
      //       // }

      //     }
      //     case "audio":
      //     {
      //       if(selectedOptionAudio == selectedOptionAudio) dispatchCorrect();
      //       else dispatchWrong()
      //     }
      //     break;
      //   default:
      //     break;
      // }
      
      console.log("Entered In isChecked == false @43")
    }
    else if(isMotivation == true) {
      // User is viewing motivation slide
      dispatch(slideControlActions.setIsMotivation(false));
      dispatch(slideControlActions.incrementCurrentSlide());
      dispatch(slideControlActions.incrementProgressCounter());
      // dispatch(slideControlActions.setIsChecked(false))
      console.log("Entered Motivation")
      navigate(`/learningUnit/${currentSlide + 1}`)
    }
    else {
     
      console.log(`Condition: ${Math.ceil(totalSlides/2)}`)
      console.log(`Current: ${currentSlide}`)
      if (currentSlide  == (Math.ceil(totalSlides/2))) {
        console.log("Entered BottomControl Motivation @ 54")
        dispatch(slideControlActions.setIsMotivation(true));
        // // Setting isChecked true to avoid entering first condition
        // dispatch(slideControlActions.setIsChecked(true))
      }
      else if(currentSlide < totalSlides) {
        dispatch(slideControlActions.incrementCurrentSlide()); 
        dispatch(slideControlActions.incrementProgressCounter());
        navigate(`/learningUnit/${currentSlide + 1}`)
      }
      else if (currentSlide == totalSlides) {
        dispatch(unitInfoActions.setNumberOfStars())
        // dispatch(slideControlActions.incrementCurrentSlide())
        dispatch(slideControlActions.incrementProgressCounter());
        // navigate('/result');
        setLessonComplete(true);
        
      }
      
        console.log("SlideTYPE: ", slideType)
        dispatch(slideControlActions.setIsChecked(false));
      
    }
  }
  else {
    if(isTheorySlide() == true) {
      if(currentSlide < totalSlides) {
        dispatch(slideControlActions.incrementCurrentSlide()); 
        dispatch(slideControlActions.incrementProgressCounter());
        navigate(`/learningUnit/${currentSlide + 1}`)
      }
      else if (currentSlide == totalSlides) {
        dispatch(unitInfoActions.setNumberOfStars())
        // dispatch(slideControlActions.incrementCurrentSlide())
        dispatch(slideControlActions.incrementProgressCounter());
        // navigate('/result');
        setLessonComplete(true);
        
      }
      // dispatch(slideControlActions.incrementCurrentSlide());
      // dispatch(slideControlActions.incrementProgressCounter());
      // navigate(`/${currentSlide + 1}`)
    }
  }
    
    console.log(isChecked);
    console.log(isCorrect)

    // setIsCorrect(false);
    console.log("Helo")
    // setIsChecked(true);
  }
  console.log(`isChecked ${isChecked}, isMotivation: ${isMotivation}`)

  const SkipHandler = () => {
    switch(slideType) {
      case "mcq": dispatch(mcqSlideActions.setSelected(-2));
        break;
      case "audio": dispatch(audioSlideActions.setSelected(-2));
        break;
      case "theoryImage": 
        dispatch(slideControlActions.incrementCurrentSlide()); 
        dispatch(slideControlActions.incrementProgressCounter());
        navigate(`/learningUnit/${currentSlide + 1}`)
        return;
      default:
        break;
    }
    dispatch(slideControlActions.setIsChecked(true));
    dispatchWrong();
    // dispatch(slideControlActions.setIsCorrect(false));
    // dispatch(unitInfoActions.incrementWrongAnswer());
  }
 
  

return (
  <div className={`flex justify-between items-center 
      py-6 border-t-2 border-disabled ${isTheorySlide() == true ? "bg-solid-accent" : (isChecked == false ?  "bg-solid-accent"  : (isCorrect == true ? "bg-[#AAF491]" : "bg-[#F98C8C]")) } 
      px-[100px]`}>
    {
      <>
        {
         
          !isMotivation && 
          (
          (!isChecked)
          ?
          (<Button 
            contentType={"text"}
            styleType={"outline-accent"}
            content={"Skip"}
            handler={SkipHandler}
          />)
          :
          (isTheorySlide() == false &&
          <div className='font-Itim flex justify-center items-center gap-6' style={{transition: "all 0.3s"}}>
            <img src={isCorrect == true ? correctAnswerImage : wrongAnswerImage } 
              className='w-[50px] h-[50px]'
            />
            {
              isCorrect
              ?
              <p className='font-Itim text-correct'>Welldone</p>
              :
              <p className='font-Itim text-wrong'>Incorrect</p>
            }
          </div>)
          )
        }
        <div className={`font-Itim ${isMotivation ? 'flex flex-col w-[100%]' : ""}`}>
          <Button 
            contentType={"text"}
            styleType= {((isChecked == false && isMotivation == false) || isTheorySlide() == true) 
                        ?  "solid-accent"  : 
                        (isCorrect == true && isMotivation == false ? "solid-correct" : (isMotivation == true ? "solid-correct-motivation" : "solid-wrong")) }
            // styleType= {(isChecked == false && isMotivation == false) 
            //             ?  "solid-accent"  : 
            //             (isCorrect == true || isMotivation == true ? "solid-correct" 
            //             : "solid-wrong") }
          
            content={isTheorySlide() == true ? "Done"  : (isChecked == true || isMotivation == true) ? "Continue" : "Check"}
            handler = {isCheckedHandler}
          

          />
        </div>
     </>
    }
  </div>
)
}


export default SlideBottomControl;




//////////////
/**
 *  <div className={`flex justify-between items-center 
        py-6 border-t-2 border-disabled ${isChecked == false ?  "bg-solid-accent"  : (isCorrect == true ? "bg-[#AAF491]" : "bg-[#F98C8C]") } 
        px-[100px]`}>
      {
        <>
          {
           
            !isMotivation && 
            (
            (!isChecked)
            ?
            (<Button 
              contentType={"text"}
              styleType={"outline-accent"}
              content={"Skip"}
              handler={SkipHandler}
            />)
            :
         
            <div className='flex justify-center items-center gap-6' style={{transition: "all 0.3s"}}>
              <img src={isCorrect == true ? correctAnswerImage : wrongAnswerImage } 
                className='w-[50px] h-[50px]'
              />
              {
                isCorrect
                ?
                <p className='font-Itim text-correct'>Welldone</p>
                :
                <p className='font-Itim text-wrong'>Incorrect</p>
              }
            </div>
            )
          }
          <div className={`${isMotivation ? 'flex flex-col w-[100%]' : ""}`}>
            <Button 
              contentType={"text"}
              styleType= {(isChecked == false && isMotivation == false) 
                          ?  "solid-accent"  : 
                          (isCorrect == true && isMotivation == false ? "solid-correct" : (isMotivation == true ? "solid-correct-motivation" : "solid-wrong")) }
              // styleType= {(isChecked == false && isMotivation == false) 
              //             ?  "solid-accent"  : 
              //             (isCorrect == true || isMotivation == true ? "solid-correct" 
              //             : "solid-wrong") }
            
              content={(isChecked == true || isMotivation == true) ? "Continue" : "Check"}
              handler = {isCheckedHandler}
            

            />
          </div>
       </>
      }
    </div>
  )
 */


/////////////













// return (
//   <div className={`flex justify-between items-center 
//       py-6 border-t-2 border-disabled ${isTheorySlide() == true ? "bg-solid-accent" : (isChecked == false ?  "bg-solid-accent"  : (isCorrect == true ? "bg-[#AAF491]" : "bg-[#F98C8C]")) } 
//       px-[100px]`}>
//     {
//       <>
//         {
         
//           !isMotivation && 
//           (
//           (!isChecked)
//           ?
//           (<Button 
//             contentType={"text"}
//             styleType={"outline-accent"}
//             content={"Skip"}
//             handler={SkipHandler}
//           />)
//           :
//           (isTheorySlide() == false &&
//           <div className='flex justify-center items-center gap-6' style={{transition: "all 0.3s"}}>
//             <img src={isCorrect == true ? correctAnswerImage : wrongAnswerImage } 
//               className='w-[50px] h-[50px]'
//             />
//             {
//               isCorrect
//               ?
//               <p className='font-Itim text-correct'>Welldone</p>
//               :
//               <p className='font-Itim text-wrong'>Incorrect</p>
//             }
//           </div>)
//           )
//         }
//         <div className={`${isMotivation ? 'flex flex-col w-[100%]' : ""}`}>
//           <Button 
//             contentType={"text"}
//             styleType= {((isChecked == false && isMotivation == false) || isTheorySlide() == true) 
//                         ?  "solid-accent"  : 
//                         (isCorrect == true && isMotivation == false ? "solid-correct" : (isMotivation == true ? "solid-correct-motivation" : "solid-wrong")) }
//             // styleType= {(isChecked == false && isMotivation == false) 
//             //             ?  "solid-accent"  : 
//             //             (isCorrect == true || isMotivation == true ? "solid-correct" 
//             //             : "solid-wrong") }
          
//             content={isTheorySlide() == true ? "Done"  : (isChecked == true || isMotivation == true) ? "Continue" : "Check"}
//             handler = {isCheckedHandler}
          

//           />
//         </div>
//      </>
//     }
//   </div>
// )















/**
 * import React, { useEffect, useState } from 'react';


import Button from '../../../UI/Button';
import correctAnswerImage from '../../../assets/icons/correctAnswer.svg';
import wrongAnswerImage from '../../../assets/icons/wrongAnswer.svg';

import { useSelector, useDispatch } from 'react-redux'
import { slideControlActions } from '../../../Store/slideControl.js'
import { useNavigate } from 'react-router-dom';
import { unitInfoActions } from '../../../Store/unitInfo.js';
import { mcqSlideActions } from '../../../Store/mcqSlide.js';
import { audioSlideActions } from '../../../Store/audioSlideSlice.js';



const SlideBottomControl = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lessonComplete, setLessonComplete] = useState(false);


  const {isCorrect, isChecked, currentSlide, totalSlides, isMotivation, slideType} = useSelector((state) => state.slideControl);
  // let selectorFunction = () => getSelector(slideType);
  // const {selectedOption, correctAnswer} = useSelector(() => selectorFunction())
  // let selectedOption = '';
  // let correctAnswer = '';
  // const setMcqSlice = () => {
  //   ({selectedOption, correctAnswer} = useSelector(state => state.mcqSlideSlice))
  // }
  // const setAudioSlice = () => {
  //   ({selectedOption, correctAnswer} = useSelector(state => state.audioSlideSlice))
  // }
  
  useEffect(() => {
    if(lessonComplete == true) {
      
      setInterval(() => {navigate('/result')}, 400);

      // dispatch(slideControlActions.decrementCurrentSlide());
      // current slide needs to be decremented
    }

  }, [lessonComplete])
  
//   function getSelector(slideType) {
//   switch (slideType) {
//     case "mcq":
//       console.log("Returned mcq selector")
//       return (state => state.mcqSlideSlice);
//     case "audio":
//       console.log("Returned audio selector")
//       return (state => state.audioSlideSlice);
//     default:
//       // Risky
//       return () => {}; // Or handle differently for other types
//   }
// }
  let selectedOption = '';
  let correctAnswer = '';
  switch(slideType) {
    case "mcq":
      ({selectedOption, correctAnswer} = useSelector(state => state.mcqSlideSlice))
      break;
    case "audio":
      ({selectedOption, correctAnswer} = useSelector(state => state.audioSlideSlice))
      break;
    case "theoryImage":
      // Written for all 
      useSelector(state => state.mcqSlideSlice);
  
      break;
  }
  // switch(slideType) {
  //   case "mcq": setMcqSlice();
  //   break;
  //   case "audio": setAudioSlice();
  //   break;
  //   default:
  //     break;

  // }
  
  // const isChecked = useSelector((state) => state.slideControl.isChecked);
  // const {selectedOption: selectedOptionMcq, correctAnswer: correctAnswerMcq} = useSelector((state) => state.mcqSlideSlice);
  // const {selectedOption: selectedOptionAudio, correctAnswer: correctAnswerAudio} = useSelector((state) => state.audioSlideSlide)
  // const seletedOpt
  
  // const correctAnswer = useSelector((state) => state.mcqSlideSlice.correctAnswer);

 

  // const [isChecked, setIsChecked] = useState(false);
  // const [isCorrect, setIsCorrect] = useState(true);





  const dispatchCorrect = () => {
    dispatch(slideControlActions.setIsCorrect(true));
    dispatch(unitInfoActions.incrementCorrectAnswer());
  }

  const dispatchWrong = () => {
    dispatch(slideControlActions.setIsCorrect(false));
    dispatch(unitInfoActions.incrementWrongAnswer());
  }
  const isTheorySlide = () => {
    console.log("Entered isThoerySlideFuntion")
    if(slideType == 'theoryComparative' || slideType == 'theoryImage' || slideType == 'model' ) {
      console.log("returned true")
      return true
    }
    else {
      return false
    }


    // switch(slideType) {
    //   case 'theoryComparative': 
    //   case 'theoryImage': 
    //   case 'model':
    //     return true
    //   default:
    //     return false;
    // }
  }




  const isCheckedHandler = () => {
    console.log("Entered isCheckedHandler")
    // switch(props.slideType) {
    //   case: 
    // }

    // Perform some logic here
    // 
    if(isTheorySlide() == false) {
    if(selectedOption == -1) {
      console.log("Entered Selected Option -1")
      // Initial Condition When option is unselected, Clicking button then won't run
      return;
    }
    
    if(isChecked == false && isMotivation == false) {
        // When User Clicks Check
        dispatch(slideControlActions.setIsChecked(true))
        if(selectedOption == correctAnswer) dispatchCorrect();
        else dispatchWrong()
      // switch(slideType) {
      //   case "mcq": 
      //     {
      //       if(selectedOptionMcq == selectedOptionMcq) dispatchCorrect();
      //       else dispatchWrong()
      //       // if(selectedOption == correctAnswer) {
      //       //   dispatch(slideControlActions.setIsCorrect(true));
      //       //   dispatch(unitInfoActions.incrementCorrectAnswer());
      //       // } else {
      //       //   dispatch(slideControlActions.setIsCorrect(false));
      //       //   // dispatch(slideControlActions.setIsCorrect(false));
      //       //   dispatch(unitInfoActions.incrementWrongAnswer());
      //       // }

      //     }
      //     case "audio":
      //     {
      //       if(selectedOptionAudio == selectedOptionAudio) dispatchCorrect();
      //       else dispatchWrong()
      //     }
      //     break;
      //   default:
      //     break;
      // }
      
      console.log("Entered In isChecked == false @43")
    }
    else if(isMotivation == true) {
      // User is viewing motivation slide
      dispatch(slideControlActions.setIsMotivation(false));
      dispatch(slideControlActions.incrementCurrentSlide());
      dispatch(slideControlActions.incrementProgressCounter());
      // dispatch(slideControlActions.setIsChecked(false))
      console.log("Entered Motivation")
      navigate(`/${currentSlide + 1}`)
    }
    else {
     
      console.log(`Condition: ${Math.ceil(totalSlides/2)}`)
      console.log(`Current: ${currentSlide}`)
      if (currentSlide  == (Math.ceil(totalSlides/2))) {
        console.log("Entered BottomControl Motivation @ 54")
        dispatch(slideControlActions.setIsMotivation(true));
        // // Setting isChecked true to avoid entering first condition
        // dispatch(slideControlActions.setIsChecked(true))
      }
      else if(currentSlide < totalSlides) {
        dispatch(slideControlActions.incrementCurrentSlide()); 
        dispatch(slideControlActions.incrementProgressCounter());
        navigate(`/${currentSlide + 1}`)
      }
      else if (currentSlide == totalSlides) {
        dispatch(unitInfoActions.setNumberOfStars())
        // dispatch(slideControlActions.incrementCurrentSlide())
        dispatch(slideControlActions.incrementProgressCounter());
        // navigate('/result');
        setLessonComplete(true);
        
      }
      
        console.log("SlideTYPE: ", slideType)
        dispatch(slideControlActions.setIsChecked(false));
      
    }
  }
  else {
    if(isTheorySlide() == true) {
      if(currentSlide < totalSlides) {
        dispatch(slideControlActions.incrementCurrentSlide()); 
        dispatch(slideControlActions.incrementProgressCounter());
        navigate(`/${currentSlide + 1}`)
      }
      else if (currentSlide == totalSlides) {
        dispatch(unitInfoActions.setNumberOfStars())
        // dispatch(slideControlActions.incrementCurrentSlide())
        dispatch(slideControlActions.incrementProgressCounter());
        // navigate('/result');
        setLessonComplete(true);
        
      }
      // dispatch(slideControlActions.incrementCurrentSlide());
      // dispatch(slideControlActions.incrementProgressCounter());
      // navigate(`/${currentSlide + 1}`)
    }
  }
    
    console.log(isChecked);
    console.log(isCorrect)

    // setIsCorrect(false);
    console.log("Helo")
    // setIsChecked(true);
  }
  console.log(`isChecked ${isChecked}, isMotivation: ${isMotivation}`)

  const SkipHandler = () => {
    switch(slideType) {
      case "mcq": dispatch(mcqSlideActions.setSelected(-2));
        break;
      case "audio": dispatch(audioSlideActions.setSelected(-2));
        break;
      case "theoryImage": 
        dispatch(slideControlActions.incrementCurrentSlide()); 
        dispatch(slideControlActions.incrementProgressCounter());
        navigate(`/${currentSlide + 1}`)
        return;
      default:
        break;
    }
    dispatch(slideControlActions.setIsChecked(true));
    dispatchWrong();
    // dispatch(slideControlActions.setIsCorrect(false));
    // dispatch(unitInfoActions.incrementWrongAnswer());
  }
 
  

return (
  <div className={`flex justify-between items-center 
      py-6 border-t-2 border-disabled ${isTheorySlide() == true ? "bg-solid-accent" : (isChecked == false ?  "bg-solid-accent"  : (isCorrect == true ? "bg-[#AAF491]" : "bg-[#F98C8C]")) } 
      px-[100px]`}>
    {
      <>
        {
         
          !isMotivation && 
          (
          (!isChecked)
          ?
          (<Button 
            contentType={"text"}
            styleType={"outline-accent"}
            content={"Skip"}
            handler={SkipHandler}
          />)
          :
          (isTheorySlide() == false &&
          <div className='flex justify-center items-center gap-6' style={{transition: "all 0.3s"}}>
            <img src={isCorrect == true ? correctAnswerImage : wrongAnswerImage } 
              className='w-[50px] h-[50px]'
            />
            {
              isCorrect
              ?
              <p className='font-Itim text-correct'>Welldone</p>
              :
              <p className='font-Itim text-wrong'>Incorrect</p>
            }
          </div>)
          )
        }
        <div className={`${isMotivation ? 'flex flex-col w-[100%]' : ""}`}>
          <Button 
            contentType={"text"}
            styleType= {((isChecked == false && isMotivation == false) || isTheorySlide() == true) 
                        ?  "solid-accent"  : 
                        (isCorrect == true && isMotivation == false ? "solid-correct" : (isMotivation == true ? "solid-correct-motivation" : "solid-wrong")) }
            // styleType= {(isChecked == false && isMotivation == false) 
            //             ?  "solid-accent"  : 
            //             (isCorrect == true || isMotivation == true ? "solid-correct" 
            //             : "solid-wrong") }
          
            content={isTheorySlide() == true ? "Done"  : (isChecked == true || isMotivation == true) ? "Continue" : "Check"}
            handler = {isCheckedHandler}
          

          />
        </div>
     </>
    }
  </div>
)
}


export default SlideBottomControl;




//////////////
/**
 *  <div className={`flex justify-between items-center 
        py-6 border-t-2 border-disabled ${isChecked == false ?  "bg-solid-accent"  : (isCorrect == true ? "bg-[#AAF491]" : "bg-[#F98C8C]") } 
        px-[100px]`}>
      {
        <>
          {
           
            !isMotivation && 
            (
            (!isChecked)
            ?
            (<Button 
              contentType={"text"}
              styleType={"outline-accent"}
              content={"Skip"}
              handler={SkipHandler}
            />)
            :
         
            <div className='flex justify-center items-center gap-6' style={{transition: "all 0.3s"}}>
              <img src={isCorrect == true ? correctAnswerImage : wrongAnswerImage } 
                className='w-[50px] h-[50px]'
              />
              {
                isCorrect
                ?
                <p className='font-Itim text-correct'>Welldone</p>
                :
                <p className='font-Itim text-wrong'>Incorrect</p>
              }
            </div>
            )
          }
          <div className={`${isMotivation ? 'flex flex-col w-[100%]' : ""}`}>
            <Button 
              contentType={"text"}
              styleType= {(isChecked == false && isMotivation == false) 
                          ?  "solid-accent"  : 
                          (isCorrect == true && isMotivation == false ? "solid-correct" : (isMotivation == true ? "solid-correct-motivation" : "solid-wrong")) }
              // styleType= {(isChecked == false && isMotivation == false) 
              //             ?  "solid-accent"  : 
              //             (isCorrect == true || isMotivation == true ? "solid-correct" 
              //             : "solid-wrong") }
            
              content={(isChecked == true || isMotivation == true) ? "Continue" : "Check"}
              handler = {isCheckedHandler}
            

            />
          </div>
       </>
      }
    </div>
  )
 */


/////////////













// return (
//   <div className={`flex justify-between items-center 
//       py-6 border-t-2 border-disabled ${isTheorySlide() == true ? "bg-solid-accent" : (isChecked == false ?  "bg-solid-accent"  : (isCorrect == true ? "bg-[#AAF491]" : "bg-[#F98C8C]")) } 
//       px-[100px]`}>
//     {
//       <>
//         {
         
//           !isMotivation && 
//           (
//           (!isChecked)
//           ?
//           (<Button 
//             contentType={"text"}
//             styleType={"outline-accent"}
//             content={"Skip"}
//             handler={SkipHandler}
//           />)
//           :
//           (isTheorySlide() == false &&
//           <div className='flex justify-center items-center gap-6' style={{transition: "all 0.3s"}}>
//             <img src={isCorrect == true ? correctAnswerImage : wrongAnswerImage } 
//               className='w-[50px] h-[50px]'
//             />
//             {
//               isCorrect
//               ?
//               <p className='font-Itim text-correct'>Welldone</p>
//               :
//               <p className='font-Itim text-wrong'>Incorrect</p>
//             }
//           </div>)
//           )
//         }
//         <div className={`${isMotivation ? 'flex flex-col w-[100%]' : ""}`}>
//           <Button 
//             contentType={"text"}
//             styleType= {((isChecked == false && isMotivation == false) || isTheorySlide() == true) 
//                         ?  "solid-accent"  : 
//                         (isCorrect == true && isMotivation == false ? "solid-correct" : (isMotivation == true ? "solid-correct-motivation" : "solid-wrong")) }
//             // styleType= {(isChecked == false && isMotivation == false) 
//             //             ?  "solid-accent"  : 
//             //             (isCorrect == true || isMotivation == true ? "solid-correct" 
//             //             : "solid-wrong") }
          
//             content={isTheorySlide() == true ? "Done"  : (isChecked == true || isMotivation == true) ? "Continue" : "Check"}
//             handler = {isCheckedHandler}
          

//           />
//         </div>
//      </>
//     }
//   </div>
// )
 //*/