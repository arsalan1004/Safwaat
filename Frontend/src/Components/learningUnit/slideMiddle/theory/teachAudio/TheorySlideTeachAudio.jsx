import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TeachAudioButton from './teachAudioButton';

const TheorySlideTeachAudio = () => {

  const [playing, setPlaying] = useState(false);
  const {title, mainContent, audioOptions, audioUrls} = useSelector(state => state.teachAudioSlideSlice);

  const setPlayingHandler = (value) => {
    setPlaying(value)
    console.log(`SetPlayingTrigger: ${value}`)
  }
  return (
    <div className='flex flex-col gap-y-12 w-[70%] mx-auto text-center font-Itim text-secondary'>
      <div className='text-3xl font-semibold tracking-wider'>{title}</div>
      <div className='text-2xl'>{mainContent}</div>
        <div className='grid grid-cols-3 grid-rows-2 gap-y-8 w-[80%] mx-auto'>
          {
            audioOptions.map((opt, index) => 
              <TeachAudioButton 
                key = {index}
                option = {opt}
                audioUrl = {audioUrls[index]}
                playing = {playing}
                setPlayingHandler = {setPlayingHandler}
              />
            )
          }
        </div>
    </div>
  )
}

export default TheorySlideTeachAudio