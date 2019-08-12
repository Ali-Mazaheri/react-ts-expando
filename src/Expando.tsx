import React, { Component, Fragment } from 'react';

export class Expando extends Component<any, any> {

  static others: Expando[] = [];
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    Expando.others.push(this);
  }
  render() {

    let { title, content, singleSelect } = this.props;

    return <div className="dyaCell">
      <div className="title"

        onClick={(e) => {
          if (singleSelect) {
            Expando.others.forEach((item) => {
              if (item.state.expanded) {
                item.setState({ expanded: false });
              }
            });
          }
          this.setState({ expanded: !this.state.expanded });
        }}>
        <span >
          {title}
        </span>
        <span className="unselectable" style={{ fontSize: 15 }} >  {this.state.expanded ? '\u25B4' : '\u25BE'}
        </span>
      </div>

      <div className="content" style={{ display: this.state.expanded ? '' : 'none' }}>
        {content}
      </div>
    </div>
  }
}

(Expando as any).defaultProps = {
  singleSelect: true,
  title: 'no title tet ...',
  content: 'no content yet ...'
}