import React, { Component } from 'react';
import { Link } from 'react-router';
import FolderBreadCrumb from './FolderBreadCrumb';
import {Treebeard, decorators} from 'react-treebeard';

import styles from './treebeardStyles';

decorators.Header = (props) => {
    const style = props.style;
    return (
        <div style={style.base}>
            <div style={style.title}>
            <Link to={`/folders/${props.node.folderId}`}>{props.node.name} </Link>
            </div>
        </div>
    );
};

class Folders extends Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
    }
  }
  onToggle(node, toggled){
      if(this.state.cursor){ this.setState({cursor:{active:false}});}
      node.active = true;
      if(node.children){ node.toggled = toggled; }
      this.setState({ cursor: node });
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log('getting different folders', nextProps.subfolders)
  //   if (this.props.subfolders !== nextProps.subfolders) {
  //     console.log('folders changed ');

  //   } else {
  //     console.log('folders did not change')
  //   }
  //   //console.log('nextProps', nextProps);
  // }
  render() {
    return (
      <div>
      <FolderBreadCrumb />
      <Treebeard
          data={this.props.subfolders}
          onToggle={this.onToggle}
          decorators={decorators}
          style={styles}
      />
      </div>
    );
  }
}

export default Folders;