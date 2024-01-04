import React, { useState, useRef } from 'react';
// import Header from './component/header';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchingSlideAction } from '../../../../Store/matchingSlideSlice';

const Match = () => {
  const dispatch = useDispatch();
  const {columnOne, columnTwo, answers} = useSelector(state => state.matchingSlideSlice)

  console.log(answers);


  // const [answer, setAnswer] = useState([
  //   { id: 'Pakistan', city: 'Karachi' },
  //   { id: 'India', city: 'New Dehli' },
  //   { id: 'South Africa', city: 'Cape Town' },
  //   { id: 'Canada', city: 'Ottawa' },
  // ]);
  
  // MAX_TRIES = 4
  // const [selectedPairs, setSelectedPairs] = useState(0);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(true);
  // const buttonL = useRef(0);
  // const buttonR = useRef(0);
  const [answerMsg,setMsg] = useState(null);
  // const [checkCity,setCity] = useState("");
  const [selectOption,setSelectOption] = useState("");
  const [selectedDisabledOptIndex, setSelectedDisabledOptIndex] = useState(-1);
  const [counter,setCounter] = useState({tries:0,count:0});
 
  const [disabledStatusOne, setDisableStatusOne] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  })
  const [disabledStatusTwo, setDisableStatusTwo] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  })

  // const disableStatus = {
  //   0: false,
  //   1: false,
  //   2: false,
  //   3: false
  // }

  const newColStyles = {
    'selected': `bg-secondary text-primary w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw] `,
    'freezed': `bg-[rgba(4,69,119,0.3)] text-primary w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`
  }


  const [colOneStyle, setColOneStyle] = useState([
    `w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`,
    `w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`,
    `w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`,
    `w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`,
  ]);
  const [colTwoStyle, setColTwoStyle] = useState([
    `w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`,
    `w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`,
    `w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`,
    `w-[20vw] h-auto border-2 border-b-slate-700 rounded-xl my-2 mx-[10vw]`,
  ]);

    useMemo(()=>{
        if(counter.tries == 4) {
            setDisableLeft(true);
            setDisableRight(true); 
          }
        // dispatch(matchingSlideAction.setScore(counter.tries));
    }
    ,[counter.tries]);


    function checkPairs(option) {
        console.log(`option: ${option}`)
        console.log(`answer: ${answers[selectOption]}`)
        if(option == answers[selectOption]) {
            if(counter.count + 1 == 4) dispatch(matchingSlideAction.setIsMatchingCorrect(true));
            console.log("CORRECT ANSWER CALLED");
            setMsg(true);
            setCounter({tries:counter.tries+1,count:counter.count+1});
          } 
          else {
          console.log("WRONG ANSWER CALLED");
            setMsg(false);
            setCounter({tries:counter.tries+1,count:counter.count});
        }
        dispatch(matchingSlideAction.setTries(counter.tries+1));

    }

    // function cityselect(city){
    //     setCity(city);
    // }
    const selectLeftColumnHandler = (option, index) => {
      setSelectedDisabledOptIndex(index)
      console.log("SELECT LEFT COLUMN HANDLER CALLED");
      colOneStyle[index] = newColStyles.selected;
      console.log(option);
      setSelectOption(option);
      setDisableStatusOne(dsOne => ({...dsOne, [index]: true}))
      setDisableLeft(true);
      setDisableRight(false);
    

    }
    const selectRightColumnHandler = (option, index) => {
      console.log("SELECT RIGHT COLUMN HANDLER CALLED");
      colOneStyle[selectedDisabledOptIndex] = newColStyles.freezed;
      colTwoStyle[index] = newColStyles.freezed;
      setDisableStatusTwo(dsTwo => ({...dsTwo, [index]: true}))

      console.log(option);
      checkPairs(option);
      setDisableLeft(false);
      // setDisableRight(true);
      setSelectOption(false);
    }

  return (
    <div className="container">
      {/* <Header></Header> */}
      <div className="flex my-[15vh]">
        <div className="flex flex-col ml-7">
          

          {columnOne.map((option, index) => (
            <button
              key={index}
              className={colOneStyle[index]}
              onClick={() => selectLeftColumnHandler(option, index)}
              disabled = {counter == 4 || disabledStatusOne[index] || disableLeft == true}
            >
              <p className="py-2 font-bold text-5xl text-center">{option}</p>
            </button>
          ))}
        </div>
        <div className="border-x-4 border-black w-[2vw]"></div>
        <div className="flex flex-col w-[20vw]">
          {
            columnTwo.map((option, index) => (
            <button
              key={index}
              className={colTwoStyle[index]}
              onClick={() => selectRightColumnHandler(option, index)}
              disabled = {(counter == 4 || selectOption == false || disabledStatusTwo[index] || disableRight == true) ? true : false}
            >
              <p className="py-2 font-bold text-5xl text-center">{option}</p>
            </button>
          ))}
        </div>
      </div>
      {answerMsg && <p className="py-2 font-bold text-5xl text-center">&#128077;</p>}
      {!answerMsg && <p className="py-2 font-bold text-5xl text-center">&#128078;</p> }         
      {counter.tries==4? <p className="font-bold text-5xl text-center">Score:{counter.count}</p>:null}
    </div>
  );
};

export default Match;
