import React from 'react'

const OwnBlock = () => {
  return (
    <>
      <div className='content-block'>
        <ul className='content-block__list'>
          <li className='content-block__item'>
            <span>OS + apps</span>
            <span>Unix/OSX + docker + nvidia-docker</span>
          </li>
          <li className='content-block__item'>
            <span>CPU</span>
            <span>4 cores or more (e.g. intel core i5)</span>
          </li>
          <li className='content-block__item'>
            <span>Memory</span>
            <span>16 GB RAM</span>
          </li>
        </ul>
      </div>
      <div className='content-block'>
        <ul className='content-block__list'>
          <li className='content-block__item'>
            <span>Free space</span>
            <span>100 GB of free space</span>
          </li>
          <li className='content-block__item'>
            <span>Graphics hardware</span>
            <span>GPU: NVidia only 2Gb+</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default OwnBlock
