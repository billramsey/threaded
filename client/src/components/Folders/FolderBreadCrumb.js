import React, { Component } from 'react';
import { Breadcrumb} from 'react-bootstrap';

//import './App.css';
class Folders extends Component {
  // constructor(props) {
  //   super(props);
  // }
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
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href='http://getbootstrap.com/components/#breadcrumbs'>
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Data
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Folders;