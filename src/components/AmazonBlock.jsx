import React from 'react'

const AmazonBlock = () => {
  return (
    <>
      <div className='content-block'>
        <ul className='content-block__list'>
          <li className='content-block__item'>
            <span>Instance</span>
            <span>g4dn.xlarge</span>
          </li>
          <li className='content-block__item'>
            <span>CPU</span>
            <span>1</span>
          </li>
          <li className='content-block__item'>
            <span>vCPUs</span>
            <span>4</span>
          </li>
        </ul>
      </div>
      <div className='content-block'>
        <ul className='content-block__list'>
          <li className='content-block__item'>
            <span>Memory</span>
            <span>16 GB RAM</span>
          </li>
          <li className='content-block__item'>
            <span>Storage</span>
            <span>125 GB</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AmazonBlock
