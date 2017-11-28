import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookingPreviewItem = ({ booking }) => (
  <li className="booking-preview-item">
    <Link to={`/bookings/${booking.id}`}>
      <span>{booking.id}</span>
      <span>{booking.arrival}, {booking.departure}</span>
    </Link>
  </li>
);

export default withRouter(BookingPreviewItem);
