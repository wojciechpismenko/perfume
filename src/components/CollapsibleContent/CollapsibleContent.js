import React from 'react';

import './CollapsibleContent.scss';

export default class CollapsibleContent extends React.Component {
  state = {
    isActive: false,
  }

  activeFn = () => {
    this.state.isActive === false ? this.setState({ isActive: true }) : this.setState({ isActive: false });
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className="CollapsibleContent">
        <h3 onClick={this.activeFn}>
          {title}
        </h3>
        {this.state.isActive && <div className="CollapsibleContent-content">{children}</div>}
      </div>
    );
  }
};

