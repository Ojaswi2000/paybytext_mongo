import React from 'react'
import { Notification,Form } from 'rsuite'
import './styles.css'

const EnablePayByText = ({formData,setFormData}) => {
    const Message = React.forwardRef(({ type, ...rest }, ref) => {
        return (
          <Notification ref={ref} {...rest} type={type} header={type}>
            <p>By opting into pay by text, your mobile service provider may charge you additional fees that are outside of UPS control</p>
          </Notification>
        );
      });
      console.log(formData);
  return (
    <div>
    <Message type="info" />
    <hr />
    <p style={{color:"green"}}>How does Pay By text Work?</p>
    <hr/>
    <Form.Group controlId="mobilenumber-6">
        <Form.ControlLabel className='label'>Mobile Number</Form.ControlLabel>
        <input
            placeholder="Enter phone number"
            value={formData.mobileNo}
            onChange={(e)=>{setFormData({...formData, mobileNo: e.target.value})}}/>
    </Form.Group>
    </div>
  )
}

export default EnablePayByText