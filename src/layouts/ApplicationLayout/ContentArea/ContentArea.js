import React from 'react';
import './content-area.scss';

export default class ContentArea extends React.Component {
  render() {
    return (
      <div className="content-area">
        {this.props.children}
      </div>
    );
  }
}

ContentArea.displayName = 'ContentArea';
ContentArea.propTypes = {
  children: React.PropTypes.object
};
