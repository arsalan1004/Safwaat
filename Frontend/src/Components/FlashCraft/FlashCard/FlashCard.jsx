// FlashCard.jsx

import React, { useState, useEffect, useRef } from 'react';
import './FlashCard.css';
import FlashCardFace from './FlashCardFace/FlashCardFace';

const FlashCard = (props) => {
  
  //flip functionality
  const [flipped, setFlipped] = useState(false);
  // const [blurred, setBlurred] = useState(true);


  const flip = () => {
    setFlipped(!flipped);
  };


  //swiping functionality

  const cardRef = useRef(null);
  const startPointRef = useRef({ x: 0, y: 0 });
  const offsetXRef = useRef(0);
  const offsetYRef = useRef(0);

  useEffect(() => {
    const swiper = document.querySelector('#swiper');
    const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });

    cardRef.current = document.querySelector(`.card[data-number="${props.number}"]`);

    

    if (cardRef.current) {
        cardRef.current.addEventListener('mousedown', mousedown);
    }

    return () => {
        if (cardRef.current) {
            cardRef.current.removeEventListener('mousedown', mousedown);
        }
    };
}, [props.number]);

const mousedown = (e) => {
  e.stopPropagation();
  const { clientX, clientY } = e;
  startPointRef.current = { x: clientX, y: clientY };

  cardRef.current.style.transition = '';
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

const handleMouseMove = (e) => {
  if (!startPointRef.current) return;
  const { clientX, clientY } = e;
  offsetXRef.current = clientX - startPointRef.current.x;
  offsetYRef.current = clientY - startPointRef.current.y;
  const rotate = offsetXRef.current * 0.06;
  cardRef.current.style.transform = `translate(${offsetXRef.current}px, ${offsetYRef.current}px) rotate(${rotate}deg)`;

  if (Math.abs(offsetXRef.current) > window.innerWidth * 0.3) {
      const direction = offsetXRef.current > 0 ? 1 : -1;
      if (direction === 1) {

          console.log('liked');
      } else {
          console.log('disliked');
      }
      dismiss(direction);
  }
};

const handleMouseUp = () => {
  startPointRef.current = { x: null, y: null };
  document.removeEventListener('mousemove', handleMouseMove);
  cardRef.current.style.transition = 'transform 0.5s';
  cardRef.current.style.transform = '';
};

const dismiss = (direction) => {
  startPointRef.current = { x: null, y: null };
  document.removeEventListener('mouseup', handleMouseUp);
  document.removeEventListener('mousemove', handleMouseMove);
  cardRef.current.style.transition = 'transform 1s';
  cardRef.current.style.transform = `translate(${direction * window.innerWidth}px, ${offsetYRef.current}px) rotate(${90 * direction}deg)`;
  cardRef.current.classList.add('dismissing');

  setTimeout(() => {
      cardRef.current.remove();
      props.onDismiss(props.number, direction); // Call the onDismiss callback with the direction
  }, 1000);


  // if(direction==1){
  //     props.onLike();
  // }else{
  //     props.onDislike();
  // }

};


  return (
    // ${blurred ? 'blurred' : ''}
    <div
      className={`card absolute w-full h-full rounded-[40px] mb-10 cursor-pointer ${flipped ? 'flipped' : ''} `  }
      data-number={props.number} 
      style={{ zIndex: props.zIndex }}
      onMouseDown={mousedown} 
      onDragStart={(e) => e.preventDefault()}
      onClick={flip}
    >
      <div className="h-full w-full text-center relative" id="innerCard">
        <FlashCardFace content={props.front} ids="front" number={props.number}/>
        <FlashCardFace content={props.back} ids="back" number={props.number} color="bg-primary-200" />
      </div>
    </div>
  );
};

export default FlashCard;
