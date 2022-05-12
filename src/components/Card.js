import React from 'react'
import '../styles.css'
import {Panel} from 'rsuite'

const Card = ({account}) => {
  return (
    <Panel className='card' shaded>
      <div>
          <p style={{marginBottom:"2px",fontWeight:"bold"}}>{account.accountName}</p>
          <p>{account.accountNumber}</p>
      </div>
    </Panel>
  )
}

export default Card