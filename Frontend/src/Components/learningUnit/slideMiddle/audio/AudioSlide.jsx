import React, { useEffect, useState } from 'react'
import audioSpeaker from '../../../../Assets/Icons/audioSpeaker.svg'
import AudioOption from './AudioOption';
import { useSelector } from 'react-redux';
import AudioButton from './AudioButton';


const AudioSlide = () => {

  const {selectedOption, audioQuestion, audioOptions, questionAudioUrl, optionAudioUrl} = useSelector(state => state.audioSlideSlice);
  console.log(optionAudioUrl)

  const [playing, setPlaying] = useState(false);

  const setPlayingHandler = (value) => {
    setPlaying(value)
    console.log(`SetPlayingTrigger: ${value}`)
  }

  useEffect(() => {
    return () => {
      console.log("CLEANUP RUN")
      setPlaying(false);
    }
  }, [])
  return (

    <div className='flex flex-col gap-8  min-w-[550px]'>
      <h1 className='flex text-[30px] justify-center items-center font-Itim text-secondary'>Select the wrong Pronunciation</h1>
      <AudioButton
        src={questionAudioUrl}
        playing = {playing}
        setPlayingHandler = {setPlayingHandler}
      >
        <div className='text-primary-100 bg-secondary text-2xl w-[60%] mx-auto flex justify-between items-center px-8 py-2 rounded-[10px] font-Itim'>
          <img src={audioSpeaker} className='w-[32px] h-[32px]' alt='audio-speaker' />
          <h2>{audioQuestion}</h2>
          {/* <audio>
            <source src={questionAudioUrl || ""} />
          </audio> */}
        </div>
      </AudioButton>

      <div className='w-[50%] mx-auto grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-2 min-w-fit'>
        {
          audioOptions.map((option, index) => 
            <AudioOption 
              key={index}
              index={index}
              option={option}
              url={optionAudioUrl?.[index]}
              isSelected={index == selectedOption ? true : false}
              setPlayingHandler = {setPlayingHandler}
              playing = {playing}
            />
          )
        }
        {/* <div className='text-secondary w-[30%] mx-auto text-center text-2xl px-6 py-4 border-[3px] border-accent rounded-[10px]'>A</div>
        <div className='text-secondary w-[30%] mx-auto text-center text-2xl px-6 py-4 border-2 border-secondary rounded-[10px]'>B</div>
        <div className='text-secondary w-[30%] mx-auto text-center text-2xl px-6 py-4 border-2 border-secondary rounded-[10px]'>C</div>
        <div className='text-secondary w-[30%] mx-auto text-center text-2xl px-6 py-4 border-2 border-secondary rounded-[10px]'>D</div> */}
      </div>
      {/* <div className='flex flex-col justify-center items-center font-Itim text-secondary mb-3'>
        <h1 className='text-[30px]'>Select the wrong Pronunciation</h1>
        <h2 className='text-2xl'>{mcqQuestion}</h2>
      </div>
      <div className='w-[80%] mx-auto flex flex-col gap-4'>
        {
          mcqOptions.map((option, index) => 
            <McqOption 
              key={index} 
              option={option} 
              index={index} 
              // setSelectedOption={setSelectedOption}
              isSelected = {index == selectedOption ? true : false}
            />
          )
        }
      </div> */}
    </div>

    // <div className='mt-30 flex justify-center items-center'>
    //   <audio controls id='audio'>
    //     <source target="" id='source' src={"https://firebasestorage.googleapis.com/v0/b/audiostorage-46fa0.appspot.com/o/testAudio.mp3?alt=media&token=265a00ea-1aa3-49b8-9fab-13450f3c9b1c"} type='audio/mpeg' />
    //   </audio>

    // </div>
    
  )


// <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734888609&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/trending-music-pk" title="Trending Music" target="_blank" style="color: #cccccc; text-decoration: none;">Trending Music</a> · <a href="https://soundcloud.com/trending-music-pk/sets/soul" title="Soul" target="_blank" style="color: #cccccc; text-decoration: none;">Soul</a></div>



}

export default AudioSlide