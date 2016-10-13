import React, { Component } from 'react';
import FolderBreadCrumb from './FolderBreadCrumb';
import {Treebeard, decorators} from 'react-treebeard';

import styles from './treebeardStyles';

decorators.Header = (props) => {
    const style = props.style;
    return (
        <div style={style.base}>
            <div style={style.title}>
                {props.node.name}
            </div>
        </div>
    );
};
class Folders extends Component {
  constructor(props) {
    super(props);

    this.onToggle = this.onToggle.bind(this);


    this.state = {
      folders: {
        name: 'root',
        toggled: true,
        children: [
            {
                name: 'parent',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'loading parent',
                loading: true,
                children: []
            },
            {
                name: 'parent',
                children: [
                    {
                        name: 'nested parent',
                        children: [
                            { name: 'nested child 1' },
                            { name: 'nested child 2' }
                        ]
                    }
                ]
            }
        ]
      }
    }
  }
  onToggle(node, toggled){
      if(this.state.cursor){this.state.cursor.active = false;}
      node.active = true;
      if(node.children){ node.toggled = toggled; }
      this.setState({ cursor: node });
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
    console.log('styles:', styles);
  }

  render() {
    return (
      <div>
      <FolderBreadCrumb />
            <Treebeard
                data={this.state.folders}
                onToggle={this.onToggle}
                decorators={decorators}
                style={styles}
            />
      </div>
    );
  }
}

export default Folders;