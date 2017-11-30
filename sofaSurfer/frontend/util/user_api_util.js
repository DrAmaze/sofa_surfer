export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
);

export const fetchReviews = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/reviews`,
  })
);

export const createReview = (userId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/reviews`,
    review
  })
);

export const updateReview = (userId, review) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}/reviews/${review.id}`,
    review
  })
);

export const deleteReview = (userId, reviewId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/reviews/${reviewId}`,
  })
);
