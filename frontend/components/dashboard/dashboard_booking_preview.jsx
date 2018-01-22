import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookingPreviewItem = ({ booking }) => (
  <li className="booking-preview-item">
    <Link
      to={`/bookings/${booking.id}`}
      style={{ textDecoration: 'none', color: 'gray'}}>
      <section>
        <h3>Trip to { booking.spot }</h3>
        <div> ARR: {booking.arrival.toString().slice(0,10)}</div>
        <div> DEP: {booking.departure.toString().slice(0,10)}</div>
      </section>
    </Link>
  </li>
);

export default withRouter(BookingPreviewItem);
