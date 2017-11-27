import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dashboard from './dashboard';
import { fetchSpots } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
