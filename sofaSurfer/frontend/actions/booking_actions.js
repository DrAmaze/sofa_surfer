import * as ApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const removeBooking = booking => ({
  type: REMOVE_BOOKING,
  booking
});

export const fetchBookings = () => dispatch => (
  ApiUtil.fetchBookings().then(bookings => (
    dispatch(receiveBookings(bookings))
  ))
);

export const fetchBooking = id => dispatch => (
  ApiUtil.fetchBooking(id).then(booking => (
    dispatch(receiveBooking(booking))
  ))
);

export const createBooking = booking => dispatch => (
  ApiUtil.createBooking(booking).then(booking => (
    dispatch(receiveBooking(booking))
  ))
);

export const updateBooking = booking => dispatch => (
  ApiUtil.updateBooking(booking).then(booking => (
    dispatch(receiveBooking(booking))
  ))
);

export const deleteBooking = booking => dispatch => (
  ApiUtil.deleteBooking(booking).then(booking => (
    dispatch(removeBooking(booking))
  ))
);
