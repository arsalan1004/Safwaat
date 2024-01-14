import { useEffect, useState,useMemo } from 'react';
import logo from '../../Assets/login.jpg';
import leaderboard from '../../Assets/bronze.png';
import challengeimg from '../../Assets/challenges.png';
import '../../App.css';
import task from '../../Assets/task-management.png';
import achievement from '../../Assets/achievement.png';
import ButtonLog from './buttonlog';
import CTable from './challengesBoard';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import { fetchachieveData,fetchchallengesData } from '../../API/challengesAPI';

function Challenges() {
  const [challengesData, setchallengesData] = useState([]);
  const [achieveData, setachieveData] = useState([]);
  const [selectedChallenges, setselectedChallenges] = useState('dailytasks'); 
  const [userid, setuserid] = useState({id:"65901f9ae137a46acf78c715"});

  


  useEffect(() => {
      if (selectedChallenges === 'dailytasks') {
      fetchchallengesData(userid.id,setchallengesData);
    } else {
      fetchachieveData(userid.id,setachieveData);
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
                <ButtonLog
                  className={`chButton w-[45%] text-white focus:bg-white focus:text-[#0A3F67] hover:text-[#1b9cff] Outline ${
                    selectedChallenges === 'dailytasks' ? ' text-white' : ''
                  }`}
                  onClick={() => setselectedChallenges('dailytasks')}
                >
                  <img src={task} alt="" className="inline h-14" /> Daily Tasks
                </ButtonLog>
                <ButtonLog
                  className={` chButton w-[45%] text-white focus:bg-white focus:text-[#0A3F67] hover:text-[#1b9cff] Outline ${
                    selectedChallenges === 'achievement' ? 'bg-[#0A3F67] text-white' : ''
                  }`}
                  onClick={() => setselectedChallenges('achievement')}
                >
                  <img src={achievement} alt="" className="inline h-16" /> Achievements
                </ButtonLog>
              </div>
               {selectedChallenges=="dailytasks"? <CTable fetchData={fetchchallengesData} set={setchallengesData} id={userid.id} board={selectedChallenges} data={challengesData}/> : <CTable fetchData={fetchachieveData} set={setachieveData} id={userid.id} board={selectedChallenges} data={achieveData}/>}
            </div>
          </div>
        </div>
    </>
  );
}

export default Challenges;
