import React,{useState} from 'react'
import AccountSelection from './AccountSelection';
import PaymentSelection from './PaymentSelection';

const PageSelection = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step+1);
    }
    const prevStep = () => {
        setStep(step-1);
    } 
    if(step === 1){
        <AccountSelection />
    }
    if(step === 2){
        <PaymentSelection />
    }
}

export default PageSelection