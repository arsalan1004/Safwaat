import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDrag } from 'react-dnd'

const DraggableBadge = ({ text, type ,index,selectHandler, style, marginx=8, marginy=8}) => {

    const draggableStyles = {
      default: `drop-option-shadow border-2 flex justify-center items-center text-secondary text-[18px] border-secondary rounded-[10px] px-5`,
      secondary: `drop-option-shadow border-2 flex justify-center items-center text-primary text-[18px] border-secondary bg-secondary rounded-[10px] px-5`,
      correct: `drop-option-shadow border-2 flex justify-center items-center text-primary text-[18px] border-correct bg-correct rounded-[10px] px-5`,
      wrong: `drop-option-shadow border-2 flex justify-center items-center text-primary text-[18px] border-wrong bg-wrong rounded-[10px] px-5`,
    }


    const [, drag] = useDrag({
      item: [text,type],
      type
    });
  


    return (
      <div onDragStart={selectHandler}
      key={index} ref={drag} className={draggableStyles[style]}>
        {text}
      </div>
    );
  };

export default DraggableBadge
