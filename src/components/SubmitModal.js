import React,{useState} from 'react'
import {Button, ButtonToolbar,Modal} from 'rsuite'
import { useNavigate } from "react-router-dom";


const SubmitModal = ({formData}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();            //send formData to Paybytext route

    const goToPaybytext = (e) => {
      navigate("/Administration/paybytext", {
        state:{
          name:formData.name,
        },
        });
    }

  return (
  <div>
    <ButtonToolbar style={{display:"flex"}}>
        <Button onClick={handleOpen} style={{marginRight:"100px",display:"flex"}} appearance="primary">Save</Button>
        <Button appearance="default">Cancel</Button>
    </ButtonToolbar>

    <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title><p style={{fontSize:"30px",fontWeight:"bold"}}>Changes Saved</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
          formData.name && formData.userID ?
          <p>Hello <span style={{fontWeight:"bold"}}>{formData.name}</span> !!
          We have saved your changes. Your saved changes are shown as follows:<br/>
          Name :<span style={{fontWeight:"bold"}}>{formData.name}</span> <br/>
          UserID :<span style={{fontWeight:"bold"}}>{formData.userID}</span> <br/>
          Language :<span style={{fontWeight:"bold"}}>{formData.language}</span> <br/>
          Mobile Number :<span style={{fontWeight:"bold"}}>{formData.mobileNo}</span> <br/>
          You have {formData.days} prior to your invoice date.
          Please 
          <a onClick={goToPaybytext} href='/Administration/paybytext'>Click here</a> to be redirected to create Pay By Text.
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