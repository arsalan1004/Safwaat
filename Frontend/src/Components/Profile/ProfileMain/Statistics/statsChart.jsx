import {React,useEffect,useState} from 'react'
import xp from '../../../../Assets/Icons/XP.png'
import streak from '../../../../Assets/Icons/StreakIconHome.png'
import gem from '../../../../Assets/Icons/gem.png'
import flashcard from '../../../../Assets/Icons/flashCraft.png'
import trophy from '../../../../Assets/Icons/trophy.png'
import bronze from '../../../../Assets/bronze.png'
import gold from '../../../../Assets/gold.png'
import silver from '../../../../Assets/silver.png'
import master from '../../../../Assets/red.png'
import diamond from '../../../../Assets/purple.png'
import { getStats } from '../../../../API/getStatsAPI'

const Statschart = () => {

  const getRankImage = (rank) => {
    switch (rank) {
      case 'Bronze':
        return bronze;
      case 'Silver':
        return silver;
      case 'Gold':
        return gold;
      case 'Master':
        return master;
      case 'Diamond':
        return diamond;
      default:
        return bronze;
    }
  };

  const [totalXP, setTotalXP] = useState(44);
  const [highestStreak, setHighestStreak] = useState(10);
  const [totalGems, setTotalGems] = useState(3);
  const [currentLeague, setCurrentLeague] = useState("Bronze");
  const [totalTrophies, setTotalTrophies] = useState(2);
  const [totalFlashCards, setTotalFlashCards] = useState(7);

  useEffect(()=>{
    getStats(setTotalXP,setHighestStreak,setTotalGems,setCurrentLeague,setTotalTrophies,setTotalFlashCards);
  },[])

  return (
    <>
      <div className='mx-[5%] w-[95%] h-[75%]'>
        <div className='font-Itim text-[20px] font-bold my-[3%]'>Statistics</div>
        <div className="grid grid-cols-3 gap-2">

        <div className="col-span-1">
          <div className="flex items-center bg-primary-200 rounded-[11px] p-4 w-[85%] h-[95%] border-2 border-slate-500">
          <div className="mr-4">
            <img src={xp} className='max-w-[40px] h-[40px]'/>
          </div>
          <div className="text-white">
            <p className="text-xl"><b>{totalXP}</b></p>
            <p className="text-lg font-bold font-Itim text-[#0A3F67]">Total XP</p>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex items-center bg-primary-200 rounded-[11px] p-4 w-[85%] h-[95%] border-2 border-slate-500">
          <div className="mr-4">
            <img src={streak} className='max-w-[40px] h-[40px]'/>
          </div>
          <div className="text-white">
            <p className="text-xl"><b>{highestStreak}</b></p>
            <p className="text-lg font-bold font-Itim text-[#0A3F67]">Highest Streak</p>
          </div>
        </div>
      </div>

      <div className="col-span-1">
      <div className="flex items-center bg-primary-200 rounded-[11px] p-4 w-[85%] h-[95%] border-2 border-slate-500">
        <div className="mr-4">
          <img src={gem} className='max-w-[40px] h-[40px]'/>
        </div>
        <div className="text-white">
          <p className="text-xl"><b>{totalGems}</b></p>
          <p className="text-lg font-bold font-Itim text-[#0A3F67]">Total Gems</p>
        </div>
      </div>
      </div>

      <div className="col-span-1">
      <div className="flex items-center bg-primary-200 rounded-[11px] p-4 w-[85%] h-[95%] border-2 border-slate-500">
        <div className="mr-4">
          <img src={getRankImage(currentLeague)} className='max-w-[40px] h-[40px]'/>
        </div>
        <div className="text-white">
          <p className="text-xl"><b>{currentLeague}</b></p>
          <p className="text-lg font-bold font-Itim text-[#0A3F67]">Current League</p>
        </div>
      </div>
      </div>

      
      <div className="col-span-1">
      <div className="flex items-center bg-primary-200 rounded-[11px] p-4 w-[85%] h-[95%] border-2 border-slate-500">
        <div className="mr-4">
          <img src={trophy} className='max-w-[40px] h-[40px]'/>
        </div>
        <div className="text-white">
          <p className="text-xl"><b>{totalTrophies}</b></p>
          <p className="text-lg font-bold font-Itim text-[#0A3F67]">Total Throphies</p>
        </div>
      </div>
      </div>
      <div className="col-span-1">
      <div className="flex items-center bg-primary-200 rounded-[11px] p-4 w-[85%] h-[95%] border-2 border-slate-500">
        <div className="mr-4">
          <img src={flashcard} className='max-w-[40px] h-[40px]'/>
        </div>
        <div className="text-white">
          <p className="text-xl"><b>{totalFlashCards}</b></p>
          <p className="text-lg font-bold font-Itim text-[#0A3F67]">Total FlashCraft Sets</p>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Statschart


