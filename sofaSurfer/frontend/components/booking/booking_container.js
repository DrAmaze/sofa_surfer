import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BookingIndex from './booking';

import { fetchSpot } from '../../actions/spot_actions';
import { selectAllBookings } from '../../reducers/selectors';
import {
  fetchBookings,
  fetchBooking
} from '../../actions/booking_actions';


const mapStateToProps = state => {
  return {
    spots: selectAllBookings(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchBooking: spot => dispatch(fetchBooking(spot)),
  fetchSpot: spot => dispatch(fetchSpot)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex));
