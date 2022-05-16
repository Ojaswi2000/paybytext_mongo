import React from 'react'
import {Modal} from 'rsuite'

const PaymentSelection = ({step,setStep}) => {
  return (
    <div>
      <Modal>
        <Modal.Header>
            <Modal.Title>
                Create Pay By Text
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            Payment Selection
        </Modal.Body>
    </Modal>
    </div>
    
  )
}

export default PaymentSelection