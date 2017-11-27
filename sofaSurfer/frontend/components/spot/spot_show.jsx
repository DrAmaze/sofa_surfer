import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

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
        <section>
          <ul className='spot-users'>
            <li>
              <span>Hosts</span>
            </li>
            <li>
              <span>Travelers</span>
            </li>
          </ul>

          <form className='booking-form'>
            Booking Form goes here

            <button className='color-button'>
              Clear Filters
            </button>
            <button className='color-button'>
              Search
            </button>
          </form>


        </section>
      </div>
    );
  }
}

export default SpotShow;
