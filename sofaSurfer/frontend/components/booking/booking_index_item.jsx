import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookingIndexItem = ({ booking }) => (
  <li className="booking-index-item">
    <Link
      to={`/bookings/${booking.id}`}
      style={{ textDecoration: 'inherit', color: 'inherit' }}>
      <span className='booking-index-item-location'>
        ARR: {booking.arrival}
        DEP: {booking.departure}
      </span>
    </Link>
  </li>
);

export default withRouter(BookingIndexItem);
