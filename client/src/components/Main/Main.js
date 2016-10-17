import React, { Component } from 'react';
import { Col, Row, Grid} from 'react-bootstrap';
import Sidebar from "../Sidebar/Sidebar";
//import EntryPanel from "../EntryPanel/EntryPanel"
//import './App.css';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: 'nothing'
    }
  }
  componentDidMount() {

  }
  //          <EntryPanel />
  render() {
    return (
    <Grid fluid>
      <Row>
        <Col sm={3} md={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col sm={9} md={10} mdOffset={2} smOffset={3} className="main">
          {this.props.children}
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default Main;
