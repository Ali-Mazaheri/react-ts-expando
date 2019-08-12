import React, { Component, Fragment } from 'react';
import { Expando } from './Expando';

export class ExpandoWrapper extends Component<any, any> {
  static defaultProps = {
    data: []
  }

  render() {
    let { data, singleSelect } = this.props;
    return data.map((x, index) => <Expando singleSelect={singleSelect} key={'ex' + index} title={x.title} content={x.content} />);
  }
}