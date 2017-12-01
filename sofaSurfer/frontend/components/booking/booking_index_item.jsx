import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookingIndexItem extends React.Component {

  render () {
  let { spot, user, booking } = this.props;
  return(
    <li className="booking-index-item">
      <div>
        <h2>Trip to { booking.spot } district</h2>
        <section>
          <div> <h4>ARR:</h4> {booking.arrival.toString().slice(0,10)}</div>
          <div> <h4>DEP:</h4> {booking.departure.toString().slice(0,10)}</div>
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
