import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReviewIndex from './review_index';

import {
  fetchReviews,
  fetchReview,
  deleteReview
} from '../../actions/user_actions';


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchReview: review => dispatch(fetchReview(review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
