import React, { Component } from 'react';
import { render } from 'react-dom';

import { ExpandoWrapper } from './src/ExpandoWrapper';
import './style.css';

interface IItem {
  title: any;
  content: any;
}


const expandodItem: IItem[] = [
  {
    title: 'String',
    content: 'Item 1: string content'
  }, {
    title: <div> A Component </div>,
    content: <div>Item 2: Component</div>
  }, {
    title: 123,
    content: 123
  }, {
    title: 'item 4: Object => ' + new Date().toDateString(),
    content: Date()
  }, {
    title: 'List',
    content: <ul><li>1</li><li>2</li><li>3</li></ul>
  }, {
    title: undefined,
    content: undefined
  },
]


class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <ExpandoWrapper singleSelect={true} data={expandodItem} />
    );
  }
}

render(<App />, document.getElementById('root'));
