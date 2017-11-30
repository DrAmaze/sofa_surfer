import * as ApiUtil from '../util/search_api_util';
import { START_SEARCHING } from '../reducers/searching_reducer';
import { RECEIVE_SPOTS } from './spot_actions';
import { RECEIVE_USERS } from './user_actions';

export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveUserSearch = results => ({
  type: RECEIVE_USERS,
  users: results,
});

export const receiveSpotSearch = results => ({
  type: RECEIVE_SPOTS,
  spots: results,
});

export const clearSearch = results => ({
  type: CLEAR_SEARCH,
});

export const startSearching = () => ({
  type: START_SEARCHING,
});

export const fetchSearchResults = search => dispatch => {
  dispatch(startSearching());
  return ApiUtil.fetchSearchResults(search).then(results => (
    dispatch(receiveSpotSearch(results)).then(results => (
      dispatch(receiveUserSearch(results)))
    ))
  );
};
