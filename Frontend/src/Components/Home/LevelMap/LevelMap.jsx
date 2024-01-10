import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import classes from './LevelMap.module.css';
import LoginButton from '../../../UI/Button/loginButton';
import NavOption from '../../../UI/Navigation/NavOption';
import LevelMapImg from '../../../Assets/LevelMapMd.png';
// import LessonUnitIcon from '../../../Assets/Ellipse.svg';
// import LessonUnitIcon from '../../../Assets/Ellipse1.svg';
import LevelUnit3S from '../../../Assets/LevelUnit3S.svg';
import LevelUnit2S from '../../../Assets/LevelUnit2S.svg';
import LevelUnit1S from '../../../Assets/LevelUnit1S.svg';
import LevelUnit0S from '../../../Assets/LevelUnit0S.svg';
import LevelUnitLocked from '../../../Assets/LevelUnitLocked.svg';
import Logo from '../../../Assets/Logo.png';
import textLogo from '../../../Assets/textLogo.png'
import HomeIcon from '../../../Assets/Icons/home.png';
import flashCraftIcon from '../../../Assets/Icons/flashCraft.png';
import taqraarIcon from '../../../Assets/Icons/taqraar.png';
import leaderboardIcon from '../../../Assets/Icons/leaderboard.png';
import questArenaIcon from '../../../Assets/Icons/quest.png';
import lobbyIcon from '../../../Assets/Icons/lobby.png';
import chatSpaceIcon from '../../../Assets/Icons/chatSpace.png';
import profileIcon from '../../../Assets/Icons/profile.png';

import StreakIconHome from '../../../Assets/Icons/StreakIconHome.png';

import goldLeague from '../../../Assets/Icons/goldLeague.png';

import clouds from '../../../Assets/cloud.png';
import dolphin from '../../../Assets/Icons/dolphin.png';
import seaShell from '../../../Assets/Icons/seaShell.png';

import XPFlower from '../../../Assets/XPFlower.svg';
import gem from '../../../Assets/Icons/gem.png';
import trophy from '../../../Assets/Icons/trophy.png';

