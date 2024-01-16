import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import DraggableBadge from './DragableBadge';
import { useSelector } from 'react-redux';
const DropBox = ({title, list, listHandler,selectedHandler, sourceId, boxLength}) => {

  const [appearIsFull, setAppearIsFull] = useState(false);
  const {isChecked} = useSelector(state => state.slideControl)
  const {dndIsCorrect, styleDict} = useSelector(state => state.dndSlideSlice)


  const [, cityDrop] = useDrop({
    
    accept: 'option',
    drop: (item, monitor) => {
      console.log(`item in ${sourceId}: ${item}`)
     
      let isFull = (boxLength < 6) ? false : true;
      listHandler(item, 'option', isFull);
    },
  });

 
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
      
      
      >  
      <div 
      className={`drop-box-shadow h-[150px] w-[280px] lg:w-[320px] border-[3px] border-${borderStyle} px-4 py-2 grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(3,1fr)] gap-x-16 gap-y-4`}
     
      >
        
        {
          list.map((option, index) =>  
            <DraggableBadge 
              index={index}
              selectHandler = {() => selectedHandler(sourceId)} 
              style = {isChecked == true ? styleDict[option] ?? 'secondary' : 'secondary'}
              type='option'
              text = {option}

              >{option}</DraggableBadge>
            )
        }
    </div>
      <p className="text-center  font-Itim text-secondary text-xl">{title}</p>
      {<p 
        style={{transition: "all 0.5s"}}
        className={`text-center font-Itim ${appearIsFull ? "text-accent" : "text-primary-100" } `}>Box Is Full</p>}
  </div>
  )
}



export default DropBox