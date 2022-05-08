import React from 'react'
import SidebarToggle from './components/SidebarToggle'
import Preferences from './Preferences'
import './styles.css'

function App() {
  return (
    <div className='App'>
      <SidebarToggle />
      <Preferences />
    </div>
  )
}

export default App