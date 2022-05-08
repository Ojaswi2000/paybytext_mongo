import React from 'react'
import {Drawer,Button} from 'rsuite'
import AdminIcon from '@rsuite/icons/Admin';
import MemberIcon from '@rsuite/icons/Member';
import '../styles.css';

const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

 const DashboardToggle = ({size,placement,open,setOpen}) => {
  
  return (
    <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title><h3>My Dashboard</h3></Drawer.Title>
          <Drawer.Actions>
            {/* <Button onClick={() => setOpen(false)}>Cancel</Button> */}
            <Button onClick={() => setOpen(false)} color="red" appearance="primary">
              Close
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <h4><AdminIcon color='blue' style={{marginRight:"5px"}}/>Your Profile</h4>
          <hr/>
          <div className='profile'>
            <h5><MemberIcon color='blue' style={{marginRight:"5px"}}/>Name:</h5>
            <h5>UserID:</h5>
            <h5>Language Preferred:</h5>
            <h5>Mobile Number:</h5>
            <h5>Days prior to invoice:</h5>
          </div>
        </Drawer.Body>
      </Drawer>
  )
}

export default DashboardToggle