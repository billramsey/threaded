import React, { Component } from 'react';
//import { Col, Row, Grid} from 'react-bootstrap';
import Entries from "../Entries/Entries";
import Folders from "../Folders/Folders";

import EntryNavBar from "../EntryNavBar/EntryNavBar";


//import './App.css';
class EntryPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFolder: 1,
      currentFolderTitle: 'Forum Name',
      entries: [{id:'1', title:'Lorem',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:2},
          {id:'2', title:'ipsum',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:0},
          {id:'3', title:'dolor',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:2},
          {id:'4', title:'sit',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:3}],
      folders: []
    }
  }
  componentDidMount() {
    // fetch(`/api/test`, {
    //   accept: 'application/json',
    // }).then((response) => {
    //   console.log(response);
    //   return response.json().then((data) => {
    //     console.log(data);
    //     this.setState({resp: data.test})
    //   });
    // });
  }
  render() {
    return (
      <div>
        <h2>{this.state.currentFolderTitle}</h2>
        <Folders />
        <EntryNavBar />
        <Entries entries={this.state.entries} />
      </div>
    );
  }
}

export default EntryPanel;
