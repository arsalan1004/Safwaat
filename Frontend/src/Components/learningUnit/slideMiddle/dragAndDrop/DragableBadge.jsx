import React from 'react'
import { Link } from 'react-router-dom'
import { useDrag } from 'react-dnd'

const DraggableBadge = ({ text, type ,index, marginx=8, marginy=8}) => {
    const [, drag] = useDrag({
      item: [text,type],
      type
    });
  
    return (
      <div key={index} ref={drag} className={`badge badge-${type} badge-outline mx-${marginx} my-${marginy}`}>
        {text}
      </div>
    );
  };

export default DraggableBadge
