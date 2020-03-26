import './Navigation.scss';
import * as React from 'react';
import {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='Navigation'>
      <Navbar expand='md' light fixed='top'>
        <NavbarBrand href='/'>Yoga Isabel Akanji</NavbarBrand>

        <div className={`navbar-toggler ${isOpen ? 'open' : 'collapsed'}`}
             onClick={toggle}>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </div>

        <Collapse isOpen={isOpen} navbar>

          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='#Introduction'>Hatha Yoga</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#Events'>Angebot & Preise</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#SignUp'>Anmelden</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

