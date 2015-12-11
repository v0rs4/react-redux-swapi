import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople, fetchPeopleGet } from 'redux/bundles/people';
import classnames from 'classnames';

const People =  React.createClass({
  componentDidMount: function(){
    this.props.fetchPeople();
  },
  getPeople: function() {
    return this.props.people || [];
  },
  changePage: function(url) {
    return e => {
      e.preventDefault();
      url && this.props.fetchPeople(url);
    }
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
  renderPeopleTablePaginationNext: function() {
    const { nextUrl } = this.props;
    const classes = classnames('btn pull-right', {'btn-primary': !!nextUrl, 'btn-default': !nextUrl} );
    return <a href="" className={classes} onClick={this.changePage(nextUrl)}>Next</a>
  },
  renderPeopleTablePaginationPrev: function() {
    const { prevUrl } = this.props;
    const classes = classnames('btn', {'btn-primary': !!prevUrl, 'btn-default': !prevUrl} );
    return <a href="" className={classes} onClick={this.changePage(prevUrl)}>Previous</a>
  },
  renderPeopleTablePagination: function(){
    return (
      <div>
        {this.renderPeopleTablePaginationNext()}
        {this.renderPeopleTablePaginationPrev()}
      </div>
    );
  },
  renderPeopleTable: function() {
    return (
      <table className="table fadeIn animated">
        {this.renderTableHead()}
        {this.renderTableBody()}
      </table>
    )
  },
  renderPeopleTableBlock: function() {
    return (
      <div>
        {this.renderPeopleTable()}
        {this.renderPeopleTablePagination()}
      </div>
    );
  },
  renderSpinner: function() {
    return <span>Loading...</span>
  },
  render: function() {
    return this.props.isFetching ?
      this.renderSpinner() :
      this.renderPeopleTableBlock();
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
