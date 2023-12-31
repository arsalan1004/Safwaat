import React, { useState, Suspense, useRef, useImperativeHandle } from 'react'

import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

import ModelAudioControls from './ModelAudioControls'
import { useSelector } from 'react-redux'

const ModelWindow = () => {
  // const [isPlaying, setIsPlaying] = useState(false)
  const {heading, audioUrl} = useSelector(state => state.modelSlideSlice);

  const [isLooping, setIsLooping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log("ModelWindow Rendered")
  // console.log(`isPlaying: ${isPlaying}`)
  const sceneRef = useRef();
  // const timeRef = useRef()
  // const animationPlayHandler = () => {
  //   // if(isLooping) {
  //   //   setIsLooping(false);
  //   // }

  //   // sceneRef.current.playSingleAnimation()
  //   // setIsPlaying(ip => ip + 1)
 
  // }

  // const animationLoopHandler = () => {
  //   // setIsLooping(il => !il)
  //   // sceneRef.current.playLoopAnimation()
  // }

  // const currentTimeHandler = (time) => {
  //   console.log("setted Current Time")
  //   setCurrentTime(time)
  // }


  return (
    <>
      <h1 className='text-primary text-2xl mx-auto'>{heading}</h1>
      <Suspense fallback={<div className='flex justify-center items-center w-4/5 h-[55%] my-0 mx-auto text-primary'>Loading Model</div>}>
      <div className='w-4/5 h-[55%] my-0 mx-auto transition-all'>
        <Canvas>
          <Scene 
            ref={sceneRef}
            isPlaying = {isPlaying}
            isLooping={isLooping}
            />
            <color attach="background" args={["#051A22"]} />
        </Canvas>
        </div>
      </Suspense>
       
      <ModelAudioControls 
        // playHandler = {animationPlayHandler}
        // loopHandler = {animationLoopHandler}
        isLooping = {isLooping}
        setIsLooping = {setIsLooping}
        isPlaying = {isPlaying}
        setIsPlaying= {setIsPlaying}
        audioUrl = {audioUrl}
      />
    </>
  )
}
export default ModelWindow


  {/* <AudioVisualizer 
          ref={timeRef}
          loopHandler = {animationLoopHandler} 
          playHandler = {animationPlayHandler}
          currentTimeHandler = {currentTimeHandler}
          isLooping = {isLooping}
        /> */}