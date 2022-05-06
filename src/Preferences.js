import React, { useState } from 'react'
import './styles.css'

const Preferences = () => {
    const [name, setName]= useState("");
    const [userID, setUserID] = useState("");
  return (
    <div>
        <p>My Dashboard {">"} My Preferences</p>
        <h2>My Preferences</h2>
        <i>* Indicates Required Field</i>
        <br/>
        <div className='preference'>
        
  
        </div>
    </div>
  )
}

export default Preferences