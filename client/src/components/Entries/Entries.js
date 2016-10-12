import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import EntryListing from "../EntryListing/EntryListing";
//import './App.css';
class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [{id:'1', title:'Lorem',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:2},
                {id:'2', title:'ipsum',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:0},
                {id:'3', title:'dolor',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:2},
                {id:'4', title:'sit',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:3}]
    }
  }
  render() {
    return (
      <Table responsive striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Replies</th>
              <th>Modified Date</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
          {this.state.entries.map((entry) => (
            <EntryListing {...entry} key={entry.id}/>
          ))}
          </tbody>
        </Table>
    );
  }
}

export default Entries;
