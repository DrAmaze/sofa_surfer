import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookingIndexItem extends React.Component {

  render () {
  let { spot, user, booking } = this.props;
    return(
      <li className="booking-index-item">
        <div>
          <h2>Trip to { booking.location_id }</h2>
          <section>
            <div> ARR: {booking.arrival.toString().slice(0,10)}</div>
            <div> DEP: {booking.departure.toString().slice(0,10)}</div>
          </section>
        </div>

        <div>
          <p>
            { booking.description }
          </p>
        </div>
      </li>
    );
  }
}


export default BookingIndexItem;
