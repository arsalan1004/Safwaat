import React from 'react'
import LeftSideBar from '../../Home/LeftSideBar/LeftSideBar'
import InsightsMain from './InsightsMain/InsightsMain'

import { useLoaderData } from 'react-router-dom';


function Insights() {

  const data = useLoaderData();
  console.log('insights main data: ', data);

  return (
    <div className='flex bg-primary-100 w-screen overflow-x-hidden overflow-y-hidden'>
      <LeftSideBar />
      <InsightsMain />
    </div>
  )
}

export default Insights


export async function loader () {

  const userId = '65a2b4ef46552610c0d4bbbf' 
  const response = fetch(
    'http://localhost:8000/api/fh/friendsList',
    
      {
        method: 'POST',
        body: JSON.stringify({userId}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    
    );

    console.log('response Insights Main: ' , response);
    return response;

}