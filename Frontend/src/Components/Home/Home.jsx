import React from 'react'
import LevelMap from './LevelMap/LevelMap'
import RightSidebar from './RightSideBar/RightSidebar'
import LeftSideBar from './LeftSideBar/LeftSideBar'

function Home() {
  return (
    <div className='flex m-0 p-0 box-border overflow-hidden w-[100vw] h-screen' >
      
         <LeftSideBar /> 
         <LevelMap />
         <RightSidebar />   

    </div>
    
  )
}

export default Home