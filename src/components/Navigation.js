import './Navigation.scss';
import * as React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className='Navigation'>
        <Navbar expand='md' light fixed='top'>
          <NavbarBrand href='/'>Yoga Isabel Akanji</NavbarBrand>

          <div className={`navbar-toggler ${this.state.isOpen ? 'open' : 'collapsed'}`}
               onClick={this.toggle}>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </div>

          <Collapse isOpen={this.state.isOpen} navbar>

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
}

