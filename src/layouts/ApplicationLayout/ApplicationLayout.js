import React from 'react';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import './application-layout.scss';

export default class ApplicationLayout extends React.Component {
  getStyles() {
    if (typeof window === 'object') {
      return { minHeight: window.innerHeight };
    }
    return {};
  }

  render() {
    return (
      <div className="application-layout" style={this.getStyles()}>
        <div className="main-container">
          <div className="left-sidebar-container">
            <Sidebar/>
          </div>
          <div className="content-container">
            <ContentArea>
              <h3>Star Wars API & React Redux</h3>
              {this.props.children}
            </ContentArea>
          </div>
        </div>
      </div>
    );
  }
}

ApplicationLayout.displayName = 'ApplicationLayout';
ApplicationLayout.propTypes = {
  children: React.PropTypes.object
};
