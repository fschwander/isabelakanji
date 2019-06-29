import './Navigation.scss';
import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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

          <NavbarToggler onClick={this.toggle}/>

          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#Introduction'>Einleitung</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#About'>About</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

