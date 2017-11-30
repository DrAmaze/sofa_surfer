import { connect } from 'react-redux';

import {
  createBooking,
  updateBooking,
  deleteBooking
} from '../../actions/booking_actions';

import BookingSearchForm from './booking_search_form';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  updateBooking: booking => dispatch(updateBooking(booking)),
  deleteBooking: booking => dispatch(deleteBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingSearchForm);
