import React, { useState } from 'react'
import '../../styles.css'
import {Button} from 'rsuite'
import Confirmation from './Confirmation';

const PaymentSelection = ({selectedCardId}) => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => setCheck(!check);

  const [num, setNum] = useState(0);
  const handleNum = () => {
    setNum(1);
    
  }
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
            {
              selectedCardId.paymentMethod === undefined ? <p style={{fontWeight:"bold"}}>Selected account has no wallet Id</p> :
              <select>
              <option>{selectedCardId.paymentMethod.walletId}</option>
            </select>
            }
          </div>
          <div style={{float:"right"}}>
            <Button appearance='primary' color='green'>Add Payment Method</Button>
          </div>
        </div>
        <br/><br/><br/><br/><br/>

        <div>
          <input 
          type="checkbox"
          onChange={handleCheck}
          />
          I authorize pay by text from the account that I have selected.This authorization is valid until I cancel it through the Billing Center or by calling my UPS customer service number.
        </div>

        <Button appearance='primary' color='cyan' onClick={handleNum}>Submit</Button>

        {!check && num===1 && 
        <p>Please select the authorization settings</p>
        }

        {
          selectedCardId && num === 1 && check &&
          <Confirmation selectedCardId={selectedCardId}  />
        }
    </div>
    
  )
}

export default PaymentSelection