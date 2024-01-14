import { useEffect, useState } from 'react';
import logo from '../../Assets/login.jpg';
import leaderboard from '../../Assets/bronze.png';
import purple from '../../Assets/purple.png'
import gold from '../../Assets/gold.png'
import red from '../../Assets/red.png'
import silver from '../../Assets/Silver.png';
import streak from '../../Assets/streak.png';
import '../../App.css';
import OpenBook from '../../Assets/open-book.png';
import fire from '../../Assets/fire.png';
import ButtonLog from './buttonlog';
import LeaderboardTable from './leaderboardTable';
import axios from 'axios';
import { fetchStreakData,fetchXpData } from '../../API/LeaderBoardAPI';

function Leader() {
  const [xpData, setXpData] = useState([]);
  const [streakData, setStreakData] = useState([]);
  const [selectedLeaderboard, setSelectedLeaderboard] = useState('xp'); 
  const [userLeagues, setUserLeagues] = useState(['Bronze',"Welcome to the Leaderboard!"]);
  const [userId,setuserId] = useState({Id:"65a297b2b32acbfdbde8a217"});

  useEffect(() => {
      if (selectedLeaderboard === 'xp') {
      fetchXpData(userId.Id,setXpData,setUserLeagues);
    } else {
      fetchStreakData(setStreakData);
    }
  }, [selectedLeaderboard]);


  function LeagueDecider(league) {
    switch (league) {
      case 'Gold':
        return gold;
      case 'Novice':
        return bronze;
      case 'Silver':
        return silver;
      case 'Explorer':
        return purple;
      case 'Bronze':
        return red;
      default:
        return bronze;
    }
  }

  return (
    <>
      <div className="contain">
          <div className="leaderboardWrapper">
            <div className="label">
              <div className="content">
                {selectedLeaderboard=='xp'? <img src={userLeagues[0]? LeagueDecider(userLeagues[0]):leaderboard} alt="" className="w-[60%] h-[40%]" /> : <img src={streak} alt="" className="w-[68%] h-[40%]" /> }
                {selectedLeaderboard=='xp'? <p className="text-white text-[32px] text-center  mt-4">
                {userLeagues[0]} League 
                </p> : <p className="text-white text-[32px] text-center  mt-4">
                Global Streak Leaderboard
                </p> }
                {selectedLeaderboard=='xp'? <p className="text-[#5498BA] text-[16px] text-center  mt-4">
                {userLeagues[1]}
                </p> : <p className="text-[#5498BA] text-[16px] text-center  mt-4">
                View your worldwide streak ranking
                </p> }
              </div>
            </div>
            <div className="boardLead shadow-lg backdrop-filter backdrop-blur-md rounded-xl h-90vh w-70vw grid-area[1/2/2/3] mt-30px mr-5vh">
              <div className="menu w-[100%] h-[17%] px-6 pb-6 flex justify-around">
                <ButtonLog
                  className={`w-[45%] chButton min-h-[91%] bg-transparent text-[#0A3F67] focus:bg-white focus:text-[#0A3F67] OutlineLead ${
                    selectedLeaderboard === 'xp' ? ' text-white' : ''
                  }`} auto={true}
                  onClick={() => setSelectedLeaderboard('xp')}
                >
                  <img src={OpenBook} alt="" className="inline p-2" /> XP Leaderboard
                </ButtonLog>
                <ButtonLog
                  className={`w-[45%] chButton min-h-[91%] bg-transparent text-[#0A3F67] focus:bg-white focus:text-[#0A3F67] OutlineLead ${
                    selectedLeaderboard === 'streak' ? 'bg-[#0A3F67] text-white' : ''
                  }`} auto={false}
                  onClick={() => setSelectedLeaderboard('streak')} 
                >
                  <img src={fire} alt="" className="inline p-2" /> Streak Leaderboard
                </ButtonLog>
              </div>
              <div className="w-[100%] h-[80%]">
                {selectedLeaderboard === 'xp' ? (
                  <LeaderboardTable userId={userId.Id} userLeagues={userLeagues} board='xp' data={xpData} label={{firstCol:"Ranking",secCol:"Name",thirdCol:"XP Points"}} />
                ) : (
                  <LeaderboardTable userId={userId.Id} board='streak' data={streakData} label={{firstCol:"Ranking",secCol:"Name",thirdCol:"Streak"}}/>
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Leader;
