import React, { useEffect, useState } from 'react'
import DropBox from './DropBox';
import DraggableBadge from './DragableBadge';

import { useDispatch, useSelector } from 'react-redux';
import { dndSlideActions } from '../../../../Store/dndSlideSlice';
import reset from '../../../../assets/icons/reset.svg';

const DragAndDropSlide = () => {
  const dispatch = useDispatch();
  const {isChecked} = useSelector(state => state.slideControl)
  const [selectedSource, setSelectedSource] = useState('option');


  const setSelectedSourceHandler = (source) => {
    console.log("setSelectedHandler Run")
    setSelectedSource(source)
  }

  const {options, boxOneHeading, boxTwoHeading, boxOneList, boxTwoList} = useSelector(state => state.dndSlideSlice)
 
  const handleBox1List = (item, target, isFull) => {
    console.log(`selectedSource: ${selectedSource}`)
    if(isFull == true) {
      console.log("isFull Returned")
      return};
    const newOption = item[0];

    console.log("handleBox1List called on drop")
    console.log(`item: ${item}`)
  
    if (target === 'option') {
      const boxOneNewOptions = [...boxOneList, newOption];
      
      if(selectedSource == 'option') {
        dispatch(dndSlideActions.setBoxOneList([...(new Set(boxOneNewOptions))]));

        dispatch(dndSlideActions.setOptions(options.filter((option) => option != newOption)))
      }
      else if(selectedSource == 'boxTwo') {
        dispatch(dndSlideActions.setBoxOneList([...(new Set(boxOneNewOptions))]));
        dispatch(dndSlideActions.setBoxTwoList(boxTwoList.filter((option) => option != newOption)))
      }

    }

  };

  useEffect(() => {
    // console.log("OPTION USE EFFECT RUN")
    if(options.length == 0) {
      console.log("OPTION USE EFFECT IF CONDITION TRUE")
      dispatch(dndSlideActions.calculateResult());
    }
  }, [options])


  const handleBox2List = (item, target, isFull) => {
    console.log(`selectedSource: ${selectedSource}`)
    if(isFull == true) return;
    const newOption = item[0];
    console.log("handleBox2List called on drop")
    console.log(`item: ${item}`)

    if (target === 'option') {
  
      const boxTwoNewOptions = [...boxTwoList, newOption];
      if(selectedSource == 'option') {
        dispatch(dndSlideActions.setBoxTwoList([...(new Set(boxTwoNewOptions))]));
        dispatch(dndSlideActions.setOptions(options.filter((option) => option != newOption)))
      }
      else if (selectedSource == 'boxOne') {
        dispatch(dndSlideActions.setBoxTwoList([...(new Set(boxTwoNewOptions))]));
        dispatch(dndSlideActions.setBoxOneList(boxOneList.filter((option) => option != newOption)))
      }

      
      console.log(`In BoxTWOLIST ${options.length}`);
    }

  };

  console.log("Rendering Drag")

  const resetHandler = () => {
    dispatch(dndSlideActions.reset());
  }


  return (
  
    <div className="flex flex-col items-center gap-6 mt-5">
    <h1 className='flex justify-center items-center font-Itim text-2xl text-secondary'>Drag Options to the Correct Box</h1>
    <div className='w-[70%] mx-auto gap-4 grid grid-rows-[repeat(2,1fr)] grid-cols-[repeat(6,1fr)] mt-5'> 
      { 
        options.map((item,index)=> (
          <DraggableBadge 
            marginx={9} text={item} 
            type='option' index={index+39}
            selectHandler = {() => setSelectedSourceHandler("option")} 
            style={'default'}
          />
        ))
      } 
    </div>
      <div className='flex justify-between w-[70%] mx-auto'>
        <DropBox
          title = {boxOneHeading}
          listHandler={handleBox1List}
          list = {boxOneList}
          sourceId = {"boxOne"}
          selectedHandler = {setSelectedSourceHandler}
          boxLength = {boxOneList.length}
        />
        <DropBox
          title = {boxTwoHeading}
          listHandler={handleBox2List}
          list={boxTwoList}
          sourceId = {"boxTwo"}
          selectedHandler = {setSelectedSourceHandler}
          boxLength = {boxTwoList.length}
        />
      </div>

      <button 
        className='flex gap-2 justify-center items-center bg-accent px-2 py-2 rounded-[10px] text-primary-100' 
        onClick={resetHandler}
        disabled={isChecked}
      > 
        <img src={reset} alt="restart-slide" className='w-[20px] h-[20px]'/> Reset
      </button>
    </div>  
 
  )
}

export default DragAndDropSlide


