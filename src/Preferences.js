import React, { useState } from 'react'

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
            <form>
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
                    <input type="text" name='' />
                </label>
            </form>
        </div>
    </div>
  )
}

export default Preferences