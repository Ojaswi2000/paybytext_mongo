import React from 'react'
import {Modal} from 'rsuite'
import '../../styles.css'

const AccountSelection = ({isOpen,setIsOpen,handleClose,handleOpen,accountData}) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
        <Modal.Header>
            <Modal.Title style={{fontSize:"30px"}}>Create Pay By Text</Modal.Title><hr/>
        </Modal.Header>

        <Modal.Body>
            <h4 style={{marginBottom:"10px"}}>Account Selection</h4>
            <i style={{marginBottom:"10px"}}>*Indicates required field</i>
            <h6 style={{marginBottom:"10px"}}>Select an account to create Pay By Text</h6>
            <div className='card_container'>

            </div>
        </Modal.Body>
    </Modal>
  )
}

export default AccountSelection