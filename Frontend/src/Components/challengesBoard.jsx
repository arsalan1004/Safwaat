import {React,useState,useEffect} from 'react'
import '../App.css'
import Streak from '../assets/fire.png'
import One from '../assets/frame1.png'
import trophy from '../assets/trophy.png'
import coin from '../assets/coin.png'
import {Button} from '../Components'
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios'
const CTable = ({data,label,board,id,fetchData}) => {
  const [changeOccur,setChange] =useState();
  const [achieveClaim,setachieveClaim] =useState([...new Array(data.length)].map(() => false));
  const [dailyClaim,setdailyClaim] =useState([...new Array(data.length)].map(() => false));

  const updateachieveClaim = (index) => {
    setachieveClaim((prevachieveClaim) => {
      const newachieveClaim = [...prevachieveClaim];
      newachieveClaim[index] = true;
      return newachieveClaim;
    });
  }

  const updatedailyClaim = (index) => {
    setdailyClaim((prevdailyClaim) => {
      const newdailyClaim = [...prevdailyClaim];
      newdailyClaim[index] = true;
      console.log(newdailyClaim);
      return newdailyClaim;
    });
  }

  useEffect(()=>{
    fetchData;
  },[changeOccur])

  async function handleUpdateDailyClaim(challengeId,id,index){
    updatedailyClaim(index);
    await axios.patch("http://localhost:8000/userDailyChallenge/claim",{
      challengeId:challengeId,
      userId:id
    }).then(()=>setChange(!changeOccur));
    console.log("ran");
  }

  async function handleUpdateAchieveClaim(challengeId,id,index){
    updateachieveClaim(index);
    axios.patch("http://localhost:8000/userAchievementChallenge/claim",{
      challengeId:challengeId,
      userId:id
    }).then(()=>setChange(!changeOccur));
    console.log("ran");
  }

  return (
    <>
    
    <div className="onetwo flex flex-col gap-1 h-full ml-[7%]" style={{maxHeight: '90%',overflow: 'auto' }} >
    {board=='dailytasks' && data.map(({ isClaimed,title,content,maxCompleted,completed,reward,rewardType,_id }, index) => (
            <>
            <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
              <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">{title}
              <p className='text-gray-900 italic pr-9' >{content} <br/> {completed} / {maxCompleted} </p>
              <div className="mt-5 mr-3">
              <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={completed} maxCompleted={maxCompleted} />
              </div>
              </div>
              <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={coin} alt="" className='h-[80px] w-[80px]'/>
              {isClaimed? null:`${reward} x XP`}
              <Button disabled={(isClaimed || (dailyClaim[index]) || maxCompleted!=completed)?true:false} onClick={()=>handleUpdateDailyClaim(_id,id,index)} className={(isClaimed || maxCompleted!=completed)? `bg-gray-400 cursor-not-allowed w-[50%] h-[20%] pb-[10px] text-center text-white pt-1.5`:`bg-[#246c6d] w-[50%] pb-[10px] text-center text-white pt-1.5 hover:text-[#246c6d] hover:bg-white border-2 border-[#246c6d]`}>{(dailyClaim[index]  || isClaimed)? `${reward} XP rewarded`:`Claim` }</Button>
              </div>
            </div>
            </>
          ))}

      {!(board=='dailytasks') && data.map(({ isClaimed,title,content,maxCompleted,completed,reward,rewardType,_id }, index) => (
            <>
            <div className="parent-achieve h-[30vh] w-[55vw] bg-white m-5 rounded-lg">
              <div className="achieve-content text-[#5498BA] pl-[5%] pt-[2%] text-xl">{title}
              <p className='text-gray-900 italic pr-9' >{content} <br/> {completed} / {maxCompleted}</p>
              <div className="mt-5 mr-3">
              <ProgressBar isLabelVisible={false} bgColor='#5498BA' completed={completed} maxCompleted={maxCompleted} />
              </div>
              </div>
              <div className="achieve-buttonarea flex flex-col items-center rounded-2xl  my-2 mr-2"><img src={trophy} alt="" className='h-[80px] w-[80px]'/>
              {isClaimed? null:`${reward} x Trophy`}
              <Button disabled={(isClaimed || (achieveClaim[index]) || maxCompleted!=completed)?true:false} onClick={()=>handleUpdateAchieveClaim(_id,id,index)} className={(isClaimed || maxCompleted!=completed)? `bg-gray-400 cursor-not-allowed w-[50%] pb-[10px] text-center text-white pt-1.5`:`bg-[#246c6d] w-[50%] pb-[10px] text-center text-white pt-1.5 hover:text-[#246c6d] hover:bg-white border-2 border-[#246c6d]`}>{(achieveClaim[index]  || isClaimed)? `${rewardType} rewarded`:`Claim` }</Button>
              </div>
            </div>
            </>
          ))}
      </div>
    
  </>
  )
}

export default CTable

