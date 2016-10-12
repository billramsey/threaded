import React, { Component } from 'react';
//import { Col, Row, Grid, Navbar, Jumbotron, Button, PageHeader, FormGroup, FormControl, NavItem, Nav} from 'react-bootstrap';
//import './App.css';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: 'nothing'
    }
  }
  render() {
    return (
      <div>
        <ul className="nav nav-sidebar">
          <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Reports</a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href="">Nav item</a></li>
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
          <li><a href="">More navigation</a></li>
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
