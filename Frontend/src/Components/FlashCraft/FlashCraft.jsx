import React from 'react'
import FlashCraftMain from './FlashCraftMain/FlashCraftMain'
import {useLoaderData} from 'react-router-dom';

function FlashCraft() {
  // const setsData = useLoaderData();
  // console.log(setsData);

  return (
    <>
        {/* <FlashCraftMain setsData={setsData} /> */}
        <FlashCraftMain />
    </>
  )
}

export default FlashCraft;

// export async function loader () {
//   const response = await fetch('http://localhost:8000/');
//   return response;
// }