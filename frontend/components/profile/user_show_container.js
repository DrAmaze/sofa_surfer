import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './user_show';
import { fetchReviews, fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const userId = parseInt(match.params.userId);
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.profile_errors,
    person: selectUser(state.entities, userId),
    userId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
