import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './search';
import { searchSpots } from '../../actions/spot_actions';
import { searchUsers } from '../../actions/user_actions';
import { clearSearch } from '../../actions/search_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  searchUsers: searchTerm => dispatch(searchUsers(searchTerm)),
  searchSpots: searchTerm => dispatch(searchSpots(searchTerm)),
  clearSearch: () => dispatch(clearSearch())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
