import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReviewIndex from './review_index';


import { selectMyReviews } from '../../reducers/selectors';
import {
  fetchReviews,
  createReview,
  deleteReview
} from '../../actions/user_actions';


const mapStateToProps = state => {
  return {
    reviews: selectMyReviews(state),
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (user) => dispatch(fetchReviews(user)),
  createReview: (user, review) => dispatch(createReview(user, review)),

  deleteReview: (user, reviewId) => dispatch(deleteReview(user, reviewId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
