// SetCreation.js

import React, { useState, useEffect } from 'react';
import InputField from './inputField';
import FilledSec from '../../../../UI/Button/FilledSec';
import CardDetail from './CardDetail';

const SetCreation = () => {
    const [cardQty, setCardQty] = useState(2);

    const addDetailCardHandler = () => {
        setCardQty((prevCardQty) => prevCardQty + 1);
    };



    return (
        <div className='w-screen min-h-screen bg-primary-100 flex-column overflow-x-hidden '>
            {/* Main Body aligned center*/}
            <div className='w-[70%] mt-6  border-black  '>
                {/* Input Fields Sec */}
                <div>
                    <div className='flex justify-between mb-5'>
                        <InputField heading='Title' placeholder='Title of the Flashcard Set' />
                        <InputField heading='Category' placeholder='Enter Category' />
                    </div>
                    <div className='flex justify-between mb-5'>
                        <InputField heading='Description' placeholder='Description - optional' />
                        <div className='w-1/6 h-12 mt-10'>
                            <FilledSec handler={addDetailCardHandler}>Add Flashcard</FilledSec>
                        </div>
                    </div>
                </div>
                {/* FlashCard Detail Sec */}
                <div className='mt-7 w-full bg-primary-100 flex-column gap-6'>
                    {Array.from({ length: cardQty }).map((_, index) => (
                        <CardDetail key={index} />
                    ))}
                </div>
                <div className='w-full my-5 flex items-center justify-end'>                        
                    <div className='w-1/6 h-12'>
                        <FilledSec  >
                            Create
                        </FilledSec>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetCreation;
