import React from 'react'
import LeftSideBar from '../../Home/LeftSideBar/LeftSideBar'
import InsightsMain from './InsightsMain/InsightsMain'

function Insights() {
  return (
    <div className='flex bg-primary-100 h-screen w-screen'>
      <LeftSideBar />
      <InsightsMain />
    </div>
  )
}

export default Insights