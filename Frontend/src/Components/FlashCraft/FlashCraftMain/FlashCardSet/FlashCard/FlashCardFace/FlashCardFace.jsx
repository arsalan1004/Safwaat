import React from 'react'
import flipIcon from '../../../../../../Assets/flip.svg'
import '../FlashCard.css';

function FlashCardFace(props) {
  return (
    <div className={`h-full w-full absolute bg-primary-100 overflow-hidden ${props.color} `} id={props.ids}>
          
      <div className="h-1/6 flex justify-center items-center">
        <div className="h-[30px] w-[30px] rounded-full bg-secondary text-primary-100 flex justify-center items-center">
          {props.number + 1}
        </div>
      </div>

      <div className="text-secondary text-2xl h-4/6 flex justify-center items-center px-5">
        {props.content}
      </div>

      <div className="h-1/6 flex justify-center items-center pb-3">
        <p className="text-secondary opacity-60 text-base mr-8">
          Tap the card to flip it
        </p>
        <img src={flipIcon} alt="flipIcon" className="h-[30px] w-[30px]" />
      </div>

  </div>
  )
}

export default FlashCardFace