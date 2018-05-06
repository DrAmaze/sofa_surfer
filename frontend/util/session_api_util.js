export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: `${ window.location.origin }/api/user`,
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: `${ window.location.origin }/api/session`
  })
);
