import React from 'react'
import Slider from './Slider.jsx'
import ControlPanel from './Control.jsx'
import { useState, useRef } from 'react'
import song from '../Rick Astley - Never Gonna Give You Up (Official Music Video)_no_vocals_split_by_lalalai.mp4'
import Button from './Button.jsx'
const Player = ({ url, setIsPlayerOpen }) => {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef()
  const audio = audioRef.current

  const onChangeVolume = (e) => {
    setVolume(e.target.value / 100)
    audio.volume = volume
  }
  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    audio.volume = volume

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }
  return (
    <div className='header__input'>
      <button onClick={() => setIsPlayerOpen(false)}>←Back</button>
      <div className='player-container'>
        <Button play={play} isPlaying={isPlaying} />
        <Slider percentage={percentage} onChange={onChange} />
        <audio
          ref={audioRef}
          onTimeUpdate={getCurrDuration}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration.toFixed(2))
          }}
          src={url}></audio>
        <ControlPanel
          currentTime={currentTime}
          volume={volume}
          onChangeVolume={onChangeVolume}
        />
      </div>
    </div>
  )
}

export default Player
