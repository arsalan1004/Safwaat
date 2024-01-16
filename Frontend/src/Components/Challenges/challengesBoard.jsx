import {React,useState,useEffect} from 'react'
import '../../App.css'
import Streak from '../../Assets/fire.png'
import One from '../../Assets/frame1.png'
import trophy from '../../Assets/Icons/trophyChallenges.png'
import xp from '../../Assets/Icons/XPChallenges.png'
import ButtonLog from './buttonlog';
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios'
const CTable = ({data,label,board,id,fetchData,set}) => {
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
    fetchData(id,set);
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
    await axios.patch("http://localhost:8000/userAchievementChallenge/claim",{
      challengeId:challengeId,
      userId:id
    }).then(()=>setChange(!changeOccur));
    console.log("ran");
  }

  return (
    <>
    
    <div className="onetwo flex flex-col gap-1 h-full pl-8 pt-5" style={{maxHeight: '90%',overflow: 'auto' }} >
    {board=='dailytasks' && data.map(({ isClaimed,title,content,maxCompleted,completed,reward,rewardType,_id }, index) => (
            <>
            <div className="parent-achieve h-[35%] w-[95%] bg-primary-100 mt-2 rounded-lg hover:scale-105 transistion-ease-in-out transistion-duration-3000 ">
              <div className="achieve-content pl-[5%]  pt-[2%] "> <p className='text-secondary font-Itim font-bold tracking-wider text-lg'>{title}<br/></p>
              <p className='text-slate-600 font-Poppins text-[13px] italic pr-9' >{content} <br/> {completed} / {maxCompleted} </p>
              <div className="my-4 mb-2 mr-3 ">
               <ProgressBar isLabelVisible={false} bgColor='#0891b2'  baseBgColor='#BCE2E5' completed={completed} maxCompleted={maxCompleted} />
              </div>
              </div>
              <div className="achieve-buttonarea flex flex-col items-center rounded-2xl py-2"><img src={xp} alt="" className='h-[50px] w-[45px] mb-1'/>
              <span className='font-Itim text-sm mb-2'>{isClaimed? null:`${reward} x XP`}</span>
              
              <ButtonLog 
                disabled={(isClaimed || (dailyClaim[index]) || maxCompleted!=completed)?true:false} 
                onClick={()=>handleUpdateDailyClaim(_id,id,index)} 
                className={(isClaimed || maxCompleted!=completed)? `bg-slate-500 chButton cursor-not-allowed w-[70%] 
                      h-[42px] py-2 text-center border-2 border-slate-700 text-primary-100`:`bg-[#246c6d] chButton w-[70%] h-[42px] 
                      text-center text-primary-100 hover:text-[#246c6d] hover:bg-white border-2
                       border-[#133838]`}>
                          {(dailyClaim[index]  || isClaimed)? `${reward} XP rewarded`:`Claim` }
              </ButtonLog>

              </div>
            </div>
            </>
          ))}

      {!(board=='dailytasks') && data.map(({ isClaimed,title,content,maxCompleted,completed,reward,rewardType,_id }, index) => (
            <>
            <div className="parent-achieve h-[35%] w-[95%] bg-primary-100 mt-2 rounded-lg hover:scale-105 transistion-ease-in-out transistion-duration-3000 ">
            <div className="achieve-content pl-[5%]  pt-[2%] "> <p className='text-secondary font-Itim font-bold tracking-wider text-lg'>{title}<br/></p>
              <p className='text-slate-600 font-Poppins text-[13px] italic pr-9' >{content} <br/> {completed} / {maxCompleted} </p>
              <div className="my-4 mb-2 mr-3">
                <ProgressBar isLabelVisible={false} bgColor='#0891b2' baseBgColor='#BCE2E5' completed={completed} maxCompleted={maxCompleted} />
              </div>
              </div>
              <div className="achieve-buttonarea flex flex-col items-center rounded-2xl py-2"><img src={trophy} alt="" className='h-[50px] w-[45px] mb-1'/>
              <span className='font-Itim text-sm mb-2'>{isClaimed? null:`${reward} x Trophy`}</span>
              <ButtonLog disabled={(isClaimed || (achieveClaim[index]) || maxCompleted!=completed)?true:false} onClick={()=>handleUpdateAchieveClaim(_id,id,index)} className={(isClaimed || maxCompleted!=completed)? `bg-slate-500 chButton cursor-not-allowed w-[70%] 
                     h-[42px] py-2 text-center border-2 border-slate-700 text-primary-100`:`bg-[#246c6d] chButton w-[70%] h-[42px] 
                      text-center text-primary-100 hover:text-[#246c6d] hover:bg-white border-2
                       border-[#133838]`}>{(achieveClaim[index]  || isClaimed)? `${rewardType} rewarded`:`Claim` }</ButtonLog>
              </div>
            </div>
            </>
          ))}
      </div>
    
  </>
  )
}

export default CTable

