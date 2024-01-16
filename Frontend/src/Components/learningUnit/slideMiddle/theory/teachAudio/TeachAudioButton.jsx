import React, { useEffect, useRef } from 'react'

const TeachAudioButton = (props) => {
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnded);
      }
    };
  }, [audioRef]);

  const handleAudioEnded = () => {
    props.setPlayingHandler(false);
    console.log('Audio finished playing!');
  };

  const playAudioHandler = () => {
    if (!props.playing) {
      audioRef.current.play();
      props.setPlayingHandler(true);
    }
  }

  return (
    <button
        onClick={() => playAudioHandler()} 
        className='text-secondary w-[40%] mx-auto text-center text-xl px-2 py-2 border-[3px] border-secondary rounded-[10px] cursor-pointer'
        disabled = {!props.audioUrl && true }
      >
      {props.option}
      <audio ref={audioRef} src={props.audioUrl} />
    </button>
  )
}

export default TeachAudioButton