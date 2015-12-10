import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from 'redux/bundles/people';

const People =  React.createClass({
  componentDidMount: function(){
    this.props.fetchPeople();
  },
  getPeople: function() {
    return this.props.people || [];
  },
  renderPeopleRow: function() {
    return this.getPeople().map((person, i) => {
      return (
        <tr key={i}>
          <td>{person.name}</td>
          <td>{person.gender}</td>
          <td>{person.birth_year}</td>
          <td>{person.hair_color}</td>
          <td>{person.height}</td>
          <td>{person.mass}</td>
          <td>{person.skin_color}</td>
        </tr>
      );
    });
  },
  renderPeopleTable: function() {
    return (
      <table>
        {this.renderPeopleRow()}
      </table>
    )
  },
  renderSpinner: function() {
    return <span>Loading...</span>
  },
  render: function() {
    return this.props.isFetching ?
      this.renderSpinner() :
      this.renderPeopleTable();
  }
});


export default connect(
  state => ({
    isFetching: state.people.isFetching,
    isFetched: state.people.isFetched,
    people: state.people.apiResponse.results
  }),
  { fetchPeople }
)(People);
