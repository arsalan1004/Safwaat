import React, { useState, useRef } from 'react';
// import Header from './component/header';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchingSlideAction } from '../../../../Store/matchingSlideSlice';

const Match = () => {
  const dispatch = useDispatch();
  const {columnOne, columnTwo, answers} = useSelector(state => state.matchingSlideSlice)
  const {isChecked} = useSelector(state => state.slideControl)
  console.log(isChecked);


  // const [answer, setAnswer] = useState([
  //   { id: 'Pakistan', city: 'Karachi' },
  //   { id: 'India', city: 'New Dehli' },
  //   { id: 'South Africa', city: 'Cape Town' },
  //   { id: 'Canada', city: 'Ottawa' },
  // ]);
  
  // MAX_TRIES = 4

  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(true);
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

  const [checkStyleDict, setCheckStyleDict] = useState(() => ({}))

  const newColStyles = {
    'selected': `match-shadow-outer text-primary text-[14px] font-itim border-2 border-secondary rounded-xl px-[2px] bg-secondary`,
    'freezed': `match-shadow-inner text-primary text-[14px] font-itim border-2 border-slate-700 rounded-xl px-[2px] bg-[rgba(4,69,119,0.3)]`
  }
  const checkStyles = {
    'correct': 'match-shadow-outer text-primary text-[14px] font-itim border-2 border-correct rounded-xl px-[2px] bg-correct',
    'wrong': 'match-shadow-outer text-primary text-[14px] font-itim border-2 border-wrong rounded-xl px-[2px] bg-wrong'
  }

  let style = `match-shadow-outer text-secondary text-[14px] font-itim border-2 border-secondary rounded-xl px-[2px]`;
  const [colOneStyle, setColOneStyle] = useState([
    style, style, style, style
  ]);
  const [colTwoStyle, setColTwoStyle] = useState([
    style, style, style, style
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
        console.log(`option: ${selectOption}`)
        console.log(`answer: ${answers[selectOption]}`)

        if(option == answers[selectOption]) {

          /**
           * if correct:
           *  option: style[]
           */
            if(counter.count + 1 == 4) dispatch(matchingSlideAction.setIsMatchingCorrect(true));
            console.log("CORRECT ANSWER CALLED");
         
            setCounter({tries:counter.tries+1,count:counter.count+1});
            setCheckStyleDict(prevCheckSt => ({...prevCheckSt, [selectOption]: 'correct', [option]: 'correct'}));
          } 
          else {
          console.log("WRONG ANSWER CALLED");
  
            setCounter({tries:counter.tries+1,count:counter.count});
            setCheckStyleDict(prevCheckSt => ({...prevCheckSt, [selectOption]: 'wrong', [option]: 'wrong'}));
        }
        dispatch(matchingSlideAction.setTries(counter.tries+1));

    }

    // function cityselect(city){
    //     setCity(city);
    // }
    const selectLeftColumnHandler = (option, index) => {
      setSelectedDisabledOptIndex(index)
      console.log("SELECT LEFT COLUMN HANDLER CALLED");
      setColOneStyle((prevStyle) => 
      (prevStyle.map((style, styleIndex) => 
      (styleIndex != index ? style : newColStyles.selected)
      )
      ))
      // colOneStyle[index] = newColStyles.selected;
      console.log(option);
      setSelectOption(option);
      setDisableStatusOne(dsOne => ({...dsOne, [index]: true}))
      setDisableLeft(true);
      setDisableRight(false);
    

    }
    const selectRightColumnHandler = (option, index) => {
      console.log("SELECT RIGHT COLUMN HANDLER CALLED");
      setColOneStyle((prevStyle) => 
        (prevStyle.map((style, styleIndex) => 
          (styleIndex != selectedDisabledOptIndex ? style : newColStyles.freezed)
          )
        ))
      setColTwoStyle((prevStyle) => 
        (prevStyle.map((style, styleIndex) => 
          (styleIndex != index ? style : newColStyles.freezed)
          )
        ))

      // colOneStyle[selectedDisabledOptIndex] = newColStyles.freezed;
      // colTwoStyle[index] = newColStyles.freezed;
      setDisableStatusTwo(dsTwo => ({...dsTwo, [index]: true}))

      console.log(option);
      checkPairs(option);
      setDisableLeft(false);
      setDisableRight(true);
      setSelectOption(false);
    }
    console.log(checkStyleDict)
  return (
    <div className="">
      <h1 className='font-itim text-2xl text-secondary text-center mb-4'>Match The Following</h1>
      <div className="w-3/5 mx-auto flex justify-between font-itim">
        <div className="w-[30%] grid grid-cols-[100%] grid-rows-[repeat(4,1fr)] gap-y-4">
          {columnOne.map((option, index) => (
            <button
              key={index}
              className={isChecked ? checkStyles[checkStyleDict[option]] : colOneStyle[index]}
              onClick={() => selectLeftColumnHandler(option, index)}
              disabled = {counter == 4 || disabledStatusOne[index] || disableLeft == true}
            >
              <p className="text-center">{option}</p>
            </button>
          ))}
        </div>
        
        <div className="w-[17%] grid grid-cols-[100%] grid-rows-[repeat(4,1fr)] gap-y-4">
          {
            columnTwo.map((option, index) => (
            <button
              key={index}
              className={isChecked ? checkStyles[checkStyleDict[option]] :colTwoStyle[index]}
              onClick={() => selectRightColumnHandler(option, index)}
              disabled = {(counter == 4 || selectOption == false || disabledStatusTwo[index] || disableRight == true) ? true : false}
            >
              <p className="text-center">{option}</p>
            </button>
          ))}
        </div>
      </div>
           
    </div>
  );
};

export default Match;

// {answerMsg && <p className="py-2 text-center">&#128077;</p>}
// {!answerMsg && <p className="py-2   text-center">&#128078;</p> } 