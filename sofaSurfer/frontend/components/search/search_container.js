import React from 'react';
import { connect } from 'react-redux';

import Search from './search';
import { selectAllUsers, selectAllSpots } from '../../reducers/selectors';
import {
  fetchSearchResults,
  clearSearch,
} from '../../actions/search_actions';

const mapStateToProps = state => ({
  users: selectAllUsers(state),
  spots: selectAllSpots(state),
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: search => dispatch(fetchSearchResults(search)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
