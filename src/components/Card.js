import React from 'react'
import '../styles.css'
import {Panel} from 'rsuite'

const Card = ({account}) => {
  return (
    <Panel className='card' shaded>
        <p style={{marginBottom:"2px"}}>{account.accountName}</p>
        <p>{account.accountNumber}</p>
    </Panel>
  )
}

export default Card