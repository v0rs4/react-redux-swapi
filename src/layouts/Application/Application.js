import React from 'react';

export default React.createClass({
  displayName: 'ApplicationLayout',
  render: function() {
    return (
      <div>
        <h1>Star Wars API & React Redux</h1>
        {this.props.children}
      </div>
    );
  }
});
