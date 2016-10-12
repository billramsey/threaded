import React, { Component } from 'react';
import {Navbar, FormGroup, FormControl, NavDropdown, NavItem, MenuItem, Nav} from 'react-bootstrap';


class EntryNavBar extends Component {
  render() {
    return (
    <Navbar inverse fluid>
      <Nav pullLeft>
      <NavItem eventKey={1} href="#">Add Post</NavItem>
      <NavDropdown eventKey={2} title="Actions" id="basic-nav-dropdown">
        <MenuItem eventKey={2.1}>Add Folder</MenuItem>
        <MenuItem eventKey={2.2}>Another action</MenuItem>
      </NavDropdown>
        <NavItem href="#">Settings</NavItem>
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

export default EntryNavBar;