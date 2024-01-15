import React, {useState, useEffect} from 'react'
import classes from './LevelMap.module.css';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSidebar from '../RightSideBar/RightSidebar';
import LevelMapImg from '../../../Assets/LevelMapMd.png';

// import LessonUnitIcon from '../../../Assets/Ellipse.svg';
// import LessonUnitIcon from '../../../Assets/Ellipse1.svg';
import LevelUnit3S from '../../../Assets/LevelUnit3S.svg';
import LevelUnit2S from '../../../Assets/LevelUnit2S.svg';
import LevelUnit1S from '../../../Assets/LevelUnit1S.svg';
import LevelUnit0S from '../../../Assets/LevelUnit0S.svg';
import LevelUnitLocked from '../../../Assets/LevelUnitLocked.svg';

import clouds from '../../../Assets/cloud.png';
import dolphin from '../../../Assets/Icons/dolphin.png';
import seaShell from '../../../Assets/Icons/seaShell.png';
import boat from '../../../Assets/boatR.png'
import splash from '../../../Assets/Gifs/splash2.gif';


function LevelMap() {

  const [data, setData] = useState();

  const userId = '65a297b3b32acbfdbde8a219';

  useEffect(() => {
    async function loader() {
      try {
        const response = await fetch(`http://localhost:8000/api/homepage/${userId}`);
        const responseData = await response.json();
  
        console.log('levelMap 2 response: ', response);
        console.log('levelMap 2 response Data: ', responseData);
  
        setData(responseData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    loader();
  }, [userId]); // Make sure to include userId as a dependency


  console.log(data);

  // const data = [
  //   {
  //     learningUnitId: '23',
  //     unitNumber: 1,
  //     userId : '2323',
  //     starsEarned: 3
      
  //   },
  //   {
  //     learningUnitId: '23',
  //     unitNumber: 2,
  //     userId : '2323',
  //     starsEarned: 3

  //   },
  //   {
  //     learningUnitId: '23',
  //     unitNumber: 3,
  //     userId : '2323',
  //     starsEarned: 2
  //   },
  //   {
  //     learningUnitId: '23',
  //     unitNumber: 4,
  //     userId : '2323',
  //     starsEarned: 1
  //   },
  //   {
  //     learningUnitId: '23',
  //     unitNumber: 5,
  //     userId : '2323',
  //     starsEarned: 1
  //   },
  //   {
  //     learningUnitId: '23',
  //     unitNumber: 6,
  //     userId : '2323',
  //     starsEarned: 2
  //   },
  //   {
  //     learningUnitId: '23',
  //     unitNumber: 7,
  //     userId : '2323',
  //     starsEarned: 0
  //   },
  //   {
  //     learningUnitId: '23',
  //     unitNumber: 8,
  //     userId : '2323',
  //     starsEarned: null
  //   }

  // ];

  

  const styling = [
    {
      top: '21%',
      left: '54%'
    },
    {
      top: '17%',
      left: '43%'
    },
    {
      top: '19%',
      left: '38%'
    },
    {
      top: '13%',
      left: '7.5%'
    },
    {
      top: '11%',
      left: '17%'
    },
    {
      top: '12%',
      left: '30%'
    },
    {
      top: '13%',
      left: '65%'
    },
    {
      top: '-15%',
      left: '82.5%'
    }

  ]

  // Logic to manage Dolphin animation

  const [isDolphinAnimationActive, setDolphinAnimationActive] = useState(true);
  const [isSplashActive, setSplashActive] = useState(false);


  const dolphinTriggerHandler = () => {
    console.log('function dolphinTriggerHandler');
    setDolphinAnimationActive(true);
  };

  //Return

  return (  
      <div className='relative w-full h-full flex flex-col box-border perspective-1000
                      s1:w-[85%] s2:w-[75%] s3:w-[65%] s4:w-[50%] s5:w-[45%] '>
      
          <img src={clouds} alt='clouds' className={classes.Cloud} />
          <img src={LevelMapImg} alt='LevelMapImg' className='w-full h-full block absolute' />
          <div className={classes.BoatWrapper} >
            <img src={boat} className={classes.Boat} />
            <span className={classes.First} >Level 7</span>
            <span className={classes.Second}>Unlocked</span>
          </div>
          
          <img src={dolphin} 
          className={`${classes.Dolphin} ${isDolphinAnimationActive ? classes.DolphinActive : ''} `}
          onAnimationEnd={() => (setDolphinAnimationActive(false), setSplashActive(true) )} 
          />
          <img src={seaShell} className='absolute top-[88%] left-[38.5%] z-20' />
          {/* <img src={splash} className={`absolute top-[88%] left-[28%] z-20 ${isSplashActive ? 'block' : 'hidden'}`}
          onAnimationEnd={()=> setSplashActive(false)} /> */}

          { data &&
            styling.map(
              (st, i) => (
                
                <div 
                  key={i}
                  // className={`top-[${st.top}] left-[${st.left}]`}
                  style={styling[i]}
                  className={`cursor-pointer relative w-fit z-10 ${data[i].starsEarned == null ? 'pointer-events-none' : ''}`}
                  onClick={dolphinTriggerHandler}
                  >
                    <span className='absolute translate-x-[1.2em] translate-y-[1em] font-bold text-slate-600 '>{data[i].unitNumber}</span>
                    <img src={
                            data[i].starsEarned != null ? 
                              data[i].starsEarned == 3 ? LevelUnit3S :
                                  data[i].starsEarned == 2 ? LevelUnit2S : 
                                    data[i].starsEarned == 1 ? LevelUnit1S : LevelUnit0S 
                              : LevelUnitLocked

                          } />
                </div>
              )
            )
          }

      </div>

  )
}

export default LevelMap