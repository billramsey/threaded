import React, { Component } from 'react';
import { Col, Row, Grid} from 'react-bootstrap';
import Sidebar from "../Sidebar/Sidebar";
import Entries from "../Entries/Entries";
import EntryNavBar from "../EntryNavBar/EntryNavBar";
//import './App.css';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: 'nothing'
    }
  }
  render() {
    return (
    <Grid fluid>
      <Row>
        <Col sm={3} md={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col sm={9} md={10} mdOffset={2} smOffset={3} className="main">
          <h2>Forum Name</h2>
          <EntryNavBar />
          <Entries />
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default Main;
