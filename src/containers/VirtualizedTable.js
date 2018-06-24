import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';
import { Toolbar, Data } from 'react-data-grid-addons';

// ////////////////////////////////////////////////////////

const propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      filterable: PropTypes.bool.isRequired,
      sortable: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default class VirtualizedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.data,
      filters: {},
      sortColumn: null,
      sortDirection: null
    };
  }

  onClearFilters = () => {
    this.setState({ filters: {} });
  };

  getRows = () => Data.Selectors.getRows(this.state);

  getSize = () => this.getRows().length;

  rowGetter = rowIdx => {
    const rows = this.getRows();
    return rows[rowIdx];
  };

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn, sortDirection });
  };

  handleFilterChange = filter => {
    const newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  };

  render() {
    return (
      <ReactDataGrid
        onGridSort={this.handleGridSort}
        columns={this.props.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.getSize()}
        minHeight={400}
        toolbar={<Toolbar enableFilter />}
        onAddFilter={this.handleFilterChange}
        onClearFilters={this.onClearFilters}
      />
    );
  }
}

VirtualizedTable.propTypes = propTypes;
