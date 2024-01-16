import React, {useState} from 'react'
import LeftSideBar from '../../Home/LeftSideBar/LeftSideBar'
import InsightsMain from './InsightsMain/InsightsMain'
import Modal from '../../../UI/Modal/Modal';

import { useLoaderData } from 'react-router-dom';


function Insights() {

// const [showModal, setShowModal] = useState(false);


// const modalToggler = () => {
//   setShowModal(true)
// }

  const data = useLoaderData();
  console.log('insights main data: ', data);

  return (
    <div className='flex bg-primary-100 w-screen overflow-x-hidden overflow-y-hidden'>
      <LeftSideBar />
      <InsightsMain data={data} />
    </div>
  )
}

export default Insights


export async function loader () {

  const userId = '65a297b2b32acbfdbde8a217' 
  const response = fetch(
    'http://localhost:8000/api/friendshiphub/viewInsights',
    
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