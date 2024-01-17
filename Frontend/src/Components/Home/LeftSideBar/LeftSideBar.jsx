// LeftSideBar.jsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import NavOption from '../../../UI/Navigation/NavOption';

import Logo from '../../../Assets/Logo.png';
import textLogo from '../../../Assets/textLogo.png';
import HomeIcon from '../../../Assets/Icons/home.png';
import flashCraftIcon from '../../../Assets/Icons/flashCraft.png';
import taqraarIcon from '../../../Assets/Icons/taqraar.png';
import leaderboardIcon from '../../../Assets/Icons/leaderboard.png';
import questArenaIcon from '../../../Assets/Icons/quest.png';
import lobbyIcon from '../../../Assets/Icons/lobby.png';
import chatSpaceIcon from '../../../Assets/Icons/chatSpace.png';
import profileIcon from '../../../Assets/Icons/profile.png';
import streakCalender from '../../../Assets/Icons/streakCalender.png';

function LeftSideBar() {
  const [selectedLink, setSelectedLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (to) => {
    setSelectedLink(to);
  };

  return (
    <div className="px-5 border-r-2 border-r-slate-300 bg-primary-100 hidden z-20 s1:block s1:w-[15%] s2:w-[25%] s3:w-[25%] s4:w-[20%] s5:w-[25%] ">
      {/* Header */}
      <Link to="/" onClick={() => handleLinkClick('/')}>
        <div className="flex-center pt-4 s3:mx-2 pb-5">
          <img src={Logo} alt="Safwaat Logo" className="mix-blend-multiply ml-3 s4:ml-2 s4:mr-1 s5:mr-10 h-[64px] w-[64px]" />
          <img src={textLogo} alt="Text Logo" className="mix-blend-multiply h-14 hidden s3:block " />
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex flex-col justify-center">
        <Link to="/" onClick={() => handleLinkClick('/')}>
          <NavOption
            imgSrc={HomeIcon}
            altText="Home Option"
            optionText="LEVEL MAP"
            isSelected={selectedLink === '/'}
          />
        </Link>
        <Link to="/FlashCraft" onClick={() => handleLinkClick('/FlashCraft')}>
          <NavOption
            imgSrc={flashCraftIcon}
            altText="FlashCraft Option"
            optionText="FLASHCRAFT"
            isSelected={selectedLink === '/FlashCraft'}
          />
        </Link>
        <Link to="/FriendshipHub" onClick={() => handleLinkClick('/FriendshipHub')}>
          <NavOption
            imgSrc={lobbyIcon}
            altText="FriendshipHub Option"
            optionText="FRIENDSHIP HUB"
            isSelected={selectedLink === '/FriendshipHub'}
          />
        </Link>
        <Link to="/Leaderboard" onClick={() => handleLinkClick('/Leaderboard')}>
          <NavOption
            imgSrc={leaderboardIcon}
            altText="Leaderboard Option"
            optionText="LEADERBOARD"
            isSelected={selectedLink === '/Leaderboard'}
          />
        </Link>
        <Link to="/Challenges" onClick={() => handleLinkClick('/Challenges')}>
          <NavOption
            imgSrc={questArenaIcon}
            altText="QuestArena Option"
            optionText="QUEST ARENA"
            isSelected={selectedLink === '/Challenges'}
          />
        </Link>
       
        <Link to="/chat/privateChat" onClick={() => handleLinkClick("/chat/privateChat")}>
          <NavOption
            imgSrc={chatSpaceIcon}
            altText="chatSpace Option"
            optionText="CHAT SPACE"
            isSelected={selectedLink === "/chat/privateChat"}
          />
        </Link>
        <Link to="/streakCalendar" onClick={() => handleLinkClick('/streakCalendar')}>
          <NavOption
            imgSrc={streakCalender}
            altText="profile Option"
            optionText="STREAK CALENDAR"
            isSelected={selectedLink === '/streakCalendar'}
          />
        </Link>
        <Link to="/profile" onClick={() => handleLinkClick('/profile')}>
          <NavOption
            imgSrc={profileIcon}
            altText="profile Option"
            optionText="PROFILE"
            isSelected={selectedLink === '/profile'}
          />
        </Link>
      </div>
    </div>
  );
}

export default LeftSideBar;
