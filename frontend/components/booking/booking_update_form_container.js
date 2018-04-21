import { connect } from 'react-redux';
import BookingUpdateForm from './booking_update_form';
import { updateBooking, deleteBooking } from '../../actions/booking_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { selectAllUsers } from '../../reducers/selectors';
import { clearBookingErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: selectAllUsers(state),
  errors: state.errors.booking_errors,
});

const mapDispatchToProps = dispatch => ({
  updateBooking: booking => dispatch(updateBooking(booking)),
  deleteBooking: booking => dispatch(deleteBooking(booking)),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  clearBookingErrors: () => dispatch(clearBookingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingUpdateForm);
