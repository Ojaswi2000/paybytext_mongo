import React from 'react'
import {FaUser} from 'react-icons/fa'
import {useLocation} from 'react-router-dom'
import './styles.css';

const Paybytext = () => {
  const location = useLocation();

  return (
    <div className='pay_container'>
      <div className='head'>
        <h3>Billing Center</h3>
        <div className='user'>
          <FaUser />
          <h6>Name</h6>
        </div>
      </div>
      <hr/>
      
      <div>
        <h5>Dashboard {">"} Pay By Text</h5>
      </div>
      <br/>
      <h3 style={{borderBottom:"4px solid cyan"}} >Pay By Text</h3>
    </div>
  )
}

export default Paybytext