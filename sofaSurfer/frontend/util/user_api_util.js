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

export const fetchReviews = (user) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/reviews`,
  })
);

export const createReview = (user, review) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${user.id}/reviews`,
    review
  })
);

export const updateReview = (user, review) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}/reviews/${review.id}`,
    review
  })
);

export const deleteReview = (user, review) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${user.id}/reviews/${review.id}`,
  })
);
