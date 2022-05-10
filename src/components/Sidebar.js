import React,{useState} from 'react'
import {motion} from 'framer-motion'
import {FaHome,FaUser,FaBars,FaUsers,FaAmazonPay} from 'react-icons/fa'
import {AiFillAccountBook} from 'react-icons/ai'
import {MdMessage, MdAdminPanelSettings} from 'react-icons/md'
import {BiAnalyse,BiSearch} from 'react-icons/bi'
import {SiPlanet} from 'react-icons/si'
import '../styles.css';
import { NavLink } from 'react-router-dom';
import SidebarMenu from './SidebarMenu'

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
  {
    path: "/Administration",
    name: "Administration",
    icon: <MdAdminPanelSettings />,
    subRoutes:[
    {
      path: "/Administration/my_accounts",
      name: "My Accounts",
      icon: <AiFillAccountBook />,
    },
    {
      path: "/Administration/myplans",
      name: "My Plans",
      icon: <SiPlanet />,
    },
    {
      path: "/Administration/manage_users",
      name: "Manage Users",
      icon: <FaUsers />,
    },
    {
      path: "/Administration/paybytext",
      name: "Pay By Text",
      icon: <FaAmazonPay />,
    }
  ]
  },
]

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='main-container' >
        <motion.div animate={{width: isOpen ? "300px" : "50px"}} className='sidebar' >

          <div className='top_section'>
            {isOpen && <h1 className='logo'>UPS Payments</h1>}
            <div className='bars'>
              <FaBars onClick={toggle} className='icon'/>
            </div>
          </div>


          <div className='search'>
            <div className='search_icon'>
              <BiSearch className='icon' />
            </div>
            {isOpen && <input placeholder='Search...' />}
          </div>

          <section className='routes' >
            {routes.map((route) => {

              if(route.subRoutes){                  // for subroutes
                return <SidebarMenu route={route} key={route.name} isOpen={isOpen}
                  setIsOpen={setIsOpen} toggle={toggle} />
              }

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