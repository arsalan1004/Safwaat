import React from 'react'
import { useDrop } from 'react-dnd';
import DraggableBadge from './DragableBadge';
import DraggableOptions from './DraggableOption';
import { useSelector } from 'react-redux';
const DropBox = ({title, list, listHandler}) => {
  // const {options, styleDict} = useSelector(state => state.dndSlideSlice.options)

  const [, cityDrop] = useDrop({
    accept: 'option',
    drop: (item, monitor) => {
      console.log(monitor)
      listHandler(item, 'option', monitor.targetId);
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


  console.log(list)
  return (
    <div ref={cityDrop} className="h-[40vh] w-[40vw] border-2 border-accent">  
      <p className="text-blue text-center font-extrabold">{title}</p>
      <div className="m-6">
        {
          list.map((option) => <p>{option}</p>)
        }
    </div>
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