import React from 'react'
import '../styles.css'

const Card = ({account}) => {
  return (
    <div className='card'>
        <p>{account.accountName}</p>
        <p>{account.accountNumber}</p>
    </div>
  )
}

export default Card