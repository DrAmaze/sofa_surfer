import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResults from './search_results';
import { searchSpots } from '../../actions/spot_actions';
import { searchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  spots: state.entities.spots,
  users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  searchUsers: searchTerm => dispatch(searchUsers(searchTerm)),
  searchSpots: searchTerm => dispatch(searchSpots(searchTerm)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults));
