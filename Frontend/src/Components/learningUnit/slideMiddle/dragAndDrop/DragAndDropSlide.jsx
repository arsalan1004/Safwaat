import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
import DropBox from './DropBox';
import DraggableBadge from './DragableBadge';
import { useDispatch, useSelector } from 'react-redux';
import { dndSlideActions } from '../../../../Store/dndSlideSlice';
const DragAndDropSlide = () => {
  const dispatch = useDispatch();


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

  const {options, boxOneHeading, boxTwoHeading, boxOneList, boxTwoList} = useSelector(state => state.dndSlideSlice)
  // const [, cityDrop] = useDrop({
  //   accept: 'city',
  //   drop: (item) => handleList(item, 'City'),
  // });
  const handleBox1List = (item, target, source) => {
    const newOption = item[0];

    console.log("Handler called on drop")
    console.log(`item: ${item}`)
    console.log(`target: ${target}`)
    console.log(`Source: ${source}`)
    if (target === 'option') {
      const boxOneNewOptions = [...boxOneList, newOption];

      dispatch(dndSlideActions.setBoxOneList([...(new Set(boxOneNewOptions))]));
      dispatch(dndSlideActions.setOptions(options.filter((option) => option != newOption)))
      // if(options.length - 1 == 0) {
      //   dispatch(dndSlideActions.calculateResult());
      // }

      // setBoxOneList([...(new Set(boxOneNewOptions))]);
      // setOptions(options.filter((option) => option != newOption))
    }

  };

  useEffect(() => {
    console.log("OPTION USE EFFECT RUN")
    if(options.length == 0) {
      console.log("OPTION USE EFFECT IF CONDITION TRUE")
      dispatch(dndSlideActions.calculateResult());
    }
  }, [options])


  const handleBox2List = (item, target,  source) => {
    const newOption = item[0];

    console.log("Handler called on drop")
    console.log(`item: ${item}`)
    console.log(`target: ${target}`)
    if (target === 'option') {
      console.log("City If run");
      const boxTwoNewOptions = [...boxTwoList, newOption];

      dispatch(dndSlideActions.setBoxTwoList([...(new Set(boxTwoNewOptions))]));
      dispatch(dndSlideActions.setOptions(options.filter((option) => option != newOption)))
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
  
    <div className="container">
    <div className="flex gap-3 m-5">
      <DropBox
        title = {boxOneHeading}
        listHandler={handleBox1List}
        list = {boxOneList}
      />
      <DropBox
        title = {boxTwoHeading}
        listHandler={handleBox2List}
        list={boxTwoList}
      />
      {/* <div ref={cityDrop} className="h-[40vh] w-[40vw] border-2 border-accent">  
        <p className="text-blue text-center font-extrabold">City</p>
        <div className="m-6">
          <h2 className=''>City List:</h2>
          {
            cityList.map((item, index) => (
              <DraggableBadge 
                marginx={9} marginy={6} text={item} 
                type='city' index={index}   
              />
          ))
          }
        </div>
      </div> */}
    </div>
    <div className='border-2 border-correct'> 
      { 
        options.map((item,index)=> (
          <DraggableBadge 
            marginx={9} text={item} 
            type='option' index={index+39} 
          />
        ))
      }
    </div>
    <div className='btn btn-warning m-5' 
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