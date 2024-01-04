// SetCreation.js

import React, { useState, useEffect, useRef } from 'react';
import InputField from './inputField';
import { useNavigate } from 'react-router-dom';
import FilledSec from '../../../../UI/Button/FilledSec';
import CardDetail from './CardDetail';

const SetCreation = () => {

    const navigate = useNavigate();

    function navigateHandler () {
        navigate('/')
      }

    const [cardQty, setCardQty] = useState(2);

    const titleRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();

    const addDetailCardHandler = () => {
        setCardQty((prevCardQty) => prevCardQty + 1);
        setCardDetails((prevCardDetails) => [
            ...prevCardDetails,
            { term: '', definition: '' },
          ]);
    };

    const [cardDetails, setCardDetails] = useState(() =>
    Array.from({ length: cardQty }, () => ({ term: '', definition: '' }))
  );

  const handleTermChange = (index, value) => {
    console.log('handleTermChange called');
    const updatedCardDetails = [...cardDetails];
    updatedCardDetails[index].term = value;
    setCardDetails(updatedCardDetails);
  };

  const handleDefinitionChange = (index, value) => {
    console.log('handleDefinitionChange called');
    const updatedCardDetails = [...cardDetails];
    updatedCardDetails[index].definition = value;
    setCardDetails(updatedCardDetails);
  };

  useEffect(
    () => {
        console.log(cardDetails);
    }, [cardDetails]
  );


    async function addSetHandler () {
        const userId = '655ba0b013679c0e8c33e9cd';
        const response = await fetch('http://localhost:8000/SetCreation', 
        {
          method: 'POST',
          body: JSON.stringify({
            "userId": userId,
            "title": titleRef.current.value,
            "category": categoryRef.current.value,
            "description": descriptionRef.current.value,
            "flashCards": cardDetails
        }),
          headers: {
            'Content-Type' : 'application/json'
          }
        }
        );
        console.log('response: ', response);
        return response;
      }


    return (
        <div className='w-screen min-h-screen bg-primary-100 flex-column overflow-x-hidden '>
            {/* Main Body aligned center*/}
            <div className='w-[70%] mt-6  border-black  '>
                {/* Input Fields Sec */}
                <div>
                    <div className='flex justify-between mb-5'>
                        <InputField refer={titleRef} heading='Title' placeholder='Title of the Flashcard Set' required/>
                        <InputField refer={categoryRef} heading='Category' placeholder='Enter Category' required />
                    </div>
                    <div className='flex justify-between mb-5'>
                        <InputField refer={descriptionRef} heading='Description' placeholder='Description - optional' />
                        <div className='w-1/6 h-12 mt-10'>
                            <FilledSec handler={addDetailCardHandler}>Add Flashcard</FilledSec>
                        </div>
                    </div>
                </div>
                {/* FlashCard Detail Sec */}
                <div className='mt-7 w-full bg-primary-100 flex-column gap-6'>
                    {Array.from({ length: cardQty }).map((_, index) => (
                        <CardDetail 
                        key={index}
                        onTermChange={(value) => handleTermChange(index, value)}
                        onDefinitionChange={(value) => handleDefinitionChange(index, value)}  
                        />
                    ))}
                </div>
                <div className='w-full my-5 flex items-center justify-end'>                        
                    <div className='w-1/6 h-12'>
                        <FilledSec  handler={ () => {addSetHandler(); navigateHandler(); } } >
                            Create
                        </FilledSec>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetCreation;

