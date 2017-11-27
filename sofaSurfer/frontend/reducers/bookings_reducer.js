import merge from 'lodash/merge';

import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING
} from '../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return merge({}, action.bookings);
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.booking.id]: action.booking});
    case REMOVE_BOOKING:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
