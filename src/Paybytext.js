import React,{useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
//import {BiSearch} from 'react-icons/bi'
import {useLocation} from 'react-router-dom'
import {Button} from 'rsuite'
import './styles.css';

const Paybytext = () => {
const location = useLocation();

const [accountData, setAccountData] = useState([]);

const fetchItems = async() => {
  try {
      await fetch('http://localhost:5000/api/v1/all-users')
      .then( response => response.json())
      .then((data) => {
        setAccountData(data.messageBody);
        
      })
  } catch (error) {
    console.log(error);
  }
  
}
console.log(accountData);

useEffect(()=>{
  fetchItems();
},[])

  // payment modal
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => (!isOpen);

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
      <h3 style={{borderBottom:"4px solid cyan",marginBottom: "50px"}} >Pay By Text</h3>

      <div className='create'>
        <input />
        <Button color='green' appearance='primary' onClick={toggle}>
        Create Pay By Text</Button>
      </div>

      <table>
        <tr>
          <th>Confirmation Number</th>
          <th>Account Number</th>
          <th>Account Name</th>
          <th>Payment Method</th>
        </tr>
        {accountData.map((account) => {
          return(
          <tr key={account._id}>
          <td>{account._id}</td>
          <td>{account.accountNumber}</td>
          <td>{account.accountName}</td>
          <td>{account.paymentType}</td>
        </tr>
          )
        })}

        
      </table>

    </div>
  )
}

export default Paybytext
