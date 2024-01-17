import React from 'react'
import LevelMap from './LevelMap/LevelMap'
import RightSidebar from './RightSideBar/RightSidebar'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import {useLoaderData, useNavigate} from 'react-router-dom';
import store from '../../Store/store';


function Home() {
  const navigate = useNavigate();
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
 // const userId = '65a297b3b32acbfdbde8a219';
  const { login } = store.getState();
  const userId = login.id || "";
  if(userId == "") {
    location.assign('/login')

  }
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

  if(!response.ok) {
    console.log("Error occured in leftSideBar Loader");
    console.log(response)
  }
  console.log('levelMap response:', response)

  return response;
}


