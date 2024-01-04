import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import DraggableBadge from './DragableBadge';
import DraggableOptions from './DraggableOption';
import { useSelector } from 'react-redux';
const DropBox = ({title, list, listHandler,selectedHandler, sourceId, boxLength}) => {
  // const {options, styleDict} = useSelector(state => state.dndSlideSlice.options)
  const [counter, setCounter] = useState(0);
  const [appearIsFull, setAppearIsFull] = useState(false);

  const {isChecked} = useSelector(state => state.slideControl)
  const {dndIsCorrect, styleDict} = useSelector(state => state.dndSlideSlice)


  const [, cityDrop] = useDrop({
    
    accept: 'option',
    drop: (item, monitor) => {
      console.log(`item in ${sourceId}: ${item}`)
      const source = monitor.targetId;
      console.log(sourceId)
      // setCounter(c => c+1);
      let isFull = (boxLength < 6) ? false : true;
      listHandler(item, 'option', isFull);
    },
  });

  // let contents;
  // const optionStyles = {
  //   'correct': 'text-wrong',
  //   'wrong': 'text-wrong',
  // }

  // if(options.length == 0) {

  //   contents = list.map((item, index) => {
  //   return (<p className={`${optionStyles[styleDict[item]]}`}>{item}</p>)})
  // }
  // else {
  //   contents = list.map((item, index) => <p className=''>{item}</p>)
  // }
  const onHoverHandler = () => {
    console.log(`onHoverHandler called in ${sourceId}, BOX_LENGTH: ${boxLength}`)
    if(boxLength < 6) {
      console.log('box length < 6: ', appearIsFull != false)
      setAppearIsFull(false)

    }
    else {
      setAppearIsFull(true)
      
    }
  }
  const onBlurHandler = () => {
    setAppearIsFull(false)
  }

  let borderStyle = (isChecked ?  (dndIsCorrect == true  ? 'correct' : 'wrong') : "secondary");

  console.log(list)
  return (
    <div ref={cityDrop} className="flex flex-col justify-center" 
      onMouseEnter={() => onHoverHandler()}
      onMouseLeave={() => onBlurHandler()}
      style={{transition: "all 0.5s"}}
      
      >  
      <div className={`drop-box-shadow h-[150px] w-[320px] border-[3px] border-${borderStyle} px-4 py-2 grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(3,1fr)] gap-x-16 gap-y-4`}>
        {
          list.map((option, index) =>  
            <DraggableBadge 
              index={index}
              selectHandler = {() => selectedHandler(sourceId)} 
              style = {isChecked == true ? styleDict[option] : 'secondary'}
              type='option'
              text = {option}

              >{option}</DraggableBadge>
            )
        }
    </div>
      <p className="text-center  font-itim text-secondary text-xl">{title}</p>
      {<p 
        style={{transition: "all 0.5s"}}
        className={`text-center font-itim ${appearIsFull ? "text-accent" : "text-primary" } `}>Box Is Full</p>}
  </div>
  )
}


// {
//   list.map((item, index) => (
//     <DraggableOptions 
//       type = {'option'}
//       text = {item}
//       index= {index}
//     />
   
// ))
// }


export default DropBox