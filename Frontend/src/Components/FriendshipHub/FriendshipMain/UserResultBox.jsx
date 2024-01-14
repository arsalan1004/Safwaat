import React from 'react'

import boy from '../../../Assets/Images/boy.png';
import addUser from '../../../Assets/Icons/addUser.png'

function UserResultBox(props) {
  return (
    <div className='bg-primary-200 w-full h-min-[30%] flex-column rounded-xl border-cyan-500 hover:border-2 box-content '>
        <img src={boy} alt='userImage' className='relative z-10 bg-[#6BB4C5] rounded-full
                    w-[70px] h-[70px] mt-3'
        />
        <div className='flex items-center justify-between w-full my-3 px-4'>
            <div>
                <h1 className='font-bold font-Inter'>{props.name}</h1>
                <h3 className='font-Inter italic text-sm'>{props.userName}</h3>
            </div>
            <div>
                <button className='flex-center  bg-cyan-700 hover:bg-cyan-500 rounded-lg px-2 py-1'>
                    <img src={addUser} alt='addUser Icon' className='h-[20px] w-[20px] mr-2' />
                    <span className='font-Itim  text-primary-100'>Connect</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default UserResultBox