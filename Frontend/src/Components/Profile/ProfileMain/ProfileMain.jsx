import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileSections from './ProfileSections'

function ProfileMain() {
  return (
    <div className='h-screen w-3/4 pt-5  text-secondary overflow-y-auto '>
        <ProfileHeader />
        <ProfileSections />
    </div>

  )
}

export default ProfileMain