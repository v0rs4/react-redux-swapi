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
  renderTableHead: function(){
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth day</th>
          <th>Hair color</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Skin color</th>
        </tr>
      </thead>
    );
  },
  renderTableBody: function() {
    return <tbody>{this.renderPeopleRow()}</tbody>;
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
      <table className="table fadeIn animated">
        {this.renderTableHead()}
        {this.renderTableBody()}
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
