import React, { useEffect, useRef, useState } from 'react'
const Volume = ({ onChangeVolume, volume }) => {
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const percentage = volume * 100
  const rangeRef = useRef()
  const thumbRef = useRef()

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * percentage * -1
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage
    setPosition(percentage)
    setMarginLeft(centerThumb)
    setProgressBarWidth(centerProgressBar)
  }, [percentage])
  return (
    <div className='volume'>
      <div
        className='progress-bar-volume'
        style={{
          width: `${progressBarWidth}px`,
        }}></div>
      <div
        className='thumb-volume'
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}></div>
      <input
        type='range'
        step='0.01'
        className='range-volume'
        value={position}
        ref={rangeRef}
        onChange={onChangeVolume}
      />
    </div>
  )
}

export default Volume
