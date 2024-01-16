import React from 'react'
import { useDrag } from 'react-dnd'

const DraggableBadge = ({ text, type ,index,selectHandler, style}) => {

    const [{isDragging}, drag] = useDrag({
      item: [text,type],
      type
    });
    console.log(`isDragging ${isDragging}`)
    
    const draggableStyles = {
      default: `drop-option-shadow border-2 flex justify-center items-center text-secondary text-[18px] border-secondary rounded-[10px] px-5 ${isDragging ? `cursor-grabbing` :`cursor-grab`}`,
      secondary: `drop-option-shadow border-2 flex justify-center items-center text-primary-100 text-[18px] border-secondary bg-secondary rounded-[10px] px-5`,
      correct: `drop-option-shadow border-2 flex justify-center items-center text-primary-100 text-[18px] border-correct bg-correct rounded-[10px] px-5`,
      wrong: `drop-option-shadow border-2 flex justify-center items-center text-primary-100 text-[18px] border-wrong bg-wrong rounded-[10px] px-5`,
    }


    return (
      <div onDragStart={selectHandler}
      key={index} ref={drag} className={`${draggableStyles[style]}`}
      style={{transition: 'all 0.4s'}}
      >
        {text}
      </div>
    );
  };

export default DraggableBadge
