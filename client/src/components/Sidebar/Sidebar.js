import React, { Component } from 'react';
//import { LinkContainer } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
//import { Col, Row, Grid, Navbar, Jumbotron, Button, PageHeader, FormGroup, FormControl, NavItem, Nav} from 'react-bootstrap';
//import './App.css';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicFolders:[]
    }
  }

  loadTopics(folderId) {
    fetch(`/api/getTopics`, {
      accept: 'application/json',
    }).then((response) => {
      console.log(response);
      return response.json().then((folders) => {
        console.log('topicFolders', folders, 'l', folders.length);
        this.setState({topicFolders: folders})
      });
    });
  }
  componentDidMount() {
    this.loadTopics();
  }
  render() {
    return (
      <div>
        <Nav bsClass="nav nav-sidebar">
          <NavItem eventKey={1} href="/overview">Overview</NavItem>
          <NavItem eventKey={2} href="/users">Users</NavItem>
          <NavItem eventKey={3} href="/reports">Reports</NavItem>
        </Nav>

        <Nav bsClass="nav nav-sidebar" activeKey={1}>
          <NavItem eventKey={1} >Topics: </NavItem>
          { this.state.topicFolders.map((folder, index) => {
             return (
                <LinkContainer key={folder.folderId} to={`/folders/${folder.folderId}`}>
                  <NavItem eventKey={folder.folderId}>
                    {folder.title}
                  </NavItem>
                </LinkContainer>
              );
            })
          }
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
