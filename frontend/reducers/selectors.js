import values from 'lodash/values';

export const selectAllSpots = state => values(state.entities.spots);

export const selectSpot = ({ spots }, id) => {
   const spot = spots[id] || {};
   return spot;
};

export const selectHosts = ({ users }, spot_id) => {
  const hosts = users[spot_id] || {};
  return hosts;
};

export const selectMyBookings = state => values(state.entities.bookings);

export const selectMyReviews = state => values(state.entities.reviews);

export const selectAllUsers = state => {
  return values(state.entities.users);
};
