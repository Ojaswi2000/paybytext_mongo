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
    </div>
  )
}

export default Paybytext