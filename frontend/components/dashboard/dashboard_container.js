import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dashboard from './dashboard';

import { fetchSpots } from '../../actions/spot_actions';
import { fetchBookings } from '../../actions/booking_actions';
import { updateUser } from '../../actions/user_actions';
import { clearUserErrors } from '../../actions/error_actions';

import {
  selectAllSpots,
  selectMyBookings
} from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  spots: selectAllSpots(state),
  bookings: selectMyBookings(state),
  errors: state.errors.user_errors
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchBookings: () => dispatch(fetchBookings()),
  updateUser: user => dispatch(updateUser(user)),
  clearUserErrors: () => dispatch(clearUserErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
