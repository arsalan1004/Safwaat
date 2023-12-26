// FlashCraft.jsx

import React, {useState} from 'react';
import FlashCard from './FlashCard/FlashCard';
import './FlashCraft.css';

const FlashCraft = () => {
  const data = [
    {
      front: 'How to apply Tafkheem ?',
      back: 'Elevate the posterior tongue to the roof of the upper soft palate',
    },
    {
      front: 'How to apply Tafkheem 2 ?',
      back: 'Elevate the posterior tongue to the roof of the upper soft palate2',
    },
    {
      front: 'How to apply Tafkheem 3?',
      back: 'Elevate the posterior tongue to the roof of the upper soft palate3',
    },
    
  ];


  const [likedCards, setLikedCards] = useState([]);
  const [dislikedCards, setDislikedCards] = useState([]);

  const handleCardDismiss = (number, direction) => {
    if (direction === 1) {
        setLikedCards((prevLikedCards) => [...prevLikedCards, number]);
    } else {
        setDislikedCards((prevDislikedCards) => [...prevDislikedCards, number]);
    }
  };

  return (
    <div className="h-screen bg-flashcraftBg bg-no-repeat bg-cover bg-center pt-[1%] overflow-hidden">

      <div className="relative w-3/5 h-[87%] mx-auto my-0 rounded-[40px] perspective-1000" id='swiper'>
        {data.map((obj, index) => (
          <FlashCard key={index} front={obj.front} back={obj.back} 
              zIndex={data.length - index} number={index}  onDismiss={handleCardDismiss}/>
        ))}
      </div>


      <div className="w-3/5 mx-auto mt-6 flex justify-between items-center">
        <p className="inline-block text-primary-100 text-shadow-lg">Swipe Left to mark as Still Learning</p>
        <p className="inline-block text-primary-100 text-shadow-lg">Swipe Right to mark as Already Learnt</p>
      </div>

    </div>
  );
};

export default FlashCraft;
