import React from 'react'
import LeftSideBar from '../Home/LeftSideBar/LeftSideBar'
import FriendshipMain from './FriendshipMain/FriendshipMain'

function FriendshipHub() {
  return (
    <div className='flex bg-primary-100 h-screen w-screen'>
      <LeftSideBar />
      <FriendshipMain />
    </div>
    
  )
}

export default FriendshipHub