import React from 'react';
import { Link } from 'react-router';

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">People</Link></li>
          <li><Link to="/films">Films</Link></li>
        </ul>
      </div>
    );
  }
}

SideBar.displayName = 'SideBar';
