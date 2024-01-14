import React from 'react'
import boy2 from '../../../../Assets/Images/boy2.png';
import classes from './FriendBox.module.css';
import { Link } from 'react-router-dom';

function FriendBox(props) {
  return (
    <div className='bg-primary-200 w-full h-auto px-6 py-3 
                    flex items-center  border-b-[1px] border-b-slate-400'>
        {/* 2 Inner divs so that flex between can be applied */}
        
        {/* User Image and Private Detail */}
        <div className='flex items-center w-3/6'>
            {/* Image */}
            <div>
                <img src={boy2} alt='userImage' className='relative z-10 bg-[#6BB4C5] rounded-full
                            w-[70px] h-[70px] mt-3'
                />
            </div> 
                {/* UserName and Name */}
            <div className='ml-5 flex-col items-center'>
                <h1 className='font-bold font-Inter mb-1'>{props.name}</h1>
                <h3 className='font-Inter italic text-sm'>{props.userName}</h3>
            </div>
        </div>
        
        {/* Level Detail */}
        <div className='flex-center w-1/6'>
            <div className='w-full'>
                <p className='flex justify-between mb-1'>
                <span className='font-medium'>LEVEL:</span>
                <span>4</span>
                </p>
                <p className='flex justify-between'>
                <span className='font-medium'>XP:</span>
                <span>1300</span>
                </p>
            </div>
        </div>

        {/* buttons */}
        <div className='flex flex-col justify-center items-end gap-2 w-2/6'>
            <Link to=''>
                <button className={classes.Button}>
                    View Profile
                </button>
            </Link>
            <Link to=''>
                <button className={classes.Button}>
                    Message
                </button>
            </Link>
        </div>
             
    </div>
  )
}

export default FriendBox