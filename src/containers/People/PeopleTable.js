import React from 'react';
import classnames from 'classnames';

export default React.createClass({
  _changePage: function(url) {
    return e => {
      e.preventDefault();
      this.props.changePage(url);
    }
  },
  _renderTableHead: function(){
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
  _renderTableBody: function() {
    return <tbody>{this._renderPeopleRows()}</tbody>;
  },
  _renderPeopleRows: function() {
    return this.props.people.map((person, i) => {
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
  _renderTablePaginationNext: function() {
    const { nextUrl } = this.props;
    const classes = classnames('btn pull-right', {'btn-primary': !!nextUrl, 'btn-default': !nextUrl} );
    return <a href="" className={classes} onClick={this._changePage(nextUrl)}>Next</a>
  },
  _renderTablePaginationPrev: function() {
    const { prevUrl } = this.props;
    const classes = classnames('btn', {'btn-primary': !!prevUrl, 'btn-default': !prevUrl} );
    return <a href="" className={classes} onClick={this._changePage(prevUrl)}>Previous</a>
  },
  _renderTablePagination: function(){
    return (
      <div>
        {this._renderTablePaginationNext()}
        {this._renderTablePaginationPrev()}
      </div>
    );
  },
  _renderTable: function() {
    return (
      <table className="table fadeIn animated">
        {this._renderTableHead()}
        {this._renderTableBody()}
      </table>
    );
  },
  render: function() {
    return (
      <div>
        {this._renderTable()}
        {this._renderTablePagination()}
      </div>
    );
  }
});
