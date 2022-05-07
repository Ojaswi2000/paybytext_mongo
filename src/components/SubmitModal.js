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
          <p>Hello <span style={{fontWeight:"bold"}}>{formData.name}</span> !!
          <hr/>We have saved your changes. Your saved changes are shown as follows:<br/>
          Name :<span style={{fontWeight:"bold"}}>{formData.name}</span> <br/>
          UserID :<span style={{fontWeight:"bold"}}>{formData.userID}</span> <br/>
          Language :<span style={{fontWeight:"bold"}}>{formData.language}</span> <br/>
          Mobile Number :<span style={{fontWeight:"bold"}}>{formData.mobileNo}</span> <br/>
          You have {formData.days} prior to your invoice date.
          </p>:

          <p>Please enter your your relevant information</p>
          
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