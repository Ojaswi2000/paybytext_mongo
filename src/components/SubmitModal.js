import React,{useState} from 'react'
import {Button, ButtonToolbar,Modal} from 'rsuite'

const SubmitModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <ButtonToolbar style={{display:"flex"}}>
        <Button style={{marginRight:"100px",display:"flex"}} appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
    </ButtonToolbar>
  )
}

export default SubmitModal