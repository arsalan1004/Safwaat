import { useEffect, useState } from 'react';
import logo from '../assets/login.jpg';
import leaderboard from '../assets/bronze.png';
import streak from '../assets/streak.png';
import '../App.css';
import OpenBook from '../assets/open-book.png';
import fire from '../assets/fire.png';
import { Button, LeaderboardTable } from '../Components';
import axios from 'axios';

function Leader() {
  const [xpData, setXpData] = useState([]);
  const [streakData, setStreakData] = useState([]);
  const [selectedLeaderboard, setSelectedLeaderboard] = useState('xp'); 
  const [userLeagues, setUserLeagues] = useState([]);
  const [userId,setuserId] = useState("65992b654e47f25a45ef8816");

  useEffect(() => {
    async function fetchXpData() {
      let userData={
        id: userId
      }
      const res = await axios.post('http://localhost:8000/xpleaderboard/members',userData); 
      setXpData(res.data.members);
      console.log(xpData);
      setUserLeagues([res.data.league,res.data.levelText]);
    }

    async function fetchStreakData() {
      const res = await axios.get('http://localhost:8000/streakLeaderboard/members'); 
      setStreakData(res.data);
    }

    if (selectedLeaderboard === 'xp') {
      fetchXpData();
    } else {
      fetchStreakData();
    }
  }, [selectedLeaderboard]);

  return (
    <>
      <div className="contain">
          <div className="leaderboardWrapper">
            <div className="label">
              <div className="content">
                {selectedLeaderboard=='xp'? <img src={leaderboard} alt="" className="w-[68%] h-[40%]" /> : <img src={streak} alt="" className="w-[68%] h-[40%]" /> }
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
            <div className="board bg-opacity-10 bg-white shadow-lg backdrop-filter backdrop-blur-md border border-white rounded p-6 h-90vh w-70vw grid-area[1/2/2/3] mt-30px mr-5vh">
              <div className="menu flex justify-around">
                <Button
                  className={`w-[45%] h-[8vh] text-white focus:bg-white focus:text-[#0A3F67] Outline ${
                    selectedLeaderboard === 'xp' ? ' text-white' : ''
                  }`}
                  onClick={() => setSelectedLeaderboard('xp')}
                >
                  <img src={OpenBook} alt="" className="inline p-3" /> XP Leaderboard
                </Button>
                <Button
                  className={`w-[45%] text-white focus:bg-white focus:text-[#0A3F67] Outline ${
                    selectedLeaderboard === 'streak' ? 'bg-[#0A3F67] text-white' : ''
                  }`}
                  onClick={() => setSelectedLeaderboard('streak')}
                >
                  <img src={fire} alt="" className="inline p-3" /> Streak Leaderboard
                </Button>
              </div>
              <div className="w-[100%] h-[90%]">
                {selectedLeaderboard === 'xp' ? (
                  <LeaderboardTable userLeagues={userLeagues} board='xp' data={xpData} label={{firstCol:"Ranking",secCol:"Name",thirdCol:"XP-Points"}} />
                ) : (
                  <LeaderboardTable board='streak' data={streakData} label={{firstCol:"Ranking",secCol:"Name",thirdCol:"Streak"}}/>
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Leader;
