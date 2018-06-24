import React, { Component, Fragment } from 'react';

import data from '../data/jsonData.json';
import { Layout } from '../styles';
import VirtualizedTable from './VirtualizedTable';

// ////////////////////////////////////////////////////////

const columns = [
  {
    key: 'firstname',
    name: 'Firstname',
    filterable: true,
    sortable: true
  },
  {
    key: 'lastname',
    name: 'Lastname',
    filterable: true,
    sortable: true
  },
  {
    key: 'email',
    name: 'Email',
    filterable: true,
    sortable: true
  },
  {
    key: 'agency_name',
    name: 'Agency Name',
    filterable: true,
    sortable: true
  }
];

class Main extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Layout>
          <VirtualizedTable data={data} columns={columns} />
        </Layout>
      </Fragment>
    );
  }
}

export default Main;
