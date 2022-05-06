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
        <div>
            <form className='form-content'>
                <label>
                    Name
                    <input type="text" name="name" value={name} 
                    onChange={(e)=>{
                        setName(e.target.value);
                        console.log(name);
                    }} />
                </label>

                <label>
                    User ID
                    <input type="text" name="userID" value={userID}
                    onChange={(e)=>{
                        setUserID(e.target.value);
                        console.log(userID);
                    }}
                    />
                </label>
            </form>
        </div>
    </div>
  )
}

export default Preferences