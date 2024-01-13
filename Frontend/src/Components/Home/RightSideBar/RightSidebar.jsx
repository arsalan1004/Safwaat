import React from 'react'

import Perk from './Perk';

import LoginButton from '../../../UI/Button/LoginButton'
import LoginButtonSlide from '../../../UI/Button/LoginButtonSlide/LoginButtonSlide.jsx';
import XPFlower from '../../../Assets/XPFlower.svg';
import gem from '../../../Assets/Icons/gem.png';
import trophy from '../../../Assets/Icons/trophy.png';
import XP from '../../../Assets/Icons/XP.png';
import levelUp from '../../../Assets/Icons/levelUp.png'

import StreakIconHome from '../../../Assets/Icons/StreakIconHome.png';
import goldLeague from '../../../Assets/Icons/goldLeague.png';

function RightSidebar() {

    const xpWidth = '20%';
    const level = 3;
    const xpAmount = 1400;
    const leagueName = 'Gold League';

  return (
    <div className=' border-r-2 border-l-slate-300 bg-primary-100 hidden z-10
        s3:block s3:w-[10%] s4:w-[30%] s5:w-[30%]
        s4:px-5 ' >

        {/* Details */}
        <div className='s4:flex s4:justify-start'>
            
            {/* XP Progress Bar */}
            <div className='mt-4 relative w-3/6 hidden
                            s4:block'>

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

            <div className='s4:hidden mt-5 ml-2 flex-center mb-10'>
                <LoginButtonSlide />
            </div>        

            <div className='mt-8 flex flex-col items-center justify-center mx-3 s4:hidden'> 
                <Perk imgSrc={levelUp} altText='levelUp' text='3' />
                <Perk imgSrc={XP} altText='XP' text='1400'/>
            </div>

            <div className='ml-16 mt-5 hidden
                            s4:block'>
              <LoginButton />
            </div>
           

        </div>

        {/* Perks Section */}
        <div className='mt-8 flex flex-col items-center justify-center mx-3
                s4:flex-row s4:flex s4:items-center s4:justify-between s4:mx-5  '> 

            <Perk imgSrc={gem} altText='gem' text='15' />
            <Perk imgSrc={trophy} altText='trophy' text='30' />
            <Perk imgSrc={StreakIconHome} altText='streak' text='12' />
        </div> 

        <div className='s4:hidden mt-8'>
            <Perk imgSrc={goldLeague} altText='streak' text='5' />
        </div>

        {/* Div for Streak Leaderbaord */}
        <div className='s4:flex flex-col hidden text-secondary mt-8 border-2 border-slate-400 rounded-lg py-4 px-4'>

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
        <div className='s4:flex flex-col hidden text-secondary mt-5 border-2 border-slate-400 rounded-lg pt-4 pb-2 min-[1220px]:pb-4  px-4'>

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