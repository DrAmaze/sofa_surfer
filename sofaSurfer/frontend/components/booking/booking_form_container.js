import { connect } from 'react-redux';

import BookingForm from './booking_form';
import { createBooking, updateBooking, deleteBooking, fetchBookings } from '../../actions/booking_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSpots } from '../../actions/spot_actions';
import { clearBookingErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.booking_errors
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  updateBooking: booking => dispatch(updateBooking(booking)),
  deleteBooking: booking => dispatch(deleteBooking(booking)),
  fetchSpots: () => dispatch(fetchSpots()),
  fetchUsers: id => dispatch(fetchUsers(id)),
  clearBookingErrors: () => dispatch(clearBookingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
