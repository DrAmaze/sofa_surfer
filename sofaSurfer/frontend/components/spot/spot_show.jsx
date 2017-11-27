import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import BookingForm from '../booking/booking_form_container';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="single-spot-show">
        <br/><br/><br/>
        <div className="single-spot">
          <Link to="/locations"> Back to spots Index </Link>
        </div>

        <BookingForm />
      </div>
    );
  }
}

export default SpotShow;
