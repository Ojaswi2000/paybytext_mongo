import React,{useState} from 'react'
import {motion} from 'framer-motion'
import {FaHome,FaUser,FaBars} from 'react-icons/fa'
import {MdMessage} from 'react-icons/md'
import {BiAnalyse,BiSearch} from 'react-icons/bi'
import '../styles.css';
import { NavLink } from 'react-router-dom';

const routes = [
  {
    path:"/",
    name:"Preferences",
    icon:<FaHome />
  },
  {
    path: "/MyAutomaticPayments",
    name: "My Automatic Payments",
    icon: <FaUser />,
  },
  {
    path: "/MyPlanInvoices",
    name: "My Plan Invoices",
    icon: <MdMessage />,
  },
  {
    path: "/Wallet",
    name: "Wallet",
    icon: <BiAnalyse />,
  },
]

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='main-container' >
        <motion.div animate={{width: isOpen ? "250px" : "35px"}} className='sidebar' >

          <div className='top_section'>
            {isOpen && <h1 className='logo'>UPS Payments</h1>}
            <div className='bars'>
              <FaBars onClick={toggle}/>
            </div>
          </div>


          <div className='search'>
            <div className='search_icon'>
              <BiSearch />
            </div>
            {isOpen && <input placeholder='Search...' />}
          </div>

          <section className='routes' >
            {routes.map((route) => {
              return <NavLink to={route.path} key={route.name} className='link'>
                    <div className='icon'>{route.icon}</div>
                    <div className='link_text'>{route.name}</div>
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