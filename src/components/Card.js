import React from 'react'

const Card = ({account}) => {
  return (
    <div>
        <p>{account.accountName}</p>
        <p>{account.accountNumber}</p>
    </div>
  )
}

export default Card