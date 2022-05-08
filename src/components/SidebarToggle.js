import React from 'react'
import {Nav, Navbar, Dropdown, Sidebar, Sidenav, Container} from 'rsuite'

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };
  
  const iconStyles = {
    width: 56,
    height: 56,
    padding: 18,
    lineHeight: '56px',
    textAlign: 'center'
  };
  
  const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Dropdown
              placement="topStart"
              trigger="click"
              renderTitle={children => {
                return <Cog style={iconStyles} />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
  
          <Nav pullRight>
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
              {expand ? <AngleLeft /> : <AngleRight />}
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  

const SidebarToggle = () => {
  return (
    <div>

    </div>
  )
}

export default SidebarToggle