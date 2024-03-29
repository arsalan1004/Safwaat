import { useEffect, useState } from 'react'
import { getStreakRange } from '../../API/streakApi';
import { Link } from 'react-router-dom';
import streakFire from '../../Assets/Icons/streakFire.svg'
import nextArrow from '../../Assets/Icons/nextArrow.svg';
import previousArrow from '../../Assets/Icons/previousArrow.svg';
import style from './StreakCalendar.module.css';
import { useSelector } from 'react-redux';
import logo from '../../assets/Logo.png';

const StreakCalendar = () => {
    const {id} = useSelector(state => state.login);
    const [calendarData, setCalendarData] = useState(() => ({}))
    const [calendarContents, setCalendarContents] = useState([])
    const [range, setRange] = useState({start: null, end: null})
    const [streakCount, setStreakCount] = useState(2)
    const [currentDate, setCurrentDate] = useState(() => {
      const date = new Date();
     
      return ({day: date.getDate() - 1, month: date.getMonth(), year: date.getFullYear()})
    });
    const [isLoading, setIsLoading] = useState(false);
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
    function getNumberOfDaysInMonth(year, month) {
      // giving previous month when month: month, giving current month on month: month + 1
      const date = new Date(year, month + 1, 0);
  
      // console.log("hrer");
      // console.log(`month: ${month}`)
      // console.log(`date: ${date}, date.getDate(): ${date.getDate()}, date.getDate() + 1: ${date.getDate() + 1}`) 
      return date.getDate();
      // return (date.getDate() + 1 == 32 ? 30 : date.getDate() + 1);
    }
  
    function getStartingWeekdayOfMonth(year, month) {
      const date = new Date(year, month, 1);
  
      return date.getDay();
    }
    const getStreakRangeHandler = async (month, year) => {
      // console.log("getStreakRangeHandler")
      // console.log(month)
      // console.log(year)
      const data = await getStreakRange(month, year, id);
      let start = data.start;
      let end = data.end;
      let streakCount = data.streakCount;
      // console.log(`start: ${start}`)
      // console.log(`end: ${end}`)
      // console.log(`streakCount: ${streakCount}`)
      setRange({start: start,end: end});
      setStreakCount(streakCount);
    }
    const calendaDataConstructor = async (monthIndex, year, onCurrentDay) => {
      setIsLoading(true);
      await getStreakRangeHandler(monthIndex, year, id);
      

      // console.log("inc calendarData");
      // console.log(monthIndex, year)
      const date = new Date(year, monthIndex);
      const month = date.getMonth();
      // const day = date.getDate()
      // const year = date.getFullYear();
      // const numberOfDays = getNumberOfDaysInMonth(year, month);
      // const startingWeekDay = getStartingWeekdayOfMonth(year, month);
      console.log(`DATA: ${month} `);
      setCalendarData(() => ({
        currentDayNumeric: currentDate.day,
        onCurrentDay: onCurrentDay,
  
        month: date.toLocaleString('default', { month: 'long' }),
        monthNumeric: month,
        daysCount: getNumberOfDaysInMonth(year, month),
        startingWD: getStartingWeekdayOfMonth(year, month),
  
        year: year,
      }))
      setIsLoading(false);
    }
  
  
  
    const handleCurrentData = () => {
      const date = new Date();
   
      setCurrentDate(() => ({
        day:  date.getDate() - 1,
        month: date.getMonth(),
        year: date.getFullYear()
      }))
    }
  
  
    useEffect(() => {
      // handleCurrentData();
      const date = new Date();
      setCurrentDate(() => ({
        day:  date.getDate() - 1,
        month: date.getMonth(),
        year: date.getFullYear()
      }))
    }, []);

 
    useEffect(() => {
      const date = new Date();

      getStreakRangeHandler(date.getMonth(), date.getFullYear()).then(() => {
        calendaDataConstructor(date.getMonth(), date.getFullYear(), true);
      });
    }, [currentDate])
  

    // useEffect(() => {
      
    // }, [range])
  
    useEffect(() => {
      
      const {daysCount, startingWD, currentDayNumeric, onCurrentDay} = calendarData;
      const isCurrentDay = (loopDay) => {
        // console.log(`LoopDay: ${loopDay}`)
        return `${(onCurrentDay && newCurrentDayNumeric == loopDay) ? `bg-[#044577]` : `bg-accent`}`
      }
  
      const listItemConstructor = (roundness, content, loopDay) => {
        let roundType;
        switch(roundness) {
          case 'full': roundType = 'rounded-3xl'; break;
          case 'left': roundType = 'rounded-s-3xl'; break;
          case 'right': roundType = 'rounded-e-3xl'; break;
          default: roundType = ''; break;
        }
        return (<li key={loopDay} className={`${roundType} ${isCurrentDay(loopDay)} h-[100%] flex justify-center items-center text-white`}>{content}</li>);
      }
  
      console.log(calendarData)
  
      
  
      let calendarContentData = [];
      let temp = <li></li>;
      let newRangeStart = range.start + startingWD;
      let newRangeEnd = range.end + startingWD;
  
      // currenDayNumeric: zero-based
      let newCurrentDayNumeric = currentDayNumeric + startingWD
  
      for(let i = 0; i < (daysCount + startingWD); ++i) {
        // console.log(daysCount, startingWD)
        if(i < startingWD) {
          temp = <li key={i}>{""}</li> 
        }
        else if (i >= startingWD) {
            if(i >= newRangeStart - 1 && i < newRangeEnd) {
            // console.log(`RangeStart: ${newRangeStart}, RangeEnd: ${newRangeEnd}`)
  
            if(i == newRangeEnd - 1 && ((i) % 7 == 0) || i == newRangeStart - 1 && ((i+1) % 7 == 0)) {
              /* Checks for Range Edge starting and Ending together: 
               * Can be test on June & august 2023
               */
              temp = listItemConstructor('full',i-startingWD + 1,i)
              // temp = <li className={`rounded-xl ${(onCurrentDay && newCurrentDayNumeric == i) ? `bg-[#044577]` : `bg-green-800`} h-[100%] flex justify-center items-center`}>{i-startingWD + 1}</li>
            }
            else if(i == newRangeStart - 1  || ((i) % 7 == 0)) {
              // temp = <li className={`rounded-s-xl ${(onCurrentDay && newCurrentDayNumeric == i) ? `bg-[#044577]` : `bg-green-800`} h-[100%] flex justify-center items-center`}>{i-startingWD + 1}</li>
              temp = listItemConstructor('left',i-startingWD + 1,i)
            }
            else if (i == newRangeEnd - 1 || ((i+1) % 7 == 0) ) {
              // temp = <li className={`rounded-e-xl ${(onCurrentDay && newCurrentDayNumeric == i) ? `bg-[#044577]` : `bg-green-800`} h-[100%] flex justify-center items-center`}>{i-startingWD + 1}</li>
              temp = listItemConstructor('right',i-startingWD + 1,i)
            }
            else {
              // console.log(onCurrentDay, currentDayNumeric, i)
              temp = listItemConstructor('',i-startingWD + 1,i)
              // temp = <li className={`${(onCurrentDay && newCurrentDayNumeric == i) ? `bg-[#044577]` : `bg-green-800`} h-[100%] flex justify-center items-center`}>{i-startingWD + 1}</li>
            }
        }
        else {
          if(onCurrentDay && newCurrentDayNumeric == i) {
            // For current Day Highlight
            temp = listItemConstructor('full',i-startingWD + 1,i)
          }
          else {
            // Other numbers
            temp = <li key={i} className='text-black'>{i-startingWD + 1}</li>
          }
        }
        // if(i < startingWD) {
        //   temp = <li>{""}</li> 
        // }
        // else if (i >= startingWD) {
        //   if(i >= newRangeStart - 1 && i < newRangeEnd) {
        //     if(i == newRangeStart - 1  || ((i) % 7 == 0)) {
        //       temp = <li className={`rounded-s-xl ${(onCurrentDay && newCurrentDayNumeric == i) ? `bg-[#044577]` : `bg-green-800`} h-[100%] flex justify-center items-center`}>{i-startingWD + 1}</li>
        //     }
        //     else if (i == newRangeEnd - 1 || ((i+1) % 7 == 0)) {
        //       temp = <li className={`rounded-e-xl ${(onCurrentDay && newCurrentDayNumeric == i) ? `bg-[#044577]` : `bg-green-800`} h-[100%] flex justify-center items-center`}>{i-startingWD + 1}</li>
        //     }
        //     else {
        //       console.log(onCurrentDay, currentDayNumeric, i)
        //       temp = <li className={`${(onCurrentDay && newCurrentDayNumeric == i) ? `bg-[#044577]` : `bg-green-800`} h-[100%] flex justify-center items-center`}>{i-startingWD + 1}</li>
        //     }
        // }
        // else {
        //   temp = <li className='text-accent'>{i-startingWD + 1}</li>
        // }
      } 
      calendarContentData.push(temp);
    }
      setCalendarContents(calendarContentData)
  
      console.log(calendarContentData);
    }, [calendarData])
  
  
    const previousMonthHandler = () => {
      // console.log("previousMonthHandler")
      // console.log(calendarData)
  
      // console.log(`currentDate.month: ${currentDate.month}`);
      // console.log(`calendarData.monthNumeric: ${calendarData.monthNumeric - 1}`);
      // console.log(`currentDate.year: ${currentDate.year}`);
      // console.log(`calendarData.year: ${calendarData.year}`);

      const onCurrentDay = (currentDate.month == (calendarData.monthNumeric - 1 == -1 ? 11 : calendarData.monthNumeric - 1)) && (currentDate.year == calendarData.year);
      // console.log(date.getMonth(), calendarData.monthNumeric - 1 == -1 ? 11 : calendarData.monthNumeric - 1, date.getFullYear(), calendarData.year)
      if((calendarData.monthNumeric - 1) < 0) {
        // Entered Previous Year
        calendaDataConstructor(11, calendarData.year - 1, onCurrentDay);
      } else {
        // Entered Previous Month
        calendaDataConstructor(calendarData.monthNumeric - 1, calendarData.year,onCurrentDay);
      }
    
    }
    const nextMonthHandler = () => {
      // console.log("nextMonthHandler")
      // console.log(calendarData)
  
      const date = new Date();
      const month = date.getMonth();
      const year = date.getFullYear()
      // console.log(`currentDate.month: ${month}`);
      // console.log(`calendarData.monthNumeric: ${calendarData.monthNumeric + 1}`);
      // console.log(`currentDate.year: ${year}`);
      // console.log(`calendarData.year: ${calendarData.year}`);
     

      const onCurrentDay = (currentDate.month == (calendarData.monthNumeric + 1 == 12 ? 0 : calendarData.monthNumeric + 1)) && (currentDate.year == calendarData.year + 1);
      console.log(onCurrentDay)
  
      // console.log(date.getMonth(), calendarData.monthNumeric + 1, date.getFullYear(),calendarData.year)
        // if((currentDate.month >= (calendarData.monthNumeric + 1 == 12 ? 0 : calendarData.monthNumeric + 1)) && (currentDate.year >= (calendarData.year))) {
          if((calendarData.monthNumeric + 1) < 12) {
              // Entered Next Month
            calendaDataConstructor(calendarData.monthNumeric + 1, calendarData.year, onCurrentDay);
          } else {
              // Entered New Year
              calendaDataConstructor(0, calendarData.year + 1, onCurrentDay);
          }
      //  }
    }
  
  
    const loadingStyleChange = {
      'true' : 'flex justify-center items-center',
      'false': ""
    }
   

    return (
      <div className={`${style['streak-calendar-container']}`}>
      {
        !calendarData ? <h3>Loading Calender..!</h3> : ( 
          
          <div className='flex px-[60px] py-[30px] gap-24 bg-primary-100'> 
            <div className='w-[30%] flex flex-col justify-center items-center'>
              <Link to='/'><img src={logo} alt='logo'  className='mb-10 mix-blend-multiply '/></Link>
              <h3 className='text-[32px] font-semibold font-Poppins tracking-wider text-accent mb-12'>Streak Board</h3>
              <img className='w-[59px] mb-7' src={streakFire} alt='streak-fire' />
              <p className='text-2xl font-medium font-Poppins text-accent mb-6'>Streak Count</p>
              <div className='w-full border-solid border-[3px] border-accent font-Abhaya text-accent text-3xl font-bold'>{streakCount}</div>
            </div>
            
            <div className='w-[70%] border-solid border-[3px] border-accent rounded-[15px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] p-8'>
              <div className='flex justify-between items-center mb-3'>
                <button onClick={previousMonthHandler}>
                  <img className='w-[40px]' src={previousArrow} alt='previous-month' />
                </button>
                  <h4 className={`text-2xl ${calendarData.year > currentDate.year ? `text-[rgba(0,0,0,0.5)]` : `text-accent`}  font-semibold`}>{calendarData.month}, {calendarData.year}</h4>
                <button onClick={nextMonthHandler}>
                  <img className='w-[40px]' src={nextArrow} alt='next-month' />
                </button>
             
              </div>
              {isLoading && <div className={`${loadingStyleChange[`${isLoading}`]}`}>{ isLoading && <p>Loading</p>}</div>}
                
                {!isLoading &&
                <div>
              
                  <ul className='text-xl font-bold grid grid-cols-[repeat(7,40px)] gap-[30px] items-center justify-center list-none text-[rgba(0,0,0,0.4)] mb-5' >
                    {weekDays.map((weekDay,index) => <li key={index}>{weekDay}</li>)}
                  </ul>
                 
                  <ul className='text-xl font-medium font-Abhaya grid grid-cols-[repeat(7,70px)] grid-rows-[repeat(6,35px)]  items-center justify-center gap-y-4'>
                    {!isLoading && calendarContents}
                  </ul>
                </div>
              }
            </div>
          </div>
        )
      }
    </div>
    )
}
 

export default StreakCalendar

  
  
  
  
  
  
  
  
  