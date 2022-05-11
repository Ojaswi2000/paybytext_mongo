import React from 'react'
import {Modal} from 'rsuite'

const AccountSelection = ({isOpen,setIsOpen,handleClose,handleOpen}) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
        <Modal.Header>
            <Modal.Title>Create Pay By Text</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            Account Selection
        </Modal.Body>
    </Modal>
  )
}

export default AccountSelection