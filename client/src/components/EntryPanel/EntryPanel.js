import React, { Component } from 'react';
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
      subfolders: []
    }
  }
  //Check for folder change.
  componentWillReceiveProps(nextProps) {
    if (this.props.params.folderId !== nextProps.params.folderId) {
      this.loadFolders(nextProps.params.folderId);
    }
  }
  loadFolders(folderId) {
    fetch(`/api/getFolders/${this.props.params.folderId}`, {
      accept: 'application/json',
    }).then((response) => {
      return response.json().then((folders) => {
        this.setState({subfolders: folders})
      });
    });
  }
  componentDidMount() {
    this.loadFolders(this.state.folderId);
  }
  render() {
    return (
      <div>
        <h2>{this.state.currentFolderTitle}</h2>
        <Folders subfolders={this.state.subfolders} />
        <EntryNavBar />
        <Entries entries={this.state.entries} />
      </div>
    );
  }
}

export default EntryPanel;
