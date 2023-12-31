// TODO
/**
 * Pause the animation
 * Play animation once
 * controls to revolve light around
 * Change background
 * Proper Control Panel
 */

import React, { useState, useRef,useImperativeHandle, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const Model = React.forwardRef((props, ref) => {


  // const [isAnimating, setIsAnimating] = useState(false);


  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./mouth/mouth.gltf");
  console.log("Running")

  const {actions} = useAnimations(animations, group);

  // const newClips = clips.map((clip,index) => {
  //     if(clip.name.slice(0, clip.name.length - 2) == 'Jeem') {

  //       const newTracks = clip.tracks.map((track) => (track.clone().trim(0.25, clip.duration)))
  //       return new THREE.AnimationClip(`clip${index}`, clip.duration, newTracks, 2500)
  //     } else {
  //       return clip
  //     }
  //   })
  //   console.log(clips)
  //   console.log(newClips)
  //   console.log(actions)
  // let {actions: newActions} = useAnimations(newClips, group)
  // console.log(newActions)
  // //   clips[0] = clips[0].tracks?.map(track => track.trim(0.5,clips[0].duration))
  // // let jeem2Action = new THREE.AnimationAction(clips)
  // // const abc = useAnimations(animations, group);
  // // const mixer1 = new THREE.AnimationAction()


  const clock = new THREE.Clock()
  const playSingleAnimation = () => {
    // clock.start()
    // Applying resets for Immediate changes
    // setLoop for mutating Loop configuration
    // actions['Jeem1'].reset()
    // actions['Jeem2'].reset()
    // actions['Jeem3'].reset()

    // actions['Jeem1'].paused = false;
    // actions['Jeem2'].paused = false;
    // actions['Jeem3'].paused = false;
  
    actions['Jeem1']?.setLoop(THREE.LoopOnce, 1).play().reset();
    actions['Jeem2']?.setLoop(THREE.LoopOnce, 1).play().reset();
    actions['Jeem3']?.setLoop(THREE.LoopOnce, 1).play().reset();
    // actions['Jeem1']?.setLoop(THREE.LoopOnce, 1).startAt(props.time).play().reset();
    // actions['Jeem2']?.setLoop(THREE.LoopOnce, 1).startAt(props.time).play().reset();
    // actions['Jeem3']?.setLoop(THREE.LoopOnce, 1).startAt(props.time).play().reset();



    // newActions['clip0']?.setLoop(THREE.LoopOnce, 1).play().reset();
    // newActions['clip1']?.setLoop(THREE.LoopOnce, 1).play().reset();
    // newActions['clip3']?.setLoop(THREE.LoopOnce, 1).play().reset();

    // clock.stop()

  }

  const playLoopAnimation = () => {

      // actions['Jeem1'].reset()
      // actions['Jeem2'].reset()
      // actions['Jeem3'].reset()

      // actions['Jeem1'].paused = false;
      // actions['Jeem2'].paused = false;
      // actions['Jeem3'].paused = false;

      actions['Jeem1']?.setLoop(THREE.LoopRepeat, 3).play().reset();
      actions['Jeem2']?.setLoop(THREE.LoopRepeat, 3).play().reset();
      actions['Jeem3']?.setLoop(THREE.LoopRepeat, 3).play().reset();
      // actions['Jeem1']?.setLoop().startAt(props.time).play();
      // actions['Jeem2']?.setLoop().startAt(props.time).play();
      // actions['Jeem3']?.setLoop().startAt(props.time).play();

    console.log(props.time);
  }

  const stopAnimation = () => {
    // actions['Jeem1'].paused = true;
    // actions['Jeem2'].paused = true;
    // actions['Jeem3'].paused = true;

    actions['Jeem1']?.stop();
    actions['Jeem2']?.stop();
    actions['Jeem3']?.stop();

  }


  const animationIsRunning = () => {

    return actions['Jeem1']?.isRunning()
  }



  useImperativeHandle(ref, () => {
    return {
      playSingleAnimation,
      playLoopAnimation,
      stopAnimation,
      animationIsRunning,

    }
  })



  return (
    <group ref={group} {...props} dispose={null} position={[0, 0.3, 0]}>
    <group name="Scene">
      <group
        name="Armature012"
        position={[0.126, 0.028, -0.032]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <skinnedMesh
          name="Cube041"
          geometry={nodes.Cube041.geometry}
          material={materials.Tongue}
          skeleton={nodes.Cube041.skeleton}
        />
        <primitive object={nodes.Bone} />
      </group>
      <group
        name="Armature013"
        position={[0.018, 0.092, -0.546]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      >
        <group name="Cube040">
          <skinnedMesh
            name="Cube007"
            geometry={nodes.Cube007.geometry}
            material={materials.TeethTop}
            skeleton={nodes.Cube007.skeleton}
          />
          <skinnedMesh
            name="Cube007_1"
            geometry={nodes.Cube007_1.geometry}
            material={materials["gums top"]}
            skeleton={nodes.Cube007_1.skeleton}
          />
        </group>
        <primitive object={nodes.TopBone} />
      </group>
      <group
        name="Armature014"
        position={[0.018, -0.663, -0.482]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.966}
      >
        <group name="Cube039">
          <skinnedMesh
            name="Cube006"
            geometry={nodes.Cube006.geometry}
            material={materials.Teeth}
            skeleton={nodes.Cube006.skeleton}
          />
          <skinnedMesh
            name="Cube006_1"
            geometry={nodes.Cube006_1.geometry}
            material={materials.gums}
            skeleton={nodes.Cube006_1.skeleton}
          />
        </group>
        <primitive object={nodes.BottomBone} />
      </group>
    </group>
  </group>

  );
})
// useGLTF.preload("mouth.gltf");

export default Model


 // <group ref={group} {...props} dispose={null} position={[0, 1, 0]}>
    //   <group name="Scene">
    //     <group
    //       name="Armature009"
    //       position={[0.052, 0, -0.032]}
    //       rotation={[Math.PI, 0, Math.PI]}
    //     >
    //       <skinnedMesh
    //         name="Cube038"
    //         geometry={nodes.Cube038.geometry}
    //         material={materials.Tongue}
    //         skeleton={nodes.Cube038.skeleton}
    //       />
    //       <primitive object={nodes.Bone} />
    //     </group>
    //     <group
    //       name="Armature010"
    //       position={[-0.056, 0.173, -0.546]}
    //       rotation={[-Math.PI / 2, 0, -Math.PI]}
    //     >
    //       <group name="Cube034">
    //         <skinnedMesh
    //           name="Cube004"
    //           geometry={nodes.Cube004.geometry}
    //           material={materials.TeethTop}
    //           skeleton={nodes.Cube004.skeleton}
    //         />
    //         <skinnedMesh
    //           name="Cube004_1"
    //           geometry={nodes.Cube004_1.geometry}
    //           material={materials["gums top"]}
    //           skeleton={nodes.Cube004_1.skeleton}
    //         />
    //       </group>
    //       <primitive object={nodes.TopBone} />
    //     </group>
    //     <group
    //       name="Armature011"
    //       position={[-0.056, -0.663, -0.482]}
    //       rotation={[-Math.PI / 2, 0, -Math.PI]}
    //       scale={0.966}
    //     >
    //       <group name="Cube033">
    //         <skinnedMesh
    //           name="Cube002"
    //           geometry={nodes.Cube002.geometry}
    //           material={materials.Teeth}
    //           skeleton={nodes.Cube002.skeleton}
    //         />
    //         <skinnedMesh
    //           name="Cube002_1"
    //           geometry={nodes.Cube002_1.geometry}
    //           material={materials.gums}
    //           skeleton={nodes.Cube002_1.skeleton}
    //         />
    //       </group>
    //       <primitive object={nodes.BottomBone} />
    //     </group>
    //   </group>
    // </group>


// <group ref={group} {...props} dispose={null}>
    //   <group name="Scene">
    //     <group
    //       name="Armature009"
    //       position={[0.052, 0, -0.032]}
    //       rotation={[Math.PI, 0, Math.PI]}
    //     >
    //       <skinnedMesh
    //         name="Cube038"
    //         geometry={nodes.Cube038.geometry}
    //         material={materials.Tongue}
    //         skeleton={nodes.Cube038.skeleton}
    //       />
    //       <primitive object={nodes.Bone} />
    //     </group>
    //     <group
    //       name="Armature010"
    //       position={[-0.056, 0.173, -0.546]}
    //       rotation={[-Math.PI / 2, 0, -Math.PI]}
    //     >
    //       <group name="Cube034">
    //         <skinnedMesh
    //           name="Cube004"
    //           geometry={nodes.Cube004.geometry}
    //           material={materials.TeethTop}
    //           skeleton={nodes.Cube004.skeleton}
    //         />
    //         <skinnedMesh
    //           name="Cube004_1"
    //           geometry={nodes.Cube004_1.geometry}
    //           material={materials["gums top"]}
    //           skeleton={nodes.Cube004_1.skeleton}
    //         />
    //       </group>
    //       <primitive object={nodes.TopBone} />
    //     </group>
    //     <group
    //       name="Armature011"
    //       position={[-0.056, -0.663, -0.482]}
    //       rotation={[-Math.PI / 2, 0, -Math.PI]}
    //       scale={0.966}
    //     >
    //       <group name="Cube033">
    //         <skinnedMesh
    //           name="Cube002"
    //           geometry={nodes.Cube002.geometry}
    //           material={materials.Teeth}
    //           skeleton={nodes.Cube002.skeleton}
    //         />
    //         <skinnedMesh
    //           name="Cube002_1"
    //           geometry={nodes.Cube002_1.geometry}
    //           material={materials.gums}
    //           skeleton={nodes.Cube002_1.skeleton}
    //         />
    //       </group>
    //       <primitive object={nodes.BottomBone} />
    //     </group>
    //   </group>
    // </group>