import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import classes from './LevelMap.module.css';
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

function LevelMap() {

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

  const style = [
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


  const [isDolphinAnimationActive, setDolphinAnimationActive] = useState(true);

  const dolphinTriggerHandler = () => {
    console.log('function dolphinTriggerHandler');
    setDolphinAnimationActive(true);
  };

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
          <img src={seaShell} className='absolute top-[88%] left-[37%] z-20' />
          {
            // Map to Set Learning Units and Src login to assign stars dynamically
            style.map(
              (st, i) => {
                return <div key={i} className={`top-[${st.top}] left-[${st.left}]`}
                onClick={dolphinTriggerHandler}>
                          <img src={
                            data[i].starsEarned != null ? 
                              data[i].starsEarned == 3 ? LevelUnit3S :
                                  data[i].starsEarned == 2 ? LevelUnit2S : 
                                    data[i].starsEarned == 1 ? LevelUnit1S : LevelUnit0S 
                              : LevelUnitLocked

                          } />
                      </div>
              }
            )
          }

      </div>
      

      {/* RightSideBar */}
      <div className={`${classes.Right} px-5 border-r-2 border-l-slate-300`}>
        
        {/* Div for Streak Leaderbaord */}
        <div className='flex flex-col  text-secondary mt-10 border-2 border-slate-400 rounded-lg py-4 px-4'>

          <div className='mb-5 flex'>
            <h1 className='font-bold  tracking-widest font-Poppins w-4/6'>Streak LeaderBoard</h1>
            <span className='font-Inter font-bold text-[#24B6FB] block w-2/6 text-right'>View Board</span>
          </div>

          <div className='flex justify-center items-end'>
            <img src={StreakIconHome} alt='Streak Icon' className='mr-4' />
            <span className='font-medium italic'>World Ranking 15</span>
          </div>

        </div>

        {/* div for Xp leaderboard */}
        <div className='flex flex-col text-secondary mt-5 border-2 border-slate-400 rounded-lg py-4 px-4'>

          <div className='mb-5 flex justify-start'>
            <h1 className='font-bold tracking-widest font-Poppins w-4/6 '>Gold League</h1>
            <span className='font-Inter font-bold text-[#24B6FB] block w-2/6 text-right'>View League</span>
          </div>
          
          <div className='flex justify-center items-end'>
            <img src={goldLeague} alt='Streak Icon' className='h-[32px] mr-4' />
            <span className='font-medium italic'>Rank 5</span>
          </div>

        </div>


      </div>

    </div>
  )
}

export default LevelMap