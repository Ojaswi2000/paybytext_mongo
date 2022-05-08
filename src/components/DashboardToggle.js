import React from 'react'
import {Drawer,Button} from 'rsuite'
import AdminIcon from '@rsuite/icons/Admin';
import MemberIcon from '@rsuite/icons/Member';
import EmailFillIcon from '@rsuite/icons/EmailFill';
import GlobalIcon from '@rsuite/icons/Global';
import MobileIcon from '@rsuite/icons/Mobile';
import PhoneFillIcon from '@rsuite/icons/PhoneFill';
import '../styles.css';

const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

 const DashboardToggle = ({size,placement,open,setOpen,formData}) => {
  
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
          <h4><AdminIcon className='icon'/>Your Profile</h4>
          <hr/>
          <div className='profile'>
            <h5><MemberIcon className='icon'/>Name:</h5>
            <h5><EmailFillIcon className='icon' />UserID:</h5>
            <h5><GlobalIcon className='icon' />Language Preferred:</h5>
            <h5><MobileIcon className='icon' />Mobile Number:</h5>
            <h5><PhoneFillIcon className='icon'/>Days prior to invoice</h5>
          </div>
        </Drawer.Body>
      </Drawer>
  )
}

export default DashboardToggle