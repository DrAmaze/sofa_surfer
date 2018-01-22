import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SpotIndex from './spot_index';

import { selectAllSpots } from '../../reducers/selectors';
import { fetchSpots, fetchSpot } from '../../actions/spot_actions';

const mapStateToProps = state => {
  return {
    spots: selectAllSpots(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchSpot: spot => dispatch(fetchSpot(spot))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex));
