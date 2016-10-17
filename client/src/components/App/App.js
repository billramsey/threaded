import React, { Component } from 'react';
//import { Col, Row, Grid, Navbar, Jumbotron, Button, PageHeader, FormGroup, FormControl, NavItem, Nav} from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
//import Main from '../Main/Main';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Navigation />
      {this.props.children}
      </div>
    );
  }
}

export default App;
