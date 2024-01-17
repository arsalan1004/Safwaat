import React from 'react'
import LeftSideBar from '../Home/LeftSideBar/LeftSideBar'
import ProfileMain from './ProfileMain/ProfileMain'
import { useLocation } from 'react-router-dom';


function Profile() {
  const location = useLocation();
  const userId = location.state && location.state.userId
  console.log("Friend ID:", userId);
  return (
    <div className='flex bg-primary-100 h-screen w-screen overflow-hidden' >
        <LeftSideBar />
        <ProfileMain frId={userId} />
    </div>
  )
}

export default Profile

