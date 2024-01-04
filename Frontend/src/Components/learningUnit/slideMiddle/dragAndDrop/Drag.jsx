import React, { useState } from 'react';
import DraggableBadge from './DragableBadge';
import { DndProvider, useDrop } from 'react-dnd';


const Drag = () => {
  const [countryList, setCountryList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [options,setOpts] = useState(['Karachi' , 'Lahore' ,'Larkana','Hyderabad','Islamabad']);

  // const [, countryDrop] = useDrop({
  //   accept: 'country',
  //   drop: (item) => handleList(item, 'Country'),
  // });


  const [,cityDrop] = useDrop({
    accept: 'city',
    drop: (item) => handleList(item, 'City'),
  });

  console.log(cityDrop)

  const handleList = (item, target) => {
    const newItem = item[0];

    console.log("Handler called on drop")
    console.log(`item: ${item}`)
    console.log(`targer: ${target}`)
    if (target === 'Country') {
     
      const countries = [...countryList, newItem];
      setCountryList([...new Set(countries)]);
    } else if (target === 'City') {
      console.log("City If run");
      const cites = [...cityList, newItem];
      setCityList([...new Set(cites)]);
      setOpts(options.filter((item)=>item!=newItem))
    }

    console.log(cityList);
  };

  return (
    <div className="container">
       <div className="flex gap-3 m-5">

         <div ref={cityDrop} className="h-[40vh] w-[40vw] border-2 border-accent">  
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
         </div>
       </div>
       /* Drag from Here */
       <div className='border-2 border-correct'> 
         { 
           options.map((item,index)=> (
             <DraggableBadge 
               marginx={9} text={item} 
               type='city' index={index} 
             />
           ))
         }
       </div>
       <br></br>
         <div className='btn btn-warning m-5' 
           onClick={()=>{
             setOpts(['Karachi' , 'Lahore' ,'Larkana','Hyderabad','Islamabad']);
             setCityList([]);
           }}
         >
           <p className='font-extrabold'>Reset</p>
         </div>
     </div> 
    
  );
};

export default Drag;

// /* <div className="container">
//       <div className="flex gap-3 m-5">
//         /* Drop Here */
//         <div ref={cityDrop} className="h-[40vh] w-[40vw] border-2 border-accent">  
//           <p className="text-blue text-center font-extrabold">City</p>
//           <div className="m-6">
//             <h2 className=''>City List:</h2>
//             {
//               cityList.map((item, index) => (
//                 <DraggableBadge 
//                   marginx={9} marginy={6} text={item} 
//                   type='city' index={index}   
//                 />
//             ))
//             }
//           </div>
//         </div>
//       </div>
//       /* Drag from Here */
//       <div className='border-2 border-correct'> 
//         { 
//           options.map((item,index)=> (
//             <DraggableBadge 
//               marginx={9} text={item} 
//               type='city' index={index} 
//             />
//           ))
//         }
//       </div>
//       <br></br>
//         <div className='btn btn-warning m-5' 
//           onClick={()=>{
//             setOpts(['Karachi' , 'Lahore' ,'Larkana','Hyderabad','Islamabad']);
//             setCityList([]);
//           }}
//         >
//           <p className='font-extrabold'>Reset</p>
//         </div>
//     </div> 
// */