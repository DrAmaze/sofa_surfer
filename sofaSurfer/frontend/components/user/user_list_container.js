import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserList from './user_list';

import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList));
