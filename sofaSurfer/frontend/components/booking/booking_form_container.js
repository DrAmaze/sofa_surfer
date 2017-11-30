import { connect } from 'react-redux';

import BookingForm from './booking_form';
import { createBooking, updateBooking, deleteBooking } from '../../actions/booking_actions';
import { fetchUser } from '../../actions/user_actions';
import { clearSessionErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  errors: state.errors.session_errors
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  updateBooking: booking => dispatch(updateBooking(booking)),
  deleteBooking: booking => dispatch(deleteBooking(booking)),
  fetchUser: id => dispatch(fetchUser(id)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
