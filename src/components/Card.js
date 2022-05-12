import React from 'react'
import '../styles.css'
import {Panel} from 'rsuite'

const Card = ({account}) => {
  return (
    <Panel className='card' shaded>
      <div>
        <input style={{margin:"0",padding:"1.5px"}} type="radio" />
      </div>
      <div>
          <p style={{marginBottom:"2px",fontWeight:"bold"}}>{account.accountName}</p>
          <p>{account.accountNumber}</p>
      </div>
    </Panel>
  )
}

export default Card