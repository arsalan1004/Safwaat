import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

import FlashCardSet from './FlashCardSet/FlashCardSet'
import FlashSetBox from './FlashSetBox/FlashSetBox'
import SlidingIconButton from '../../../UI/Button/SlidingIconButton'
import SetCreation from './SetCreation/SetCreation'


function FlashCraftMain({setsData}) {

  const navigate = useNavigate();

  function navigateHandler () {
    navigate('SetCreation')
  }

  const data = setsData;


  // const data = [
  //   {
  //     id: 1,
  //     title: 'Makharij Exploration',
  //     category: 'Basics',
  //     cardsQty: 3
  //   },
  //   {
  //     id: 2,
  //     title: 'Makharij Exploration 2',
  //     category: 'Basics',
  //     cardsQty: 6
  //   }
  // ] 

  const [value, setValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([...data]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const onChange = (e) => {
    setValue(e.target.value);
    setShowSuggestions(true);
  }

  const show = (searchTerm) => {
    setValue(searchTerm);
    setShowSuggestions(false);
  } 

  const onSearch = (searchTerm) => {
    console.log('search ', searchTerm);
    setShowSuggestions(false);

    const filteredItems2 = data.filter( (item)=>{
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    } );


    setFilteredItems(filteredItems2);
  }


  useEffect( () => {
    console.log('filteredItems after change: ', filteredItems);

  }, [filteredItems, onSearch] )

  return (
    <div className='w-screen min-h-screen flex-column bg-primary-100'>
   
               {/* header */}
               <div className='h-16 w-full bg-gradient-to-b from-[#1E5054] to-[#56A8AE] flex items-center justify-between'>
            <h1 className='font-Poppins text-2xl font-bold tracking-wide text-primary-100 text-center ml-6'>
              FlashCraft
            </h1>
            <SlidingIconButton clickHandler={navigateHandler}>
                Create New Set
            </SlidingIconButton>
        </div>

      {/* Main Area */}
        <div className='w-5/6 mb-7 flex-column mt-8'>
          {/* Searchbar container */}
          <div className='w-full flex-column'>
              {/* Search Bar */}
            <div className="flex items-center justify-between w-[60%] p-4 px-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            
              {/* Inner Search Bar Input  */}
              <div className="flex p-4 w-3/4 rounded-lg bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className="text-secondary bg-gray-100 w-5/6 outline-none ml-7"
                    type="text" 
                    placeholder="Enter the Flashcard Set Title ..." 
                    value={value}
                    onChange={onChange}
                    />

              </div>
        
              {/* Search Button */}
              <div className="bg-secondary text-white ml-5 py-3 px-5 font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                <button 
                  className='w-full h-full'
                  onClick={() => onSearch(value) }
                >Search</button>
              </div>
          
            </div>
            {/* Dropdown */}
            <div className='bg-white w-2/4 z-100 flex-column border border-gray-100 empty:border-none '>
              {showSuggestions && data.filter(item => {
                const searchTerm = value.toLowerCase();
                const title = item.title.toLowerCase();

                return searchTerm && 
                       title.startsWith(searchTerm)  
              })
              .slice(0,5)
              .map( (item) => (
                  <div 
                      onClick={() => show(item.title)} 
                      className='cursor-pointer text-start my-1'
                      key={item.flashCardSetId}
                      >
                      {item.title}

                  </div>
              ) )}
            </div>

          </div>
          

          {/* Flash Sets Boxes */}
          <div className='w-full h-full mt-9 grid grid-cols-2 gap-4'>
            {
              filteredItems.map( (obj) => {
                return <FlashSetBox key={obj.flashCardSetId} obj={obj} />
              } )
            }
            
          </div>

          <div className='flex-center mt-12'>
            <p className='text-center font-bold font-Poppins text-2xl text-secondary '>You are on Fire! <br/>
                 Create More Flashcard Sets to Expand your knowledge!!
            </p>        
          </div>

        </div>

        {/* <FlashCardSet /> */}
    </div>

  )
}

export default FlashCraftMain