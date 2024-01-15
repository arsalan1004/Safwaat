import React from 'react'
import FlashCraftMain from './FlashCraftMain/FlashCraftMain'
import {useLoaderData} from 'react-router-dom';

function FlashCraft() {
  const setsData = useLoaderData();
  console.log("Data: " ,setsData);

  return (
    <>
        <FlashCraftMain setsData={setsData} />
  
    </>
  )
}




export default FlashCraft;



export async function loader () {
  const userId = '655ba0b013679c0e8c33e9cd';
  const response = await fetch('http://localhost:8000/api/FlashCraft', 
  {
    method: 'POST',
    body: JSON.stringify({userId}),
    headers: {
      'Content-Type' : 'application/json'
    }
  }
  );
  console.log('response: ', response);
  return response;
}