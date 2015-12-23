import React from 'react';
import { Link } from 'react-router';
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
          <div className="logo">
            <i className="swi-rebel"></i>
            <span>SWAPI</span>
            <span>React / Redux</span>
          </div>
          <ul>
            <li>
              <Link to="/">
                <i className="swi-people"></i>
                <span>People</span>
              </Link>
            </li>
            <li>
              <Link to="/films">
                <i className="swi-video"></i>
                Films
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="swi-globe"></i>
                Planets
              </a>
            </li>
            <li>
              <a href="#">
                <i className="swi-tie-fighter"></i>
                Starships
              </a>
            </li>
            <li>
              <a href="#">
                <i className="swi-people"></i>
                Species
              </a>
            </li>
            <li>
              <a href="#">
                <i className="swi-vehicle"></i>
                Vehicles
              </a>
            </li>
          </ul>
        </div>
        <div className="main-area">
          <div className="navbar">
            <a href="#" className="hide-btn">Hide</a>
          </div>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ApplicationLayout);
