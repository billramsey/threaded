import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import EntryListing from "../EntryListing/EntryListing";
class Entries extends Component {
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
