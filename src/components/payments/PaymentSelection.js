import React from 'react'
import '../../styles.css'
import {Button} from 'rsuite'

const PaymentSelection = ({selectedCardId}) => {
  return (
    <div>
      <h3>Payment Method</h3>
      <hr/>
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
        <i>Indicates required field</i>

        <div className='payment2'>
          <div style={{float:"left"}}>
            <p style={{color:"orange"}}>My Wallet*</p>
            <select>
              <option>{selectedCardId.paymentMethod.walletId}</option>
            </select>
          </div>
          <div style={{float:"right"}}>
            <Button appearance='primary' color='green'>Add Payment Method</Button>
          </div>
        </div>
    </div>
    
  )
}

export default PaymentSelection