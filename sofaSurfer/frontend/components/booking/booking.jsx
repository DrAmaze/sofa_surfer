import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BookingIndexItem from './booking_index_item';

class Booking extends React.Component {
  componentDidMount() {
    this.props.fetchBookings();
  }

  render () {

    let { bookings } = this.props;

    if (this.props.bookings) {
      bookings = bookings.map(booking =>
        <BookingIndexItem
          key={booking.id}
          booking={booking} />
    );
    } else {
      bookings = [];
    }

    return (
      <div className='bookings'>
        <br/><br/><br/>
        <h1>These are your current bookings</h1>
        <section className='bookings-index'>
          <ul>
            {bookings}
          </ul>
        </section>
      </div>
    );
  }
}

export default Booking;
