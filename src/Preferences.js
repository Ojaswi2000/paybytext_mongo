import React, { useState } from 'react'
import {Form} from  'rsuite';
import 'rsuite/dist/rsuite.min.css';
import SubmitModal from './components/SubmitModal';
import EmailNotification from './EmailNotification';
import EnablePayByText from './EnablePayByText';
import './styles.css'

const Preferences = () => {
    const clearData={
      name:"",
      userID:"",
      language:"",
      mobileNo:"",
      days:""
    }
    const [formData,setFormData]= useState(clearData);
    const [toggleCheck, setToggleCheck]=useState(false);
    const [invoiceCheck, setInvoiceCheck]=useState(false);

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
              <input type="text"  value={formData.name} onChange={(e)=>{setFormData({...formData, name:e.target.value  })}} />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email-6">
              <Form.ControlLabel className='label'>UserID</Form.ControlLabel>
              <input name="userID" type="text" value={formData.userID} onChange={(e)=>{setFormData({...formData, userID:e.target.value  })}} />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>

            <Form.Group controlId="language-6">
              <Form.ControlLabel className='label'>Preferred language</Form.ControlLabel>
              <select name='language' type="text" value={formData.language} onChange={(e)=>{setFormData({...formData, language:e.target.value  })}} placeholder="Select a language">
                <option>German</option> <option>French</option> <option>English</option>
                <option>Hindi</option> <option>Chinese</option> <option>Russian</option>
                <option>Spanish</option> <option>Arabic</option> <option>Portuguese</option>
                <option>Japanese</option> <option>Swiss</option> <option>Bhutanese</option>
              </select>
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            
            <Form.Group>
                <h4>Pay By Text</h4>
                <input style={{marginRight:"5px"}} size="large" type="checkbox"
                onClick={()=>{
                  setToggleCheck(!toggleCheck);
                }}
                />
                Enable Pay By Text
            </Form.Group>
                {
                  toggleCheck && <EnablePayByText formData={formData} setFormData={setFormData} />
                }


            <Form.Group>
                <h4>Setup PDF Invoice</h4>
                <input style={{marginRight:"5px"}} size="large" type="checkbox"
                onClick={()=>{
                  setInvoiceCheck(!invoiceCheck);
                }}
                />
                Create password for PDF invoice
            </Form.Group>
            {

            }
              <h4>Notifications</h4>
              <p>Notifications will be sent to the userID: {formData.userID}</p>
              <br/>
              <EmailNotification formData={formData} setFormData={setFormData} />

          <Form.Group>
            <SubmitModal formData={formData} />
          </Form.Group>
      
        </Form>
  
        </div>
    </div>
  )
}

export default Preferences