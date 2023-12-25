import React, { useState } from 'react';
import flipIcon from '../../../Assets/flip.svg';
import './FlashCard.css';
import FlashCardFace from './FlashCardFace/FlashCardFace';

const FlashCard = () => {
  const data = {
    front: 'How to apply Tafkheem ?',
    back: 'Elevate the posterior tongue to the roof of the upper soft palate',
  };

  const [rotation, setRotation] = useState(0);

  const flip = () => {
    setRotation(rotation + 180);

    const card = document.querySelector('#innerCard');
    card.style.transform = `rotateY(${rotation}deg)`;

  }

  return (

<div className="h-screen bg-flashcraftBg bg-no-repeat bg-cover bg-center pt-[1%] overflow-hidden">
    
    <div className="w-3/5 h-[87%] mx-auto my-0 cursor-pointer perspective-1000"
         onClick={flip}> 
         {/* flashcard */}
        
        <div className="h-full w-full text-center relative" id='innerCard'>


          <FlashCardFace content={data.front} ids='front' />
          <FlashCardFace content={data.back} ids='back' color='bg-primary-200' />


        </div>

    </div>

    <div className='w-3/5 mx-auto mt-6 flex justify-between items-center'>
        <p className='inline-block text-primary-100 text-shadow-lg'>Swipe Left to mark as Still Learning</p>
        <p className='inline-block text-primary-100 text-shadow-lg' >Swipe Right to mark as Already Learnt</p>
    </div>



</div>

  );
};

export default FlashCard;
