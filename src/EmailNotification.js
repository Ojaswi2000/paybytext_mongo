import React from 'react'
import { Notification } from 'rsuite'
import './styles.css'

const EmailNotification = () => {
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
    </div>
  )
}

export default EmailNotification