import React,{useState} from 'react'
import {Button, ButtonToolbar,Modal} from 'rsuite'

const SubmitModal = ({formData}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
  <div>
    <ButtonToolbar style={{display:"flex"}}>
        <Button onClick={handleOpen} style={{marginRight:"100px",display:"flex"}} appearance="primary">Save</Button>
        <Button appearance="default">Cancel</Button>
    </ButtonToolbar>

    <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title><h3>Changes Saved</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
          formData.name && formData.userID ?
          <p>Hello {formData.name} !!
          The notifications for the pay by text will be sent to your userID: <span style={{fontWeight:"bold"}}>{formData.userID}</span>. 
          You have {formData.days} prior to your invoice date.
          </p>:

          <p>Please enter your name and userID</p>
          
        }

          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    
  </div>
  )
}

export default SubmitModal