import React from 'react'
import Preferences from './Preferences'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyAccountInvoices from './components/pages/MyAccountInvoices'
import MyAutomaticPayments from './components/pages/MyAutomaticPayments'
import Wallet from './components/pages/Wallet'
import MyPlanInvoices from './components/pages/MyPlanInvoices'
import './styles.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/MyAutomaticPayments' element={<MyAutomaticPayments />} />
          <Route path='/MyPlanInvoices' element={<MyPlanInvoices />} />
          <Route path='/Wallet' element={<Wallet />} />
          <Route path='/MyAccountInvoices' element={<MyAccountInvoices />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App