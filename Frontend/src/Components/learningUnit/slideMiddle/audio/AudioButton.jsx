import React, { useRef, useState, useEffect } from 'react'

const AudioButton = (props) => {
  // const [playing, setPlaying] = useState(false);
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
    <button onClick={() => playAudioHandler()}>
      {props.children}
      <audio ref={audioRef} src={props.src} />
    </button>
  )
}

export default AudioButton