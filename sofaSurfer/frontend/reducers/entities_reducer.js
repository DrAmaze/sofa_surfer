import { combineReducers } from 'redux';

import spots from './spots_reducer';
import bookings from './bookings_reducer';
import users from './user_reducer';
import searches from './search_reducer';

export default combineReducers({
  spots,
  searches,
  bookings,
  users
});
