import React from 'react';
import { Link } from 'react-router';

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div className="container fadeIn animated">
        <h1>Star Wars API & React Redux</h1>
        <nav>
          <ul className="nav nav-pills">
            <li><Link to="/">People</Link></li>
            <li><Link to="/films">Films</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

ApplicationLayout.displayName = 'ApplicationLayout';
ApplicationLayout.propTypes = {
  children: React.PropTypes.array
};
