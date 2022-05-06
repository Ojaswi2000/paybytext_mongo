import React, { useState } from 'react'
import {Form,Button, Input, ButtonToolbar} from  'rsuite';
import 'rsuite/dist/rsuite.min.css';

import './styles.css'

const Preferences = () => {
    const [name, setName]= useState("");
    const [userID, setUserID] = useState("");
  return (
    <div className='container'>
        <p>My Dashboard {">"} My Preferences</p>
        <h2>My Preferences</h2>
        <i>* Indicates Required Field</i>
        <br/>
        <div className='preference'>
        <Form layout="horizontal">
            <Form.Group controlId="name-6">
              <Form.ControlLabel className='label'>Name</Form.ControlLabel>
              <Input name="name" value={name}  />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email-6">
              <Form.ControlLabel className='label'>UserID</Form.ControlLabel>
              <Input name="email" type="email" />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-6">
              <Form.ControlLabel className='label'>Password</Form.ControlLabel>
              <Input name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </Form.Group>
        </Form>
  
        </div>
    </div>
  )
}

export default Preferences