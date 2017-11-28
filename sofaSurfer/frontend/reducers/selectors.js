import values from 'lodash/values';

export const selectAllSpots = state => values(state.entities.spots);

export const selectSpot = ({ spots }, id) => {
   const spot = spots[id] || {};
   return spot;
};

export const selectMyBookings = state => values(state.entities.bookings);

export const selectAllUsers = state => values(state.entities.users);
