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
          <h4><AdminIcon className='d_icon'/>Your Profile</h4>
          <hr/>
          <div className='profile'>
            <h5><MemberIcon className='d_icon'/>Name:<br/><span className='detail'>{formData.name}</span></h5><br/>
            <h5><EmailFillIcon className='d_icon' />UserID:<br/><span className='detail'>{formData.userID}</span></h5><br/>
            <h5><GlobalIcon className='d_icon' />Language Preferred:<br/><span className='detail'>{formData.language}</span></h5><br/>
            <h5><MobileIcon className='d_icon' />Mobile Number:<br/><span className='detail'>{formData.mobileNo}</span></h5><br/>
            <h5><PhoneFillIcon className='d_icon'/>Days prior to invoice:<br/><span className='detail'>{formData.days}</span></h5><br/>
            <hr/>
          </div>
        </Drawer.Body>
      </Drawer>
  )
}

export default DashboardToggle