import React from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from 'redux/bundles/films';

const Films = React.createClass({
  propTypes: {
    fetchFilms: React.PropTypes.func,
    isFetching: React.PropTypes.bool,
    films: React.PropTypes.array
  },
  componentDidMount: () => {
    this.props.fetchFilms();
  },
  getFilms: () => {
    return this.props.films || [];
  },
  renderTableHeader: () => {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Episode #</th>
        </tr>
      </thead>
    );
  },
  renderTableBody: () => {
    return (
      <tbody>{this.renderTableBodyRows()}</tbody>
    );
  },
  renderTableBodyRows: () => {
    return this.getFilms().map((film, i) => {
      return (
        <tr key={i}>
          <td>{film.title}</td>
          <td>{film.director}</td>
          <td>{film.episode_id}</td>
        </tr>
      );
    });
  },
  renderFilmsTable: () => {
    return (
      <table className="table fadeIn animated">
        {this.renderTableHeader()}
        {this.renderTableBody()}
      </table>
    );
  },
  renderSpinner: () => {
    return <div>Loading...</div>;
  },
  render: () => {
    return this.props.isFetching ?
      this.renderSpinner() :
      this.renderFilmsTable();
  }
});

export default connect(
  state => ({
    isFetching: state.films.isFetching,
    films: state.films.apiResponse.results
  }),
  { fetchFilms }
)(Films);
