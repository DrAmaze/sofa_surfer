import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BookingIndex from './booking_index';

import { selectMyBookings } from '../../reducers/selectors';
import { fetchSpot } from '../../actions/spot_actions';
import {
  updateBooking,
  fetchBookings,
  fetchBooking
} from '../../actions/booking_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';


const mapStateToProps = state => {

  return {
    bookings: selectMyBookings(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchBooking: spot => dispatch(fetchBooking(spot)),
  updateBooking: booking => dispatch(updateBooking(booking)),
  fetchSpot: spotId => dispatch(fetchSpot(spotId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex));
