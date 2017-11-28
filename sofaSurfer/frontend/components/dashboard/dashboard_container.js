import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dashboard from './dashboard';

import { fetchSpots } from '../../actions/spot_actions';
import { fetchBookings } from '../../actions/booking_actions';

import {
  selectAllSpots,
  selectMyBookings
} from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  spots: selectAllSpots(state),
  bookings: selectMyBookings(state)
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchBookings: () => dispatch(fetchBookings())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
