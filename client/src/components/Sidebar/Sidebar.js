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
        <LinkContainer key="{1}" to="/overview">
          <NavItem eventKey={1}>Overview</NavItem>
        </LinkContainer>
        <LinkContainer key="{2}" to="/users">
          <NavItem eventKey={2}>Users</NavItem>
        </LinkContainer>  
        <LinkContainer key="{3}" to="/reports">  
          <NavItem eventKey={3}>Reports</NavItem>
        </LinkContainer>  
        </Nav>

        <Nav bsClass="nav nav-sidebar">
          <NavItem eventKey={1} disabled>Topics: </NavItem>
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
