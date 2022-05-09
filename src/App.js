import React from 'react'
import Preferences from './Preferences'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyAccountInvoices from './components/pages/MyAccountInvoices'
import MyAutomaticPayments from './components/pages/MyAutomaticPayments'
import Wallet from './components/pages/Wallet'
import MyPlanInvoices from './components/pages/MyPlanInvoices'
import './styles.css'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Sidebar>
          <Routes>
            <Route path='/preferences' element={<Preferences />} />
            <Route path='/' element={<Preferences />} />
            <Route path='/MyAutomaticPayments' element={<MyAutomaticPayments />} />
            <Route path='/MyPlanInvoices' element={<MyPlanInvoices />} />
            <Route path='/Wallet' element={<Wallet />} />
            <Route path='/MyAccountInvoices' element={<MyAccountInvoices />} />
          </Routes>
        </Sidebar>
      </Router>
      
    </div>
  )
}

export default App