import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import BookingSearchForm from '../booking/booking_search_form_container';
import UserList from '../user/user_list_container';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    let { spotId } = this.props;
    let spot = this.props.fetchSpot(spotId);
  }

  render () {
    let { spotId, spot } = this.props;
    return(
      <div className="single-spot-show">
        <br/><br/><br/>

        <div className="single-spot">
          <Link to="/locations"> Back to spots Index </Link>
        </div>

        <h1> { spotId } </h1>
        <BookingSearchForm />

        <UserList />
      </div>
    );
  }
}

export default SpotShow;
