import merge from 'lodash/merge';

import {
  CLEAR_SEARCH
} from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default SearchReducer;
