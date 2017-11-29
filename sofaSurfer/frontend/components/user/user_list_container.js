import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserList from './user_list';

import { fetchSpot } from '../../actions/spot_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { selectAllUsers } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  users: selectAllUsers(state),
  spotId: parseInt(match.params.spotId)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchSpot: spot => dispatch(fetchSpot(spot))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList));
