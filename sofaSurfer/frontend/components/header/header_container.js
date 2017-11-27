import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateUser: user => dispatch(updateUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
