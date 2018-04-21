import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './profile';
import { fetchReviews, fetchUser, updateUser } from '../../actions/user_actions';
import { selectMyReviews, profileErrors } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  reviews: selectMyReviews(state),
  errors: state.errors.profile_errors,
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
