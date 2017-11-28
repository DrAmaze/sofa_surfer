import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
} from '../actions/error_actions';

const _nullErrors = {
  session_errors: null
};

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return [...action.errors];
    case CLEAR_SESSION_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};
