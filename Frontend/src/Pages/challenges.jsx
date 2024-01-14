import { useEffect, useState,useMemo } from 'react';
import logo from '../assets/login.jpg';
import leaderboard from '../assets/bronze.png';
import challengeimg from '../assets/challenges.png';
import '../App.css';
import task from '../assets/task-management.png';
import achievement from '../assets/achievement.png';
import { Button, CTable } from '../Components';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';


function Challenges() {
  const [challengesData, setchallengesData] = useState([]);
  const [achieveData, setachieveData] = useState([]);
  const [selectedChallenges, setselectedChallenges] = useState('dailytasks'); 
  const [userid, setuserid] = useState({id:"65901f9ae137a46acf78c715"});

  async function fetchachieveData() {
    let userData={
      userId:userid.id
    }
    const res = await axios.put('http://localhost:8000/userAchievementChallenge/getChallengesData',userData); 
    console.log(res.data);
    setachieveData(res.data);
  }

  async function fetchchallengesData() {
    const res = await axios.put('http://localhost:8000/userDailyChallenge/putUserChallenges',userid); 
    console.log(res.data);
    setchallengesData(res.data);
  }


  useEffect(() => {
      if (selectedChallenges === 'dailytasks') {
      fetchchallengesData();
    } else {
      fetchachieveData();
    }
  }, [selectedChallenges,challengesData,achieveData]);

  return (
    <>
      <div className="contain">
          <div className="ChallengeWrapper">
            <div className="label">
              <div className="content">
                {selectedChallenges=='dailytasks'? <img src={challengeimg} alt="" className="w-[68%] h-[40%]" /> : <img src={challengeimg} alt="" className="w-[68%] h-[40%]" /> }
                {selectedChallenges=='dailytasks'? <p className="text-white text-[32px] text-center  mt-4">
                Daily Tasks 
                </p> : <p className="text-white text-[32px] text-center  mt-4">
                Achievements
                </p> }
                {selectedChallenges=='dailytasks'? <p className="text-[#5498BA] text-[16px] text-center  mt-4">
                Complete Various Tasks Daily in Order to Gain XP
                </p> : <p className="text-[#5498BA] text-[16px] text-center  mt-4">
                Complete Achievements
                </p> }
              </div>
            </div>
            <div className="board bg-opacity-10 bg-white shadow-lg backdrop-filter backdrop-blur-md border border-white rounded p-6 h-90vh w-70vw grid-area[1/2/2/3] mt-30px mr-5vh">
              <div className="menu flex justify-around flex-row">
                <Button
                  className={`w-[45%] text-white focus:bg-white focus:text-[#0A3F67] hover:text-[#1b9cff] Outline ${
                    selectedChallenges === 'dailytasks' ? ' text-white' : ''
                  }`}
                  onClick={() => setselectedChallenges('dailytasks')}
                >
                  <img src={task} alt="" className="inline h-14" /> Daily Tasks
                </Button>
                <Button
                  className={`w-[45%] text-white focus:bg-white focus:text-[#0A3F67] hover:animate-pulse hover:text-[#1b9cff] Outline ${
                    selectedChallenges === 'achievement' ? 'bg-[#0A3F67] text-white' : ''
                  }`}
                  onClick={() => setselectedChallenges('achievement')}
                >
                  <img src={achievement} alt="" className="inline h-16" /> Achievements
                </Button>
              </div>
               {selectedChallenges=="dailytasks"? <CTable fetchData={fetchchallengesData} id={userid.id} board={selectedChallenges} data={challengesData}/> : <CTable fetchData={fetchachieveData} id={userid.id} board={selectedChallenges} data={achieveData}/>}
            </div>
          </div>
        </div>
    </>
  );
}

export default Challenges;
