import React from 'react'
import {Modal} from 'rsuite'
import '../../styles.css'

const PaymentSelection = ({selectedCardId}) => {
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
        <tbody>
          <tr>
            <td>{selectedCardId.accountName}</td>
            <td>{selectedCardId.accountNumber}</td>
            <td>
              <select placeholder='Y/N'>
                <option>Yes</option>
                <option>no</option>
              </select>
            </td>
          </tr>
        </tbody>
        </table>
    </div>
    
  )
}

export default PaymentSelection