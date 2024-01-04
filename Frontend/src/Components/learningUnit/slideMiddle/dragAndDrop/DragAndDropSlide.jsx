import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
import DropBox from './DropBox';
import DraggableBadge from './DragableBadge';
import { connect, useDispatch, useSelector } from 'react-redux';
import { dndSlideActions } from '../../../../Store/dndSlideSlice';
const DragAndDropSlide = () => {
  const dispatch = useDispatch();
  const [selectedSource, setSelectedSource] = useState('option');

  // const [boxOneList, setBoxOneList] = useState([]);
  // const [boxTwoList, setBoxTwoList] = useState([]);
  // const [options,setOptions] = useState(['Karachi' , 'Lahore' ,'Larkana','Hyderabad','Islamabad']);
  // const correctAnswer = {
  //   'Karachi': 'Box1',
  //   'Islamabad': 'Box2',
  //   'Lahore': 'Box1',
  //   'Larkana': 'Box2',
  //   'Hyderabad': 'Box2'
  // }

  const setSelectedSourceHandler = (source) => {
    console.log("setSelectedHandler Run")
    setSelectedSource(source)
  }

  const {options, boxOneHeading, boxTwoHeading, boxOneList, boxTwoList} = useSelector(state => state.dndSlideSlice)
  // const [, cityDrop] = useDrop({
  //   accept: 'city',
  //   drop: (item) => handleList(item, 'City'),
  // });
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



      

      
      // if(options.length - 1 == 0) {
      //   dispatch(dndSlideActions.calculateResult());
      // }

      // setBoxOneList([...(new Set(boxOneNewOptions))]);
      // setOptions(options.filter((option) => option != newOption))
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
      // if(options.length - 1 == 0) {
      //   dispatch(dndSlideActions.calculateResult());
      // }

      // setBoxTwoList([...(new Set(boxTwoNewOptions))]);
      // setOptions(options.filter((option) => option != newOption))
    }

  };
  // const handleList = (item, target) => {
  //   const newItem = item[0];
  //   console.log("Handler called on drop")
  //   console.log(`item: ${item}`)
  //   console.log(`targer: ${target}`)
  //   if (target === 'Country') {
     
  //     const countries = [...countryList, newItem];
  //     setCountryList([...new Set(countries)]);
  //   } else if (target === 'City') {
  //     console.log("City If run");
  //     const cites = [...cityList, newItem];
  //     setCityList([...new Set(cites)]);
  //     setOptions(options.filter((item)=>item!=newItem))
  //   }

  //   console.log(cityList);
  // };
  console.log("Rendering Drag")

  const resetHandler = () => {
    dispatch(dndSlideActions.reset());
  }


  return (
  
    <div className="flex flex-col items-center gap-6 mt-5">
    <h1 className='flex justify-center items-center font-itim text-2xl text-secondary'>Drag Options to the Correct Box</h1>
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

    <div className='' 
            onClick={resetHandler}
          > Reset
      </div>
    </div>  
 
  )
}

export default DragAndDropSlide



{/* <div className='flex flex-col justify-center items-center'>
      <h1>Drag Options to Correct Box</h1>
      <div className='w-4/5 mx-auto'
        style={
          { display: 'grid', 
            gridTemplateColumns: 'repeat(6, 50px)', 
            gridTemplateRows: 'repeat(2, 1fr)'
          }}
      >
        <p>Hello</p>  <p>Hello</p>
        <p>Hello</p>  <p>Hello</p> 
        <p>Hello</p>  <p>Hello</p>      
        <p>Hello</p>  <p>Hello</p>
        <p>Hello</p>  <p>Hello</p>        
        <p>Hello</p>  <p>Hello</p>

      </div>
      <div className='w-4/5 mx-auto'>

        <div></div>
        <div></div>
      </div>
    </div> */
  }