import ReactHowler from 'react-howler'
import React, {useEffect, useState} from 'react'
import play from '../../../../Assets/Icons/play.svg'
import playing from '../../../../Assets/Icons/playing.svg'
import loopImg from '../../../../Assets/Icons/loop.svg'
import looping from '../../../../Assets/Icons/looping.svg'
// import audio from '../../../public/audio.mp3'

const ModelAudioControls = ({isLooping, setIsLooping, isPlaying, setIsPlaying, audioUrl}) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [mainPlay, setMainPlay] = useState(false);
  // const [isLooping, setIsLooping] = useState(false);
  // const [counter, setCounter] = useState(0);
 
  // const sound = useHowler({ src: "https://firebasestorage.googleapis.com/v0/b/audiostorage-46fa0.appspot.com/o/LearningUnit%2FUnit1%2FQ1%2FQ1.mp3?alt=media&token=1b9bfd94-981f-451b-bd1e-71d3b1affe26"});
  
 

  let counter = 0;
  
  const onEndHandler = () => {
    console.log(`isLooping: ${isLooping}`)
    if(isLooping) {
      console.log('if run')
      handleLoopCounter()
    }
    else if (isPlaying) {
      console.log('else run')
      setIsPlaying(false)
      // setMainPlay(false);
    }
  }
  
  const sound = new Howl({src: audioUrl, onend: onEndHandler, loop: isLooping})
  const stopSound = (stateFunction, value) => {
    stateFunction(value);
    sound.stop()
  }
  // sound.on('end', onEndHandler)

  const playAudioHandler = () => {
    console.log("PlayAudioHAndler Run")
    if(isLooping) {
      counter = 0;
      stopSound(setIsLooping, false);
      // setIsLooping(false);
      // sound.stop();
      // sound.loop(false);
    }
    if (isPlaying) {
      // setIsPlaying(false)
      // sound.stop();
      stopSound(setIsPlaying, false);
      // setMainPlay(false);
      // ... other pause actions
    } else {
      setIsPlaying(true)
      // playHandler();
      //setMainPlay(true);
      // ... other play actions
    }
  
  }
  const loopAudioHandler = () => {
    console.log("LoopAudioHandler Run")
    if(isPlaying) {
      // setIsPlaying(false);
      // sound.stop();
      stopSound(setIsPlaying, false);
    }
    if (isLooping) {
      // setIsLooping(false)
        // sound.loop(false);
      // sound.stop()
      stopSound(setIsLooping, false)
      counter = 0
  
    } else {
      setIsLooping(true)
      // loopHandler()
      console.log("Loop True")

    }
  }

  const handleLoopCounter = () => {
    console.log("Handle Loop Counter run")
    console.log(`counter: ${counter}`)
    if(counter < 2) {
 
      console.log("incremented Counter")
      counter++;
    }
    else {
      //sound.stop();
      //setIsLooping(false);
      counter = 0;
      stopSound(setIsLooping, false);
      console.log("Reset Counter")
    }
  }

  useEffect(() => {
    if(isPlaying) {
      sound.play();
    }
  }, [isPlaying])
  useEffect(() => {
    if(isLooping) {
      sound.play();
    }
  }, [isLooping])

  return (
    <div className='flex justify-center items-center gap-4'>
    <button onClick={playAudioHandler} style={{backgroundColor: "#051A22"}}>
      <img src={!isPlaying ? play : playing } />
    </button>
    <button onClick={loopAudioHandler} style={{backgroundColor: "#051A22", }} disabled = {isPlaying}>
        <img src={!isLooping ? loopImg : looping }  className={isLooping ? "loop-rotation" : ""}/>
    </button>
   </div>
  )
}

export default ModelAudioControls












// import React, { useRef, useState, useEffect } from 'react'
// import play from '../../Assets/play.svg'
// import playing from '../../Assets/playing.svg'
// import loopImg from '../../Assets/loop.svg'
// import looping from '../../Assets/looping.svg'
// const ModelAudioControls = () => {

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isLooping, setIsLooping] = useState(false);
//   const [counter, setCounter] = useState(0);
//   const audioRef = useRef();

//   const playAudioHandler = () => {
//     if (audioRef.current) {
//       if(!isPlaying && isLooping == true) {
//         setIsPlaying(false);
//         loopAudioHandler();
//       }
//       if (!isPlaying)  {
//         audioRef.current.play();
//         setIsPlaying(true);
//       }
//     }
//   }

//   const loopAudioHandler = () => {
//     console.log("Loop Audio Handler");
//     console.log(isLooping)
//     if(audioRef.current) {
//       if(!isLooping) {
//         setIsLooping(true);
//         audioRef.current.play();
//       }
//       else {
//         setIsLooping(false);
//       }
//     }
//   }
//   const handleLoopAudioEnded = () => {
//     console.log(`counter: ${counter}`)
//     if(counter < 3) {
      
//       setCounter(counter + 1)
//       audioRef.current.currentTime = 0;
//       audioRef.current.play();
//       console.log("incremented Counter")
//     }
//     else {
//       setIsLooping(false);
//       // setCounter(0);
//       console.log("Reset Counter")
//     }
//   }
//   // useEffect(() => {
//   //   console.log(`Counter: ${loop.counter}`)
//   //   if(loop.counter > 3) {
//   //     console.log("Counter reached", loop.counter)
//   //     setLoop((prevState) => ({...prevState, isLooping: false, counter: 0}))
//   //   } 
//   // }, [loop.counter])

//   useEffect(() => {

//     console.log(`Loop: ${isLooping}`)
//     console.log(`counter: ${counter}`)
//     console.log("Entered Event Listner")
//     if (audioRef.current) {
//       if(!isPlaying) {
//         audioRef.current.addEventListener('ended', () => setIsPlaying(false));
//       }
//       else if (!isLooping) {
//         audioRef.current.addEventListener('ended', () =>  handleLoopAudioEnded());
//       }
//     }
   
    
//     return () => {
//       if (audioRef.current) {
//         console.log("Removed Event Listner")
//         if(!isPlaying == true) {
//           audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
//         }
//         else if(isLooping) {
//           console.log("removed eventListner")
//           audioRef.current.removeEventListener('ended', () => setIsLooping(false));
//         }
//         // else if(!loop.isLooping == true && loop.counter == 3) {
//         //   audioRef.current.removeEventListener('ended', () =>  setLoop((prevState) => ({...prevState,isLooping: false, counter: 0})));
//         // }
        
//       }

//     };
//   }, [audioRef]);

//   return (
//     <div>
//       <audio ref={audioRef} >
//         <source src={"https://firebasestorage.googleapis.com/v0/b/audiostorage-46fa0.appspot.com/o/LearningUnit%2FUnit1%2FQ1%2FQ1.mp3?alt=media&token=1b9bfd94-981f-451b-bd1e-71d3b1affe26"} />
//       </audio>
//       <button onClick={playAudioHandler} style={{backgroundColor: "#051A22"}}>
//         <img src={!isPlaying ? play : playing } />
//       </button>
//       <button onClick={loopAudioHandler} style={{backgroundColor: "#051A22"}}>
//         <img src={!isLooping ? loopImg : looping } />
//       </button>
//     </div>
//   )
// }

// export default ModelAudioControls