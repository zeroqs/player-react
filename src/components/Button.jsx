import React from 'react'

function Button({ play, isPlaying }) {
  return (
    <div className='btn-container'>
      <button
        onClick={play}
        className={isPlaying ? 'btn-stop' : 'btn-play'}></button>
    </div>
  )
}
export default Button
