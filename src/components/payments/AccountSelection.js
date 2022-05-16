import React, { useState } from 'react'
import {Modal,Button} from 'rsuite'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import '../../styles.css'
import Card from '../Card'
import PaymentSelection from './PaymentSelection'

const AccountSelection = ({isOpen,setIsOpen,handleClose,handleOpen,accountData,step,nextStep}) => {
    const [open, setOpen] =useState(false);
    const onHandleOpen = () => {
        setOpen(true);
        /* nextStep(); */
    }
    const onHandleClose = () => setOpen(false);

    const [selectedCardId, setSelectedCardId] = useState(null);
    
    const handleCardClick = (id) => {
        setSelectedCardId(id);
        console.log(id);
    }

    
  return (

    <Modal open={isOpen} onClose={handleClose} overflow={false} style={{textAlign:"center"}}>
        
        <Modal.Header>
            <Modal.Title style={{fontSize:"30px"}}>Create Pay By Text</Modal.Title><hr/>
        </Modal.Header>

        <Modal.Body>
            <h4 style={{marginBottom:"10px"}}>Account Selection</h4>
            <i style={{marginBottom:"10px"}}>*Indicates required field</i>
            <h6 style={{marginBottom:"10px"}}>Select an account to create Pay By Text</h6>
            <div className='card_container'>
                {
                    accountData.map((account) => {
                        return <Card 
                        key={account._id} 
                        account={account} 
                        id={account._id}
                        selectedCardId= {selectedCardId}
                        handleCardClick={handleCardClick}
                        />
                    })
                }
            </div>
            <hr/>
            <div>
            <p style=
            {{border:"2px solid orange",
            borderRadius:"5px",
            width:"100%",
            textAlign:"center",
            marginRight: "50%"
            }}>
                <BsFillInfoCircleFill style={{margin:"0 5px",fontSize:"23px",color:"orange"}} />Pay by Text does not support plans. If an account with an existing pay by text is enrolled into a plan, it will be canceled</p>
            </div>
            <br/>
            <div>
                <Button appearance='primary' color='cyan' onClick={onHandleOpen}>Next</Button>
            </div>

        </Modal.Body>
    </Modal>
  )
}

export default AccountSelection