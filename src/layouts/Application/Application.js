import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  displayName: 'ApplicationLayout',
  render: function() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to='/'>People</Link></li>
            <li><Link to='/films'>Films</Link></li>
          </ul>
        </nav>
        <h1>Star Wars API & React Redux</h1>
        {this.props.children}
      </div>
    );
  }
});
