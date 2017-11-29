export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: 'api/locations',
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

export const searchLocationDB = query => (
  $.ajax({
    method: 'GET',
    url: `api/location_searches`,
    data: { search: { query }}
  })
);
