import * as ApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});

const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
});

export const fetchSpots = () => dispatch => (
  ApiUtil.fetchSpots().then(spots => (
    dispatch(receiveSpots(spots))
  ))
);

export const fetchSpot = id => dispatch => (
  ApiUtil.fetchSpot(id).then(spot => (
    dispatch(receiveSpot(spot))
  ))
);

export const createSpot = spot => dispatch => (
  ApiUtil.createSpot(spot).then(spot => (
    dispatch(receiveSpot(spot))
  ))
);

export const searchSpots = searchTerm => dispatch => (
  ApiUtil.searchSpots(searchTerm).then(
    spots => dispatch(receiveSpots(spots))
  )
);
