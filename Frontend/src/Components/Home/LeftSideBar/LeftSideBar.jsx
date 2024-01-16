import React from 'react'
import { Link } from 'react-router-dom';

import NavOption from '../../../UI/Navigation/NavOption';

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

function LeftSideBar() {
  return (
    <div className='px-5 border-r-2 border-r-slate-300 bg-primary-100 hidden z-20
    s1:block s1:w-[15%] s2:w-[25%] s3:w-[25%] s4:w-[20%] s5:w-[25%] '>

        {/* Header */}
      <Link to='/'>
        <div className='flex-center pt-4 s3:mx-2 pb-5'>
            <img src={Logo} alt="Safwaat Logo" className='mix-blend-multiply ml-3 s4:ml-2 s4:mr-1 s5:mr-10 h-[64px] w-[64px]' />
            <img src={textLogo} alt="Text Logo"  className='mix-blend-multiply h-14 hidden s3:block ' />
            {/* <h1 className='font-semibold text-secondary text-lg tracking-widest font-Poppins'>SAFWAAT</h1> */}
        </div>
      </Link>

        {/* Navigation */}
        <div className='flex flex-col justify-center'>
            <Link to='/' >
                <NavOption imgSrc={HomeIcon} altText='Home Option' optionText='LEVEL MAP' />
            </Link> 
            <Link to='/FlashCraft'>
             <NavOption imgSrc={flashCraftIcon} altText='FlashCraft Option' optionText='FLASHCRAFT' />
            </Link>
            <Link to='/FriendshipHub'>
             <NavOption imgSrc={taqraarIcon} altText='FriendshipHub Option' optionText='FRIENDSHIP HUB' />
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

  )
}

export default LeftSideBar