import React from 'react'
import '../../styles.css'


const Confirmation = ({selectedCardId}) => {
  return (
    <div style={{marginTop:"30px"}}>
        <h4 style={{borderBotton:"2px solid cyan"}}>Confirmation Screen</h4>
        <div className='confirm'>
            <div style={{borderBottom: "1px solid grey"}}>
                <h6>Confirmation Number:</h6>
                <p>{selectedCardId._id}</p>
            </div>
            <div style={{borderBottom: "1px solid grey"}}>
                <h6>Account Number:</h6>
                <p>{selectedCardId.accountNumber}</p>
            </div>
            <div style={{borderBottom: "1px solid grey"}}>
                <h6>Account Name:</h6>
                <p>{selectedCardId.accountName}</p>
            </div>
            <div style={{borderBottom: "1px solid grey"}}>
                <h6>Payment Method:</h6>
                {
                    selectedCardId.paymentMethod.walletId === undefined ?
                    <p>This account has no wallet ID</p>:
                    <p>{selectedCardId.paymentMethod.walletId}</p>
                }
            </div>
        </div>
    </div>
  )
}

export default Confirmation
