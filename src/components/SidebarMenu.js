import React,{useState} from 'react'
import {FaAngleDown,FaAngleRight} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import '../styles.css'

const SidebarMenu = ({route}) => {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
    <div className='menu'>
        <div className='menu_item'>
            <div className='icon'>{route.icon}</div>
            <div className='link_text'>{route.name}</div>
        </div>
        <div>
            {isOpen ? 
            <FaAngleDown className='icon' onClick={toggle} /> : 
            <FaAngleRight className='icon' onClick={toggle}/>}
        </div>
    </div>
        
        {isOpen &&
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
        }
        </div>
    
  )
}

export default SidebarMenu