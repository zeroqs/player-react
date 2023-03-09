import React from 'react'
import arrow from '../assets/icon.svg'
import warn from '../assets/error-input.svg'
import History from './History.jsx'
const Input = ({ isValidUrl, handleUrl, url, isValidStatus, items }) => {
  const [history, setHistory] = React.useState(false)
  return (
    <div className='header__input' onBlur={() => setHistory(false)}>
      <p>Insert the link</p>
      <div className='header__input-icon'>
        <input
          onFocus={() => setHistory(true)}
          onChange={(e) => handleUrl(e.target.value)}
          className={
            isValidStatus ? 'input-error header-input' : 'header-input'
          }
          type='url'
          placeholder='https://'
        />
        {history && Boolean(items.length) ? <History items={items} /> : null}
        <span className={isValidStatus ? 'icon-error' : 'icon-error-hide'}>
          <img src={warn} alt='invalid link' />
        </span>
        <button onClick={() => isValidUrl(url)} className='icon'>
          <img src={arrow} alt='Submit' />
        </button>
      </div>
      {isValidStatus ? (
        <p className={'error-message-input'}>{isValidStatus}</p>
      ) : null}
    </div>
  )
}

export default Input
