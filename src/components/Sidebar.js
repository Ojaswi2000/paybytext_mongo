import React from 'react'
import {motion} from 'framer-motion'
import '../styles.css';

const Sidebar = () => {
  return (
    <div className='main-container' >
        <motion.div animate={{width:"200px"}} className='sidebar' >

        </motion.div>
    </div>
  )
}

export default Sidebar