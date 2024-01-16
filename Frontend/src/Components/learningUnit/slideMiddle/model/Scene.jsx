import React, { useRef, useEffect, useImperativeHandle, useState } from 'react'
import Camera from './Camera';
import Model from './Model';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const Scene = React.forwardRef((props, ref) => {
  // const [initial,setInitial] = useState(true);
  const directionalLightRef = useRef();
  const directionalLightRef1 = useRef();
  const directionalLightRef2 = useRef();
  const directionalLightRef3 = useRef();
  const ModelRef = useRef();
  console.log(ModelRef);
  // if(props.isPlaying) {
  //   ModelRef.current?.playSingleAnimation()
  //   console.log(ModelRef.current?.animationIsRunning())
  // }
  // // useEffect(() => {
  // //     console.log("use run")
  // //     if(props.isPlaying) {
  // //       ModelRef.current?.playSingleAnimation()
  // //       console.log(ModelRef.current?.animationIsRunning())
  // //     } else {
  // //       ModelRef.current?.stopAnimation()
  // //       console.log(ModelRef.current?.animationIsRunning())
  // //     }
 
  // // }, [props.isPlaying])

  useImperativeHandle(ref, () => {
    return ({
      playSingleAnimation: ModelRef.current.playSingleAnimation,
      playLoopAnimation: ModelRef.current.playLoopAnimation
      
    })
  })

  useEffect(() => {
    console.log("USE EFFECT: isLooping")
    if(props.isLooping) {
        console.log("Loop Played")
        ModelRef.current?.playLoopAnimation()
      
    } else {
      console.log("Loop Stopped")
      ModelRef.current?.stopAnimation()
    }
  }, [props.isLooping])
  useEffect(() => {
    console.log("USE EFFECT: isPlaying")
    if(props.isPlaying) {
      console.log("Single Played")
        ModelRef.current?.playSingleAnimation()
      
    } else {
      console.log("Single Stopped")
      ModelRef.current?.stopAnimation()
      
    }
  }, [props.isPlaying])




  useHelper(directionalLightRef, DirectionalLightHelper, 1, "black")
  useHelper(directionalLightRef1, DirectionalLightHelper, 1, "green")
  useHelper(directionalLightRef2, DirectionalLightHelper, 1, "red")
  useHelper(directionalLightRef3, DirectionalLightHelper, 1, "blue")
  return (
    <>
      <directionalLight intensity={2} position={[3,0,0]} />
      <group rotation={[0,Math.PI,0]}>
        <directionalLight intensity={2}  position={[3,0,0]}/>
      </group>
      <group rotation={[0,Math.PI + Math.PI / 2,0]}>
        <directionalLight intensity={1}  position={[4,0,0]} />
      </group>
      <group rotation={[0,Math.PI + Math.PI / 2,0.3]}>
        <directionalLight intensity={3}  position={[4,0,0]} />
      </group>
      <group rotation={[0,0.2,Math.PI/2]}>
        <directionalLight intensity={1}  position={[4,0,0]} />
      </group>
      {/* <group rotation={[0,Math.PI,0]}>
        <directionalLight intensity={2}  position={[3,0,0]} ref={directionalLightRef1}/>
      </group>
      <group rotation={[0,Math.PI + Math.PI / 2,0]}>
        <directionalLight intensity={1}  position={[4,0,0]} ref={directionalLightRef2}/>
      </group>
      <group rotation={[0,Math.PI + Math.PI / 2,0.3]}>
        <directionalLight intensity={3}  position={[4,0,0]} ref={directionalLightRef2}/>
      </group>
      <group rotation={[0,0.2,Math.PI/2]}>
        <directionalLight intensity={1}  position={[4,0,0]} ref={directionalLightRef3}/>
      </group> */}
      <Camera />
      <Model ref={ModelRef} time={props.time}/>
      {/* <axesHelper /> */}
      {/* <gridHelper /> */}
    </>
  )
})

export default Scene