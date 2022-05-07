import React from 'react'
import { Notification,Checkbox } from 'rsuite'
import './styles.css'

const EmailNotification = ({formData,setFormData}) => {
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
    
    </div>
  )
}

export default EmailNotification