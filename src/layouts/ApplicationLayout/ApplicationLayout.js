import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import './application-layout.scss';

const mapStateToProps = () => ({});
const actionCreators = { pushState };

export class ApplicationLayout extends React.Component {
  static propTypes = {
    pushState: React.PropTypes.func,
    children: React.PropTypes.object
  }

  getSelectOptions() {
    return [
      { label: 'Films', value: '/films' },
      { label: 'People', value: '/' }
    ];
  }

  selectChangeHandler(value) {
    this.props.pushState(null, value);
  }


  render() {
    return (
      <div>
        <div className="left-sidebar">
          <ul>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">Films</a>
            </li>
            <li>
              <a href="#">Planets</a>
            </li>
            <li>
              <a href="#">Starships</a>
            </li>
            <li>
              <a href="#">Species</a>
            </li>
            <li>
              <a href="#">Vehicles</a>
            </li>
          </ul>
        </div>
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ApplicationLayout);
