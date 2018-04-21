import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS,
  RECEIVE_USER_ERRORS,
  CLEAR_USER_ERRORS
} from '../actions/error_actions';
import merge from 'lodash/merge';

const _nullSessionErrors = {
  session_errors: []
};

const _nullBookingErrors = {
  booking_errors: []
};

const _nullUserErrors = {
  user_errors: []
};

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, { session_errors: action.errors });
    case CLEAR_SESSION_ERRORS:
      return _nullSessionErrors;
    case RECEIVE_BOOKING_ERRORS:
      return merge({}, state, { booking_errors: action.errors });
    case CLEAR_BOOKING_ERRORS:
      return _nullBookingErrors;
    case RECEIVE_USER_ERRORS:
      return merge({}, state, { user_errors: action.errors });
    case CLEAR_USER_ERRORS:
      return _nullUserErrors;
    default:
      return state;
  }
};
