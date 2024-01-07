import React from 'react'
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


function LevelMap() {
  return (
    <div className={classes.Main} >
      
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
          <div className="top-[8em] left-[54%]" ><img src={LevelUnit3S} /></div>
          <div className="top-[6.5em] left-[44%]"><img src={LevelUnit3S} /></div>
          <div className="top-[7em] left-[38%]"><img src={LevelUnit2S} /></div>
          <div className="top-[4.6em] left-[7.5%]"><img src={LevelUnit1S} /></div>          
          <div className="top-[4em] left-[17%]"><img src={LevelUnit2S} /></div>
          <div className="top-[4.5em] left-[30%]"><img src={LevelUnit3S} /></div>
          <div className="top-[4.7em] left-[65%]"><img src={LevelUnit0S} /></div>
          <div className="top-[-5.8em] left-[82.5%]"><img src={LevelUnitLocked} /></div>
      </div>
      

      {/* RightSideBAr */}
      <div className={`${classes.Right} px-5 border-r-2 border-l-slate-300`}>
        <h3>
          RightSideBar
        </h3>
      </div>

    </div>
  )
}

export default LevelMap