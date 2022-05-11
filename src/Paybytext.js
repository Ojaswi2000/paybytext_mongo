import React,{useState, useEffect, useDebugValue} from 'react'
import {FaUser} from 'react-icons/fa'
import {useLocation} from 'react-router-dom'
import './styles.css';

const Paybytext = () => {
const location = useLocation();

const fetchItems = async() => {
  const data = await fetch('http://localhost:5000/api/v1/all-users');
  const response = await data.json();
  console.log(response);
}

useEffect(()=>{
  fetchItems();
},[])

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

      <table>
        <tr>
          <th>Confirmation Number</th>
          <th>Account Number</th>
          <th>Account Name</th>
          <th>Payment Method</th>
        </tr>
        
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

    </div>
  )
}

export default Paybytext
