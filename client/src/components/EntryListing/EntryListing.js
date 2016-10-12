import React, { Component } from 'react';
class EntryListing extends Component {
  //{id:'1', title:'Lorem',modifiedDate:'03/24/2016 3:00',creationDate:'3/12/2015 4:56', replyCount:2},
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.replyCount}</td>
        <td>{this.props.modifiedDate}</td>
        <td>{this.props.creationDate}</td>
      </tr>
    );
  }
}

export default EntryListing;
