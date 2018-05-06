import * as ApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_REVIEWS ='RECEIVE_REVIEWS';
export const RECEIVE_REVIEW ='RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUser = id => dispatch => (
  ApiUtil.fetchUser(id).then(user => {
    dispatch(receiveUser(user));
  })
);

export const fetchUsers = () => dispatch => (
  ApiUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ))
);

export const updateUser = user => dispatch => (
  ApiUtil.updateUser(user).then(person => (
    dispatch(receiveUser(person))
  ))
);

export const searchUsers = searchTerm => dispatch => (
  ApiUtil.searchUsers(searchTerm).then(
    users => dispatch(receiveUsers(users))
  )
);

// reviews

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const fetchReviews = () => dispatch => (
  ApiUtil.fetchReviews().then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);

export const createReview = (review) => dispatch => (
  ApiUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const updateReview = (review) => dispatch => (
  ApiUtil.updateReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);


export const deleteReview = (review) => dispatch => (
  ApiUtil.removeReview(review).then(review => (
    dispatch(deleteReview(review))
  ))
);
