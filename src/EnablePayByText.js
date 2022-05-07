import React from 'react'
import { Notification } from 'rsuite'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './styles.css'

const EnablePayByText = () => {
    const Message = React.forwardRef(({ type, ...rest }, ref) => {
        return (
          <Notification ref={ref} {...rest} type={type} header={type}>
            <p>By opting into pay by text, your mobile service provider may charge you additional fees that are outside of UPS control</p>
          </Notification>
        );
      });
  return (
    <div>
    <Message type="info" />
    <hr />
    <p style={{color:"green"}}>How does Pay By text Work?</p>

    </div>
  )
}

export default EnablePayByText