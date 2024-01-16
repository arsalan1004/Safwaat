import { useEffect, useState,useMemo } from 'react';
import logo from '../../Assets/login.jpg';
import leaderboard from '../../Assets/bronze.png';
import '../../App.css';
import task from '../../Assets/Icons/dailytasks.png';
import achievement from '../../Assets/Icons/achievements.png';
import ButtonLog from './buttonlog';
import CTable from './challengesBoard';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import { fetchachieveData,fetchchallengesData } from '../../API/challengesAPI';


import challenges from '../../Assets/Icons/challenges.png';


function Challenges() {
  const [challengesData, setchallengesData] = useState([]);
  const [achieveData, setachieveData] = useState([]);
  const [selectedChallenges, setselectedChallenges] = useState('dailytasks'); 
  const [userid, setuserid] = useState({id:"659815525ce38b434230fbe0"});

  


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
                {selectedChallenges=='dailytasks'? <img src={challenges} alt="" className="w-[50%] h-[30%]" /> : <img src={challenges} alt="" className="w-[50%] h-[30%]" /> }
                {selectedChallenges=='dailytasks'? <p className="text-primary-100 text-[32px] text-center  mt-4 font-Montesserat font-bold">
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
            <div className="board bg-opacity-10 bg-white shadow-lg backdrop-filter backdrop-blur-sm border border-white rounded p-6 h-90vh w-70vw grid-area[1/2/2/3] mt-30px mr-5vh">
              <div className="menu flex justify-around flex-row mb-2">
                <ButtonLog
                  className={`chButton w-[45%] font-bold tracking-wider font-Inter backdrop-filter backdrop-blur-md text-primary-100 focus:bg-primary-100 focus:text-[#0A3F67] hover:text-[#1b9cff] OutlineCh ${
                    selectedChallenges === 'dailytasks' ? ' text-primary-100' : ''
                  }`}
                  onClick={() => setselectedChallenges('dailytasks')} auto={true}
                >
                  <img src={task} alt="" className="inline h-10 w-10 mr-5" /> Daily Tasks
                </ButtonLog>
                <ButtonLog
                  className={` chButton w-[45%] font-bold font-Inter tracking-wider text-primary-100 backdrop-filter backdrop-blur-lg focus:bg-primary-100 focus:text-[#0A3F67] hover:text-[#1b9cff] OutlineCh ${
                    selectedChallenges === 'achievement' ? 'text-primary-100  ' : ''
                  }`}
                  onClick={() => setselectedChallenges('achievement')}
                >
                  <img src={achievement} alt="" className="inline h-10 w-10 mr-5 " /> Achievements
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
