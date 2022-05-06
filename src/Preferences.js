import React, { useState } from 'react'
import {Form,Button, Input, ButtonToolbar, Checkbox} from  'rsuite';
import 'rsuite/dist/rsuite.min.css';

import './styles.css'

const Preferences = () => {
    const [name, setName]= useState("");
    const [userID, setUserID] = useState("");
    const [language, setLanguage]=useState("");
    const [check, setCheck]=useState(false);
    const handleCheck = (value,checked) =>{
        if(checked){
            <h2>Notification Alert !</h2>
        }
    }

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
              <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email-6">
              <Form.ControlLabel className='label'>UserID</Form.ControlLabel>
              <input name="userID" type="text" value={userID} onChange={(e)=>{setUserID(e.target.value)}} />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>

            <Form.Group controlId="language-6">
              <Form.ControlLabel className='label'>Preferred language</Form.ControlLabel>
              <select name='language' type="text" value={language} onChange={(e)=>{setLanguage(e.target.value)}} placeholder="Select a language">
                <option>German</option> <option>French</option> <option>English</option>
                <option>Hindi</option> <option>Chinese</option> <option>Russian</option>
                <option>Spanish</option> <option>Arabic</option> <option>Portuguese</option>
                <option>Japanese</option> <option>Swiss</option> <option>Bhutanese</option>
              </select>
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            
            <Form.Group>
                <h4>Pay By Text</h4>
                <input style={{marginRight:"5px"}} size="large" type="checkbox" value={check} onChange={e=>setCheck(true)} />
                Enable Pay By Text
            </Form.Group>
        
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </Form.Group>
        </Form>
  {}
        </div>
    </div>
  )
}

export default Preferences