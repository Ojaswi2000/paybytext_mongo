import React,{useState} from 'react'
import '../styles.css'
import {Panel} from 'rsuite'

const Card = ({account}) => {
  const [check,setCheck] = useState(false);
  const [acc, setAcc] = useState(null);

  const onChanged = () => {
    setAcc(account);
    setCheck(!check);
  }

  console.log(acc);
  return (
    <Panel className='card' shaded>
      <div>
        <input style={{margin:"0",padding:"1.5px"}} 
          type="radio" 
          name='account'
          value={account}
          checked={acc === account}
          onChange={onChanged}
        />
      </div>
      <div>
          <p style={{marginBottom:"2px",fontWeight:"bold"}}>{account.accountName}</p>
          <p>{account.accountNumber}</p>
      </div>
    </Panel>
  )
}

export default Card