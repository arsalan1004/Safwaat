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


// export async function loader () {
//   const userId = '65a297b3b32acbfdbde8a219';

//   const response = await fetch(
//     'http://localhost:8000/api/homepage/leftSideBar',
//     {
//       method: 'POST',
//       body: JSON.stringify({userId}),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//   );

//   console.log('levelMap response:', response)

// }