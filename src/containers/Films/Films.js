import React from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from 'redux/bundles/films'

const Films = React.createClass({
  componentDidMount: function(){
    this.props.fetchFilms();
  },
  renderTableHeader: function(){
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Episode #</th>
        </tr>
      </thead>
    );
  },
  renderTableBody: function(){
    return (
      <tbody>{this.renderTableBodyRows()}</tbody>
    );
  },
  getFilms: function(){
    return this.props.films || [];
  },
  renderTableBodyRows: function() {
    return this.getFilms().map((film, i) => {
      return (
        <tr key={i}>
          <td>{film.title}</td>
          <td>{film.episode_id}</td>
        </tr>
      );
    })
  },
  renderFilmsTable: function(){
    return (
      <table>
        {this.renderTableHeader()}
        {this.renderTableBody()}
      </table>
    );
  },
  renderSpinner: function(){
    return <div>Loading...</div>;
  },
  render: function() {
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
)(Films)
