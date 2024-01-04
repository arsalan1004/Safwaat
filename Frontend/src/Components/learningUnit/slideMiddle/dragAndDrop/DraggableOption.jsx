import React from 'react'
import { useDrag } from 'react-dnd';
const DraggableOption = ({ text, type ,index, marginx=8, marginy=8}) => {
  const [, drag] = useDrag({
    item: [text,type],
    type
  });

  return (

      <div key={index} 
        ref={drag}
        className='text-secondary border-2 border-secondary rounded-[10px] text-xl'
      >
        {text}
      </div>
    );
  
}

export default DraggableOption