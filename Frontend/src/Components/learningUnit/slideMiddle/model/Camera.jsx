import React,  { useRef } from 'react'
import { useThree,useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three"

const Camera = () => {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame(() => {
    // Set the camera's rotation so that it is looking at the target vector.
    camera.lookAt(target.current);

    // Update the camera's position.
    // camera.position.add(new THREE.Vector3(0, 0, 0.01));
  });

  return (
    <OrbitControls
      camera={camera}
      enablePan={false}
      lookAt={target.current}
      minPolarAngle={-Math.PI}
      maxPolarAngle={Math.PI/1.8}
      minAzimuthAngle={-(Math.PI)/2}
      maxAzimuthAngle={(Math.PI)/2}
      minDistance={1.8}
      maxDistance={3}
      
    />
  );
}

export default Camera