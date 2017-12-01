import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { clearSearch } from '../../actions/search_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearSearch: () => dispatch(clearSearch())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
