import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import EntryListing from "../EntryListing/EntryListing";
//import './App.css';
class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
          {this.props.entries.map((entry) => (
            <EntryListing {...entry} key={entry.id}/>
          ))}
          </tbody>
        </Table>
    );
  }
}

export default Entries;
