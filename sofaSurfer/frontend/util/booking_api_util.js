export const fetchBookings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings'
  })
);

export const fetchBooking = id => (
  $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`
  })
);

export const createBooking = data => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data
  })
);

export const updateBooking = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookings/${data.id}`,
    data
  })
);

export const deleteBooking = dataId => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${dataId}`
  })
);
