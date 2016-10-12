import React, { Component } from 'react';
//import { Col, Row, Grid, Navbar, Jumbotron, Button, PageHeader, FormGroup, FormControl, NavItem, Nav} from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: 'nothing'
    }
  }
  componentDidMount() {
    fetch(`/api/test`, {
      accept: 'application/json',
    }).then((response) => {
      console.log(response);
      return response.json().then((data) => {
        console.log(data);
        this.setState({resp: data.test})
      });
    });
  }
  render() {
    return (
      <div>
      <Navigation />
      <Main />
      </div>
    );
  }
}

export default App;
