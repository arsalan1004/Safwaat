import React from 'react'

import LoginButton from '../../../UI/Button/LoginButton'
import XPFlower from '../../../Assets/XPFlower.svg';
import gem from '../../../Assets/Icons/gem.png';
import trophy from '../../../Assets/Icons/trophy.png';

import StreakIconHome from '../../../Assets/Icons/StreakIconHome.png';
import goldLeague from '../../../Assets/Icons/goldLeague.png';

function RightSidebar() {

    const xpWidth = '20%';
    const level = 3;
    const xpAmount = 1400;
    const leagueName = 'Gold League';

  return (
    <div className='px-5 border-r-2 border-l-slate-300 bg-primary-100 hidden z-10
        s3:block s3:w-[10%] s4:w-[30%] s5:w-[30%] ' >

        {/* Details */}
        <div className='flex justify-start'>
            
            {/* XP Progress Bar */}
            <div className='mt-4 relative w-3/6'>

                {/* XP Flower */}
                <div className='flex-center w-fit relative'>
                    <img src={XPFlower} alt='XP Flower' className='z-10 h-12' />
                    <span className='absolute z-20 font-semibold font-Poppins text-primary-100 text-xl 
                    '>{level}</span>
                </div>

                {/* XP Bar */}
                <div className='w-full h-[1.6em] bg-slate-300 rounded-full absolute top-[0.75em] left-5 z-0 border-[1px] border-[#046E8F]
                    '
                    style={{
                    background:
                        'linear-gradient(94deg, rgba(29, 191, 242, 0.36) 34.74%, rgba(29, 191, 242, 0.28) 52.92%)',
                    }}
                >

                </div>
                
                {/* Filled Bar */}
                <div className={`w-[${xpWidth}] h-[1.6em] bg-[#1DBFF2] rounded-full absolute top-[0.75em] left-5 z-0 border-[1px] border-[#046E8F]
                    flex-center`}

                    >
                    <span className='pl-8 pr-3 font-semibold font-Montesserat tracking-wider text-primary-100  '>{xpAmount}</span>
                </div>

            </div> 

            <div className='ml-16 mt-5'>
              <LoginButton />
            </div>

        </div>

        {/* Perks Section */}
        <div className='mt-8 flex items-center justify-between mx-5  '> 

            <div className='flex-center gap-3'>
                <img src={gem} alt='gem' />
                <span className='font-Itim text-secondary text-lg'>15</span>
            </div>

            <div className='flex-center gap-3'>
                <img src={trophy} alt='trophy' />
                <span className='font-Itim text-secondary text-lg'>30</span>
            </div>

            <div className='flex-center gap-3'>
                <img src={StreakIconHome} alt='streak' />
                <span className='font-Itim text-secondary text-lg'>15</span>
            </div>

        </div> 



        {/* Div for Streak Leaderbaord */}
        <div className='flex flex-col  text-secondary mt-10 border-2 border-slate-400 rounded-lg py-4 px-4'>

            <div className='mb-5 flex'>
                <h1 className='font-bold  tracking-widest font-Poppins w-4/6'>Streak LeaderBoard</h1>
                <span className='font-Inter font-bold text-[#24B6FB] block w-2/6 cursor-pointer text-right'>View Board</span>
            </div>

            <div className='flex justify-center items-end'>
                <img src={StreakIconHome} alt='Streak Icon' className='mr-4' />
                <span className='font-medium italic'>World Ranking 15</span>
            </div>

            <div className='mt-4'>
            <p className='text-center text-sm font-Poppins text-slate-500'>Embark on a journey to become the reigning streak champion worldwide. <span className='font-medium italic'>Your streak, your legacy!</span></p>
            </div>

        </div>

        {/* div for Xp leaderboard */}
        <div className='flex flex-col text-secondary mt-5 border-2 border-slate-400 rounded-lg py-4 px-4'>

            <div className='mb-5 flex justify-start'>
                <h1 className='font-bold tracking-widest font-Poppins w-4/6 '>{leagueName}</h1>
                <span className='font-Inter font-bold text-[#24B6FB] block w-2/6 cursor-pointer text-right'>View League</span>
            </div>

            <div className='flex justify-center items-end'>
                <img src={goldLeague} alt='Streak Icon' className='h-[32px] mr-4 ' />
                <span className='font-medium italic'>Rank 5</span>
            </div>

            <div className='mt-4'>
            <p className='text-center text-sm font-Poppins text-slate-500'>Join the elite in the {leagueName} and let your XP speak for itself. <span className='font-medium italic'>Challenge accepted?</span></p>
            </div>

        </div>

    </div>

  )
}

export default RightSidebar