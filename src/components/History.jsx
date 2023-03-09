import React from 'react'

const History = ({ items }) => {
  return (
    <div className='history'>
      <ul className='history-list'>
        {items.map((item, i) => (
          <li key={i} className='history-list-item'>
            {item.slice(0, 51) + '...'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
