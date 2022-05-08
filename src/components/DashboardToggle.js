import React from 'react'
import {Drawer,Button} from 'rsuite'

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
          <Drawer.Title>Dashboard</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          {/* <Paragraph rows={8} /> */}
        </Drawer.Body>
      </Drawer>
  )
}

export default DashboardToggle