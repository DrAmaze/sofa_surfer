import { connect } from 'react-redux';

import BookingForm from './booking_form';
import { createBooking, updateBooking, deleteBooking, fetchBookings } from '../../actions/booking_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSpots } from '../../actions/spot_actions';
import { clearSessionErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  updateBooking: booking => dispatch(updateBooking(booking)),
  deleteBooking: booking => dispatch(deleteBooking(booking)),
  fetchSpots: () => dispatch(fetchSpots()),
  fetchUsers: id => dispatch(fetchUsers(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
