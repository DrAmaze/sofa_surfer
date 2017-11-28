import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserList from './user_list';

import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { selectAllUsers } from '../../reducers/selectors';

const mapStateToProps = state => ({
  users: selectAllUsers(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList));
