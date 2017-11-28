import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
} from '../actions/error_actions';
import merge from 'lodash/merge';

const _nullErrors = {
  session_errors: []
};

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, {session_errors: action.errors});
    case CLEAR_SESSION_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};
