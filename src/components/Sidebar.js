import React from 'react'
import {motion} from 'framer-motion'
import {FaHome} from 'react-icons/fa'
import '../styles.css';
import { NavLink } from 'react-router-dom';

const routes = [
  {
    path:"/",
    name:"Preferences",
    icon:<FaHome />
  }
]

const Sidebar = ({children}) => {
  return (
    <div className='main-container' >
        <motion.div animate={{width:"200px"}} className='sidebar' >

          <section className='routes' >
            {routes.map((route) => {
              return <NavLink to={route.path} key={route.name}>
                    <div className='icon'>
                      {route.icon}
                    </div>
                </NavLink>
            })}
          </section>

        </motion.div>
        <main>
          {children}
        </main>
    </div>
  )
}

export default Sidebar