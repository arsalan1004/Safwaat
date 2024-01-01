// FlashCraft.jsx

import React, {useState} from 'react';
import FlashCard from './FlashCard/FlashCard';
import Summary from './Summary/Summary';
import './FlashCardSet.css';
import applause from '../../../../Assets/Gifs/Applause.gif'
import congratulation from '../../../../Assets/Gifs/Congratulation.gif'

const FlashCardSet = () => {
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


  const [LearntCards, setLearntCards] = useState([]);
  const [stillLearningCards, setStillLearningCards] = useState([]);

  const handleCardDismiss = (number, direction) => {
    if (direction === 1) {
        setLearntCards((prevLearntCards) => [...prevLearntCards, number]);
    } else {
        setStillLearningCards((prevStillLearningCards) => [...prevStillLearningCards, number]);
    }
  };

  return (

    <>
    
        {
          LearntCards.length + stillLearningCards.length == data.length ? 

              (

                stillLearningCards.length == 0 ?

                <Summary img={congratulation} text1={'WOW!! You know your stuff.'} text2={'Keep it up'} noLearnt={LearntCards.length} noStillLearning={stillLearningCards.length} buttonText={'HomePage'} status={'done'}/> 

                :

                <Summary img={applause} text1={'You are doing great!'} text2={'Keep focusing on the tough terms.'} noLearnt={LearntCards.length} noStillLearning={stillLearningCards.length} buttonText={'Keep Reviewing'} status={'still'}/> 


              )
                
                
                :

          <div className="h-screen w-screen bg-flashcraftBg bg-no-repeat bg-cover bg-center pt-[1%] overflow-hidden">

            <div className="relative w-3/5 h-[87%] mx-auto my-0 rounded-[40px] perspective-1000" id='swiper'>
              {data.map((obj, index) => (
                <FlashCard key={index} front={obj.front} back={obj.back} 
                    zIndex={data.length - index} number={index} onDismiss={handleCardDismiss}/>
              ))}
            </div>
      
      
            <div className="w-3/5 mx-auto mt-6 flex justify-between items-center">
              <p className="inline-block text-primary-100 text-shadow-lg">Swipe Left to mark as Still Learning</p>
              <p className="inline-block text-primary-100 text-shadow-lg">Swipe Right to mark as Already Learnt</p>
            </div>
      
          </div>

        }


    </>

 
  );
};

export default FlashCardSet;
