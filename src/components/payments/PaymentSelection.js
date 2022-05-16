import React from 'react'
import {Modal} from 'rsuite'
import '../../styles.css'

const PaymentSelection = ({step,setStep}) => {
  return (
    <div>
      <h3>Payment Method</h3>
      <table className='tab'>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Account Number</th>
            <th>Bank Direct Deposit Only</th>
          </tr>
        </thead>
      </table>
    </div>
    
  )
}

export default PaymentSelection