import { connect } from 'react-redux';

import BookingForm from './booking_form';
import { createBooking, updateBooking, deleteBooking, fetchBookings } from '../../actions/booking_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSpots } from '../../actions/spot_actions';
import { clearBookingErrors } from '../../actions/error_actions';
import { selectAllUsers } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.booking_errors,
  users: selectAllUsers(state)
});


const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  deleteBooking: booking => dispatch(deleteBooking(booking)),
  fetchSpots: () => dispatch(fetchSpots()),
  fetchUsers: () => dispatch(fetchUsers()),
  clearBookingErrors: () => dispatch(clearBookingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
