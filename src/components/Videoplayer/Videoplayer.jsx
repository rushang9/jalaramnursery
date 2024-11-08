import React, { useRef } from 'react'
import './Videoplayer.css'
import video_1 from '../../assets/video.mp4.mp4'

const Videoplayer = ({playState,setPlaystate}) => {

  const player = useRef (null);

  const closeplayer = (e) => {
    if(e.target === player.current){
      setPlaystate(false);
    }
  }
  return (
    <div className={`video-player ${playState ? '': 'hide'}`} ref={player} onClick={closeplayer}>
      <video src={video_1} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
