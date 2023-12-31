import { useEffect, useState } from 'react'
import { getStreakRange } from '../../API/streakApi';
  
import streakFire from '../../assets/icons/streakFire.svg'
import nextArrow from '../../assets/icons/nextArrow.svg';
import previousArrow from '../../assets/icons/previousArrow.svg';

const StreakCalendar = () => {


  const INITIAL_DATE_STATE = {
  }

    
    const [calendarData, setCalendarData] = useState(() => ({}))
    const [calendarContents, setCalendarContents] = useState([])
    const [range, setRange] = useState(() => ({start: 3, end: 4}))
    const [streakCount, setStreakCount] = useState(2)
    const [currentDate, setCurrentDate] = useState(() => ({day: "", month: "", year: ""}));
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
    function getNumberOfDaysInMonth(year, month) {
      // giving previous month when month: month, giving current month on month: month + 1
      const date = new Date(year, month + 1, 0);
  
      console.log("hrer");
      console.log(`month: ${month}`)
      console.log(`date: ${date}, date.getDate(): ${date.getDate()}, date.getDate() + 1: ${date.getDate() + 1}`)
  
      return date.getDate();
      // return (date.getDate() + 1 == 32 ? 30 : date.getDate() + 1);
    }
  
    function getStartingWeekdayOfMonth(year, month) {
      const date = new Date(year, month, 1);
  
      return date.getDay();
    }
  
    const calendaDataConstructor = (monthIndex, year, onCurrentDay) => {
      const date = new Date(year, monthIndex);
      const month = date.getMonth();
      // const day = date.getDate()
      // const year = date.getFullYear();
      // const numberOfDays = getNumberOfDaysInMonth(year, month);
      // const startingWeekDay = getStartingWeekdayOfMonth(year, month);
     
      setCalendarData(() => ({
        currentDayNumeric: currentDate.day,
        onCurrentDay: onCurrentDay,
  
        month: date.toLocaleString('default', { month: 'long' }),
        monthNumeric: month,
        daysCount: getNumberOfDaysInMonth(year, month),
        startingWD: getStartingWeekdayOfMonth(year, month),
  
        year: year,
      }))
    }
  
  
  
  
  
  
    useEffect(() => {
      const date = new Date();
   
      setCurrentDate(() => ({
        day:  date.getDate() - 1,
        month: date.getMonth(),
        year: date.getFullYear()
      }))
     
    }, [])
  
    useEffect(() => {
      const getStreakRangeHandler = async () => {
        const {start, end, streakCount} = await getStreakRange(calendarData.month, calendarData.year);
        setRange(prevRange => ({...prevRange,start,end}));
        setStreakCount(streakCount);
        
      }
      getStreakRangeHandler();
  
    }, [currentDate])
  
    useEffect(() => {
      calendaDataConstructor(currentDate.month, currentDate.year, true);
    }, [range])
  
    useEffect(() => {
      
  
      const isCurrentDay = (loopDay) => {
        return `${(onCurrentDay && newCurrentDayNumeric == loopDay) ? `bg-[#044577]` : `bg-[#2D867F]`}`
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
  
      const {daysCount, startingWD, currentDayNumeric, onCurrentDay} = calendarData;
  
      let calendarContentData = [];
      let temp = <li></li>;
      let newRangeStart = range.start + startingWD;
      let newRangeEnd = range.end + startingWD;
  
      // currenDayNumeric: zero-based
      let newCurrentDayNumeric = currentDayNumeric + startingWD
  
      for(let i = 0; i < (daysCount + startingWD); ++i) {
        console.log(daysCount, startingWD)
        if(i < startingWD) {
          temp = <li key={i}>{""}</li> 
        }
        else if (i >= startingWD) {
            if(i >= newRangeStart - 1 && i < newRangeEnd) {
            console.log(`RangeStart: ${newRangeStart}, RangeEnd: ${newRangeEnd}`)
  
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
              console.log(onCurrentDay, currentDayNumeric, i)
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
        //   temp = <li className='text-[#2D867F]'>{i-startingWD + 1}</li>
        // }
      } 
      calendarContentData.push(temp);
    }
      setCalendarContents(calendarContentData)
  
      console.log(calendarContentData);
    }, [calendarData])
  
  
    const previousMonthHandler = () => {
      console.log("previousMonthHandler")
      console.log(calendarData)
  
    
      const onCurrentDay = (currentDate.month == (calendarData.monthNumeric - 1 == -1 ? 11 : calendarData.monthNumeric - 1)) && (currentDate.year == calendarData.year - 1);
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
      console.log("nextMonthHandler")
      console.log(calendarData)
  
      const date = new Date();
  
      const onCurrentDay = (currentDate.month == calendarData.monthNumeric + 1) && (currentDate.year == calendarData.year);
  
  
      // console.log(date.getMonth(), calendarData.monthNumeric + 1, date.getFullYear(),calendarData.year)
        if((currentDate.month >= (calendarData.monthNumeric + 1 == 12 ? 0 : calendarData.monthNumeric + 1)) && (currentDate.year >= (calendarData.year))) {
          if((calendarData.monthNumeric + 1) < 12) {
              // Entered Next Month
            calendaDataConstructor(calendarData.monthNumeric + 1, calendarData.year, onCurrentDay);
          } else {
              // Entered New Year
              calendaDataConstructor(0, calendarData.year + 1, onCurrentDay);
          }
       }
    }
  
  
  
   

    return (
      <> 
      {
        !calendarData ? <h3>Loading Calender..!</h3> : ( 
  
          <div className='bg-[#EBF9FA] flex px-[60px] py-[30px] gap-24'> 
            <div className='w-[30%] flex flex-col justify-center items-center'>
              <h3 className='text-[32px] font-semibold font-poppins tracking-wider text-[#2D867F] mb-12'>Streak Board</h3>
              <img className='w-[59px] mb-7' src={streakFire} alt='streak-fire' />
              <p className='text-2xl font-medium font-poppins text-[#2D867F] mb-6'>Streak Count</p>
              <div className='w-full border-solid border-[3px] border-[#2D867F] font-abhaya text-[#2D867F] text-3xl font-bold'>{streakCount}</div>
            </div>
            <div className='w-[70%] border-solid border-[3px] border-[#2D867F] rounded-[15px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] p-8'>
              <div className='flex justify-between items-center mb-3'>
                <button onClick={previousMonthHandler}>
                  <img className='w-[40px]' src={previousArrow} alt='previous-month' />
                </button>
                  <h4 className={`text-2xl ${calendarData.year > currentDate.year ? `text-[rgba(0,0,0,0.5)]` : `text-[#2D867F]`}  font-semibold`}>{calendarData.month}, {calendarData.year}</h4>
                <button onClick={nextMonthHandler}>
                  <img className='w-[40px]' src={nextArrow} alt='next-month' />
                </button>
              </div>
              <div>
              <ul className='text-xl font-bold grid grid-cols-[repeat(7,40px)] gap-[30px] items-center justify-center list-none text-[rgba(0,0,0,0.4)] mb-5' >
                  {weekDays.map((weekDay,index) => <li key={index}>{weekDay}</li>)}
                </ul>
                <ul className='text-xl font-medium font-abhaya grid grid-cols-[repeat(7,70px)] grid-rows-[repeat(6,35px)]  items-center justify-center gap-y-4'>
                  {calendarContents}
                </ul>
              </div>
            </div>
          </div>
  
        )
      }
    </>
    )
}
 

export default StreakCalendar

  
  
  
  
  
  
  
  
  
  
  {/* 
        {
          !calendarData ? <h3>Loading Calender..!</h3> : (
            <div className='p-5 w-[354px] bg-[#EBF9FA]'>
                <div className='my-0 mx-auto'>
                <div className='flex justify-between mx-4 mb-4'>
  
                  <h4 className='text-left text-[#2D867F] text-xl'>{calendarData.month} {calendarData.year}</h4>
                  <div className='flex gap-8'>
                    <button onClick={previousMonthHandler}>
                      <img src={PreviousArrow} alt='previous-month-btn' />
                    </button>
                    <button onClick={nextMonthHandler}>
                      <img src={NextArrow} alt='next-month-btn' />
                    </button>
                  </div>
                </div>
                <ul className='grid grid-cols-[repeat(7,40px)] items-center justify-center list-none mb-2 text-[rgba(0,0,0,0.4)]' >
                  {weekDays.map((weekDay,index) => <li key={index}>{weekDay}</li>)}
                </ul>
                <ul className='grid grid-cols-[repeat(7,40px)] grid-rows-[repeat(7,35px)] items-center justify-center gap-y-4'>
                  {calendarContents}
                </ul>
                </div>
            </div>
          )
        }
         */}
  
  
  // {
  //   !calendarData ? <h3>Loading Calender..!</h3> : (
  //     <div className='p-5 w-[354px] bg-[#EBF9FA]'>
  //         <div className='my-0 mx-auto'>
  //         <div className='flex justify-between mx-4 mb-4'>
  
  //           <h4 className='text-left text-[#2D867F] text-xl'>{calendarData.month} {calendarData.year}</h4>
  //           <div className='flex gap-8'>
  //             <button onClick={previousMonthHandler}>
  //               <img src={PreviousArrow} alt='previous-month-btn' />
  //             </button>
  //             <button onClick={nextMonthHandler}>
  //               <img src={NextArrow} alt='next-month-btn' />
  //             </button>
  //           </div>
  //         </div>
  //         <ul className='grid grid-cols-[repeat(7,40px)] items-center justify-center list-none mb-2 text-[rgba(0,0,0,0.4)]' >
  //           {weekDays.map((weekDay,index) => <li key={index}>{weekDay}</li>)}
  //         </ul>
  //         <ul className='grid grid-cols-[repeat(7,40px)] grid-rows-[repeat(7,35px)] items-center justify-center gap-y-4'>
  //           {calendarContents}
  //         </ul>
  //         </div>
  //     </div>
  //   )
  // }
  
// const applyRange = (startRange, endRange, calendarDataArray, color) => {
//   for(let i = 0; i < calendarDataArray.length; ++i) {
//     if(i > startRange - 1 && i < endRange) {
//       if(i == startRange) {
//         calendarDataArray[i] = <li className={`rounded-s-xl ${color}`}>
//         {calendarDataArray[i]}
//         </li>
//       }
//       else if (i == endRange - 1) {
//         calendarDataArray[i] = <li className={`rounded-e-xl ${color}`}>{calendarDataArray[i].children.props }</li>

//       }
//       else {
//         calendarDataArray[i] = <li className={`${color}`}>{calendarDataArray[i]}</li>
//       }
//     }
//     else {
//       calendarDataArray[i] = <li>{calendarDataArray[i]}</li>
//     }
//   console.log(calendarDataArray[i])
// }
// }
