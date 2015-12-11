import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople, fetchPeopleGet } from 'redux/bundles/people';
// import classnames from 'classnames';
import PeopleTable from './PeopleTable';

const People =  React.createClass({
  componentDidMount: function(){
    this.props.fetchPeople();
  },
  getPeople: function() {
    return this.props.people || [];
  },
  changePage: function(url) {
    url && this.props.fetchPeople(url);
  },
  _renderSpinner: function() {
    return <span>Loading...</span>
  },
  _renderTable: function() {
    return <PeopleTable
      nextUrl={this.props.nextUrl}
      prevUrl={this.props.prevUrl}
      changePage={this.changePage}
      people={this.getPeople()} />;
  },
  render: function() {
    return this.props.isFetching ?
      this._renderSpinner() :
      this._renderTable();
  }
});


export default connect(
  state => ({
    isFetching: state.people.isFetching,
    isFetched: state.people.isFetched,
    nextUrl: state.people.apiResponse.next,
    prevUrl: state.people.apiResponse.previous,
    people: state.people.apiResponse.results
  }),
  { fetchPeople, fetchPeopleGet }
)(People);
