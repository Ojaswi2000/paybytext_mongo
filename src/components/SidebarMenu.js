import React from 'react'
import {FaAngleDown} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import '../styles.css'

const SidebarMenu = ({route}) => {
  return (
      <div>
    <div className='menu'>
        <div className='menu_item'>
            <div className='icon'>{route.icon}</div>
            <div className='link_text'>{route.name}</div>
        </div>
        <div>
            <FaAngleDown />
        </div>
    </div>
        
        <div className='menu_container'>
        {
            route.subRoutes.map((subRoute, index) => {
                return <NavLink to={subRoute.path} key={index} className='link'>
                <div className='icon'>{subRoute.icon}</div>
                <div className='link_text'>{subRoute.name}</div>
            </NavLink>
            })
        }
        </div>
        </div>
    
  )
}

export default SidebarMenu