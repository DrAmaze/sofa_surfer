import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
  const spotId = parseInt(match.params.spotId);
  const spot = selectSpot(state.entities, spotId);

  return {
    spotId,
    spot
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow));
