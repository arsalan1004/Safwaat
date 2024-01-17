import React, {useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import LeftSideBar from '../Home/LeftSideBar/LeftSideBar'
import FriendshipMain from './FriendshipMain/FriendshipMain'
import Modal from '../../UI/Modal/Modal'
import store from '../../Store/store'

function FriendshipHub() {

  const data = useLoaderData();
  console.log('friendship hub data: ', data);

  const [showModal, setShowModal] = useState(false);

  const modalShow = () => {
    console.log('inside modaltogler')
    setShowModal(true)
  }

  const modalClosed = () => {
    setShowModal(false);
  }

  return (
    <div className='flex bg-primary-100 h-screen w-screen overflow-hidden'>
      {showModal && <Modal show={showModal} modalClosed={modalClosed} >Friend Request Sent Successfully</Modal>}
      <LeftSideBar />
      <FriendshipMain data={data} showModalHandler={modalShow} />
    </div>
    
  )
}

export default FriendshipHub


export async function loader () {
  const { login } = store.getState();
  const userId = login.id;
 // const userId = '65a297b2b32acbfdbde8a217' 
  const response = fetch(
    'http://localhost:8000/api/friendshiphub/page',
    
      {
        method: 'POST',
        body: JSON.stringify({userId}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    
    );

    console.log('response Friendship Hub: ' , response);
    return response;


}