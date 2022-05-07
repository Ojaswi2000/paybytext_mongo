import React,{useState} from 'react'
import { Notification,Checkbox, Button,ButtonToolbar,Modal } from 'rsuite'
import './styles.css'

const EmailNotification = ({formData}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const Message = React.forwardRef(({ type, ...rest }, ref) => {
        return (
          <Notification ref={ref} {...rest} type={type} header={type}>
            <p>To change your email address, you will need to update the email address in your UPS profile.It may take upto 24 hours for any email changes to be reflected in the Billing Center </p>
          </Notification>
        );
      });
  return (
    <div>
    <Message type="info" />
    <hr />
    <Checkbox style={{display:"flex"}}>When my invoice is ready for viewing</Checkbox>
    <Checkbox style={{display:"flex"}}>{formData.days} days prior to invoice due date</Checkbox>
    <Checkbox style={{display:"flex"}}>When my invoice is ready for viewing</Checkbox>
    <br/>
    <div className="modal-container">
      <ButtonToolbar>
        <Button style={{marginLeft:"150px"}} onClick={handleOpen} color='cyan' appearance='primary'> Notify Me</Button>
      </ButtonToolbar>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Pay By Text Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
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
    <hr/>
    </div>
  )
}

export default EmailNotification