import React from 'react'
import LevelMap from './LevelMap/LevelMap'
import RightSidebar from './RightSideBar/RightSidebar'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import {useLoaderData} from 'react-router-dom';


function Home() {

 const data = useLoaderData();

  return (
    <div className='flex m-0 p-0 box-border overflow-hidden w-[100vw] h-screen' >
      
         <LeftSideBar /> 
         <LevelMap />
         <RightSidebar data={data} />   

    </div>
    
  )
}

export default Home


export async function loader () {
  const userId = '65a297b3b32acbfdbde8a219';

  const response = await fetch(
    'http://localhost:8000/api/homepage/leftSideBar',
    {
      method: 'POST',
      body: JSON.stringify({userId}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  console.log('levelMap response:', response)

  return response;
}


// export async function loader({ params }) {

//   const response = await fetch(

//   "http://localhost:5000/Doctor" +
//     "/" +
//     params.leftItem +
//     "/" +
//     params.rightItem +
//     "/" +
//     params.cityName
// );

// console.log(response);
// return response;
// }
