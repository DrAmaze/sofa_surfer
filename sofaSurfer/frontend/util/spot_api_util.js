export const fetchSpots = data => (
  $.ajax({
    method: 'GET',
    url: 'api/locations',
    data
  })
);

export const fetchSpot = id => (
  $.ajax({
    method: 'GET',
    url: `api/locations/${id}`,
  })
);

export const createSpot = data => (
  $.ajax({
    method: 'POST',
    url: 'api/locations',
    data
  })
);
