import React from 'react';

export default React.createClass({
  displayName: 'ApplicationLayout',
  render: function() {
    return <div>{this.props.children}</div>
  }
});
