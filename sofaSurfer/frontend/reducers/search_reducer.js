import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH_RESULTS
} from '../actions/spot_actions';

export const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
};
