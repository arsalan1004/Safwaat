import React from 'react'
import LeftSideBar from '../Home/LeftSideBar/LeftSideBar'
import ProfileMain from './ProfileMain/ProfileMain'

function Profile() {
  return (
    <div className='flex bg-primary-100 h-screen w-screen overflow-hidden' >
        <LeftSideBar />
        <ProfileMain />
    </div>
  )
}

export default Profile

