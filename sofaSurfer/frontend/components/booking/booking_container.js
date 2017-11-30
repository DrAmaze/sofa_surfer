import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BookingIndex from './booking_index';

import { selectMyBookings } from '../../reducers/selectors';
import { fetchSpot } from '../../actions/spot_actions';
import {
  fetchBookings,
  fetchBooking
} from '../../actions/booking_actions';


const mapStateToProps = state => {
  return {
    bookings: selectMyBookings(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchBooking: spot => dispatch(fetchBooking(spot)),
  fetchSpot: spotId => dispatch(fetchSpot(spotId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex));
