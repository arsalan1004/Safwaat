import React from 'react'
import '../App.css'
import Streak from '../assets/fire.png'
import One from '../assets/frame1.png'
import trophy from '../assets/trophy.png'
import coin from '../assets/coin.png'
import {Button} from '../Components'
import ProgressBar from "@ramonak/react-progress-bar";
const CTable = ({data,label,board}) => {
  return (
    <>
    
    <div className="onetwo flex flex-col gap-1 h-full ml-[7%]" style={{maxHeight: '90%',overflow: 'auto' }} >
    {board=='dailytasks'? <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
      <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">Complete any one Lesson today
      <p className='text-gray-900 italic pr-9' >Escape the learning limbo! Dive into any lesson, unlock a new skill, and level up! Feeling stagnant? Pick a lesson, challenge your brain, and watch your knowledge bloom!</p>
      <div className="mt-5 mr-3">
      <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={180} maxCompleted={200} />
      </div>
      </div>
      <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={coin} alt="" className='h-[100px] w-[100px]'/>
      <Button className={false? `disabled bg-gray-400 cursor-not-allowed w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5`:`bg-[#106c6f] w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5` }>Claim</Button>
      </div>
    </div> : <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
      <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">Complete any one Lesson today
      <p className='text-gray-900 italic pr-9' >Escape the learning limbo! Dive into any lesson, unlock a new skill, and level up! Feeling stagnant? Pick a lesson, challenge your brain, and watch your knowledge bloom!</p>
      <div className="mt-5 mr-3">
      <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={180} maxCompleted={200} />
      </div>
      </div>
      <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={trophy} alt="" className='h-[100px] w-[100px]'/>
      <Button className='bg-[#106c6f] w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5'>Claim</Button>
      </div>
    </div>}
    <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
      <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">Complete any one Lesson today
      <p className='text-gray-900 italic pr-9' >Escape the learning limbo! Dive into any lesson, unlock a new skill, and level up! Feeling stagnant? Pick a lesson, challenge your brain, and watch your knowledge bloom!</p>
      <div className="mt-5 mr-3">
      <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={180} maxCompleted={200} />
      </div>
      </div>
      <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={trophy} alt="" className='h-[100px] w-[100px]'/>
      <Button className='bg-[#106c6f] w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5'>Claim</Button>
      </div>
    </div>
    <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
      <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">Complete any one Lesson today
      <p className='text-gray-900 italic pr-9' >Escape the learning limbo! Dive into any lesson, unlock a new skill, and level up! Feeling stagnant? Pick a lesson, challenge your brain, and watch your knowledge bloom!</p>
      <div className="mt-5 mr-3">
      <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={180} maxCompleted={200} />
      </div>
      </div>
      <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={trophy} alt="" className='h-[100px] w-[100px]'/>
      <Button className='bg-[#106c6f] w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5'>Claim</Button>
      </div>
    </div>
    <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
      <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">Complete any one Lesson today
      <p className='text-gray-900 italic pr-9' >Escape the learning limbo! Dive into any lesson, unlock a new skill, and level up! Feeling stagnant? Pick a lesson, challenge your brain, and watch your knowledge bloom!</p>
      <div className="mt-5 mr-3">
      <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={180} maxCompleted={200} />
      </div>
      </div>
      <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={trophy} alt="" className='h-[100px] w-[100px]'/>
      <Button className='bg-[#106c6f] w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5'>Claim</Button>
      </div>
    </div>
    <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
      <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">Complete any one Lesson today
      <p className='text-gray-900 italic pr-9' >Escape the learning limbo! Dive into any lesson, unlock a new skill, and level up! Feeling stagnant? Pick a lesson, challenge your brain, and watch your knowledge bloom!</p>
      <div className="mt-5 mr-3">
      <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={180} maxCompleted={200} />
      </div>
      </div>
      <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={trophy} alt="" className='h-[100px] w-[100px]'/>
      <Button className='bg-[#106c6f] w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5'>Claim</Button>
      </div>
    </div>
    <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
      <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">Complete any one Lesson today
      <p className='text-gray-900 italic pr-9' >Escape the learning limbo! Dive into any lesson, unlock a new skill, and level up! Feeling stagnant? Pick a lesson, challenge your brain, and watch your knowledge bloom!</p>
      <div className="mt-5 mr-3">
      <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={180} maxCompleted={200} />
      </div>
      </div>
      <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={trophy} alt="" className='h-[100px] w-[100px]'/>
      <Button className='bg-[#106c6f] w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5'>Claim</Button>
      </div>
    </div>
    <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
      <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">Complete any one Lesson today
      <p className='text-gray-900 italic pr-9' >Escape the learning limbo! Dive into any lesson, unlock a new skill, and level up! Feeling stagnant? Pick a lesson, challenge your brain, and watch your knowledge bloom!</p>
      <div className="mt-5 mr-3">
      <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={180} maxCompleted={200} />
      </div>
      </div>
      <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={trophy} alt="" className='h-[100px] w-[100px]'/>
      <Button className='bg-[#106c6f] w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5'>Claim</Button>
      </div>
    </div>
  </div>
  </>
  )
}

export default CTable

