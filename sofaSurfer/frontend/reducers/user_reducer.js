import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const UserReducer =  (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, action.users);
    default:
      return state;
  }
};

export default UserReducer;