function LevelMap() {

  const xpWidth = '20%';
  const level = 3;
  const xpAmount = 1400;
  const leagueName = 'Gold League';

  const data = [
    {
      learningUnitId: '23',
      unitNumber: 1,
      userId : '2323',
      starsEarned: 3
      
    },
    {
      learningUnitId: '23',
      unitNumber: 2,
      userId : '2323',
      starsEarned: 3

    },
    {
      learningUnitId: '23',
      unitNumber: 3,
      userId : '2323',
      starsEarned: 2
    },
    {
      learningUnitId: '23',
      unitNumber: 4,
      userId : '2323',
      starsEarned: 1
    },
    {
      learningUnitId: '23',
      unitNumber: 5,
      userId : '2323',
      starsEarned: 1
    },
    {
      learningUnitId: '23',
      unitNumber: 6,
      userId : '2323',
      starsEarned: 2
    },
    {
      learningUnitId: '23',
      unitNumber: 7,
      userId : '2323',
      starsEarned: 0
    },
    {
      learningUnitId: '23',
      unitNumber: 8,
      userId : '2323',
      starsEarned: null
    }

  ];

  

  const styling = [
    {
      top: '8em',
      left: '54%'
    },
    {
      top: '6.5em',
      left: '44%'
    },
    {
      top: '7em',
      left: '38%'
    },
    {
      top: '4.6em',
      left: '7.5%'
    },
    {
      top: '4em',
      left: '17%'
    },
    {
      top: '4.5em',
      left: '30%'
    },
    {
      top: '4.7em',
      left: '65%'
    },
    {
      top: '-5.8em',
      left: '82.5%'
    }

  ]

  // Logic to manage Dolphin animation

  const [isDolphinAnimationActive, setDolphinAnimationActive] = useState(true);

  const dolphinTriggerHandler = () => {
    console.log('function dolphinTriggerHandler');
    setDolphinAnimationActive(true);
  };

  //Return

  return (
    <div className={classes.Main} >
      <img src={clouds} className={classes.Cloud} />

      {/* leftSideBar */}
      <div className={`${classes.Left} px-5 border-r-2 border-r-slate-300`}>

        {/* Header */}
          <div className='flex-center px-2 py-3 mb-4'>
            <img src={Logo} alt="Safwaat Logo" className='mix-blend-multiply mr-6 h-16 w-16' />
            <img src={textLogo} alt="Text Logo"  className='mix-blend-multiply h-14' />
            {/* <h1 className='font-semibold text-secondary text-lg tracking-widest font-Poppins'>SAFWAAT</h1> */}
          </div>

        {/* Navigation */}
          <div className='flex flex-col justify-center'>
              <Link to='/' >
                <NavOption imgSrc={HomeIcon} altText='Home Option' optionText='LEVEL MAP' />
              </Link> 
              <Link to='FlashCraft'>
                <NavOption imgSrc={flashCraftIcon} altText='FlashCraft Option' optionText='FLASHCRAFT' />
              </Link>
              <Link>
                <NavOption imgSrc={taqraarIcon} altText='Taqraar Option' optionText='TAQRAAR' />
              </Link>
              <Link>
                <NavOption imgSrc={leaderboardIcon} altText='Leaderboard Option' optionText='LEADERBOARD' />
              </Link>
              <Link>
                <NavOption imgSrc={questArenaIcon} altText='QuestArena Option' optionText='QUEST ARENA' />
              </Link>
              <Link>
                <NavOption imgSrc={lobbyIcon} altText='Lobby Option' optionText='LOBBY' />
              </Link>
              <Link>
                <NavOption imgSrc={chatSpaceIcon} altText='chatSpace Option' optionText='CHAT SPACE' />
              </Link>
              <Link>
                <NavOption imgSrc={profileIcon} altText='profile Option' optionText='PROFILE' />
              </Link>
              
          </div>

          

      </div>
      
      <div className={classes.Center}>
      


          <img src={LevelMapImg} alt='LevelMapImg' className={classes.LevelMapImg} />
          <img src={dolphin} 
          className={`${classes.Dolphin} ${isDolphinAnimationActive ? classes.DolphinActive : ''}`}
          onAnimationEnd={() => setDolphinAnimationActive(false)} 
          />
          <img src={seaShell} className='absolute top-[88%] left-[38.5%] z-20' />

          
          {
            styling.map(
              (st, i) => (
                
                <div 
                  key={i}
                  // className={`top-[${st.top}] left-[${st.left}]`}
                  style={styling[i]}
                  onClick={dolphinTriggerHandler}
                  >
                    <span className='absolute translate-x-[1.2em] translate-y-[1em] font-bold text-slate-600 '>{data[i].unitNumber}</span>
                    <img src={
                            data[i].starsEarned != null ? 
                              data[i].starsEarned == 3 ? LevelUnit3S :
                                  data[i].starsEarned == 2 ? LevelUnit2S : 
                                    data[i].starsEarned == 1 ? LevelUnit1S : LevelUnit0S 
                              : LevelUnitLocked

                          } />
                </div>
              )
            )
          }

      </div>
      

      {/* RightSideBar */}
      <div className={`${classes.Right} px-5 border-r-2 border-l-slate-300`}>

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
              ></div>
              {/* Filled Bar */}
              <div className={`w-[${xpWidth}] h-[1.6em] bg-[#0DAEE1] rounded-full absolute top-[0.75em] left-5 z-0 border-[1px] border-[#046E8F]
               flex-center`}
              
              >
                <span className='pl-8 pr-3 font-semibold font-Montesserat tracking-wider text-primary-100  '>{xpAmount}</span>
              </div>

            </div> 

            <div className='ml-16 mt-5'>
              <LoginButton />
            </div>

          </div>
       
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

    </div>
  )
}

export default LevelMap