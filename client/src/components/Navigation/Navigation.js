import React, { Component } from 'react';
import {Navbar, FormGroup, FormControl, NavItem, Nav} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
    <Navbar inverse fluid fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Threaded</a>  
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullLeft>
        <NavItem href="#">Administration</NavItem>
        <NavItem href="#">Settings</NavItem>
        <NavItem href="#">Profile</NavItem>
        <NavItem href="#">Help</NavItem>
      </Nav>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search..."/>
          </FormGroup>
        </Navbar.Form>
    </Navbar>
    );
  }
}

export default Navigation;