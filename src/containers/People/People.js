import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from 'redux/bundles/people';
import PeopleTable from './PeopleTable';

const People = React.createClass({
  propTypes: {
    fetchPeople: React.PropTypes.func,
    isFetching: React.PropTypes.bool,
    isFetched: React.PropTypes.bool,
    nextUrl: React.PropTypes.string,
    prevUrl: React.PropTypes.string,
    people: React.PropTypes.array
  },
  componentDidMount: () => {
    this.props.fetchPeople();
  },
  getPeople: () => {
    return this.props.people || [];
  },
  changePage: (url) => {
    if (url !== undefined) this.props.fetchPeople(url);
  },
  _renderSpinner: () => {
    return <span>Loading...</span>;
  },
  _renderTable: () => {
    return (
      <PeopleTable
        nextUrl={this.props.nextUrl}
        prevUrl={this.props.prevUrl}
        changePage={this.changePage}
        people={this.getPeople()} />
    );
  },
  render: () => {
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
  { fetchPeople }
)(People);
