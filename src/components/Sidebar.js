import React from 'react'
import {motion} from 'framer-motion'
import '../styles.css';

const Sidebar = ({children}) => {
  return (
    <div className='main-container' >
        <motion.div animate={{width:"200px"}} className='sidebar' ></motion.div>
        <main>
          {children}
        </main>
    </div>
  )
}

export default Sidebar