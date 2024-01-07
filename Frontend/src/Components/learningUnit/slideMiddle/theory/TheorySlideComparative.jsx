import React from 'react'
import TextCell from './TextCell'
import { useSelector } from 'react-redux'

const TheorySlideComparative = () => {

  const {heading, columnOne, columnTwo} = useSelector(state => state.theoryComparativeSlideSlice);


  const content = [
    "When letters with the characteristic of Jahr are pronounced, the flow of breath stops at the articulation point that strengthens the reliance of the letter at its articulation point.",
    "When letters with the characteristic of Hams are pronounced, there is a flow of breath that weakens the reliance of the letter at its articulation point.",
    "It includes 19 words. Other than those in Hams.",
    "It includes 10 words. These are grouped as سقط فحثه شخس"
  ]

  
  return (
    <div className='mb-5'>
      <div className=' text-3xl flex justify-center items-center font-itim text-secondary mb-8'>
        <h1>{heading}</h1>
      </div>
      <div className='flex flex-col justify-between items-center gap-8 w-[70%] mx-auto'>
        <div className='flex justify-between'>
          <TextCell content={columnOne[0]} type={"filled"} />
          <TextCell content={columnTwo[0]} type={"filled"} />
          {/* {
            content.map((text,index) => <TextCell content={text} type={index % 4 < 2 ? "filled" : "outline"}/>)
          } */}
        </div>
        <div className='flex justify-between items-center'>
          <TextCell content={columnOne[1]} type={"outline"} />
          <TextCell content={columnTwo[1]} type={"outline"} />
        </div>
      </div>
    </div>
  )
}

export default TheorySlideComparative